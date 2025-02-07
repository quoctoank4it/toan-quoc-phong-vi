import React, { useEffect, useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Catology from "./pages/Catology";
import { database, get, ref } from "./firebase";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ArticleDetail from "./pages/ArticleDetail";
import { limitToLast, orderByChild, query } from "firebase/database";
import { useAppContext } from "./AppContext";
import Loading from "./images/loading.gif";
import AdminPage from "./pages/AdminPage";

const App = () => {
  const { articles, setArticles } = useAppContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const topArticles = [];

        const categories = [
          "my",
          "nga",
          "chauau",
          "trungdong",
          "trungquoc",
          "chaua",
          "chaumy",
          "chauphi",
        ];

        // Truy vấn từng danh mục
        for (const category of categories) {
          const categoryRef = ref(database, `articles_vi/${category}`);
          const snapshot = await get(
            query(categoryRef, orderByChild("create_time"), limitToLast(20))
          );

          if (snapshot.exists()) {
            const data = snapshot.val();

            const articles = Object.entries(data).map(([id, article]) => ({
              id,
              ...article,
            }));
            topArticles.push(...articles);
          }
        }

        topArticles.sort(
          (a, b) => new Date(b.create_time) - new Date(a.create_time)
        );

        setArticles(topArticles); // Lưu vào state (nếu cần)
      } catch (error) {
        console.error("Error fetching optimized articles:", error);
      } finally {
        setLoading(false); // Dừng trạng thái loading (nếu cần)
      }
    };

    fetchArticles();
  }, [setArticles]);

  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={Loading}></img>
      </div>
    );
  }

  return (
    <Router>
      <Header />
      <div>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AdminPage" element={<AdminPage />} />
          <Route
            path="/my"
            element={
              <Catology
                catology="my"
                catologyName="Hoa Kỳ"
                caption="Tin Quốc phòng cung cấp tin tức địa chính trị và phân tích hàng đầu về các chương trình và công nghệ quốc phòng liên quan tới Hoa Kỳ, nhằm giúp người đọc nắm bắt thông tin."
              />
            }
          />
          <Route
            path="/nga"
            element={
              <Catology
                catology="nga"
                catologyName="Nga"
                caption="Tin Quốc phòng cung cấp tin tức địa chính trị và phân tích hàng đầu về các chương trình và công nghệ quốc phòng liên quan tới nước Nga, nhằm giúp người đọc nắm bắt thông tin."
              />
            }
          />
          <Route
            path="/chauau"
            element={
              <Catology
                catology="chauau"
                catologyName="Châu Âu"
                caption="Tin Quốc phòng cung cấp tin tức địa chính trị và phân tích hàng đầu về các chương trình và công nghệ quốc phòng liên quan tới các nước Châu Âu, nhằm giúp người đọc nắm bắt thông tin."
              />
            }
          />
          <Route
            path="/trungdong"
            element={
              <Catology
                catology="trungdong"
                catologyName="Trung Đông"
                caption="Tin Quốc phòng cung cấp tin tức địa chính trị và phân tích hàng đầu về các chương trình và công nghệ quốc phòng liên quan tới các nước Trung Đông, nhằm giúp người đọc nắm bắt thông tin."
              />
            }
          />
          <Route
            path="/trungquoc"
            element={
              <Catology
                catology="trungquoc"
                catologyName="Trung Quốc"
                caption="Tin Quốc phòng cung cấp tin tức địa chính trị và phân tích hàng đầu về các chương trình và công nghệ quốc phòng liên quan tới nước Trung Quốc, nhằm giúp người đọc nắm bắt thông tin."
              />
            }
          />
          <Route
            path="/chaua"
            element={
              <Catology
                catology="chaua"
                catologyName="Châu Á"
                caption="Tin Quốc phòng cung cấp tin tức địa chính trị và phân tích hàng đầu về các chương trình và công nghệ quốc phòng liên quan tới các nước Châu Á, nhằm giúp người đọc nắm bắt thông tin."
              />
            }
          />
          <Route
            path="/chaumy"
            element={
              <Catology
                catology="chaumy"
                catologyName="Châu Mỹ"
                caption="Tin Quốc phòng cung cấp tin tức địa chính trị và phân tích hàng đầu về các chương trình và công nghệ quốc phòng liên quan tới các nước Châu Mỹ, nhằm giúp người đọc nắm bắt thông tin."
              />
            }
          />
          <Route
            path="/chauphi"
            element={
              <Catology
                catology="chauphi"
                catologyName="Châu Phi"
                caption="Tin Quốc phòng cung cấp tin tức địa chính trị và phân tích hàng đầu về các chương trình và công nghệ quốc phòng liên quan tới các nước Châu Phi, nhằm giúp người đọc nắm bắt thông tin."
              />
            }
          />

          <Route
            path="/:catology/:id"
            element={
              <ArticleDetail
                article={articles.find(
                  (a) => a.id === window.location.hash.split("/").pop()
                )}
              />
            }
          />
        </Routes>
      </div>
      <div
        style={{
          display: "grid",
          height: "4rem",
          justifyContent: "center",
          alignContent: "center",
          marginTop: "2rem",
          marginBottom: "0.2rem",
          borderTop: 1,
          borderTopStyle: "solid",
          borderTopColor: "black",
          borderBottom: 1,
          borderBottomStyle: "solid",
          borderBottomColor: "black",
        }}
      >
        <h5
          style={{
            color: "Black",
          }}
        >
          Tin Quốc Phòng © 2025
        </h5>
      </div>
    </Router>
  );
};

export default App;
