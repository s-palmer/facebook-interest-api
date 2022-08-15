import { Input, IconButton, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from 'react';
import { Search2Icon } from "@chakra-ui/icons"

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

const SearchBox = ({ fetchInterestData }: { fetchInterestData: any}) => {
  const [query, setQuery] = useState<string>('');

  const onSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    fetchInterestData(query);
  }

  const setQueryChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  }

  return (
    <>
      <InputGroup size="md" mb={5} maxWidth={500}>
        <Input placeholder="Enter query" onChange={setQueryChange} />
        <InputRightElement>
          <IconButton aria-label="search-button" colorScheme="blue" size="sm" width={6} icon={<Search2Icon />} onClick={onSubmit} />
        </InputRightElement>
      </InputGroup>
    </>
  );
};

export default SearchBox;
