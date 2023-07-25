import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { fetchProducts } from "@/actions/product";
import Skeleton from "react-loading-skeleton";

const ProductList = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const { products, isLoading, error } = useSelector(
    (state: any) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (isLoading) return <Skeleton count={3} height={35} />;
  if (error) return <div>{error}</div>;
  return (
    <div>
      {products?.map((item: any) => {
        console.log(products);
        return (
          <div className="" key={item.id}>
            {item.name}
          </div>
        );
      })}
      <button
        className=""
        onClick={() =>
          dispatch({
            type: "product/addProduct",
            payload: { id: 3, name: "Product C" },
          })
        }
      >
        Add Product
      </button>
      <button
        className=""
        onClick={() =>
          dispatch({
            type: "product/updateProduct",
            payload: { id: 3, name: "Product C updated " },
          })
        }
      >
        Update Product
      </button>
      <button
        className=""
        onClick={() =>
          dispatch({ type: "product/deleteProduct", payload: { id: 3 } })
        }
      >
        Delete Product
      </button>
    </div>
  );
};
export default ProductList;
