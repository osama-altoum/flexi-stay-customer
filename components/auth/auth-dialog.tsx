"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { X } from "lucide-react";
import { useState } from "react";
import { PalmtreeLogo } from "./palmtree-logo";
import { SocialLogin } from "./social-login";

interface AuthDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthDialog({ isOpen, onClose }: AuthDialogProps) {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] p-0 bg-white/95 text-black dark:bg-[#101010]/80 dark:text-white overflow-hidden border-none">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>

        <div className="px-6 py-6">
          <div className="flex items-center gap-2 mb-8">
            <PalmtreeLogo />
            <h2 className="text-2xl font-bold">
              {isLogin ? "Hello there !" : "Register"}
            </h2>
          </div>

          {/* <SocialLogin /> */}

          <form className="space-y-4 mt-8">
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-sm">Username *</label>
                <Input
                  placeholder={"Please enter your username"}
                  className=" "
                />
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm">Email *</label>
              <Input placeholder="Please enter your email" className=" " />
            </div>

            <div className="space-y-2">
              <label className="text-sm">Password {!isLogin && "*"}</label>
              <Input
                type="password"
                placeholder="Please enter your password"
                className=" "
              />
            </div>

            {!isLogin && (
              <div className="space-y-2">
                <label className="text-sm">Confirm Password *</label>
                <Input
                  type="password"
                  placeholder="Please confirm your password"
                  className=" "
                />
              </div>
            )}

            {isLogin ? (
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    className="data-[state=checked]:bg-[#363aed]"
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
                  >
                    Remember me
                  </label>
                </div>
                <Button
                  variant="link"
                  className="px-0 font-normal text-[#363aed] hover:text-[#363aed]/70 "
                >
                  Forgot password?
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
                >
                  I agree to term and conditions
                </label>
              </div>
            )}

            <Button className="w-full bg-[#363aed] hover:bg-[#363aed]/70 cursor-pointer text-white">
              {isLogin ? "Login" : "Create New Account"}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <Button
              variant="link"
              className="px-0 font-normal text-[#363aed] hover:text-[#363aed]/70 "
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Register Here !" : "Login Here !"}
            </Button>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10">
          <div className="relative w-full h-full">
            <div className="absolute bottom-5 right-3 transform translate-x-1/2 translate-y-1/2">
              <PalmtreeLogo size={128} />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
