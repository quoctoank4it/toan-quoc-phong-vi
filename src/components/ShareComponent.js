import { useState } from "react";
import { FaFacebook, FaLinkedinIn, FaRedditAlien } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ImLink } from "react-icons/im";
import { MdMail } from "react-icons/md";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
} from "react-share";

const ShareComponent = ({ title, size }) => {
  const [copied, setCopied] = useState(false);

  const currentUrl = window.location.href;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);

    // Tự động ẩn thông báo sau 2 giây
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginRight: 20 }}>
        <div className="button">
          <FacebookShareButton
            url={currentUrl}
            quote={title}
            hashtag="#quocphong"
          >
            <FaFacebook size={size} color="blue" />
          </FacebookShareButton>
        </div>
      </div>

      <div style={{ marginRight: 20 }}>
        <div className="button">
          <TwitterShareButton
            url={currentUrl}
            title={title}
            hashtag="#quocphong"
          >
            <FaXTwitter size={size} color="Black" />
          </TwitterShareButton>
        </div>
      </div>

      <div style={{ marginRight: 20 }}>
        <div className="button">
          <RedditShareButton url={currentUrl} title={title}>
            <FaRedditAlien size={size} color="#ff4500" />
          </RedditShareButton>
        </div>
      </div>

      <div style={{ marginRight: 20 }}>
        <div className="button">
          <LinkedinShareButton url={currentUrl} title={title}>
            <FaLinkedinIn size={size} color="#0a66c2" />
          </LinkedinShareButton>
        </div>
      </div>

      <div style={{ marginRight: 20 }}>
        <div className="button" onClick={copyToClipboard}>
          <ImLink size={size - 5} color="#0f6499" />
        </div>
      </div>

      <div style={{ marginRight: 20 }}>
        <div className="button">
          <EmailShareButton
            url={currentUrl}
            title={title}
            body={`Check this out: ${currentUrl}`}
          >
            <MdMail size={size + 5} color="#0f6499" />
          </EmailShareButton>
        </div>
      </div>

      {/* Hiển thị thông báo nhỏ khi sao chép thành công */}
      {copied && (
        <span
          style={{
            position: "absolute",
            top: "100px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "black",
            color: "white",
            fontSize: "12px",
            padding: "5px 8px",
            borderRadius: "5px",
            whiteSpace: "nowrap",
            opacity: copied ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          Link copied to clipboard! ✅
        </span>
      )}
    </div>
  );
};

export default ShareComponent;
