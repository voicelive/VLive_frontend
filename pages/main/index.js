import useSWR from 'swr';
import UserProfile from '../../src/components/UserProfile';

export default function Main() {
  const { data } = useSWR('/todos/1', () => {
    return fetch('https://jsonplaceholder.typicode.com/todos/1').then(
      (response) => response.json(),
    );
  });

  console.log('data', data);

  return (
    <div>
      <div>Main Page(채널 리스트 페이지)</div>
      <UserProfile />
    </div>
  );
}
