import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { products, status } = useSelector((state) => state.product);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  useEffect(() => {
    if (status === "succeeded") {
      console.log(products);
    }
  }, [status, products]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "succeeded" && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <li key={product.id || index} className="border p-4 rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h2 className="text-lg font-bold">{product.name}</h2>
              <p>{product.description}</p>
            </li>
          ))}
        </ul>
      )}
      {status === "failed" && (
        <p className="text-red-500">Failed to fetch products</p>
      )}
    </div>
  );
};

export default Products;
