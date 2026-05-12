import React from "react";
import { useParams } from "react-router";

const CategoryNews = () => {

  const {id} = useParams();
  return <div>main section {id}</div>;
};

export default CategoryNews;
