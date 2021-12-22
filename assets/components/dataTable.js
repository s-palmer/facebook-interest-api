import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

const DataTable = ({ dataFromServer }) => {

  return (
    <Table variant="simple">
      <TableCaption>Interests</TableCaption>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Topic</Th>
          <Th isNumeric>Audience Size Upper</Th>
          <Th isNumeric>Audience Size Lower</Th>
        </Tr>
      </Thead>
      <Tbody>
        {dataFromServer.map((interest) => (
        <Tr key={interest.id}>
          <Td>{interest.name}</Td>
          <Td>{interest.topic}</Td>
          <Td isNumeric>{interest.audience_size_upper_bound}</Td>
          <Td isNumeric>{interest.audience_size_lower_bound}</Td>
        </Tr>
        ))}
      </Tbody>    
    </Table>
  );
};

export default DataTable;