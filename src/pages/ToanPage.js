import React, { useEffect, useState } from "react";
import { database, set, ref, get } from "../firebase";

const ToanPage = () => {
  const [url, setUrl] = useState("");
  const [catology, setCatology] = useState("");
  const [jsonData, setJsonData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Đọc dữ liệu từ Firebase
    const fetchData = async () => {
      try {
        const snapshot = await get(ref(database, "toan")); // Lấy từ "toan"
        if (snapshot.exists()) {
          setJsonData(JSON.stringify(snapshot.val(), null, 2)); // Convert JSON -> String đẹp
        } else {
          console.log("No data available");
          setJsonData("{}"); // Nếu không có dữ liệu thì hiển thị JSON rỗng
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const saveToFirebase = () => {
    if (!url || !catology) {
      alert("Vui lòng nhập đủ thông tin!");
      return;
    }

    set(ref(database, "news"), {
      catology,
      url,
    })
      .then(() => alert("Lưu thành công!"))
      .catch((error) => alert("Lỗi: " + error.message));
  };

  const insertData = () => {
    const flag = "1";
    set(ref(database, "insert_flag"), {
      flag,
    })
      .then(() => alert("Lưu thành công!"))
      .catch((error) => alert("Lỗi: " + error.message));
  };

  // Hàm lưu JSON vào Firebase
  const saveToanVI = async (datakey) => {
    try {
      const parsedData = JSON.parse(jsonData); // Chuyển string -> object
      await set(ref(database, datakey), parsedData); // Lưu vào Firebase key "toan_vi"
      alert("Đã lưu dữ liệu vào Firebase!");
    } catch (error) {
      alert("Lỗi khi lưu JSON: " + error.message);
    }
  };

  return (
    <div style={{ marginTop: "4rem" }}>
      <input
        type="text"
        placeholder="Nhập URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nhập catology"
        value={catology}
        onChange={(e) => setCatology(e.target.value)}
      />
      <button onClick={saveToFirebase}>Lưu</button>

      <div style={styles.jsoncontainer}>
        <h2>Firebase JSON Data</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <textarea
              style={styles.textarea}
              value={jsonData}
              onChange={(e) => setJsonData(e.target.value)}
            />
            <button style={styles.button} onClick={() => saveToanVI("toan_vi")}>
              Toan VI
            </button>
            <button style={styles.button} onClick={() => saveToanVI("toan_en")}>
              Toan EN
            </button>
            <button style={styles.button} onClick={insertData}>
              Insert Data
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ToanPage;

// CSS Styles
const styles = {
  jsoncontainer: {
    maxWidth: "800px",
    margin: "20px auto",
    padding: "20px",
    fontFamily: "monospace",
    backgroundColor: "#282c34",
    color: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  textarea: {
    width: "100%",
    height: "300px",
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #444",
    fontFamily: "monospace",
    fontSize: "14px",
  },
  button: {
    marginTop: "10px",
    padding: "10px 15px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    marginLeft: "20px",
  },
};
