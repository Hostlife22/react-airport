export const getTime = (time) =>
  new Date(time).toLocaleTimeString().slice(0, 5);

export const filtredFlightArray = (arr, currentDate, sort) =>
  arr
    .filter(
      (obj) =>
        new Date(obj[sort]).getDate() === new Date(currentDate).getDate(),
    )
    .sort((a, b) => new Date(a[sort]) - new Date(b[sort]));

const searchFilter = (flights, flightQuery) =>
  flights.filter((flight) =>
    flight.codeShareData[0].codeShare
      .toLocaleLowerCase()
      .includes(flightQuery.toLocaleLowerCase()),
  );

export const flightArray = (flights, flightQuery, currentDate, option) => {
  const departure =
    flights?.departure &&
    filtredFlightArray(flights.departure, currentDate, option[0]);

  const arrivals =
    flights?.arrival &&
    filtredFlightArray(flights.arrival, currentDate, option[1]);

  if (departure && arrivals) {
    return {
      departure: searchFilter(departure, flightQuery),
      arrivals: searchFilter(arrivals, flightQuery),
    };
  }
};
