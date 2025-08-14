import ProductCard from "@/components/Cards/ProductCard";
import Loader from "@/components/Loader";
import {
  useGetCategoryQuery,
  useGetProductsQuery,
} from "@/services/productApi";
import { CategoryType } from "@/types/category";
import { Product } from "@/types/product";
import { useEffect } from "react";

type Prop = {
  categoryId: string;
  setCategoryName: (name: string) => void;
};

const ProductByCategory = ({ categoryId, setCategoryName }: Prop) => {
  const { data: products, error, isLoading } = useGetProductsQuery();
  const {
    data: category,
    error: categoryError,
    isLoading: isPending,
  } = useGetCategoryQuery();

  const productsData = products?.data as Product[];
  const categoryData = category?.data as CategoryType[];

  useEffect(() => {
    const categoryName = categoryData?.find(
      (catName) => catName.id === categoryId
    )?.categoryName;
    // console.log(categoryName);
    setCategoryName(categoryName as string);
  }, [categoryId, categoryData, setCategoryName]);

  const filteredProducts = productsData?.filter((product) => {
    return product.categoryId === categoryId;
  });

  console.log(categoryData);
  if (isPending || isLoading)
    return (
      <div className="flex justify-center">
        <Loader />
      </div>
    );
  if (error || categoryError)
    return <p className="p-4 text-red-500">Failed to load products.</p>;
  if (!filteredProducts)
    return <p className="p-4 text-red-500">No products found.</p>;

  return (
    <div className="container mx-auto my-20 px-5 xl:px-0 space-y-5">
      <div className="text-center">
        <header className="text-center flex flex-col justify-center space-y-5">
          <h5 className="section-badge mx-auto">Related Products</h5>
          <h2 className="text-2xl lg:text-4xl font-bold">Our Fresh Products</h2>
          <p className="text-sm max-w-sm mx-auto">
            Welcome to the Fresh Harvest Blog, your go-to resource for all
            things related to fresh produce, healthy eating, and culinary
            inspiration.
          </p>
        </header>
      </div>

      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts?.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductByCategory;
