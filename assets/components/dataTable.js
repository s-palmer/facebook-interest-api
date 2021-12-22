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
    <Table variant="simple" colorScheme="blue" maxWidth={1200}>
      <Thead>
        <Tr>
          <Th>Audience Name</Th>
          <Th>Topic</Th>
          <Th isNumeric>Audience Size Upper</Th>
          <Th isNumeric>Audience Size Lower</Th>
          <Th>Audience Path</Th>
        </Tr>
      </Thead>
      <Tbody>
        {dataFromServer.map((interest) => (
        <Tr key={interest.id}>
          <Td>{interest.name}</Td>
          <Td>{interest.topic}</Td>
          <Td isNumeric>{interest.audience_size_upper_bound}</Td>
          <Td isNumeric>{interest.audience_size_lower_bound}</Td>
          <Td>{interest.path.join(' > ')}</Td>
        </Tr>
        ))}
      </Tbody>    
    </Table>
  );
};

export default DataTable;