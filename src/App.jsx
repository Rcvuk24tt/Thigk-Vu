import "./App.css";

export default function App() {
  return (
    <div className="container">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">Coffee</div>
        <nav>
          <a href="#">Trang chủ</a>
          <a href="#">Giới thiệu</a>
          <a href="#" className="active">Thực đơn</a>
          <a href="#">Tin tức</a>
          <a href="#">Liên hệ</a>
          <a href="#">Đặt bàn</a>
        </nav>
      </header>

      {/* Banner */}
      <section className="banner">
        <img src="/images/banner.png" alt="banner" />
      </section>

      {/* Image Grid */}
      <section className="grid">
        <img src="/images/anh-cafe-1.png" className="big" alt="" />
        <img src="/images/anh-cafe-2.png" alt="" />
        <img src="/images/anh-cafe-3.png" alt="" />
      </section>

      {/* Menu */}
      <section className="menu">
        <h2>Menu</h2>

        <div className="menu-list">
          <div>
            <p><span>Cà phê sữa</span> <b>25k</b></p>
            <p><span>Cà phê muối</span> <b>25k</b></p>
            <p><span>Cà phê sữa đá</span> <b>25k</b></p>
            <p><span>Cà phê Sài Gòn</span> <b>25k</b></p>
          </div>

          <div>
            <p><span>Espresso</span> <b>35k</b></p>
            <p><span>Mocha</span> <b>35k</b></p>
            <p><span>Cappuccino</span> <b>35k</b></p>
            <p><span>Latte</span> <b>35k</b></p>
          </div>
        </div>

        <button className="btn">Xem thêm Menu</button>
      </section>

      {/* Blog */}
      <section className="blog">
        <div className="card">
          <img src="/images/ca-phe-che-bien.jpg" alt="" />
          <h3>Chế biến cà phê</h3>
          <p>Cà phê sạch là cà phê nguyên chất không pha trộn thêm bất kỳ loại bột, phụ gia nào.</p>
        </div>

        <div className="card">
          <img src="/images/cafe-hien-nay.jpg" alt="" />
          <h3>Cà phê phổ biến ở Vn</h3>
          <p> Điểm danh 20 loại cà phê phổ biến được ưa chuộng tại Việt Nam.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div>
          <h3>Rơ Châm Vụ Coffee</h3>
          <p>Kết nối với chúng tôi</p>
        </div>

        <div>
          <h4>Liên hệ</h4>
          <p>Địa chỉ: 234 Tôn Đức Thắng</p>
          <p> Sđt:0123 456 789</p>
        </div>

        <div>
          <h4>Chính sách</h4>
          <p>Trang chủ</p>
          <p>Giới thiệu</p>
          <p>Thực đơn</p>
        </div>
      </footer>
    </div>
  );
}