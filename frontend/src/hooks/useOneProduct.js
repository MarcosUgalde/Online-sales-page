import { useQuery } from "react-query";
import { products } from "../services";

export const useOneProduct = (props) => {
  const { data, isLoading } = useQuery(["product", props?.productId], () =>
    products.oneProduct(props?.productId)
  );
  console.log(data?.content);
  return { data, isLoading };
};
