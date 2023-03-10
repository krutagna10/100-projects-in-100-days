import data from "./data.js";
import { useState } from "react";

const ProductTableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Product</th>
        <th>Price</th>
      </tr>
    </thead>
  );
};

const ProductTableBody = ({ products }) => {
  return (
    <tbody>
      {products.map((element, index) => (
        <tr key={index}>
          <td style={{ color: element.stocked ? "black" : "red" }}>
            {element.name}
          </td>
          <td>{element.price}</td>
        </tr>
      ))}
    </tbody>
  );
};

const ProductTable = ({
  products,
  searchTerm,
  stockedOnly,
  vegetablesOnly,
  fruitsOnly,
}) => {
  let filteredProducts = products.filter((element) =>
    element.name.toLowerCase().includes(searchTerm)
  );

  // When stocked only is checked
  if (stockedOnly) {
    filteredProducts = filteredProducts.filter((element) => element.stocked);
  }

  // When Vegetables only is checked
  if (vegetablesOnly) {
    filteredProducts = filteredProducts.filter(
      (element) => element.category === "Vegetables"
    );
  }

  if (fruitsOnly) {
    filteredProducts = filteredProducts.filter(
      (element) => element.category === "Fruits"
    );
  }

  return (
    <table style={{ minWidth: "32rem" }}>
      <ProductTableHeader />
      <ProductTableBody products={filteredProducts} />
    </table>
  );
};

const SearchBar = ({
  onStockedOnlyChange,
  onSearchChange,
  onVegetablesOnlyChange,
  onFruitsOnlyChange,
}) => {
  const handleSearchChange = (event) => {
    onSearchChange(event.target.value.toLowerCase());
  };

  const handleIsStockedChange = (event) => {
    onStockedOnlyChange(event.target.checked);
  };

  const handleVegetablesOnlyChange = (event) => {
    onVegetablesOnlyChange(event.target.checked);
  };

  const handleFruitsOnlyChange = (event) => {
    onFruitsOnlyChange(event.target.checked);
  };

  return (
    <form className="flow">
      <div className="form__input-wrapper">
        <input
          type="text"
          placeholder="Search..."
          onChange={handleSearchChange}
          style={{ width: "100%" }}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="form__input-wrapper">
          <label>Product in stock only</label>
          <input type="checkbox" onChange={handleIsStockedChange} />
        </div>
        <div className="form__input-wrapper">
          <label>Vegetables Only</label>
          <input type="checkbox" onChange={handleVegetablesOnlyChange} />
        </div>
        <div className="form__input-wrapper">
          <label>Fruits Only</label>
          <input type="checkbox" onChange={handleFruitsOnlyChange} />
        </div>
      </div>
    </form>
  );
};

const Store = () => {
  const [stockedOnly, setStockedOnly] = useState(false);
  const [vegetablesOnly, setVegetablesOnly] = useState(false);
  const [fruitsOnly, setFruitsOnly] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleStockedOnlyChange = (value) => {
    setStockedOnly(value);
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const handleVegetablesOnlyChange = (value) => {
    setVegetablesOnly(value);
  };

  const handleFruitsOnlyChange = (value) => {
    setFruitsOnly(value);
  };

  return (
    <div className="flow">
      <SearchBar
        onSearchChange={handleSearchChange}
        onStockedOnlyChange={handleStockedOnlyChange}
        onVegetablesOnlyChange={handleVegetablesOnlyChange}
        onFruitsOnlyChange={handleFruitsOnlyChange}
      />
      <ProductTable
        products={data}
        searchTerm={searchTerm}
        stockedOnly={stockedOnly}
        vegetablesOnly={vegetablesOnly}
        fruitsOnly={fruitsOnly}
      />
    </div>
  );
};

export default Store;
