import React from "react";
import { Link } from "react-router-dom";

const TrendingNow = ({ articles }) => {
  const render = () => {
    let tagh6s = [];

    for (let index = 0; index < articles.length; index++) {
      const element = articles[index];
      if (index >= 0 && index <= 5) {
        tagh6s.push(
          <Link
            to={`/${element.catology}/${element.id}`}
            key={`trendingnow${index}`}
            className="toan-card"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h6
              className="title"
              style={{
                fontSize: "large",
                borderBottom: 2,
                borderBottomStyle: "solid",
                borderBottomColor: "#d1d1d1",
                paddingBottom: "1.25rem",
                marginBottom: "1rem",
                cursor: "pointer",
              }}
              key={element.id}
            >
              {element.title}
            </h6>
          </Link>
        );
      }
    }

    return <div>{tagh6s}</div>;
  };

  return (
    <>
      <h6
        style={{
          fontWeight: 700,
          color: "#0f6499",
          borderBottom: 3,
          borderBottomStyle: "solid",
          borderBottomColor: "#0f6499",
          marginBottom: "1rem",
          marginTop: "1rem",
        }}
      >
        Xu Hướng Hiện Nay
      </h6>
      {render()}
    </>
  );
};

export default TrendingNow;
