import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
      console.log(categoryNews.length);
    } else if (id == "1") {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick == true,
      );
      setCategoryNews(filteredNews);
      console.log(categoryNews.length);
    } else {
      const filteredNews = data.filter((news) => news.category_id == id);
      setCategoryNews(filteredNews);
      console.log(categoryNews.length);
    }
  }, [data, id]);

  console.log(categoryNews);

  return (
    <div>
      main section {id} aa {categoryNews.length}
    </div>
  );
};

export default CategoryNews;
