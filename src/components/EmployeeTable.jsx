import { Card } from "@chakra-ui/card";
import { Table, Thead, TableCaption, Tr, Th, Tbody } from "@chakra-ui/table";
import { Button } from "@chakra-ui/button";
import Employee from "./Employee";

const EmployeeTable = ({ employeeList, setIdArr, idArr, pickEmployees, setPickEmployees, setCurrentPage}) => {
  const handleClick = () => {
    setPickEmployees(!pickEmployees)
    setCurrentPage(1)
  }
  
  return (
      <Card w="60%">
    <Table >
      <TableCaption>Company's Employees</TableCaption>
      <Thead>
        <Tr>
          <Th> <Button variant="outline" color={pickEmployees? "blue.300" : "blue.600"} onClick={handleClick}>
          {pickEmployees? 'Unpick' : 'Pick'} <br /> Employees
        </Button></Th>
          <Th>Id</Th>
          <Th>Name</Th>
          <Th>Salary</Th>
          <Th>Age</Th>
        </Tr>
      </Thead>
      <Tbody>
        {employeeList.map((employee) => (
          <Employee employee={employee} key={employee.id} setIdArr={setIdArr} idArr={idArr}/>
        ))}
      </Tbody>
    </Table>
      </Card>
  );
};

export default EmployeeTable;
