import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import ToanCard from "../components/ToanCard/ToanCard";
import "./style.css";
import ToanCard2 from "../components/ToanCard2/ToanCard2";
import ToanCatologyBox from "../components/ToanCatologyBox/ToanCatologyBox";
import { Link } from "react-router-dom";
import { useAppContext } from "../AppContext";

const Home = () => {
  const { articles } = useAppContext();

  const renderLeft = () => {
    return (
      <Row key={`renderLeft`}>
        <Col
          xs={{ span: 12 }}
          sm={{ span: 12 }}
          md={{ span: 6 }}
          lg={{ span: 6 }}
          xl={{ span: 6 }}
          xxl={{ span: 12 }}
        >
          <ToanCard key={articles[3].id} article={articles[3]} />
        </Col>
        <Col
          xs={{ span: 12 }}
          sm={{ span: 12 }}
          md={{ span: 6 }}
          lg={{ span: 6 }}
          xl={{ span: 6 }}
          xxl={{ span: 12 }}
        >
          <ToanCard
            key={articles[4].id}
            article={articles[4]}
            isBoderBottomDisplay={false}
          />
        </Col>
      </Row>
    );
  };

  // Lọc các bài viết có catology là "my"
  const filteredArticles = (catology) => {
    return articles.filter((article) => article.catology === catology);
  };

  const renderRight = () => {
    let tagh6s = [];

    for (let index = 0; index < articles.length; index++) {
      const element = articles[index];
      if (index >= 5 && index <= 10) {
        tagh6s.push(
          <Link
            to={`/${element.catology}/${element.id}`}
            key={`toan-card${index}`}
            className="toan-card"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <h6
              className="title"
              style={{
                fontSize: "large",
                borderBottom: 2,
                borderBottomStyle: "solid",
                borderBottomColor: "#d1d1d1",
                paddingBottom: 20,
                marginBottom: 14,
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
    <Container
      style={{
        marginTop: 55,
        borderTop: 1,
        borderTopStyle: "solid",
        borderTopColor: "#d1d1d1",
      }}
    >
      <Row>
        <Col
          xs={{ span: 12, order: 2 }}
          sm={{ span: 12, order: 2 }}
          md={{ span: 0, order: 3 }}
          lg={{ span: 0, order: 3 }}
          xl={{ span: 0, order: 3 }}
          xxl={{ span: 3, order: 0 }}
        >
          {renderLeft()}
        </Col>
        <Col
          xs={{ span: 12, order: 1 }}
          sm={{ span: 12, order: 1 }}
          md={{ span: 6, order: 1 }}
          lg={{ span: 8, order: 1 }}
          xl={{ span: 8, order: 1 }}
          xxl={{ span: 6, order: 1 }}
        >
          <ToanCard key={articles[0].id} article={articles[0]} />
          <ToanCard2 key={articles[1].id} article={articles[1]} />
          <ToanCard2
            key={articles[2].id}
            article={articles[2]}
            isBoderBottomDisplay={false}
          />
        </Col>
        <Col
          xs={{ span: 12, order: 3 }}
          sm={{ span: 12, order: 3 }}
          md={{ span: 6, order: 2 }}
          lg={{ span: 4, order: 2 }}
          xl={{ span: 4, order: 2 }}
          xxl={{ span: 3, order: 2 }}
          style={{ marginTop: "1rem" }}
        >
          <h6
            style={{
              fontWeight: 700,
              color: "#0f6499",
              borderBottom: 3,
              borderBottomStyle: "solid",
              borderBottomColor: "#0f6499",
              marginBottom: 17,
            }}
          >
            Nhiều Người Đọc
          </h6>
          {renderRight()}
        </Col>
      </Row>
      <Row
        style={{
          paddingTop: 10,
        }}
      >
        <ToanCatologyBox
          key="my"
          typeName="Hoa Kỳ"
          articles={filteredArticles("my")}
          catology="my"
        />
        <ToanCatologyBox
          key="nga"
          typeName="Nga"
          articles={filteredArticles("nga")}
          catology="nga"
        />
      </Row>
      <Row
        style={{
          paddingTop: 10,
        }}
      >
        <ToanCatologyBox
          key="chauau"
          typeName="Châu Âu"
          articles={filteredArticles("chauau")}
          catology="chauau"
        />
        <ToanCatologyBox
          key="trungdong"
          typeName="Trung Đông"
          articles={filteredArticles("trungdong")}
          catology="trungdong"
        />
      </Row>
      <Row
        style={{
          paddingTop: 10,
        }}
      >
        <ToanCatologyBox
          key="trungquoc"
          typeName="Trung Quốc"
          articles={filteredArticles("trungquoc")}
          catology="trungquoc"
        />
        <ToanCatologyBox
          key="chaua"
          typeName="Châu Á"
          articles={filteredArticles("chaua")}
          catology="chaua"
        />
      </Row>
    </Container>
  );
};

export default Home;
