import React, { useState } from "react";
import "./style.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-content">
        {/* Nút menu di động */}
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        {/* Logo */}
        <div
          className="logo"
          style={{
            cursor: "pointer",
            textDecoration: "none", // Xóa gạch chân mặc định của thẻ <a>
            color: "inherit", // Giữ màu chữ không thay đổi
          }}
          onClick={() => {
            window.location.href = "/";
          }}
        >
          <span
            style={{
              color: "#0f6499",
              fontWeight: 900,
            }}
          >
            Tin
          </span>{" "}
          <span
            style={{
              fontWeight: 900,
            }}
          >
            Quốc Phòng
          </span>
        </div>

        {/* Menu desktop */}
        <nav className="menu-desktop">
          <ul>
            <li>
              <a href="/#/my" onClick={closeMenu}>
                Mỹ
              </a>
            </li>
            <li>
              <a href="/#/nga" onClick={closeMenu}>
                Nga
              </a>
            </li>
            <li>
              <a href="/#/chauau" onClick={closeMenu}>
                Châu Âu
              </a>
            </li>
            <li>
              <a href="/#/trungdong" onClick={closeMenu}>
                Trung Đông
              </a>
            </li>
            <li>
              <a href="/#/trungquoc" onClick={closeMenu}>
                Trung Quốc
              </a>
            </li>
            <li>
              <a href="/#/chaua" onClick={closeMenu}>
                Châu Á
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}

      {/* Menu trượt trên di động */}
      <nav className={`slide-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="/#/my" onClick={closeMenu}>
              <h4>Mỹ</h4>
            </a>
          </li>
          <li>
            <a href="/#/nga" onClick={closeMenu}>
              <h4>Nga</h4>
            </a>
          </li>
          <li>
            <a href="/#/chauau" onClick={closeMenu}>
              <h4>Châu Âu</h4>
            </a>
          </li>
          <li>
            <a href="/#/trungdong" onClick={closeMenu}>
              <h4>Trung Đông</h4>
            </a>
          </li>
          <li>
            <a href="/#/trungquoc" onClick={closeMenu}>
              <h4>Trung Quốc</h4>
            </a>
          </li>
          <li>
            <a href="/#/chaua" onClick={closeMenu}>
              <h4>Châu Á</h4>
            </a>
          </li>
        </ul>
        <div
          style={{
            bottom: 0,
            position: "fixed",
            marginLeft: 10,
            marginBottom: 10,
          }}
        >
          <h4>geopoliticalnews.net@gmail.com</h4>
        </div>
        {/* Nút đóng menu */}
        <button className="close-menu" onClick={toggleMenu}>
          &times;
        </button>
      </nav>
    </header>
  );
};

export default Header;
