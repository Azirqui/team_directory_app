import { useState, type FC} from "react";

type SearchBarProps = {
  onSearchChange: (searchTerm: string) => void;
};

const SearchBar: FC<SearchBarProps> = ({ onSearchChange }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearchChange(term);
  };

  return (
    <input
      type="text"
      placeholder="Search by name or role..."
      className="p-2 border rounded-md w-full max-w-md"
      value={searchTerm}
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;