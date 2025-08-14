import BlogCard from "../Cards/BlogCard";

const BlogSect = () => {
  const blogs = [
    {
      imageSrc: "/images/post-1.jpg",
      date: "May 23, 2024",
      title: "Exploring Seasonal Delights: A Guide to What's Fresh Right Now",
      link: "/blog",
    },
    {
      imageSrc: "/images/post-2.jpg",
      date: "May 23, 2024",
      title:
        "Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads",
      link: "/blog",
    },
    {
      imageSrc: "/images/post-3.jpg",
      date: "May 23, 2024",
      title:
        "The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week",
      link: "/blog",
    },
  ];

  return (
    <section className="container mx-auto my-36 space-y-5 px-5 md:px-2">
      <header className="text-center flex flex-col justify-center space-y-5">
        <h5 className="section-badge mx-auto">Our Blog</h5>
        <h2 className="text-2xl lg:text-4xl font-bold">Fresh Harvest Blog</h2>
        <p className="text-sm max-w-sm mx-auto">
          Welcome to the Fresh Harvest Blog, your go-to resource for all things
          related to fresh produce, healthy eating, and culinary inspiration.
        </p>
      </header>
      <article className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4 md:gap-3 xl:gap-6">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            imageSrc={blog.imageSrc}
            date={blog.date}
            title={blog.title}
            link={blog.link}
          />
        ))}
      </article>
    </section>
  );
};

export default BlogSect;
