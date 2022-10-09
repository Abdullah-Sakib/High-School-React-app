import React, { createContext, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

export const ReviewContext = createContext("");

const Root = () => {
  const reviewFromAPI = useLoaderData();
  const [reviews, setReviews] = useState(reviewFromAPI);
  return (
    <div>
      <ReviewContext.Provider value={[reviews, setReviews]}>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </ReviewContext.Provider>
    </div>
  );
};

export default Root;
