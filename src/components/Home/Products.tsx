"use client";

import {
  useGetCategoryQuery,
  useGetProductsQuery,
} from "@/services/productApi";
import { CategoryType } from "@/types/category";
import { Product } from "@/types/product";
import Link from "next/link";
import { useState } from "react";
import ProductCard from "../Cards/ProductCard";
import Loader from "../Loader";

const Products = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();

  const {
    data: category,
    error: categoryError,
    isLoading: isPending,
  } = useGetCategoryQuery();
  const [allProduct, setAllProduct] = useState<Product[]>([]);
  const [show, setShow] = useState("All");

  const productsData = products?.data as Product[];
  const categoryData = category?.data as CategoryType[];

  const handleFilter = (id: string, name?: string) => {
    if (id === "All") {
      setAllProduct([]);
      setShow("All");
      return;
    } else {
      setShow(name as string);
      const filteredProducts = productsData?.filter((product) => {
        return product.categoryId === id;
      });
      setAllProduct(filteredProducts as Product[]);
    }
  };

  if (isLoading || isPending)
    return (
      <div className="p-4 flex justify-center">
        <Loader />
      </div>
    );
  if (error || categoryError)
    return <p className="p-4 text-red-500">Failed to load products.</p>;

  return (
    <section className="container mx-auto my-16 md:my-35 ">
      <header className="text-center flex flex-col justify-center space-y-5">
        <h5 className="section-badge mx-auto">Our Products</h5>
        <h2 className="text-2xl lg:text-4xl font-bold">Our Fresh Products</h2>
        <p className="text-sm max-w-sm mx-auto">
          We pride ourselves on offering a wide variety of fresh and flavorful
          fruits, vegetables, and salad ingredients.
        </p>
      </header>

      <div className="flex justify-center mt-6 gap-1 md:gap-3 md:space-x-4 mb-4">
        <button
          onClick={() => handleFilter("All")}
          className={`px-3 md:px-4 py-2 rounded-md border ${
            show === "All"
              ? "bg-[#749B3F] text-white"
              : "bg-white text-gray-700 border-gray-300"
          } hover:bg-[#749B3F] hover:text-white transition`}
        >
          ALl
        </button>
        {categoryData?.map((category, index) => (
          <button
            onClick={() => handleFilter(category?.id, category?.categoryName)}
            key={index}
            className={`px-3 md:px-4 py-2 rounded-md border ${
              show === category?.categoryName
                ? "bg-[#749B3F] text-white"
                : "bg-white text-gray-700 border-gray-300"
            } hover:bg-[#749B3F] hover:text-white transition`}
          >
            {category?.categoryName}
          </button>
        ))}
      </div>

      {show === "Drinksss" && allProduct.length === 0 ? (
        <>
          <div className="text-center py-20">
            <h1 className="text-4xl font-bold">Nothing Here Yet</h1>
            <p className="text-sm py-4 max-w-[400px] mx-auto">
              It looks like there are no products available under this category
              right now. Try selecting a different filter or check back soon to
              see our fresh additions!
            </p>
          </div>
        </>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allProduct.length > 0 ? (
            allProduct?.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))
          ) : (
            <>
              {productsData?.slice(0, 8).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </>
          )}
        </div>
      )}
      <div className=" w-full text-center mt-8">
        <Link href="/shop">
          <button className="cursor-pointer  border border-[#FF6A1A]  bg-white  font-semibold px-16 py-2 rounded hover:bg-[#FF6A1A] hover:text-black text-[#FF6A1A] transition">
            See all products
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Products;
