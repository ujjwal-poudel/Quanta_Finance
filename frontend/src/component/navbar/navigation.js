import React from "react";
import "./navigation.css";

const Navigation = () => {

  return (
    <div>
      <div className="expense-container">
        <h1 id="totalExpense"></h1>
      </div>

      <div className="navigation">
        {/* Expenses */}
        <div>
          <h2>Expenses</h2>
        </div>

        {/* Categories */}
        <div>
          <h2>Categories</h2>
        </div>

        {/* Charts */}
        <div>
          <h2>Charts</h2>
        </div>
      </div>
    </div>
  );
};

export default Navigation;