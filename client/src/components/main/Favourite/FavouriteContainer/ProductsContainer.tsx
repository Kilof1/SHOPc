import * as React from "react";
import Product from "./Product/Product";

import "./ProductsContainer.scss";

const ProductsContainer: React.FC = () => {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((response) => response.json())
      .then((items) => {
        setProducts(items);
        console.log(items);
      });
  }, []);

  console.log(products);
  return (
    <div className="ProductsContainer">
      <div className="ProductsContainer__grid">
        {products.map((p, i) => (
          <Product item={p} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ProductsContainer;
