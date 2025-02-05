import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { get, ref } from "firebase/database";
import { useNavigate, useParams } from "react-router-dom";
import { database } from "../firebase";
import {
  GetCatologyNameByKey,
  filteredArticles,
  formatDate,
  getSource,
} from "../commonfuntion";
import { FaCalendar, FaLongArrowAltRight } from "react-icons/fa";
import { useAppContext } from "../AppContext";
import TrendingNow from "../components/TrendingNow/TrendingNow";
import ToanCard2 from "../components/ToanCard2/ToanCard2";
import ShareComponent from "../components/ShareComponent";

const ArticleDetail = () => {
  const navigate = useNavigate();
  const { articles } = useAppContext();
  const { catology, id } = useParams();
  const [article, setArticle] = useState(null);
  const [catologyName, setCatologyName] = useState("Mỹ");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const articleRef = ref(database, `articles_vi/${catology}/${id}`);
        const snapshot = await get(articleRef);

        if (snapshot.exists()) {
          const articleTemp = snapshot.val();
          setCatologyName(GetCatologyNameByKey(articleTemp.catology)); // Lấy tên catology
          setArticle(articleTemp); // Cập nhật bài viết
        } else {
          console.error("Article not found");
        }
      } catch (error) {
        console.error("Error fetching article:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id, catology]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!article) {
    return <div>Article not found</div>;
  }

  const renderDetail = () => {
    var render = [];
    article.detail.forEach((element) => {
      render.push(
        <Row key={`renderDetail${element.id}`} style={{ marginBlock: "1rem" }}>
          <Col>
            <h6>{element}</h6>
          </Col>
        </Row>
      );
    });
    return render;
  };

  const renderArticleList = () => {
    var render = [];
    const articleCatologys = filteredArticles(article.catology, articles);
    var i = 0;
    for (let index = 0; index < articleCatologys.length; index++) {
      const element = articleCatologys[index];
      if (element.id !== id && i < 5) {
        render.push(
          <ToanCard2 key={`rdtoan123${element.id}`} article={element} />
        );
        i++;
      }
    }
    return render;
  };

  return (
    <Container
      style={{
        marginTop: 65,
        borderTop: 2,
        borderTopStyle: "solid",
        borderTopColor: "#d1d1d1",
      }}
    >
      <Row>
        <Col
          xs={{ span: 12, order: 1 }}
          sm={{ span: 12, order: 1 }}
          md={{ span: 8, order: 1 }}
          lg={{ span: 8, order: 1 }}
          xl={{ span: 9, order: 1 }}
          xxl={{ span: 9, order: 1 }}
        >
          <Row>
            <Col style={{ marginBlock: "1.5rem" }}>
              <h8 className="catologyCard">{catologyName}</h8>
            </Col>
          </Row>
          <Row>
            <Col>
              <h1 style={{ fontWeight: 700 }}>{article.title}</h1>
            </Col>
          </Row>
          <Row style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <Col
              xs={{ span: 12, order: 2 }}
              sm={{ span: 12, order: 2 }}
              md={{ span: 6, order: 1 }}
              lg={{ span: 6, order: 1 }}
              xl={{ span: 6, order: 1 }}
              xxl={{ span: 6, order: 1 }}
              style={{
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
              }}
            >
              <ShareComponent title={article.title} size={25} />
            </Col>
            <Col
              xs={{ span: 12, order: 1 }}
              sm={{ span: 12, order: 1 }}
              md={{ span: 6, order: 2 }}
              lg={{ span: 6, order: 2 }}
              xl={{ span: 6, order: 2 }}
              xxl={{ span: 6, order: 2 }}
              className="col-createdate"
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaCalendar
                  size={25}
                  style={{ marginRight: 10 }}
                  color="#969696"
                />

                <h6 style={{ color: "#969696", margin: 0 }}>
                  {formatDate(article.create_time)}
                </h6>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              {article.img_src !== undefined && article.img_src !== "" && (
                <img
                  style={{ width: "100%" }}
                  src={article.img_src}
                  alt={article.img_caption}
                ></img>
              )}
              {article.video_src !== undefined && article.video_src !== "" && (
                <video
                  style={{ width: "100%" }}
                  src={article.video_src}
                  alt={article.img_caption}
                  controls
                ></video>
              )}
            </Col>
          </Row>
          <Row>
            <Col>
              <h9 style={{ color: "#969696" }}>{article.img_caption}</h9>
            </Col>
          </Row>
          {renderDetail()}

          <Row>
            <Col>
              <h9 style={{ color: "#969696" }}>{`Nguồn: ${getSource(
                article.url
              )}`}</h9>
            </Col>
          </Row>
          <Row
            style={{
              marginTop: "3rem",
              marginBottom: "3rem",
            }}
          >
            <Col>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderTop: 1,
                  borderTopStyle: "solid",
                  borderTopColor: "#969696",
                  borderBottom: 1,
                  borderBottomStyle: "solid",
                  borderBottomColor: "#969696",
                  paddingTop: "1rem",
                  paddingBottom: "1rem",
                }}
              >
                <h5 style={{ marginRight: 20 }}>Share:</h5>
                <ShareComponent title={article.title} size={35} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5
                style={{
                  color: "#0f6499",
                  borderBottom: 1,
                  borderBottomStyle: "solid",
                  borderBottomColor: "#0f6499",
                  paddingTop: 10,
                  paddingBottom: 10,
                  cursor: "pointer",
                }}
                onClick={() => navigate(`/${article.catology}`)}
              >
                {`Xem Thêm Bài Viết Về ${catologyName}`}{" "}
                <FaLongArrowAltRight></FaLongArrowAltRight>
              </h5>
            </Col>
            {renderArticleList()}
          </Row>
        </Col>
        <Col
          xs={{ span: 12, order: 2 }}
          sm={{ span: 12, order: 2 }}
          md={{ span: 4, order: 2 }}
          lg={{ span: 4, order: 2 }}
          xl={{ span: 3, order: 2 }}
          xxl={{ span: 3, order: 2 }}
          className="col-trending"
        >
          <TrendingNow articles={articles.filter((item) => item.id !== id)} />
        </Col>
      </Row>
    </Container>
  );
};

export default ArticleDetail;
