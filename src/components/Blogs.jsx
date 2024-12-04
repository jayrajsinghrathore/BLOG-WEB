import React, { useState } from "react";
import Blogdetail from "./Blogdetail";
import { Link } from "react-router-dom"; 
const Blogs = () => {

  const recentBlogs = Blogdetail.slice(0, 4); 
  const allBlogs = Blogdetail.slice(4); 

 
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  
  const totalPages = Math.ceil(allBlogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const paginatedBlogs = allBlogs.slice(startIndex, startIndex + blogsPerPage);

 
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    
    <div className="container mx-auto p-4">
     
      {currentPage === 1 && (
        <section>
        <h2 className="text-2xl font-bold mb-4">Recent Blog Posts</h2>
      
       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      
          {/* First Div Left Column of First Row */}
          <div className="lg:col-span-1">
            <Link to={`/blogs/${recentBlogs[0].id}`} className="block">
              <div className="rounded-lg p-4 shadow hover:shadow-lg transition">
                <div
                  className="mb-4"
                  dangerouslySetInnerHTML={{ __html: recentBlogs[0].img }}
                />
                <h3 className="text-lg font-semibold flex justify-between">
                  {recentBlogs[0].title}
                  <img className="h-4"
                    src="https://cdn-icons-png.flaticon.com/128/3314/3314260.png"
                    alt=""
                  />
                </h3>
                <p className="text-purple-700 text-sm">
                  By {recentBlogs[0].author} on {recentBlogs[0].date}
                </p>
                <p className="text-gray-500 mt-2">{recentBlogs[0].description}</p>
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
            </Link>
          </div>
      
          {/* Second Div Right Column of First Row */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            {recentBlogs.slice(1, 3).map((blogs) => (
              <Link key={blogs.id} to={`/blogs/${blogs.id}`} className="block">
                <div className="flex rounded-lg p-4 shadow hover:shadow-lg transition">
                 
                  <div className="w-full mr-4">
                    <div
                      dangerouslySetInnerHTML={{ __html: blogs.img }}
                      className="h-full rounded-lg"
                    />
                  </div>
                 
                  <div className="w-2/3">
                    <h3 className="text-lg font-semibold flex justify-between">
                      {blogs.title}
                      <img className="h-3"
                        src="https://cdn-icons-png.flaticon.com/128/3314/3314260.png"
                        alt=""
                      />
                    </h3>
                    <p className="text-purple-700 text-sm">
                      By {blogs.author} on {blogs.date}
                    </p>
                    <p className="text-gray-500 mt-2">{blogs.description}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {blogs.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs bg-gray-100 text-pink-700 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      
        {/* Third Div Second Row */}
        <div className="mt-6">
          <Link to={`/blogs/${recentBlogs[3].id}`} className="block">
            <div className="flex rounded-lg p-4 shadow hover:shadow-lg transition">
           
              <div className="w-1/3 mr-4">
                <div
                  dangerouslySetInnerHTML={{ __html: recentBlogs[3].img }}
                  className="h-full rounded-lg"
                />
              </div>
            
              <div className="w-2/3">
                <h3 className="text-lg font-semibold flex justify-between">
                  {recentBlogs[3].title}
                  <img className="h-4"
                    src="https://cdn-icons-png.flaticon.com/128/3314/3314260.png"
                    alt=""
                  />
                </h3>
                <p className="text-purple-700 text-sm">
                  By {recentBlogs[3].author} on {recentBlogs[3].date}
                </p>
                <p className="text-gray-500 mt-2">{recentBlogs[3].description}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {recentBlogs[3].tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 text-pink-700 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
      
      )}

      {/* All Blogs Section */}
      <section className={`${currentPage === 1 ? "mt-8" : ""}`}>
        <h2 className="text-2xl font-bold mb-4">All Blogs Posts</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedBlogs.map((blogs) => (
            <Link
            key={blogs.id}
            to={`/blogs/${blogs.id}`} 
            className="block"
          >
            <div
              key={blogs.id}
              className="rounded-lg p-4 shadow hover:shadow-lg transition"
            >

              <div
                className="mb-4"
                dangerouslySetInnerHTML={{ __html: blogs.img }}
              />
              <h3 className="text-lg font-semibold flex justify-between">{blogs.title}
              <img className="h-4"
                    src="https://cdn-icons-png.flaticon.com/128/3314/3314260.png"
                    alt=""
                  />
              </h3>
              <p className="text-purple-700 text-sm">
                By {blogs.author} on {blogs.date}
              </p>
              <p className="text-gray-700 mt-2">{blogs.description}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {blogs.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-100 text-pink-700 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            </Link>
          ))}
        </div>

   {/* Pagination */}

  <div className="flex justify-between items-center mt-6">
  
  <button
    onClick={handlePrevious}
    disabled={currentPage === 1}
    className={`px-4 py-2 rounded border ${
      currentPage === 1
        ? "cursor-not-allowed text-gray-400"
        : "bg-white text-black hover:bg-gray-200"
    }`}
  >
    ↞ Previous
  </button>

 
  <div className="flex space-x-2">
    {totalPages <= 5 ? (
      Array.from({ length: totalPages }).map((_, index) => {
        const page = index + 1;
        return (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-3 py-1 rounded ${
              currentPage === page
                ? "bg-gray-800 dark:bg-white dark:text-black text-white "
                : " text-black dark:text-white"
            }`}
          >
            {page}
          </button>
        );
      })
    ) : (
      <></>
    )}
  </div>

  <button
    onClick={handleNext}
    disabled={currentPage === totalPages}
    className={`px-4 py-2 rounded border ${
      currentPage === totalPages
        ? "cursor-not-allowed text-gray-400"
        : "bg-white text-black hover:bg-gray-200"
    }`}
  >
    Next ↠
  </button>
  </div>
  </section>
  </div>
  );
};

export default Blogs;

