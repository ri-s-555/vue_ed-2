import { IUser } from '@/types/user'


async function getUser(id: number ) {
  const response = await fetch(`http://localhost:3000/user/${id}`);
  const data: IUser = await response.json();
  return data

}

export { getUser }