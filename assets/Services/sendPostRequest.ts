const fetch = require('node-fetch');

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

type ResultArray = Array<Result>

const sendPostRequest = async (searchQuery: string) => {
  const postURL: string = 'https://fb-api-backend.herokuapp.com/search';

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      query: searchQuery
    })
  };

  let response = await fetch(postURL, requestOptions);
  const { results }: { results: ResultArray } = await response.json();
  return results;
};

export default sendPostRequest;
