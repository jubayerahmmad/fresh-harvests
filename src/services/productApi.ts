import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "@/types/product";
import { CategoryType } from "@/types/category";

type QueryType = {
  success: boolean;
  message: string;
  data: Product[];
};
type Category = {
  success: boolean;
  message: string;
  data: CategoryType[];
};

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://code-commando.com/api/v1" }),
  endpoints: (builder) => ({
    getProducts: builder.query<QueryType, void>({
      query: () => "products",
    }),

    getCategory: builder.query<Category, void>({
      query: () => "category",
    }),

    getProductById: builder.query<QueryType, string>({
      query: (id: string) => `products/${id}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetCategoryQuery,
} = productApi;
