// src/data/users.ts
import type { UserType } from "./src/types";

export const users: UserType[] = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Frontend Developer",
    email: "alice@example.com",
    avatar: "images/Image1.webp",
    isFavorite: false,
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "Backend Developer",
    email: "bob@example.com",
    avatar: "images/Image2.webp",
    isFavorite: true,
  },
  {
    id: 3,
    name: "Charlie Brown",
    role: "UI/UX Designer",
    email: "charlie@example.com",
    avatar: "images/Image3.webp",
    isFavorite: false,
  },
  {
    id: 4,
    name: "Diana Prince",
    role: "DevOps Engineer",
    email: "diana@example.com",
    avatar: "images/Image4.webp",
    isFavorite: true,
  },
  {
    id: 5,
    name: "Ethan Hunt",
    role: "Project Manager",
    email: "ethan@example.com",
    avatar: "images/Image3.webp",
    isFavorite: false,
  },
];