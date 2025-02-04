import React from "react";
import { Link } from "react-router-dom";

const ToanCard = ({ article, isBoderBottomDisplay }) => {
  const { title, caption, img_src, img_caption, id, catology, video_src } =
    article;

  return (
    <div
      style={{
        marginTop: "1rem",
        paddingBottom: 10,
        marginBottom: 10,
        borderBottom:
          isBoderBottomDisplay === undefined || isBoderBottomDisplay === true
            ? 1
            : 0,
        borderBottomStyle: "solid",
        borderBottomColor: "#d1d1d1",
      }}
    >
      <Link
        className="toan-card"
        to={`/${catology}/${id}`}
        style={{
          cursor: "pointer",
          textDecoration: "none", // Xóa gạch chân mặc định của thẻ <a>
          color: "inherit", // Giữ màu chữ không thay đổi
        }}
      >
        {img_src !== undefined && img_src !== "" && (
          <img style={{ width: "100%" }} src={img_src} alt={img_caption}></img>
        )}
        {video_src !== undefined && video_src !== "" && (
          <video
            style={{ width: "100%" }}
            src={video_src}
            alt={img_caption}
            controls
          ></video>
        )}
        <div
          style={{
            marginTop: 10,
          }}
        >
          <h5 className="title">{title}</h5>
          <h6 style={{ color: "#969696" }}>{caption}</h6>
        </div>
      </Link>
    </div>
  );
};

export default ToanCard;
