import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Switch } from "@chakra-ui/switch";
import {
  Flex,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import FilterSlider from "./FilterSlider";

const Filter = ({ filterBy, setFilterBy, filterLteGte, setFilterLteGte, setCurrentPage }) => {
  const [showFilter, setShowFilter] = useState(false);

  const handleSwitch = () => {
    setShowFilter(!showFilter)
    setCurrentPage(1)
    setFilterBy('')
  }

  return (
    <Flex direction="column" align="center" mb="4">
      <FormControl
        display="flex"
        alignItems="center"
        justifyContent="center"
        mb="2"
      >
        <FormLabel htmlFor="filter" mb="0">
          Filter
        </FormLabel>
        <Switch id="filter" onChange={handleSwitch} />
      </FormControl>
      {showFilter && (
        <Flex direction="column">
          <Select
            placeholder="Filter By"
            size="sm"
            mb="2"
            onChange={(e) => {
              setFilterBy(e.target.value !== "Filter By"? e.target.value: "");
            }}
          >
            <option value="age">Age</option>
            <option value="salary">Salary</option>
          </Select>
          {filterBy &&
          <FilterSlider
            filterBy={filterBy}
            filterLteGte={filterLteGte}
            setFilterLteGte={setFilterLteGte}
            setCurrentPage={setCurrentPage}
          />
          }
        </Flex>
      )}
    </Flex>
  );
};

export default Filter;
