// Import react modules
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Components
import Customers from "./components/customers/Customers";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import Style
import "./styles/App/App.css";

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
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" exact element={<h1>Home page</h1>} />
          <Route
            path="/student-info"
            exact
            element={
              <>
                <Customers customers={customers} />
              </>
            }
          />
          <Route path="*" element={<h1>404 Page not found</h1>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
