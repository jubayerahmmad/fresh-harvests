import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  imageSrc: string;
  date: string;
  title: string;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ imageSrc, date, title, link }) => (
  <div className="bg-white space-y-3 pl-1">
    <Image
      src={imageSrc}
      alt={title}
      width={500}
      height={500}
      className="w-full object-cover  rounded-2xl h-[230px] md:h-[260px] flex items-center justify-center"
    />
    <div className="space-y-2">
      <p className="text-gray-500 text-sm">{date}</p>
      <h3 className="text-sm text-semibold md:text-md xl:text-lg font-medium ">
        {title}
      </h3>
      <Link href={link} className="text-[#FF6A1A] font-semibold inline-block">
        Read More →
      </Link>
    </div>
  </div>
);
export default BlogCard;
