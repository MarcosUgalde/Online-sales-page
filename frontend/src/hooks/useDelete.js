import { useQueryClient, useMutation } from "react-query";
import { useLocation } from "wouter";
import { products } from "../services";

export const useDelete = () => {
  const queryClient = useQueryClient();
  const [, setLocation] = useLocation();

  const deleteMutation = useMutation((id) => products.deleteProduct(id), {
    onSuccess: () => {
      queryClient.invalidateQueries("products" && setLocation("/"));
    },
  });
  const deleteProduct = (id) => {
    deleteMutation.mutate(id);
  };
  return deleteProduct;
};
