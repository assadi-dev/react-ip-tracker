import { useState, useEffect } from "react";
import "./App.css";
import CardResults from "./component/CardResults";
import Map from "./component/Map";
import SearchInput from "./component/SearchInput";
import axios from "axios";

function App() {
  const [address, setAddress] = useState("");
  const [infoAdress, setInfoAdress] = useState({
    ip: "",
    location: "",
    timezone: "",
    isp: "",
    lat: 0,
    lon: 0,
  });
  const fetchLocation = async () => {
    const api_link = process.env.REACT_APP_API_LINK;
    const api_key = process.env.REACT_APP_API_KEY;
    const url = address
      ? `${api_link}country,city,vpn?apiKey=${api_key}&ipAddress=${address}`
      : `${api_link}country,city,vpn?apiKey=${api_key}`;

    let offset = new Date().toString().match(/([A-Z]+[\+-][0-9]+)/)[1];

    const data = await axios.get(url);
    let infoAdress = data.data;
    /**let fullTime =
      offset.slice(0, 3) + " " + offset.slice(3, 6) + ":" + offset.slice(6, 8);

    let fullLocation = `${infoAdress.city},${infoAdress.countryCode} ${infoAdress.zip}`;*/

    setInfoAdress({
      ip: infoAdress.ip,
      location: `${infoAdress.location.city},${infoAdress.location.country} ${infoAdress.location.postalCode}  `,
      timezone: infoAdress.location.timezone,
      isp: infoAdress.isp,
      lat: infoAdress.location.lat,
      lon: infoAdress.location.lng,
    });
  };
  useEffect(() => {
    fetchLocation();
  }, []);

  const handleSearchInput = (e) => {
    let value = e.target.value;
    setAddress(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchLocation();
  };

  return (
    <div className="App">
      <header className="App-header">
        <div id="container">
          <h1 id="title">IP Address Tracker</h1>

          <form id="form-contents" onSubmit={handleSubmit}>
            <SearchInput onChange={handleSearchInput} value={address} />
            <CardResults address={infoAdress} />
          </form>
        </div>
      </header>
      <Map lat={infoAdress.lat} long={infoAdress.lon} />
    </div>
  );
}

export default App;
