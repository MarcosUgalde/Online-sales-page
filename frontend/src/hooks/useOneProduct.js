import { useQuery } from "react-query";
import { products } from "../services";

export const useOneProduct = (props) => {
  const { data, isLoading } = useQuery(["product", props?.productId], () =>
    products.oneProduct(props?.productId)
  );
  console.log("Hook response: ", data?.content);
  return { data, isLoading };
};
