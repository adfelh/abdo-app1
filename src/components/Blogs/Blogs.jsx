import React from 'react'
import Heading from '../Shared/Heading'

// import images
import Img1 from "../../assets/blogs/blog-1.jpg";
import Img2 from "../../assets/blogs/blog-2.jpg";
import Img3 from "../../assets/blogs/blog-3.jpg";
import Img4 from "../../assets/blogs/blog-3.jpg";


const BlogData = [
  {
    title: "How to choose perfect smartwatch",
    subtitle:
      "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
    published: "Jan 20, 2024 by Dilshad",
    image: Img1,
    aosDelay: "0",
  },
  {
    title: "How to choose perfect gadget",
    subtitle:
      "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
    published: "Jan 20, 2024 by Satya",
    image: Img2,
    aosDelay: "200",
  },
  {
    title: "How to choose perfect VR headset",
    subtitle:
      "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
    published: "Jan 20, 2024 by Sabir",
    image: Img3,
    aosDelay: "400",
  },
  {
    title: "How to choose perfect VR headset",
    subtitle:
      "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
    published: "Jan 20, 2024 by Sabir",
    image: Img4,
    aosDelay: "400",
  },
];
const Blogs = () => {
  return (
    <div className='my-12'>
      <div className="container">
      <Heading title="Recent News" subtitle={"Explore Our Blogs"} />
      {/* Blog Section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:cols-3 lg:grid-cols-4 gap-6 gap-y-8 md:gap-7 sm:gap-4'>

        {/* blog card */}
        {
            BlogData.map((data) => (
              <div  data-aos="fade-up"
              data-aos-delay={data.aosDelay} key={data.title} className='bg-white dark:bg-slate-800 '>

                {/* image section */}
                <div className='overflow-hidden rounded-2xl mb-2'>
                <img src={data.image} alt=""
                className='w-full h-[220px] opject-cover rounded-2xl hover:scale-105 duration-500' />
                </div>

                {/* text section */}
                <div className='space-y-2'>
                  <p className='text-xs text-gray-400'> {data.published}</p>
                  <p className='font-bold line-clamp-1'>{data.title}</p>
                  <p className='line-clamp-2 text-sm text-gray-500 dark:text-gray-400'>{data.subtitle}</p>
                </div>
              </div>
            ) )
        }

      </div>
</div>
    </div>
  )
}

export default Blogs