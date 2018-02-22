
export const fetchData = () => (
  (dispatch: Function) => {
    dispatch(fetchDataRequest());
    return fetchWeatherData()
      .then((weatherInfo) => dispatch(fetchDataSuccess(weatherInfo)))
      .catch(() => dispatch(fetchDataError()));
  }
);
