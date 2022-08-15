import { CSVLink } from "react-csv";
import { Button } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";

type Result = {
  "id": string,
  "name": string,
  "audience_size_lower_bound": number,
  "audience_size_upper_bound": number,
  "path": string[],
  "description"?: string,
  "disambiguation_category": string,
  "topic": string
}

const DownloadButton = ({query, data}: {query: string, data: Array<Result>}) => {
  return (
    <Button colorScheme="green" size="md" mb={2}>
      <CSVLink data={data} filename={`${query}_search_results.csv`}><DownloadIcon/> Download results as CSV</CSVLink>
    </Button>
  );
};

export default DownloadButton;