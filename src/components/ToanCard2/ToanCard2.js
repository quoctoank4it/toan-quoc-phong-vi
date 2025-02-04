import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ToanCard2 = ({ article, isBoderBottomDisplay }) => {
  const { title, caption, img_src, video_src, img_caption, catology, id } =
    article;

  return (
    <Link
      className="toan-card"
      to={`/${catology}/${id}`}
      style={{
        display: "flex",
        marginTop: "1rem",
        paddingBottom: 10,
        marginBottom: 10,
        borderBottom:
          isBoderBottomDisplay === undefined || isBoderBottomDisplay === true
            ? 1
            : 0,
        borderBottomStyle: "solid",
        borderBottomColor: "#d1d1d1",
        cursor: "pointer",
        textDecoration: "none", // Xóa gạch chân mặc định của thẻ <a>
        color: "inherit", // Giữ màu chữ không thay đổi
      }}
    >
      <Row>
        <Col
          xs={{ span: 12, order: 2 }}
          sm={{ span: 12, order: 2 }}
          md={{ span: 12, order: 2 }}
          lg={{ span: 8, order: 1 }}
          xl={{ span: 8, order: 1 }}
          xxl={{ span: 8, order: 1 }}
          style={{
            marginTop: 10,
          }}
        >
          <h5 className="title">{title}</h5>
          <h6 style={{ color: "#969696" }}>{caption}</h6>
        </Col>
        <Col
          xs={{ span: 12, order: 1 }}
          sm={{ span: 12, order: 1 }}
          md={{ span: 12, order: 1 }}
          lg={{ span: 4, order: 2 }}
          xl={{ span: 4, order: 2 }}
          xxl={{ span: 4, order: 2 }}
        >
          {img_src !== undefined && img_src !== "" && (
            <img
              style={{ width: "100%" }}
              src={img_src}
              alt={img_caption}
            ></img>
          )}
          {video_src !== undefined && video_src !== "" && (
            <video
              style={{ width: "100%" }}
              src={video_src}
              alt={img_caption}
              controls
            ></video>
          )}
        </Col>
      </Row>
    </Link>
  );
};

export default ToanCard2;
