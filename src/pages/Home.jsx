import React, { useEffect, useState } from 'react';
import ItemList from '../components/ItemList';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Pagination from '../components/Pagination';
import { fetchPokemon } from '../services/api';

const ITEMS_PER_PAGE = 10;

const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setLoading(true);
    setError('');
    fetchPokemon(page, ITEMS_PER_PAGE)
      .then(({ items, total }) => {
        setItems(items);
        setTotal(total);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [page]);

  const totalPages = Math.ceil(total / ITEMS_PER_PAGE);

  return (
    <div className="main-container">
      <h1>Pokémon List</h1>
      {loading && <Loader />}
      {error && <Error message={error} />}
      {!loading && !error && <ItemList items={items} />}
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
};

export default Home;
