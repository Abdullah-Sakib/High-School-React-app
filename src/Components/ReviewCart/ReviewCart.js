import React from 'react';

const ReviewCart = ({reviews}) => {
  const {name, img, review} = reviews;
  return (
    <div>
        <div className="p-8 bg-white border rounded shadow-sm">
          <h2
            className="mb-3 text-2xl font-semibold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            Review
          </h2>
          <p className="mb-5 text-gray-700 text-start">
            {review.length> 200 ? review.slice(0, 200)+'...' : review}
          </p>
          <div className="flex items-center">
              <img
                src={img}
                alt="avatar"
                className="object-cover w-10 h-10 rounded-full shadow-sm mr-3"
              />
            <div className='text-left'>
              <a
                href="https://en.wikipedia.org/wiki/Erwin_Schr%C3%B6dinger"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Author"
                title="Author"
                className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                
              >
                {name}
              </a>
              <p className="text-sm font-medium leading-4 text-gray-600">
                Author
              </p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ReviewCart;