import type { FC } from "react";
import type { UserType } from "../types";

export const Card: FC<UserType> = ({name, role, email, avatar, isFavorite}) => {
    return (
        <div>
            <h1>{name}</h1>
            <h3>{role}</h3>
            <h3>{email}</h3>
            <img src={""} alt="User's Avatar" />
        </div>
    )
}