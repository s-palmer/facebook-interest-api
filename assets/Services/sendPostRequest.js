const fetch = require('node-fetch');

export async function sendPostRequest(searchQuery) {
  const postURL = 'https://fb-api-backend.herokuapp.com/search';
  
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      query: searchQuery
    })
    };

  let response = await fetch(postURL, requestOptions);
  let data = await response.json();
  console.log(data.results);
  return data.results;
};
