import React from "react";

const customer = ({ customer }) => {
  return (
    <div className="customer-wrapper">
      <h2>
        {customer.firstName} {customer.lastName}
      </h2>
    </div>
  );
};

export default customer;
