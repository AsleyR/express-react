import "./customers.css";
import Customer from "./Customer";

const customers = ({ customers }) => {
  return (
    <>
      {customers.map((customer) => (
        <Customer key={customer.id} customer={customer} />
      ))}
    </>
  );
};

export default customers;
