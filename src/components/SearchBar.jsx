import { Input, Flex, IconButton } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

function SearchBar({ query, setQuery }) {
  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  const clearSearch = () => {
    setQuery("");
  };

  return (
    <Flex align="center">
      <Input
        type="text"
        placeholder="Search Employee..."
        value={query}
        onChange={handleSearch}
      />
      {query && (
        <IconButton
          icon={<CloseIcon />}
          aria-label="Clear"
          variant="outline"
          ml={2}
          onClick={clearSearch}
        />
      )}
    </Flex>
  );
}

export default SearchBar;
