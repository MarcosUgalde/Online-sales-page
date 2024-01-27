import { useMutation } from "react-query";
import { products } from "../services";

export const useRating = () => {
  const { mutate: ratingProduct } = useMutation({
    mutationFn: products.ratingProduct,
    // onSuccess: (data) => {
    //     console.info('Product rating completed', data)
    // }
  });
  return ratingProduct;
};
