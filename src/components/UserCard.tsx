import { useState, useMemo } from "react";
import { users as initialUsers } from "../../data";
import type { UserType } from "../types";
import Card from "./Card";
import SearchBar from "./SearchBar";
import AddUserForm from "./AddUserForm";

export const UserCard = () => {
  const [users, setUsers] = useState<UserType[]>(initialUsers);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortOption, setSortOption] = useState<string>("default");

  const handleFavoriteToggle = (userToToggle: UserType) => {
    setUsers(
      users.map((user) =>
        user.id === userToToggle.id
          ? { ...user, isFavorite: !user.isFavorite }
          : user
      )
    );
  };

  const handleAddUser = (newUser: Omit<UserType, "id">) => {
    const newId = users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1;
    setUsers([...users, { ...newUser, id: newId }]);
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  const handleSortChange = (option: string) => {
    setSortOption(option);
  };

  const sortedAndFilteredUsers = useMemo(() => {
    let filteredUsers = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortOption === "name-asc") {
      filteredUsers.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "name-desc") {
      filteredUsers.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortOption === "role-asc") {
      filteredUsers.sort((a, b) => a.role.localeCompare(b.role));
    }

    filteredUsers.sort((a, b) => (b.isFavorite as any) - (a.isFavorite as any));

    return filteredUsers;
  }, [users, searchTerm, sortOption]);

  return (
    <>
      <h1 className="text-4xl font-bold text-center my-8">Team Directory</h1>

      <div className="flex justify-center items-center my-4 space-x-4">
        <SearchBar onSearchChange={handleSearchChange} />
        <div className="flex items-center space-x-2">
          <label htmlFor="sort-by" className="text-gray-700">Sort by:</label>
          <select
            id="sort-by"
            className="border rounded-md p-2"
            value={sortOption}
            onChange={(e) => handleSortChange(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
            <option value="role-asc">Role</option>
          </select>
        </div>
      </div>
      
      <div className="flex justify-center mb-8">
        <AddUserForm onAddUser={handleAddUser} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {sortedAndFilteredUsers.length > 0 ? (
          sortedAndFilteredUsers.map((user) => (
            <Card
              key={user.id}
              user={user}
              onFavoriteToggle={handleFavoriteToggle}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 w-full col-span-full">No users found.</p>
        )}
      </div>
    </>
  );
};