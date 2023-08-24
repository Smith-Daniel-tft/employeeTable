import React from "react";
import { Flex, Button } from "@chakra-ui/react";

function PaginationNav({ currentPage, setCurrentPage, numOfPages }) {
  // Set the maximum number of page buttons to show
  const pageNumbersToShow = 3;

  // Calculate the middle page for pagination centering
  const middlePage = Math.ceil(pageNumbersToShow / 2);

  // Calculate the start and end pages based on current page and middle page
  let startPage = Math.max(currentPage - middlePage + 1, 1);
  let endPage = Math.min(startPage + pageNumbersToShow - 1, numOfPages);

  // Adjust start page if the total available pages are less than the desired number of page numbers to show
  if (endPage - startPage + 1 < pageNumbersToShow) {
    startPage = Math.max(endPage - pageNumbersToShow + 1, 1);
  }

  // Create an array of page numbers to display in pagination buttons
  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);

  return (
    <Flex justify="center" align="center" mt={4}>
      {/* Button to go to the previous page */}
      <Button onClick={() => setCurrentPage(currentPage - 1)} isDisabled={currentPage === 1}>
        Previous
      </Button>
      {/* Display page number buttons */}
      {pageNumbers.map((pageNumber) => (
        <Button
          key={pageNumber}
          mx={1}
          // Apply different styles to the current page number button
          variant={pageNumber === currentPage ? "solid" : "outline"}
          colorScheme={pageNumber === currentPage ? "blue" : undefined}
          onClick={() => setCurrentPage(pageNumber)}
        >
          {pageNumber}
        </Button>
      ))}
      {/* Button to go to the next page */}
      <Button
        onClick={() => setCurrentPage(currentPage + 1)}
        isDisabled={currentPage === numOfPages}
      >
        Next
      </Button>
    </Flex>
  );
}

export default PaginationNav;
