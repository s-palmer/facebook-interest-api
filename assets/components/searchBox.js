import { Input, Button, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from 'react';
import { Search2Icon } from "@chakra-ui/icons"

const SearchBox = ({ fetchInterestData }) => {
  const [query, setQuery] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    fetchInterestData(query);
  }

  const setQueryChange = (event) => {
    setQuery(event.target.value);
  }

  return (
    <>
      <InputGroup size="md" mb={5} maxWidth={500}>
        <Input placeholder="Enter query" onChange={setQueryChange}/>
        <InputRightElement>
          <Button colorScheme="blue" size="sm" width={2} children={<Search2Icon/>} onClick={onSubmit}>
          </Button>
        </InputRightElement>
      </InputGroup>
    </>
  );
};

export default SearchBox;
