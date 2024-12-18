import { useFetchData } from "../hooks/useFetchData";

const FetchPage = () => {
  const { data, loading } = useFetchData("https://jsonplaceholder.typicode.com/posts/1");

  return (
    <div>
      <h2>Fetch Data Page</h2>
      {loading ? <p>Loading...</p> : <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default FetchPage;
