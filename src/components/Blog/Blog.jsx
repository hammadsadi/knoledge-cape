import PropTypes from "prop-types";
const Blog = ({ blog, handleBookMarks }) => {
  const {
    cover_image,
    author_image,
    title,
    author_name,
    posted_date,
    hashtags,
    reading_time,
  } = blog;
  return (
    <div className="mb-6">
      <img
        src={cover_image}
        alt={title}
        className="w-full md:h-96 object-cover rounded-2xl"
      />
      <div className="flex justify-between my-6 items-center">
        <div className="flex gap-2 md:gap-5 items-center">
          <img
            src={author_image}
            alt={author_name}
            className="w-8 md:w-14 h-8 md:h-14 rounded-full object-cover"
          />
          <div className="">
            <h3 className="font-bold text-base md:text-2xl">{author_name}</h3>
            <p className="text-sm md:text-base font-semibold text-[#11111199]">
              {posted_date}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <p className="text-sm md:text-xl font-medium text-[#11111199]">
            <span>{reading_time}</span> min read
          </p>
          <button onClick={handleBookMarks}>
            <i className="bx bx-bookmark text-base md:text-2xl text-[#11111199]"></i>
          </button>
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-[#111111]">
          {title}
        </h2>
        <p className="space-x-1 flex flex-wrap text-sm md:text-xl font-medium text-[#11111199]">
          {hashtags.map((item, idx) => (
            <a href="" key={idx}>
              #{item}
            </a>
          ))}
        </p>
        <button className="text-sm md:text-xl font-medium text-[#6047EC]">
          Mark as read
        </button>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookMarks: PropTypes.func.isRequired,
};

export default Blog;
