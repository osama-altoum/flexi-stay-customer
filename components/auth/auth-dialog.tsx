"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Loader2, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { PalmtreeLogo } from "./palmtree-logo";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { login, register } from "@/api/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import * as z from "zod";
import { setToken } from "@/api/storage";

interface AuthDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
  rememberMe: z.boolean().default(false),
});

const RegisterFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-zA-Z])(?=.*\d).+$/,
      "Password must contain at least one letter and one number"
    ),

  phoneNumber: z.string().min(10, "Invalid phone number"),
});

export function AuthDialog({ isOpen, onClose }: AuthDialogProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [isShow, setIsShow] = useState(false);

  const form = useForm<
    z.infer<typeof LoginFormSchema | typeof RegisterFormSchema>
  >({
    resolver: zodResolver(isLogin ? LoginFormSchema : RegisterFormSchema),
    defaultValues: isLogin
      ? { email: "", password: "", rememberMe: false }
      : {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          phoneNumber: "",
        },
  });

  const handleSubmit = async (values: any) => {
    setIsLoading(true);
    try {
      let response;

      if (isLogin) {
        response = await login(values);
      } else {
        response = await register({ ...values, roleId: 2 });
      }

      if (response?.success) {
        const actionMessage = isLogin ? "Login" : "Registration";
        toast.success(`${actionMessage} successful!`);
        setToken(response.token);
        router.push("/");
        onClose();
      } else {
        // Handle errors from API response
        if (response?.token === null && Array.isArray(response.errors)) {
          // Show all error messages from the `errors` array
          response.errors.forEach((error: string) => toast.error(error));
        } else {
          // Generic fallback error message for unexpected error structures
          toast.error(
            isLogin
              ? "Login failed. Please check your credentials."
              : "Registration failed. Please try again."
          );
        }
      }
    } catch (error: any) {
      // Handle unexpected or network-related errors
      const errorMessage =
        error?.message || "An unexpected error occurred. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] p-0 bg-white/95 text-black dark:bg-[#101010]/80 dark:text-white overflow-hidden border-none">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6 px-6 py-6"
          >
            <div className="flex items-center gap-2 mb-8">
              <PalmtreeLogo />
              <h2 className="text-2xl font-bold">
                {isLogin ? "Welcome Back!" : "Create an Account"}
              </h2>
            </div>

            <div className="space-y-4">
              {!isLogin && (
                <>
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your first name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your last name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative w-full">
                        <Input
                          type={isShow ? "text" : "password"}
                          placeholder="Enter your password"
                          {...field}
                        />
                        {isShow ? (
                          <EyeOff
                            className="w-5 h-5  text-black dark:text-white cursor-pointer absolute top-1/2 right-3 -translate-y-1/2"
                            onClick={() => setIsShow(!isShow)}
                          />
                        ) : (
                          <Eye
                            className="w-5 h-5  text-black dark:text-white cursor-pointer absolute top-1/2 right-3 -translate-y-1/2"
                            onClick={() => setIsShow(!isShow)}
                          />
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {!isLogin && (
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          type="phoneNumber"
                          placeholder="+971 50 123 4567"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              {isLogin ? (
                <div className="flex items-center justify-between">
                  <FormField
                    control={form.control}
                    name="rememberMe"
                    render={({ field }) => (
                      <div className="flex items-center space-x-2">
                        <Checkbox {...field} />
                        <label className="text-sm">Remember me</label>
                      </div>
                    )}
                  />
                  <Button variant="link" className="text-sm text-[#363aed]">
                    Forgot password?
                  </Button>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Checkbox />
                  <label className="text-sm">
                    I agree to the terms and conditions
                  </label>
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-[#363aed] text-white hover:bg-[#363aed]/70"
              >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isLogin ? "Login" : "Register"}
              </Button>
            </div>
          </form>
        </Form>

        <div className="mt-3 text-center text-sm text-gray-600">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <Button
            variant="link"
            className="text-[#363aed] hover:text-[#363aed]/70"
            onClick={() => setIsLogin(!isLogin)}
            disabled={isLoading}
          >
            {isLogin ? "Register Here!" : "Login Here!"}
          </Button>
        </div>

        <div className="absolute bottom-10 -right-10 w-32 h-32 opacity-10">
          <PalmtreeLogo size={128} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
