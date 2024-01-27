import { useMutation } from "react-query";
import { useLocation } from "wouter";
import { products } from "../services";

export const useUpdate = () => {
  const [, setLocation] = useLocation();

  const { mutate: updateProduct } = useMutation({
    mutationFn: products.updateProduct,
    onSuccess: (data) => {
      if (data.success) setLocation("/");
    },
  });
  return updateProduct;
};
