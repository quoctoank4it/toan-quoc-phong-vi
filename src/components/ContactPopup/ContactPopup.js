import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { database, push, ref } from "../../firebase";

const ContactPopup = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [clickCount, setClickCount] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [detail, setDetail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lưu dữ liệu vào Firebase Realtime Database
    const contactRef = ref(database, "contacts");
    const contact = {
      name,
      email,
      detail,
    };

    push(contactRef, contact) // Sử dụng push để thêm dữ liệu
      .then(() => {
        alert("Thông tin đã được gửi thành công!");
        onClose(); // Đóng popup sau khi gửi
        setName("");
        setEmail("");
        setDetail("");
      })
      .catch((error) => {
        alert("Đã xảy ra lỗi: " + error.message);
      });
  };

  if (!isOpen) return null;

  const handleClick = () => {
    setClickCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount === 10) {
        onClose();
        navigate("/ToanPage");
      }
      return newCount;
    });
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2 onClick={handleClick}>Liên Hệ Chúng Tôi</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ display: "table-caption" }}>
            <input
              style={{ marginBottom: "1rem" }}
              type="text"
              placeholder="Tên"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              style={{ marginBottom: "1rem" }}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              style={{ marginBottom: "1rem", width: "20rem", height: "10rem" }}
              placeholder="Nội dung"
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
              required
            />
            <button type="submit" style={{ width: "5rem" }}>
              Gửi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPopup;
