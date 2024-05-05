import Link from "next/link";
import React from "react";
import urlFor from "../../lib/urlFor";

const Home1Blog = ({blogsData}) => {
  return (
    <>
      <div className="home1-blog-section mb-110">
        <div className="container">
          <div className="row mb-60">
            <div
              className="col-lg-12 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="section-title text-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 14 14"
                  >
                    <g>
                      <path d="M6.6304 0.338424C6.67018 -0.112811 7.32982 -0.112807 7.3696 0.338428L7.72654 4.38625C7.75291 4.68505 8.10454 4.83069 8.33443 4.63804L11.4491 2.02821C11.7963 1.73728 12.2627 2.20368 11.9718 2.55089L9.36197 5.66556C9.1693 5.89546 9.31496 6.24709 9.61374 6.27346L13.6615 6.6304C14.1128 6.67018 14.1128 7.32982 13.6615 7.3696L9.61374 7.72654C9.31496 7.75291 9.1693 8.10454 9.36197 8.33443L11.9718 11.4491C12.2627 11.7963 11.7963 12.2627 11.4491 11.9718L8.33443 9.36197C8.10454 9.1693 7.75291 9.31496 7.72654 9.61374L7.3696 13.6615C7.32982 14.1128 6.67018 14.1128 6.6304 13.6615L6.27346 9.61374C6.24709 9.31496 5.89546 9.1693 5.66556 9.36197L2.55089 11.9718C2.20368 12.2627 1.73729 11.7963 2.02822 11.4491L4.63804 8.33443C4.83069 8.10454 4.68504 7.75291 4.38625 7.72654L0.338424 7.3696C-0.112811 7.32982 -0.112807 6.67018 0.338428 6.6304L4.38625 6.27346C4.68505 6.24709 4.83069 5.89546 4.63804 5.66556L2.02821 2.55089C1.73728 2.20368 2.20368 1.73729 2.55089 2.02822L5.66556 4.63804C5.89546 4.83069 6.24709 4.68504 6.27346 4.38625L6.6304 0.338424Z" />
                    </g>
                  </svg>
                  Explore Our Thoughts
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 14 14"
                  >
                    <g>
                      <path d="M6.6304 0.338424C6.67018 -0.112811 7.32982 -0.112807 7.3696 0.338428L7.72654 4.38625C7.75291 4.68505 8.10454 4.83069 8.33443 4.63804L11.4491 2.02821C11.7963 1.73728 12.2627 2.20368 11.9718 2.55089L9.36197 5.66556C9.1693 5.89546 9.31496 6.24709 9.61374 6.27346L13.6615 6.6304C14.1128 6.67018 14.1128 7.32982 13.6615 7.3696L9.61374 7.72654C9.31496 7.75291 9.1693 8.10454 9.36197 8.33443L11.9718 11.4491C12.2627 11.7963 11.7963 12.2627 11.4491 11.9718L8.33443 9.36197C8.10454 9.1693 7.75291 9.31496 7.72654 9.61374L7.3696 13.6615C7.32982 14.1128 6.67018 14.1128 6.6304 13.6615L6.27346 9.61374C6.24709 9.31496 5.89546 9.1693 5.66556 9.36197L2.55089 11.9718C2.20368 12.2627 1.73729 11.7963 2.02822 11.4491L4.63804 8.33443C4.83069 8.10454 4.68504 7.75291 4.38625 7.72654L0.338424 7.3696C-0.112811 7.32982 -0.112807 6.67018 0.338428 6.6304L4.38625 6.27346C4.68505 6.24709 4.83069 5.89546 4.63804 5.66556L2.02821 2.55089C1.73728 2.20368 2.20368 1.73729 2.55089 2.02822L5.66556 4.63804C5.89546 4.83069 6.24709 4.68504 6.27346 4.38625L6.6304 0.338424Z" />
                    </g>
                  </svg>
                </span>
                <h2>The Innovation Diaries</h2>
              </div>
            </div>
          </div>
          <div className="row g-md-4 gy-5">


          {blogsData?.map((blog, index) => {

return (
            <div
            key={index}
              className="col-lg-4 col-md-6 wow animate fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="500ms"
            >
              <div className="blog-card">
                <div className="blog-card-img-wrap">
                  <Link href={`/blog/${blog?.slug.current}`}  className="card-img">
                    <img  src={urlFor(blog.mainImage).url()}   alt="" />
                  </Link>
                  <Link href={`/blog/${blog?.slug.current}`}  className="date">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={15}
                      height={15}
                      viewBox="0 0 15 15"
                    >
                      <g>
                        <path d="M7.5 6.5625C7.62432 6.5625 7.74355 6.61189 7.83146 6.69979C7.91936 6.7877 7.96875 6.90693 7.96875 7.03125V8.4375H9.375C9.49932 8.4375 9.61855 8.48689 9.70646 8.57479C9.79436 8.6627 9.84375 8.78193 9.84375 8.90625C9.84375 9.03057 9.79436 9.1498 9.70646 9.23771C9.61855 9.32561 9.49932 9.375 9.375 9.375H7.96875V10.7812C7.96875 10.9056 7.91936 11.0248 7.83146 11.1127C7.74355 11.2006 7.62432 11.25 7.5 11.25C7.37568 11.25 7.25645 11.2006 7.16854 11.1127C7.08064 11.0248 7.03125 10.9056 7.03125 10.7812V9.375H5.625C5.50068 9.375 5.38145 9.32561 5.29354 9.23771C5.20564 9.1498 5.15625 9.03057 5.15625 8.90625C5.15625 8.78193 5.20564 8.6627 5.29354 8.57479C5.38145 8.48689 5.50068 8.4375 5.625 8.4375H7.03125V7.03125C7.03125 6.90693 7.08064 6.7877 7.16854 6.69979C7.25645 6.61189 7.37568 6.5625 7.5 6.5625Z" />
                        <path d="M3.28125 0C3.40557 0 3.5248 0.049386 3.61271 0.137294C3.70061 0.225201 3.75 0.34443 3.75 0.46875V0.9375H11.25V0.46875C11.25 0.34443 11.2994 0.225201 11.3873 0.137294C11.4752 0.049386 11.5944 0 11.7188 0C11.8431 0 11.9623 0.049386 12.0502 0.137294C12.1381 0.225201 12.1875 0.34443 12.1875 0.46875V0.9375H13.125C13.6223 0.9375 14.0992 1.13504 14.4508 1.48667C14.8025 1.83831 15 2.31522 15 2.8125V13.125C15 13.6223 14.8025 14.0992 14.4508 14.4508C14.0992 14.8025 13.6223 15 13.125 15H1.875C1.37772 15 0.900806 14.8025 0.549175 14.4508C0.197544 14.0992 0 13.6223 0 13.125V2.8125C0 2.31522 0.197544 1.83831 0.549175 1.48667C0.900806 1.13504 1.37772 0.9375 1.875 0.9375H2.8125V0.46875C2.8125 0.34443 2.86189 0.225201 2.94979 0.137294C3.0377 0.049386 3.15693 0 3.28125 0ZM0.9375 3.75V13.125C0.9375 13.3736 1.03627 13.6121 1.21209 13.7879C1.3879 13.9637 1.62636 14.0625 1.875 14.0625H13.125C13.3736 14.0625 13.6121 13.9637 13.7879 13.7879C13.9637 13.6121 14.0625 13.3736 14.0625 13.125V3.75H0.9375Z" />
                      </g>
                    </svg>
                    {new Date(blog._createdAt).toLocaleDateString('en', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                  </Link>
                </div>
                <div className="card-content">
                  <div className="blog-meta">
                    <ul className="category">
                      <li>
                        <Link href="/blog">   {blog?.categories && blog?.categories[0]?.title}</Link>
                      </li>
                    </ul>
                    <div className="blog-comment">
                      <span>Comment (20)</span>
                    </div>
                  </div>
                  <h4>
                    <Link href="/blog/blog-details">
                    {blog?.title}
                    </Link>
                  </h4>
                  <Link href={`/blog/${blog?.slug.current}`}  className="read-more-btn">
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={10}
                      height={10}
                      viewBox="0 0 10 10"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
           
)})}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home1Blog;
