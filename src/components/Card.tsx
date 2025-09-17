import type { UserType } from "../types";
type CardType = {
    user: UserType;
    onFavoriteToggle: (id: number) => void;
}


const Card: React.FC<CardType> = ({ user, onFavoriteToggle }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
      <img src={user.avatar} alt={`${user.name}'s avatar`} className="w-24 h-24 rounded-full mb-4" />
      <h3 className="text-xl font-semibold">{user.name}</h3>
      <p className="text-gray-600">{user.role}</p>
      <p className="text-sm text-gray-500">{user.email}</p>
      <button 
        onClick={() => onFavoriteToggle(user.id)}
        className={`mt-4 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          user.isFavorite ? 'bg-yellow-400 text-black' : 'bg-gray-200 text-gray-700'
        }`}
      >
        {user.isFavorite ? '⭐ Favorited' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default Card;