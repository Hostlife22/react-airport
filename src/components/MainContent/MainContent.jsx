import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Arrivals, Derartures, Home } from '../../pages';
import { flightArray } from '../../utils';
import { Navigation } from '../index';
import './mainContent.scss';

const MainContent = ({ flightQuery, pathname }) => {
  const flights = useSelector((state) => state.fligthReducer.flights[0]);
  const currentDate = useSelector((state) => state.dateReducer);

  const flightsObj = flightArray(flights, flightQuery, currentDate, [
    'timeDepShedule',
    'timeToStand',
  ]);

  return (
    <div>
      <Navigation />
      <table className="table">
        <thead className="table__head">
          {pathname !== '/' && (
            <tr>
              <th>Terminal</th>
              <th>Local time</th>
              <th>Destination</th>
              <th>Status</th>
              <th>Airline</th>
              <th>Fkight</th>
              <th></th>
            </tr>
          )}
        </thead>
        <tbody className="table__body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/departures"
              element={
                <Derartures
                  departure={flightsObj ? flightsObj.departure : []}
                />
              }
            />
            <Route
              path="/arrivals"
              element={
                <Arrivals arrivals={flightsObj ? flightsObj.arrivals : []} />
              }
            />
          </Routes>
        </tbody>
      </table>
    </div>
  );
};

export default MainContent;
