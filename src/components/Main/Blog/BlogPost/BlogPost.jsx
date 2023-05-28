import React from "react";

const BlogPost = ({ postTitle, postDate, postArticle, postImage }) => {
  return (
    <div className="textContainerItem p-2 w-full xl:w-1/2 h-fit flex sm:flex-row flex-col break-words transition-all duration-75 cursor-pointer ">
      <img
        src={postImage}
        alt={postTitle}
        className="w-full sm:w-72 xl:w-96 h-64 object-cover " />
      <div className="ml-2">
        <h2 className="w-fit p-1 text-xl textContainerTitle">
          {postTitle}
        </h2>
        <article className="w-fit min-h-48 p-1 textContainerArticle">
          {postArticle}
        </article>
      </div>
    </div>
  )
}

export default BlogPost