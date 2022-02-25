import React from 'react';
import { Flight } from '../components';
import { getTime } from '../utils';

const Arrivals = ({ arrivals }) => {
  return (
    <>
      {arrivals &&
        arrivals.map((flight) => (
          <Flight
            key={flight.ID}
            {...flight}
            timeFrom={getTime(flight.timeToStand)}
            timeTo={
              flight.status === 'LN'
                ? `Landed at ${getTime(flight.timeStandFact)}`
                : 'Cancelled'
            }
          />
        ))}
      {!arrivals.length && (
        <tr>
          <td className="flight__no-flights" colSpan={7}>
            No flights
          </td>
        </tr>
      )}
    </>
  );
};

export default Arrivals;
