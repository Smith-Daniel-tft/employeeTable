import { IconButton } from "@chakra-ui/button";
import { ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import React from "react";

const Sort = ({ setSortBy, orderBy, setOrderBy, setCurrentPage }) => {
const handleChange = (e) => {
  setSortBy(e.target.value);
  setCurrentPage(1)
}

  return (
    <Flex align="center" mb="3">
      <Select
        placeholder="Sort By"
        size="sm"
        onChange={handleChange}
      >
        <option value="name">Name</option>
        <option value="age">Age</option>
        <option value="salary">Salary</option>
        <option value="id">Id</option>
      </Select>
      <IconButton
        aria-label="Ascending order"
        icon={<ArrowUpIcon />}
        variant="unstyled"
        onClick={() => setOrderBy("asc")}
        color={orderBy==="asc" && "blue"}
      />
      <IconButton
        aria-label="Ascending order"
        icon={<ArrowDownIcon />}
        variant="unstyled"
        onClick={() => setOrderBy("desc")}
        color={orderBy==="desc" && "blue"}
      />
    </Flex>
  );
};

export default Sort;
