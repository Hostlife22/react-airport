import classNames from 'classnames';
import React from 'react';
import './flight.scss';

const Flight = ({
  logo,
  term,
  timeFrom,
  timeTo,
  airline,
  codeShareData,
  ...prop
}) => {
  return (
    <tr className="flight">
      <td className="flight__terminal">
        <span
          className={classNames({
            blue: term === 'D',
          })}>
          {term}
        </span>
      </td>
      <td className="flight__time">{timeFrom}</td>
      <td className="flight__way">
        <span>
          {prop['airportFromID.city_en'] || prop['airportToID.city_en']}
        </span>
      </td>
      <td className="flight__status">
        <div>{timeTo}</div>
      </td>
      <td className="flight__company">
        <ul>
          <li className="flight__one-airline">
            <div className="flight__logo">
              <img src={airline.en.logoName} alt={airline.en.name} />
            </div>
            <p>{airline.en.name}</p>
          </li>
        </ul>
      </td>
      <td className="flight__article">
        <span>{codeShareData[0].codeShare}</span>
      </td>
      <td className="flight__details"></td>
    </tr>
  );
};

export default Flight;
