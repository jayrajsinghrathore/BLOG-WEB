import React from "react";
import { useParams, Link } from "react-router-dom";
import Blogdetail from "../components/Blogdetail";

  const SingleBlog = () => {
  const { id } = useParams(); 
  const blog = Blogdetail.find((b) => b.id === parseInt(id)); 
  const recentBlogs = Blogdetail.slice(0, 4); 

  if (!blog) {
    return <p>Blog not found!</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            {blog.title}
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            By {blog.author} on {blog.date}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
                {blog.description2}
          </p>
          <img
            src={blog.img.replace(/<img src='|'>/g, "")} 
            alt={blog.title}
            className="w-full h-auto mt-4 mb-4 rounded-md"
          />
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {blog.description}
          </p>
          <div className="mt-4">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block text-xs bg-gray-100 text-pink-700 font-semibold mr-2 px-2.5 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Recent Blogs Posts
          </h2>
          <div className="space-y-4">
            {recentBlogs.map((recentBlog) => (
              <div
                key={recentBlog.id}
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-md shadow hover:shadow-lg transition"
              >
                <Link to={`/blog/${recentBlog.id}`}>
                  <img
                    src={recentBlog.img.replace(/<img src='|'>/g, "")}
                    alt={recentBlog.title}
                    className="w-full h-32 object-cover rounded-md mb-3"
                  />
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 flex ">
                    {recentBlog.title}
                  </h3>
                </Link>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  By {recentBlog.author}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {recentBlogs[0].tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 text-pink-700 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;

