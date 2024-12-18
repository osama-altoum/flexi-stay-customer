import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface ListingPaginationProps {
  currentPage: number;
  total: number;
  onPageChange: (page: number) => void;
}

export function ListingPagination({
  currentPage,
  total,
  onPageChange,
}: ListingPaginationProps) {
  if (total <= 1) return null;

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= total) {
      onPageChange(page);
    }
  };

  return (
    <Pagination className="mt-8">
      <PaginationContent>
        {/* Previous Button */}
        <PaginationItem className="cursor-pointer">
          <PaginationPrevious
            onClick={() => handlePageChange(currentPage - 1)}
            className={currentPage === 1 ? "disabled" : ""}
            aria-disabled={currentPage === 1}
          />
        </PaginationItem>

        {/* Page Numbers */}
        {Array.from({ length: total }, (_, i) => i + 1).map((page) => (
          <PaginationItem key={page} className="cursor-pointer ">
            <PaginationLink
              onClick={() => handlePageChange(page)}
              isActive={page === currentPage}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Next Button */}
        <PaginationItem className="cursor-pointer">
          <PaginationNext
            onClick={() => handlePageChange(currentPage + 1)}
            className={currentPage === total ? "disabled" : ""}
            aria-disabled={currentPage === total}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
