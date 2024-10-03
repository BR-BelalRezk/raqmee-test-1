import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

type props = {
  handleNextPage: () => void;
  handlePreviousPage: () => void;
  handlePageChange: (page: number) => void;
  currentPage: number;
  totalPages: number;
};

export default function Pagination({
  handleNextPage,
  handlePreviousPage,
  handlePageChange,
  totalPages,
  currentPage,
}: props) {
  const pageNumbers = [] as number[];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="flex items-center w-full justify-between">
      <button
        className="flex items-center justify-center gap-3 bg-border hover:bg-border/75 transition duration-500 disabled:bg-border/25 px-5 py-2.5 rounded-radius"
        disabled={currentPage === 1}
        onClick={handlePreviousPage}
      >
        <FaArrowLeft />
        Previous
      </button>
      <div className="flex items-center justify-center gap-2.5">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={`px-4 py-2 rounded-full text-black ${
              number === currentPage ? "" : "border-main border"
            }`}
          >
            {number}
          </button>
        ))}
      </div>
      <button
        className="flex items-center justify-center gap-3 bg-border hover:bg-border/75 transition duration-500 disabled:bg-border/25 px-5 py-2.5 rounded-radius"
        disabled={currentPage === totalPages}
        onClick={handleNextPage}
      >
        Next
        <FaArrowRight />
      </button>
    </div>
  );
}
