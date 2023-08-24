import { Checkbox } from '@chakra-ui/checkbox'
import { Tr, Td } from '@chakra-ui/table'
import { useState } from 'react'

const Employee = ({ employee, setIdArr, idArr }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    const updatedIdArr = isChecked
      ? idArr.filter(id => id !== employee.id)
      : [...idArr, employee.id];

    setIdArr(updatedIdArr);
    setIsChecked(!isChecked); 
  };

  return (
    <Tr>
      <Td>
        <Checkbox defaultChecked={idArr.includes(employee.id)} checked={isChecked} mt="1" onChange={handleChange} />
      </Td>
      <Td>{employee.id}</Td>
      <Td>{employee.name}</Td>
      <Td>{employee.salary}</Td>
      <Td>{employee.age}</Td>
    </Tr>
  );
};

export default Employee;
