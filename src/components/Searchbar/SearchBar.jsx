const SearchBar = () => {

  const categories = [
    'Nature',
    'People',
    'Tecnology',
  ]

  return (
    <div className="search-bar">
      <input type="text" placeholder="Search for..." />
      <button>Search</button>
      <select>{categories.map((category) => (
        <option key={category} value={category}>{category}</option>
      ))}</select>
    </div>
  )
}

export default SearchBar;