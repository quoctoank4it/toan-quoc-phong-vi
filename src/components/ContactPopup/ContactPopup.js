import React, { useState } from "react";
import "./style.css";
import { database, push, ref } from "../../firebase";

const ContactPopup = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [detail, setDetail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lưu dữ liệu vào Firebase Realtime Database
    const contactRef = ref(database, "contacts");
    const contact = {
      title,
      name,
      email,
      detail,
    };

    push(contactRef, contact) // Sử dụng push để thêm dữ liệu
      .then(() => {
        alert("Thông tin đã được gửi thành công!");
        onClose(); // Đóng popup sau khi gửi
        setTitle("");
        setName("");
        setEmail("");
        setDetail("");
      })
      .catch((error) => {
        alert("Đã xảy ra lỗi: " + error.message);
      });
  };

  if (!isOpen) return null;

  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Liên hệ</h2>
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
