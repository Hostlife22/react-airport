import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import { MainContent, Search } from './components';
import setDate from './redux/actions/date.actions';
import { getDataFlights } from './redux/actions/flight.actions';

const App = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const flightQuery = searchParams.get('search') || '';

  useEffect(() => {
    const currentDate = new Date().toLocaleDateString();

    dispatch(setDate(currentDate));
    dispatch(getDataFlights(currentDate));
  }, []);

  return (
    <div className="wrapper">
      {pathname !== '/' && (
        <Search setSearchParams={setSearchParams} flightQuery={flightQuery} />
      )}
      <MainContent flightQuery={flightQuery} pathname={pathname} />
    </div>
  );
};

export default App;
