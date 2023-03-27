import { useFetch } from "../hooks/useFetch";

export const Fetch = () => {
  const { data, loading, error, refetch } = useFetch(
    "https://example.com/api/data"
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <button onClick={() => refetch()}>Refresh</button>
      {data?.map(({ id, name }) => (
        <div key={id}>{name}</div>
      ))}
    </div>
  );
};
