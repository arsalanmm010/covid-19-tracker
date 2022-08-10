import styles from "./App.module.css";
import Cards from "./Components/Cards/Cards";
import Charts from "./Components/Chart/Charts";
import CountryPicker from "./Components/CountryPicker/CountryPicker";
import { fetchData } from "./api";
import { useState } from "react";
import { useEffect } from "react";
import coronaImage from "./images/image.png";

function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("");

  const handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    setData(fetchedData);
    setCountry(country);
  };

  useEffect(() => {
    const fetchedData = fetchData();
    fetchedData.then((val) => {
      setData(val);
    });
  }, []);

  return (
    <div className={styles.container}>
      <img className={styles.image} src={coronaImage} alt="COVID-19" />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Charts data={data} country={country} />
    </div>
  );
}

export default App;
