import { CSVLink } from "react-csv";
import { Button } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";

const DownloadButton = ({query, data}) => {
  return (
    <Button colorScheme="green" size="md" mb={2}>
      <CSVLink data={data} filename={`${query}_search_results.csv`}><DownloadIcon/> Download results as CSV</CSVLink>
    </Button>
  );
};

export default DownloadButton;