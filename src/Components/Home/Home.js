import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ReviewContext } from "../../Layout/Root";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [reviews, setReviews] = useContext(ReviewContext);
  
  const [review, setReview] = useState("");

  const handleClick = () => {
    const img = 'https://www.bbvaopenmind.com/wp-content/uploads/2016/01/bbva-openmind-schrodinger-3.jjpg_-1.jpg';
    const name = 'Erwin Schrödinger';
    const newCart = {img, name, review};
    if(review.length === 0){
      toast.warn("Please write a review !!!", {autoClose: 2000, position: "top-center",});
      return;
    }
    setReviews([...reviews, newCart]);
  }

  return (
    <div>
       <ToastContainer />
      <div className="mb-16">
        <div className="bg-gray-100">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  R A N D
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span>
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span>Welcome</span>
                </span>{" "}
                to R A N D
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                WELCOME TO R A N D Let us think of education as the means of
                developing our greatest abilities, because in each of us there
                is a private hope and dream which, fulfilled, can be translated
                into benefit for everyone and greater strength for our nation.
                (John F. Kennedy)
              </p>
            </div>
            <div className="flex items-center sm:justify-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-gray-100 hover:text-black focus:shadow-outline focus:outline-none"
              >
                Get started
              </button>
              <Link
                to="/"
                aria-label=""
                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200  hover:text-blue-500"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
        <div className="relative px-4 sm:px-0">
          <div className="absolute inset-0 bg-gray-100 h-1/2" />
          <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
            <div className="inline-block p-8 text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-blue-500"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <p className="font-bold tracking-wide text-gray-800">Empower</p>
            </div>
            <div className="inline-block p-8 text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-blue-500"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <p className="font-bold tracking-wide text-gray-800">Engage</p>
            </div>
            <div className="inline-block p-8 text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-blue-500"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <p className="font-bold tracking-wide text-gray-800">Awarding</p>
            </div>
          </div>
        </div>
      </div>

      {/* Grand Master Talk */}

      <section>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 text-left">
            <div className="lg:pr-10">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-blue-500"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h5 className="mb-4 text-4xl fw-semibold font-extrabold leading-none">
                EDUCATION IS THE
                <br className="hidden md:block" />
                MOST POWERFUL WEAPON{" "}
              </h5>
              <p className="mb-6 text-gray-900">
                Our students are talented, hard-working and full of good ideas.
                We encourage and empower them to bring their ideas to life.
                Hands-on opportunities are what we're all about. Our students
                are busy doing things that matter. Take a look at the
                opportunities you'll have at the University. The task of the
                modern educator is not to cut down jungles, but to irrigate
                deserts.
              </p>
              <div className=" ">
                <p className="text-xl">Katherine Gonzalez</p>
                <p>
                  <small className="text-gray-400">Sekolah Grandmaster</small>
                </p>
              </div>
            </div>
            <div>
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* features  */}

      <section>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="df31b9f6-a505-42f8-af91-d2b7c3218e5c"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#df31b9f6-a505-42f8-af91-d2b7c3218e5c)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">WE HAVE</span>
              </span>{" "}
              FAITH IN OUR STUDENT FUTURE
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Our students are talented, hard-working and full of good ideas. We
              encourage and empower them to bring their ideas to life. Hands-on
              opportunities are what we're all about.
            </p>
          </div>
          <div className="grid gap-8 row-gap-8 lg:grid-cols-4">
            <div className="sm:text-center">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                <svg
                  className="w-12 h-12 text-blue-500 sm:w-20 sm:h-20"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="my-5 text-2xl leading-5">Empower</h6>
              <p className="max-w-md mb-3 text-[16px] text-gray-600 sm:mx-auto">
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat
              </p>
            </div>

            <div className="sm:text-center">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                <svg
                  className="w-12 h-12 text-blue-500 sm:w-20 sm:h-20"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="my-5 text-2xl leading-5">Engage</h6>
              <p className="max-w-md mb-3 text-[16px] text-gray-600 sm:mx-auto">
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat
              </p>
            </div>

            <div className="sm:text-center">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                <svg
                  className="w-12 h-12 text-blue-500 sm:w-20 sm:h-20"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="my-5 text-2xl leading-5">Graduation</h6>
              <p className="max-w-md mb-3 text-[16px] text-gray-600 sm:mx-auto">
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat
              </p>
            </div>

            <div className="sm:text-center">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                <svg
                  className="w-12 h-12 text-blue-500 sm:w-20 sm:h-20"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="my-5 text-2xl leading-5">Awarding</h6>
              <p className="max-w-md mb-3 text-[16px] text-gray-600 sm:mx-auto">
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat
              </p>
            </div>
          </div>
        </div>
      </section>

                                {/* Review section  */}

      <section>
        <div className="w-2/4 m-auto text-start mb-14 ">
          <textarea
            className="border-2 border-blue-500 w-full p-2 rounded   h-20"
            name=""
            id=""
            placeholder="Right your review here"
            onChange={(e)=> setReview(e.target.value)}
          ></textarea>{" "}
          <br />
          <button onClick={handleClick} className="px-5 text-xl rounded text-white py-2 bg-blue-500">
            Post
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
