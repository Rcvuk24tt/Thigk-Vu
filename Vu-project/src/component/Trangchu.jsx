import "./trangchu.css";

// Import đúng tên file trong thư mục assets của bạn
import banner from "../assets/banner.png";
import cafe1 from "../assets/anh-cafe-1.png";
import cafe2 from "../assets/anh-cafe-2.png";
import cafe3 from "../assets/anh-cafe-3.png";
import caPheCheBien from "../assets/ca-phe-che-bien.jpg"; 
import cafeHienNay from "../assets/cafe-hien-nay.jpg";

function TrangChu() {
  return (
    <div className="home-wrapper">
      {/* BANNER */}
      <section className="banner">
        <img src={banner} alt="Banner Coffee" />
      </section>

      {/* GALLERY */}
      <section className="container">
        <div className="gallery">
          <div className="gallery-left">
            <img src={cafe1} alt="Cafe 1" />
          </div>
          <div className="gallery-right">
            <img src={cafe2} alt="Cafe Máy" />
            <img src={cafe3} alt="Cafe Bánh" />
          </div>
        </div>
      </section>

      {/* MENU */}
      <section className="menu-section">
        <div className="container">
          <h2 className="menu-title">Menu</h2>
          <div className="menu-grid">
            <div className="menu-item"><span className="m-name">Cà phê sữa</span><span className="m-dots"></span><span className="m-price">25k</span></div>
            <div className="menu-item"><span className="m-name">Cà phê Expresso</span><span className="m-dots"></span><span className="m-price">35k</span></div>
            <div className="menu-item"><span className="m-name">Cà phê muối</span><span className="m-dots"></span><span className="m-price">25k</span></div>
            <div className="menu-item"><span className="m-name">Cà phê Mocha</span><span className="m-dots"></span><span className="m-price">35k</span></div>
            <div className="menu-item"><span className="m-name">Cà phê sữa dừa</span><span className="m-dots"></span><span className="m-price">25k</span></div>
            <div className="menu-item"><span className="m-name">Cà phê Capuchino</span><span className="m-dots"></span><span className="m-price">35k</span></div>
            <div className="menu-item"><span className="m-name">Cà phê sữa Sài Gòn</span><span className="m-dots"></span><span className="m-price">25k</span></div>
            <div className="menu-item"><span className="m-name">Cà phê Latte</span><span className="m-dots"></span><span className="m-price">35k</span></div>
            <div className="menu-item"><span className="m-name">Cà phê đen</span><span className="m-dots"></span><span className="m-price">20k</span></div>
            <div className="menu-item"><span className="m-name">Cà phê IceCream Latte</span><span className="m-dots"></span><span className="m-price">40k</span></div>
          </div>
          <button className="btn-menu">Xem thêm Menu</button>
        </div>
      </section>

      {/* BLOG / NEWS */}
<section className="container">
        <div className="blog">
          {/* Sử dụng đúng ảnh chế biến */}
          <div className="card">
            <img src={caPheCheBien} alt="Chế biến cà phê" />
            <h3>Chế biến cà phê</h3>
            <p>Cà phê sạch là cà phê nguyên chất không pha trộn thêm bất kỳ loại bột, phụ gia nào.</p>
          </div>

          {/* Sử dụng đúng ảnh cà phê hiện nay */}
          <div className="card">
            <img src={cafeHienNay} alt="Cà phê phổ biến" />
            <h3>Cà phê phổ biến được ưa chuộng ở VN</h3>
            <p>Điểm danh 20 loại cà phê phổ biến được ưa chuộng tại Việt Nam.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TrangChu;
