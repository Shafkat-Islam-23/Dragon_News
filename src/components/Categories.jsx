import React, { use } from "react";

const categories_promise = fetch("/public/categories.json").then((res) =>
  res.json(),
);

const Categories = () => {
  const categoriesdata = use(categories_promise);
  console.log(categoriesdata);
  return (
    <div>
      <h2 className="font-bold">All Categories</h2>
    </div>
  );
};

export default Categories;
