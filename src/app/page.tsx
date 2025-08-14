import AboutSection from "@/components/Home/About";
import Banner from "@/components/Home/Banner";
import BlogSect from "@/components/Home/Blogs";
import Offer from "@/components/Home/Offer";
import Products from "@/components/Home/Products";
import Testimonial from "@/components/Home/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <Products />
      <AboutSection />
      <Offer />
      <Testimonial />
      <BlogSect />
    </div>
  );
};

export default Home;
