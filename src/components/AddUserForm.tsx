import { useState, type FC } from "react";
import type { UserType } from "../types";

type AddUserFormProps = {
  onAddUser: (newUser: Omit<UserType, "id">) => void;
};

const AddUserForm: FC<AddUserFormProps> = ({ onAddUser }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && role && email) {
      onAddUser({ name, role, email, avatar: avatar || "https://i.pravatar.cc/150", isFavorite: false });
      setName("");
      setRole("");
      setEmail("");
      setAvatar("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow-sm bg-gray-50 flex flex-col space-y-3 w-full max-w-sm">
      <h2 className="text-lg font-semibold">Add New User</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 border rounded-md"
      />
      <input
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="p-2 border rounded-md"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 border rounded-md"
      />
      <input
        type="text"
        placeholder="Avatar URL (optional)"
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
        className="p-2 border rounded-md"
      />
      <button type="submit" className="border-b-blue-500 p-2 rounded-md font-semibold hover:bg-blue-600 hover:text-blue-500">
        Add User
      </button>
    </form>
  );
};

export default AddUserForm;