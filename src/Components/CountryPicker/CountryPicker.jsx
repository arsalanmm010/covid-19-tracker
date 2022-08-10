import { useState, useEffect } from "react"
import { NativeSelect, FormControl } from "@mui/material"
import { fetchCountries } from "../../api"

import styles from './CountryPicker.module.css'

const CountryPicker = ({handleCountryChange}) => {
  const [fetchCountry, setFetchCountries] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchCountries(await fetchCountries())      
    }
    fetchAPI()
  }, [setFetchCountries])

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {fetchCountry.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker
