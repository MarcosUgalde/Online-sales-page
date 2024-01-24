import { useQuery } from "react-query";
import { products } from "../services";

export const useProducts = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["all"],
    queryFn: products.allProducts,
  });
  return { data, isLoading };
};
