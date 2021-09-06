import UserProfile from '../../src/components/UserProfile';
import { useGetTodos } from '../../src/hooks/useGetTodos';

export default function Main() {
  const { data: todos } = useGetTodos();

  console.log('todos', todos);

  return (
    <div>
      <div>Main Page(채널 리스트 페이지)</div>
      <UserProfile />
    </div>
  );
}
