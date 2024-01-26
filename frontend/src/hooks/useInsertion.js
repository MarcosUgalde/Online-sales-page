import { useMutation } from "react-query";
import { useLocation } from "wouter";
import { products } from "../services";

export const useInsertion = () => {
  const [, setLocation] = useLocation();
  const { mutate: insertProduct } = useMutation({
    mutationFn: products.insertProduct,
    onSuccess: (data) => {
      if (data.success) setLocation("/");
    },
  });
  return insertProduct;
};
