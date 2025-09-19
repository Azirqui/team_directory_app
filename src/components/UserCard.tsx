import { useState } from "react";
import { users as initialUsers } from "../../data";
import type { UserType } from "../types";
import Card from "./Card";


export const UserCard = () => {
    const [users, setUsers] = useState<UserType[]>(initialUsers);


  function handleFavoriteToggle(userToToggle: UserType) {
    setUsers(
        users.map((user)=>
        (
            user.id === userToToggle.id ? {...user, isFavorite: !user.isFavorite}: user
        )
        )
    )
  }  
  return (
    <>
      <h1 className="text-4xl font-bold text-center my-8">Team Directory</h1>
      {users.map((user) => (
        <Card
          key={user.id}
          user={user}
          onFavoriteToggle={handleFavoriteToggle}
        />
      ))}
    </>
  );
};
