import {users as initialUsers} from '../../data'
import { Card } from './Card'

export const UserCard = () => {
    return (
        <>
        <h1 className="text-4xl font-bold text-center my-8">Team Directory</h1>
{initialUsers.map((user) => (
    <Card key={user.id} name={user.name} role={user.role} email={user.email} avatar={user.avatar} isFavorite={user.isFavorite} id={0}/>
))}

        </>
    )
}