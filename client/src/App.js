import { useState, useEffect } from "react";
import logo from "./logo.svg";
import Customers from "./components/customers/Customers";
import "./App.css";

function App() {
  const [customers, setCustomers] = useState([]);

  // useEffect
  useEffect(() => {
    const getCustomers = async () => {
      const customersFromServer = await fetchCustomers();
      setCustomers(customersFromServer);
    };

    getCustomers();
  }, []);

  // Fetch customers
  const fetchCustomers = async () => {
    const res = await fetch("/api/customers");
    const data = await res.json();

    return data;
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Customers customers={customers} />
      </header>
    </div>
  );
}

export default App;
