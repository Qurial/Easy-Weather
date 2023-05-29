import React from "react";
import BlogPost from "./BlogPost/BlogPost";
import photo1 from '../../../assets/photo1.jpg'
import photo2 from '../../../assets/photo2.jpg'
import photo3 from '../../../assets/photo3.jpg'
import photo4 from '../../../assets/photo4.jpg'

const posts = [
  {
    date: '10.05',
    title: 'Lorem, ipsum dolor sit amet',
    article: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, eius deleniti dolorem asperiores at sequi atque ex? Doloribus eveniet eos impedit corrupti nemo voluptas nam, eligendi maxime molestiae molestias reiciendis.',
    image: photo1,
  },
  {
    date: '09.05',
    title: 'dolorem asperiores at sequi atque ex?',
    article: 'Doloribus eveniet eos impedit corrupti nemo voluptas nam, eligendi maxime molestiae molestias reiciendis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, eius deleniti dolorem asperiores at sequi atque ex?',
    image: photo2,
  },
  {
    date: '08.05',
    title: 'Doloribus eveniet eos impedit',
    article: 'Magni, eius deleniti dolorem asperiores at sequi atque ex? Doloribus eveniet eos impedit corrupti nemo voluptas nam, eligendi maxime molestiae molestias reiciendis.',
    image: photo3,
  },
  {
    date: '07.05',
    title: 'Maxime molestiae molestias',
    article: 'Doloribus eveniet eos impedit corrupti nemo voluptas nam, eligendi maxime molestiae molestias reiciendis. Magni, eius deleniti dolorem asperiores at sequi atque ex? Doloribus eveniet eos impedit corrupti nemo voluptas nam, eligendi maxime molestiae molestias reiciendis.',
    image: photo4,
  },
]

const Blog = () => {
  return (
    <section className="textContainerColor w-full flex flex-col xl:flex-row justify-around items-center lg:items-stretch py-12 mt-44 relative flex-wrap textContainerTitle">
    <h2 className="absolute top-2 left-5 text-xl">Blog</h2>
    {posts.filter((item, index) => index < 4)
      .map((item) => <BlogPost
        postDate={item.date}
        postTitle={item.title}
        postArticle={item.article}
        postImage={item.image}
      />)}
  </section>
  )
}

export default Blog