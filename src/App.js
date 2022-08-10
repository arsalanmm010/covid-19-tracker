import styles from "./App.module.css";
import Cards from "./Components/Cards/Cards";
import Chart from "./Components/Chart/Chart";
import CountryPicker from "./Components/CountryPicker/CountryPicker";
import { fetchData } from "./api";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchedData = fetchData();
    fetchedData.then((val) => {
      setData(val);
    });
  }, []);

  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker />
      <Chart />
    </div>
  );
}

export default App;
