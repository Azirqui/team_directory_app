import type { FC } from "react";

export type TypeCard = {
    name: string; 
    role: 'Junior Developer' | 'UI/UX Designer'; 
    email:string;
    avatar:string;
}

export const Card: FC<TypeCard> = ({name, role, email, avatar}) => {
    return (
        <div>
            <h1>{name}</h1>
            <h3>{role}</h3>
            <h3>{email}</h3>
            <img src={""} alt="User's Avatar" />
        </div>
    )
}