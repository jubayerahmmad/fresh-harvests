import AboutSection from "@/components/Home/About";
import Banner from "@/components/Home/Banner";
import BlogSect from "@/components/Home/Blogs";
import Offer from "@/components/Home/Offer";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutSection />
      <Offer />
      <BlogSect />
    </div>
  );
};

export default Home;
