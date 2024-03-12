import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleBookMarks }) => {
  const [blogs, setBlogs] = useState([]);

  //   Fetch Data
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-[68%] w-full">
      blog {blogs.length}
      {blogs.map((blog) => (
        <Blog blog={blog} key={blog.id} handleBookMarks={handleBookMarks} />
      ))}
    </div>
  );
};

export default Blogs;
