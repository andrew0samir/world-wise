import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Message from "./Message";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map " />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else {
      return arr;
    }
  }, []);

  ////// other way of getting the coutries
  //   const countriesUnique = new Set(
  //     cities.map((city) =>
  //       JSON.stringify({ country: city.country, emoji: city.emoji })
  //     )
  //   );
  //   const countries = [...countriesUnique].map((each) => JSON.parse(each));

  ////// other way of getting the coutries
  //   function getCountries(arr) {
  //     let unique = new Map();
  //     arr.forEach((obj) => {
  //       unique.set(obj.country, { country: obj.country, emoji: obj.emoji });
  //     });
  //     return Array.from(unique.values());
  //   }
  //   const countries = getCountries(cities);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => {
        return <CountryItem country={country} key={country.emoji} />;
      })}
    </ul>
  );
}

export default CountryList;
