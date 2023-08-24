import { useState, useEffect } from "react";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Flex,
  Text,
} from "@chakra-ui/react";

const FilterSlider = ({ filterBy, filterLteGte, setFilterLteGte, setCurrentPage }) => {
  const [minValue, setMinValue] = useState(1);
  const [maxValue, setMaxValue] = useState(100);

  useEffect(() => {
    setMinValue(filterBy === "salary" ? 50000 : 20);
    setMaxValue(filterBy === "salary" ? 800000 : 100);
    setFilterLteGte(filterBy === "salary" ? [100000, 500000] : [30, 60]);
    setCurrentPage(1)
    }, [filterBy, setFilterLteGte, setCurrentPage]);

  const handleChange = (newValues) => {
    setFilterLteGte(newValues);
  };

  return (
    <Flex direction="column" mb="3" width="60">
      <Flex justify="space-between">
        <Text>{filterLteGte[0]}</Text>
        <Text>{filterLteGte[1]}</Text>
      </Flex>
      <RangeSlider
        aria-label={"min-max"}
        value={filterLteGte}
        onChange={handleChange}
        min={minValue}
        max={maxValue}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
    </Flex>
  );
};

export default FilterSlider;
