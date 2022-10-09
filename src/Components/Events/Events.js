import React from "react";

const Events = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <img
            src="https://college.harvard.edu/sites/default/files/styles/billboard_image/public/2019-05/winterlab_1.jpg?h=06fbc017&itok=E8MTO3DM"
            className="object-cover w-full h-64"
            alt=""
          />
          <div className="p-5 border border-t-0 text-left">
            <h3 className="inline-block mb-3 text-2xl font-normal ">
              Biologycal Research Harvard University
            </h3>
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                Sekolah
              </a>
              <span className="text-gray-600">— Sep Thu, 2017</span>
            </p>
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <button className="w-full bg-orange-400 mt-3 p-3 rounded-lg text-white text-xl">Learn More</button>
          </div>
        </div>

        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <img
            src="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/60107f2ad58c7f9d49c2aa7b_6002086f72b727449401e3f3_design-plus-code.jpeg"
            className="object-cover w-full h-64"
            alt=""
          />
           <div className="p-5 border border-t-0 text-left">
            <h3 className="inline-block mb-3 text-2xl font-normal ">
            Web Design Workshop with Simon 
            </h3>
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                Sekolah
              </a>
              <span className="text-gray-600">— Sep Thu, 2017</span>
            </p>
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <button className="w-full bg-orange-400 mt-3 p-3 rounded-lg text-white text-xl">Learn More</button>
          </div>
        </div>

        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <img
            src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/12/mountain-climbers-1296x728-header.jpg?w=1155&h=1528"
            className="object-cover w-full h-64"
            alt=""
          />
              <div className="p-5 border border-t-0 text-left">
            <h3 className="inline-block mb-3 text-2xl font-normal ">
            Yoga Training with Mrs. Emily Foster
            </h3>
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                Sekolah
              </a>
              <span className="text-gray-600">— Sep Thu, 2017</span>
            </p>
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <button className="w-full bg-orange-400 mt-3 p-3 rounded-lg text-white text-xl">Learn More</button>
          </div>
        </div>

        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <img
            src="https://edulyte.com/wp-content/uploads/2020/11/Edulyte-english-speaking-course-online.png"
            className="object-cover w-full h-64"
            alt=""
          />
          <div className="p-5 border border-t-0 text-left">
            <h3 className="inline-block mb-3 text-2xl font-normal ">
            English Free Class Speaking and Reading
            </h3>
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                Sekolah
              </a>
              <span className="text-gray-600">— Sep Thu, 2017</span>
            </p>
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <button className="w-full bg-orange-400 mt-3 p-3 rounded-lg text-white text-xl">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
