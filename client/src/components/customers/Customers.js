import "../../styles/Customers/Customers.css";
import Customer from "./Customer";

const customers = ({ customers }) => {
  return (
    <div className="table">
      <div className="customer-table">
        <h2>Student Info</h2>
        {customers.map((customer) => (
          <Customer key={customer.id} customer={customer} />
        ))}
      </div>
    </div>
  );
};

export default customers;
