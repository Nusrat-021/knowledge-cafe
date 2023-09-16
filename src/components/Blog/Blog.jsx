import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa"; 

const Blog = ({ blog,handleAddToBookmark,handleMarkAsRead }) => {
//   console.log(blog);
  const {cover, reading_time,
    author_img,
    author,
    posted_date,
    title,
    hashtags,
  } = blog;
  return (
    <div>
      <img className="w-full rounded-lg" src={cover} alt="" />
      <div className="flex justify-between items-center mt-8 mb-4">
        <div className="flex gap-6 items-center">
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img src={author_img} />
            </div>
          </div>
          <div>
            <p className="text-2xl font-bold">{author}</p>
            <p className="text-[#111111]/60 font-semibold">{posted_date}</p>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <span className="text-[#111111]/60 font-semibold">
            {reading_time} min read
          </span>
          <button onClick={() => handleAddToBookmark(blog)} className="text-[#111111]/60 font-semibold"><FaRegBookmark></FaRegBookmark></button>
        </div>
      </div>
      <h2 className="text-4xl font-semibold">{title}</h2>
      <div className="flex gap-4">
        {hashtags.map((hashtag, idx) => (
          <p className="text-xl text-[#111111]/60 my-5 font-medium" key={idx}>
            #{hashtag}
          </p>
        ))}
      </div>
      <button onClick={() => handleMarkAsRead(reading_time)} className="btn btn-link lowercase text-[#6047EC] text-xl font-semibold">mark as read</button>
    </div>
  );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func,
}
export default Blog;
