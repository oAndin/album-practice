/* eslint-disable react/prop-types */
const SearchBar = ({ setActiveSearch, setCategory, setQuery }) => {

  const categories = [
    'Nature',
    'People',
    'Tecnology',
  ]

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for..."
        onChange={(e) => setQuery(e.target.value)} />
      <button
        onClick={() => setActiveSearch(true)}>
        Search
      </button>
      <select onChange={(e) => setCategory(e.target.value)}>
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  )
}

export default SearchBar;