const Apikey = process.env.NEXT_PUBLIC_FACEBOOK_API_KEY;
const FB_GRAPH_URL = process.env.NEXT_PUBLIC_FACEBOOK_GRAPH_URL;

export async function getServerSideProps(query) {
  const fetchURL = `${FB_GRAPH_URL}${Apikey}&q=[${query}]`;
  let response = await fetch(fetchURL);
  let json = await response.json();
  const interests = json.data;

  if (!json) {
    return {
      notFound: true,
    };
  }

  return {
    props: { interests }, // will be passed to the page component as props
  };
}

