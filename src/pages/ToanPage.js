import React, { useEffect, useState } from "react";
import { database, set, ref, get } from "../firebase";

const ToanPage = () => {
  const [url, setUrl] = useState("");
  const [catology, setCatology] = useState("");
  const [jsonData, setJsonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState("");

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

  const saveIdToFirebase = () => {
    if (!id) {
      alert("Vui lòng nhập đủ thông tin!");
      return;
    }

    set(ref(database, "delete"), {
      id,
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

  // Xóa tất cả nội dung JSON
  const handleClear = () => {
    setJsonData(""); // Xóa nội dung trong textarea
  };

  // Sao chép JSON vào clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(jsonData);
    alert("Đã sao chép JSON!");
  };

  const handleChange = (event) => {
    setCatology(event.target.value);
  };

  return (
    <div style={{ marginTop: "4rem" }}>
      <div>
        <input
          type="text"
          placeholder="Nhập URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <select id="country" value={catology} onChange={handleChange}>
          <option value="">--Chọn--</option>
          <option value="ando">Ấn Độ</option>
          <option value="chaua">Châu Á</option>
          <option value="chauau">Châu Âu</option>
          <option value="chaumy">Châu Mỹ</option>
          <option value="chauphi">Châu Phi</option>
          <option value="my">My</option>
          <option value="nga">Nga</option>
          <option value="trungquoc">Trung Quốc</option>
          <option value="trungdong">Trung Đông</option>
          <option value="uc">Úc</option>
        </select>
        <button onClick={saveToFirebase}>Lưu</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button onClick={saveIdToFirebase}>Xóa</button>
      </div>

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
            <button style={styles.clearButton} onClick={handleClear}>
              ❌ Xóa
            </button>
            <button style={styles.copyButton} onClick={handleCopy}>
              📋 Sao chép
            </button>
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
