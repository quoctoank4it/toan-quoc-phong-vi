import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ToanCard3 from "../components/ToanCard3/ToanCard3";
import { filteredArticles } from "../commonfuntion";
import { useAppContext } from "../AppContext";
import TrendingNow from "../components/TrendingNow/TrendingNow";

const Catology = ({ catology, catologyName, caption }) => {
  const { articles } = useAppContext();
  const renderArticleList = () => {
    var render = [];
    const articleCatologys = filteredArticles(catology, articles);
    articleCatologys.forEach((element) => {
      render.push(<ToanCard3 key={element.id} article={element} />);
    });
    return render;
  };

  return (
    <Container
      style={{
        marginTop: 60,
      }}
    >
      <Row
        style={{
          borderTop: 2,
          borderTopStyle: "solid",
          borderTopColor: "#d1d1d1",
          borderBottom: 2,
          borderBottomStyle: "solid",
          borderBottomColor: "#d1d1d1",
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        <Col>
          <h5 style={{ fontWeight: 700 }}>{catologyName}</h5>
          <h6>{caption}</h6>
        </Col>
      </Row>
      <Row>
        <Col
          xs={{ span: 12, order: 1 }}
          sm={{ span: 12, order: 1 }}
          md={{ span: 8, order: 1 }}
          lg={{ span: 8, order: 1 }}
          xl={{ span: 8, order: 1 }}
          xxl={{ span: 8, order: 1 }}
        >
          {renderArticleList()}
        </Col>
        <Col
          xs={{ span: 12, order: 2 }}
          sm={{ span: 12, order: 2 }}
          md={{ span: 4, order: 2 }}
          lg={{ span: 4, order: 2 }}
          xl={{ span: 4, order: 2 }}
          xxl={{ span: 4, order: 2 }}
        >
          <TrendingNow articles={articles} />
        </Col>
      </Row>
    </Container>
  );
};

export default Catology;
