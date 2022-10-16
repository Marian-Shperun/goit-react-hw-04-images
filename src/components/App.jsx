import { useState, useEffect } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader/Loader';

import * as API from '../services/api';

export const App = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [showLoding, setShowLoding] = useState(false);
  const [notify, setNotify] = useState(false);

  useEffect(() => {
    fetchData(query, page);
  }, [query, page]);

  const handleInput = e => {
    const inputValue = e.query;
    if (query === inputValue) return;
    setPage(1);
    setQuery(inputValue);
    setItems([]);
    setShowMore(false);
  };

  const fetchData = async (query, page) => {
    if (query === '') return;

    try {
      setShowLoding(true);
      const response = await API.getImages(query, page);

      if (page === 1) {
        setItems(response.hits);
      } else {
        setItems(prevState => [...prevState, ...response.hits]);
      }
      if (response.hits.length === 0) {
        setShowMore(false);
        setNotify(true);
        return;
      }
      setShowMore(true);
      setNotify(false);
    } catch (e) {
      console.log(e);
    } finally {
      setShowLoding(false);
    }
  };

  const handleOnClick = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleInput} />

      {notify && <strong>Nothing found</strong>}

      {showLoding && <Loader />}

      {items.length !== 0 && <ImageGallery items={items} />}

      <div className="ButtonBlock">
        {showMore && (
          <Button
            loadMore
            onClick={handleOnClick}
            type="button"
            title="Load more"
          />
        )}
      </div>
    </div>
  );
};
