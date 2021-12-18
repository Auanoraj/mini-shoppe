import { useEffect, useState } from "react";

import ProductCards from "./productCards";

function Products() {
  const [isLoading, setIsloading] = useState(false);
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
  ]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setIsloading(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <span>Loading ... </span>
      ) : (
        <ProductCards products={products} />
      )}
    </div>
  );
}

export default Products;
