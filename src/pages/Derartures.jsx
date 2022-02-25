import React from 'react';
import { Flight } from '../components';
import { getTime } from '../utils';

const Derartures = ({ departure }) => {
  return (
    <>
      {departure &&
        departure.map((flight) => (
          <Flight
            key={flight.ID}
            {...flight}
            timeFrom={getTime(flight.timeDepShedule)}
            timeTo={
              flight.status === 'DP'
                ? `Departed at ${getTime(flight.timeTakeofFact)}`
                : 'Cancelled'
            }
          />
        ))}
      {!departure.length && (
        <tr>
          <td className="flight__no-flights" colSpan={7}>
            No flights
          </td>
        </tr>
      )}
    </>
  );
};

export default Derartures;
