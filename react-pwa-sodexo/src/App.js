import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Header from './components/Header';
import MenuList from './components/MenuList';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import NoData from './components/NoData';
import './App.css';

const restaurantId = 5865;
const currentDate = moment().format('YYYY/MM/DD');
const displayedDate = moment().format('DD.MM.YYYY');
const language = 'fi';
const proxyurl = 'https://cors-anywhere.herokuapp.com/';
const url = `https://www.sodexo.fi/ruokalistat/output/daily_json/${restaurantId}/${currentDate}/${language}`;
// const url = 'https://www.sodexo.fi/ruokalistat/output/daily_json/5865/2019/10/03/fi';

const App = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  const fetchData = () =>
    fetch(`${proxyurl}${url}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setItems(data.courses);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setError(true);
      });

  useEffect(() => {
    fetchData({ currentDate });
  }, []);

  return (
    <>
      <Header displayedDate={displayedDate} />
      <>
        {loading && <Loader />}
        {error && <ErrorMessage />}
        {!error && <MenuList items={items} />}
        {!items.length && !loading && !error && <NoData />}
      </>
    </>
  );
};

export default App;
