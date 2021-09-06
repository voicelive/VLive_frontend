import useSWR from 'swr';

export function useGetTodos() {
  const { data } = useSWR('/todos/1', () => {
    return fetch('https://jsonplaceholder.typicode.com/todos/1').then(
      (response) => response.json(),
    );
  });

  return {
    data,
  };
}
