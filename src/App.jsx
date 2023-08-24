import "./App.css";
import { useState, useEffect } from "react";
import EmployeeTable from "./components/EmployeeTable";
import axios from "axios";
import { Heading } from "@chakra-ui/layout";
import PaginationNav from "./components/PaginationNav";
import Sort from "./components/Sort";
import Filter from "./components/Filter";
import SearchBar from "./components/SearchBar";

function App() {
  const [employeeList, setEmployeeList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState(0);
  const [sortBy, setSortBy] = useState("name");
  const [orderBy, setOrderBy] = useState("asc");
  const [filterBy, setFilterBy] = useState("");
  const [filterLteGte, setFilterLteGte] = useState([30, 60]);
  const [query, setQuery] = useState("");
  const [idArr, setIdArr] = useState([]);
  const [pickEmployees, setPickEmployees] = useState(false);

  const pageLimit = 7;
  const url = `http://localhost:5000/employees`;
  const filterByStr = filterBy
    ? `'&${filterBy}_gte=${filterLteGte[0]}&${filterBy}_lte=${filterLteGte[1]}`
    : "";
  const idStr = pickEmployees ? idArr.map((id) => `&id=${id}`).join("&") : "";

  useEffect(() => {
    const getEmployees = async () => {
      const res = await axios.get(
        `${url}?_sort=${sortBy}&_order=${orderBy}${filterByStr}${idStr}&_page=${currentPage}&_limit=${pageLimit}&q=${query}`
      );
      if (res.data) {
        setEmployeeList(res.data);
        const totalNumOfEmployees = res.headers["x-total-count"];
        setNumOfPages(Math.ceil(totalNumOfEmployees / pageLimit));
      }
    };
    getEmployees();
  }, [currentPage, sortBy, orderBy, filterBy, query, url, filterByStr, idStr]);

  return (
    <div className="App">
      <Heading my="4">Company's Employees</Heading>
      <SearchBar query={query} setQuery={setQuery} />
      <Sort
        setSortBy={setSortBy}
        setOrderBy={setOrderBy}
        orderBy={orderBy}
        setCurrentPage={setCurrentPage}
      />
      <Filter
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        filterLteGte={filterLteGte}
        setFilterLteGte={setFilterLteGte}
        setCurrentPage={setCurrentPage}
      />
      <EmployeeTable
        employeeList={employeeList}
        setIdArr={setIdArr}
        idArr={idArr}
        pickEmployees={pickEmployees}
        setPickEmployees={setPickEmployees}
        setCurrentPage={setCurrentPage}
      />
      <PaginationNav
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        numOfPages={numOfPages}
      />
    </div>
  );
}

export default App;
