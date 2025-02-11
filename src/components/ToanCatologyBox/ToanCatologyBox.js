import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ToanCatologyBox = ({ typeName, articles, catology }) => {
  useEffect(() => {}, []);

  const renderTitle = () => {
    let tagh6s = [];

    for (let index = 0; index < articles.length; index++) {
      const element = articles[index];
      if (index >= 1 && index <= 4) {
        tagh6s.push(
          <Link
            key={`toan-card2${index}`}
            className="toan-card"
            to={`/${element.catology}/${element.id}`}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <h6
              className="title"
              style={{
                fontSize: "1rem",
                // textAlign: "justify",
                borderBottom: index !== 4 ? 2 : 0,
                borderBottomStyle: "solid",
                borderBottomColor: "#d1d1d1",
                paddingBottom: "1rem",
                marginBottom: index !== 4 ? "1rem" : 0,
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
    <Col
      xs={{ span: 12, order: 1 }}
      sm={{ span: 12, order: 1 }}
      md={{ span: 6, order: 1 }}
      lg={{ span: 6, order: 1 }}
      xl={{ span: 6, order: 1 }}
      xxl={{ span: 6, order: 1 }}
    >
      <Row style={{ marginTop: "1rem" }}>
        <Col
          xs={{ span: 12, order: 1 }}
          sm={{ span: 12, order: 1 }}
          md={{ span: 12, order: 1 }}
          lg={{ span: 12, order: 1 }}
          xl={{ span: 12, order: 1 }}
          xxl={{ span: 12, order: 1 }}
        >
          <Link
            to={`/${catology}`}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <h5
              style={{
                color: "#0f6499",
                borderTop: "0.25rem",
                borderTopStyle: "solid",
                borderTopColor: "#0f6499",
                borderBottom: 1,
                borderBottomStyle: "solid",
                borderBottomColor: "#0f6499",
                paddingTop: "0.8rem",
                paddingBottom: "0.8rem",
                cursor: "pointer",
              }}
            >
              {typeName} <FaLongArrowAltRight></FaLongArrowAltRight>
            </h5>
          </Link>
        </Col>
        <Col
          xs={{ span: 7, order: 1 }}
          sm={{ span: 7, order: 1 }}
          md={{ span: 7, order: 1 }}
          lg={{ span: 7, order: 1 }}
          xl={{ span: 7, order: 1 }}
          xxl={{ span: 7, order: 1 }}
          style={{
            borderRight: 2,
            borderRightStyle: "solid",
            borderRightColor: "#d1d1d1",
          }}
        >
          <Link
            to={`/${articles[0].catology}/${articles[0].id}`}
            className="toan-card"
            style={{
              cursor: "pointer",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            {articles[0].img_src !== undefined &&
              articles[0].img_src !== "" && (
                <img
                  style={{ width: "100%" }}
                  src={articles[0].img_src}
                  alt={articles[0].img_caption}
                ></img>
              )}
            {articles[0].video_src !== undefined &&
              articles[0].video_src !== "" && (
                <div class="video-container">
                  <iframe
                    title={articles[0].img_caption}
                    src={articles[0].video_src}
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
              )}
            <div
              style={{
                marginTop: "0.8rem",
              }}
            >
              <h5 style={{ fontSize: "1rem" }} className="title">
                {articles[0].title}
              </h5>
              <h6 style={{ color: "#969696" }}>{articles[0].caption}</h6>
            </div>
          </Link>
        </Col>
        <Col
          xs={{ span: 5, order: 2 }}
          sm={{ span: 5, order: 2 }}
          md={{ span: 5, order: 2 }}
          lg={{ span: 5, order: 2 }}
          xl={{ span: 5, order: 2 }}
          xxl={{ span: 5, order: 2 }}
        >
          {renderTitle()}
        </Col>
      </Row>
    </Col>
  );
};

export default ToanCatologyBox;
