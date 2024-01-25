import axios from 'axios';
import PhotoList from './components/PhotoList/PhotoList'
import SearchBar from './components/Searchbar/SearchBar'
import SelectPhoto from './components/SelectedPhoto/SelectedPhoto'
import { useEffect } from 'react';
import { useState } from 'react';

function App() {

  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [activeSearch, setActiveSearch] = useState(false);


  const fetchData = async ({ query, category }) => {
    // const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;
    const apiKey = 'lR1mjztVpnZvVtE5pWbsTqNRUryrrFZ-5JBEHqfIx2g';

    if (query || category) {
      let searchQuery = query;
      if (query && category) {
        searchQuery = `${query} ${category}`
      } else if (category) {
        searchQuery = category;
      }

      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
          client_id: apiKey,
          query: searchQuery,
        },
      }
      );

      // console.log(response);
      setPhotos(response.data.results);
      return;
    }
    const response = await axios.get('https://api.unsplash.com/photos/random', {
      params: {
        client_id: apiKey,
        count: 10,
      },
    });
    setPhotos(response.data);
  }

  useEffect(() => {
    fetchData(query, category);
  }, []);

  useEffect(() => {
    if (activeSearch) {
      fetchData({ query, category });
      setActiveSearch(false);
    }
  }, [activeSearch])

  return (
    <div className='container'>
      <SearchBar setQuery={setQuery} setCategory={setCategory} setActiveSearch={setActiveSearch} />
      <PhotoList photos={photos} setSelectedPhoto={setSelectedPhoto} />
      {selectedPhoto && <SelectPhoto photo={selectedPhoto} setSelectedPhoto={setSelectedPhoto} />}
    </div>
  )

}

export default App;
