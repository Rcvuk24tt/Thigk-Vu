import "./App.css"
import anh1 from "./assets/anh-cafe-1.png"
import anh2 from "./assets/anh-cafe-2.png"
import anh3 from "./assets/anh-cafe-3.png"
import banner from "./assets/banner.png"
import cafe1 from "./assets/cafe-phe-che-bien.jpg"
import cafe2 from "./assets/cafe-phe-chuan-vn.jpg"

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
        <img src={banner} alt="coffee banner" />
      </section>

      {/* Image Grid */}
      <section className="grid">
        <img src={anh1} alt="Coffee 1" />
        <img src={anh2} alt="Coffee 2" />
        <img src={anh3} alt="Coffee 3" />
        <img src={cafe1} alt="Cafe 1" />
        <img src={cafe2} alt="Cafe 2" />
      </section>

      {/* Menu */}
      <section className="menu">
        <h2>Menu</h2>
        <div className="menu-list">
          <div>
            <p>Cà phê đen <span>25k</span></p>
            <p>Cà phê sữa <span>25k</span></p>
            <p>Bạc xỉu <span>25k</span></p>
            <p>Espresso <span>35k</span></p>
          </div>
          <div>
            <p>Cappuccino <span>35k</span></p>
            <p>Latte <span>35k</span></p>
            <p>Mocha <span>35k</span></p>
            <p>Cold Brew <span>40k</span></p>
          </div>
        </div>
        <button className="btn">Xem thêm Menu</button>
      </section>

      {/* Blog */}
      <section className="blog">
        <div className="card">
          <img src={cafe1} alt="Cafe 1" />
          <h3>Chế biến cà phê</h3>
          <p>Cà phê sạch và nguyên chất không pha trộn...</p>
        </div>
        <div className="card">
          <img src={cafe2} alt="Cafe 2" />
          <h3>Cà phê chuẩn VN</h3>
          <p>Hương vị đậm đà chuẩn gu người Việt...</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div>
          <h2>Họ và tên Coffee</h2>
          <p>Kết nối với chúng tôi</p>
        </div>
        <div>
          <h4>Liên hệ</h4>
          <p>123 Đường ABC</p>
          <p>0123 456 789</p>
        </div>
        <div>
          <h4>Chính sách</h4>
          <p>Trang chủ</p>
          <p>Giới thiệu</p>
          <p>Thực đơn</p>
          <p>Tin tức</p>
          <p>Liên hệ</p>
          <p>Đặt bàn</p>
        </div>
      </footer>
    </div>
  );
}