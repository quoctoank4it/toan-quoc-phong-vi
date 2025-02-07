export const GetCatologyNameByKey = (key) => {
  if (key === "my") {
    return "Mỹ";
  } else if (key === "nga") {
    return "Nga";
  } else if (key === "chauau") {
    return "Châu Âu";
  } else if (key === "trungdong") {
    return "Trung Đông";
  } else if (key === "trungquoc") {
    return "Trung Quốc";
  } else if (key === "chaua") {
    return "Châu Á";
  } else if (key === "chaumy") {
    return "Châu Mỹ";
  } else if (key === "chauphi") {
    return "Châu Phi";
  }

  return "Mỹ";
};

export const formatDate = (isoString) => {
  const days = [
    "Chủ Nhật",
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy",
  ];

  // Tạo đối tượng Date từ chuỗi ISO
  const date = new Date(isoString);

  // Lấy các thành phần cần thiết
  const dayOfWeek = days[date.getDay()]; // Lấy tên thứ
  const day = date.getDate().toString().padStart(2, "0"); // Lấy ngày (đảm bảo 2 chữ số)
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Lấy tháng (đảm bảo 2 chữ số)
  const year = date.getFullYear(); // Lấy năm

  // Kết hợp thành chuỗi
  return `${dayOfWeek}, ${day}-${month}-${year}`;
};

export const getRelativeTime = (isoString) => {
  const now = new Date(); // Lấy thời gian hiện tại
  const date = new Date(isoString); // Chuyển đổi chuỗi ISO thành đối tượng Date
  const diffInSeconds = Math.floor((now - date) / 1000); // Chênh lệch thời gian tính bằng giây

  const secondsInHour = 3600;
  const secondsInDay = 86400;
  const secondsInWeek = 604800;
  const secondsInMonth = 2592000; // Xấp xỉ 30 ngày
  const secondsInYear = 31536000; // Xấp xỉ 365 ngày

  if (diffInSeconds < secondsInHour * 24) {
    const hours = Math.floor(diffInSeconds / secondsInHour);
    return `${hours} giờ trước`;
  } else if (diffInSeconds < secondsInWeek) {
    const days = Math.floor(diffInSeconds / secondsInDay);
    return `${days} ngày trước`;
  } else if (diffInSeconds < secondsInMonth) {
    const weeks = Math.floor(diffInSeconds / secondsInWeek);
    return `${weeks} tuần trước`;
  } else if (diffInSeconds < secondsInYear) {
    const months = Math.floor(diffInSeconds / secondsInMonth);
    return `${months} tháng trước`;
  } else {
    return "Hơn 1 năm trước";
  }
};

// Lọc các bài viết có catology là "my"
export const filteredArticles = (catology, articles) => {
  return articles.filter((article) => article.catology === catology);
};

export const getSource = (url) => {
  const domain = url.split("/")[2].split(".")[1];
  const formattedDomain = domain.charAt(0).toUpperCase() + domain.slice(1);
  return formattedDomain;
};
