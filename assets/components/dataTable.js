import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Box,
} from "@chakra-ui/react";
import styles from "../../styles/Home.module.css";

const DataTable = ({ dataFromServer }) => {
  return (
    <Box overflowY="auto" maxHeight="50vh">
      <Table variant="simple" colorScheme="blue" maxWidth={1200} >
        <Thead className={styles.thead}>
          <Tr>
            <Th fontSize="md" color='white' textAlign={'center'} className={styles.th}>Audience Name</Th>
            <Th fontSize="md" color='white' textAlign={'center'} className={styles.th}>Topic</Th>
            <Th fontSize="md" color='white' textAlign={'center'} isNumeric className={styles.th}>Audience Size Upper</Th>
            <Th fontSize="md" color='white' textAlign={'center'} isNumeric className={styles.th}>Audience Size Lower</Th>
            <Th fontSize="md" color='white' textAlign={'center'} className={styles.th}>Audience Path</Th>
          </Tr>
        </Thead>

        <Tbody>
          {dataFromServer.map((interest) => (
            <Tr key={interest.id}>
              <Td textAlign={'center'}>{interest.name}</Td>
              <Td textAlign={'center'}>{interest.topic}</Td>
              <Td isNumeric textAlign={'center'}>{interest.audience_size_upper_bound.toLocaleString("en-GB")}</Td>
              <Td textAlign={'center'}>{interest.audience_size_lower_bound.toLocaleString("en-GB")}</Td>
              <Td textAlign={'center'}>{interest.path.join(" > ")}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default DataTable;
