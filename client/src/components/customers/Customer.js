import React from "react";

const customer = ({ customer }) => {
  return (
    <div className="customer-wrapper">
      <h4>{`${customer.firstName} ${customer.lastName} `}</h4>
      <p>{customer.dateBirth}</p>
    </div>
  );
};

export default customer;
