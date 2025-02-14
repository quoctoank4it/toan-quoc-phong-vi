import React, { useState } from "react";
import "./style.css";
import ContactPopup from "../ContactPopup/ContactPopup";
import { MdContactMail } from "react-icons/md";
import { IoMdHome } from "react-icons/io";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const openContact = () => {
    setMenuOpen(false);
    setPopupOpen(true);
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
        >
          <span
            style={{
              color: "#0f6499",
              fontWeight: 900,
            }}
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Tin
          </span>{" "}
          <span
            style={{
              fontWeight: 900,
            }}
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Quốc Phòng
          </span>
        </div>

        {/* Menu desktop */}
        <nav className="menu-desktop">
          <ul>
            <li>
              <a href="/#/ando" onClick={closeMenu}>
                Ấn Độ
              </a>
            </li>
            <li>
              <a href="/#/chaua" onClick={closeMenu}>
                Châu Á
              </a>
            </li>
            <li>
              <a href="/#/chauau" onClick={closeMenu}>
                Châu Âu
              </a>
            </li>
            <li>
              <a href="/#/chaumy" onClick={closeMenu}>
                Châu Mỹ
              </a>
            </li>
            <li>
              <a href="/#/chauphi" onClick={closeMenu}>
                Châu Phi
              </a>
            </li>
            <li>
              <a href="/#/my" onClick={closeMenu}>
                Hoa Kỳ
              </a>
            </li>
            <li>
              <a href="/#/nga" onClick={closeMenu}>
                Nga
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
              <a href="/#/uc" onClick={closeMenu}>
                Úc
              </a>
            </li>
            <MdContactMail
              size={25}
              onClick={openContact}
              style={{
                cursor: "pointer",
              }}
            />
          </ul>
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}

      {/* Menu trượt trên di động */}
      <nav className={`slide-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <div style={{ marginTop: 40 }}>
            <IoMdHome
              size={30}
              color={"#0f6499"}
              onClick={() => {
                window.location.href = "/";
              }}
            />
          </div>
          <li>
            <a href="/#/ando" onClick={closeMenu}>
              Ấn Độ
            </a>
          </li>
          <li>
            <a href="/#/chaua" onClick={closeMenu}>
              Châu Á
            </a>
          </li>
          <li>
            <a href="/#/chauau" onClick={closeMenu}>
              Châu Âu
            </a>
          </li>
          <li>
            <a href="/#/chaumy" onClick={closeMenu}>
              Châu Mỹ
            </a>
          </li>
          <li>
            <a href="/#/chauphi" onClick={closeMenu}>
              Châu Phi
            </a>
          </li>
          <li>
            <a href="/#/my" onClick={closeMenu}>
              Hoa Kỳ
            </a>
          </li>
          <li>
            <a href="/#/nga" onClick={closeMenu}>
              Nga
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
            <a href="/#/uc" onClick={closeMenu}>
              Úc
            </a>
          </li>
          <MdContactMail size={30} onClick={openContact} />
        </ul>
        {/* Nút đóng menu */}
        <button className="close-menu" onClick={toggleMenu}>
          &times;
        </button>
      </nav>
      <ContactPopup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} />
    </header>
  );
};

export default Header;
