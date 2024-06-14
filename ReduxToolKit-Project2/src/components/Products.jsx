import React, { useEffect } from "react";
import { asyncGetProducts } from "../store/actions/ProductsAction";
import { useDispatch, useSelector } from "react-redux";
import { deleteProducts } from "../store/reducers/ProductSlice";

function Products() {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.ProductReducer);

  useEffect(() => {
    dispatch(asyncGetProducts());
  }, []);

  const deleteHandler = (index) => {
    dispatch(deleteProducts(index));
  };

  return (
    <>
      <div className="w-full h-fit h-min-screen pb-5 bg-zinc-900 text-white">
        <div className="flex justify-center items-center pt-10 flex-col">
          <h1 className="text-4xl border-b-2 border-violet-600">
            Available Products
          </h1>
          <ol className="pt-5">
            {products.map((product, index) => (
              <li key={index} className="list-decimal py-1 text-pink-500">
                {product.title.slice(0, 60)} -{" "}
                <span
                  onClick={() => deleteHandler(index)}
                  className="text-green-500 text-md cursor-pointer"
                >
                  x
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export default Products;
