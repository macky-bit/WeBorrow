export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <div className="logo">
          we<span className="logo__accent">Borrow</span>
        </div>

        <nav className="navbar__links">
          <button className="btn-1">How It Works</button>
          <button className="btn-1">Browse Items</button>
          <button className="btng-1">Become Lender</button>
          <button className="btn-1">About us</button>
        </nav>

        <div className="navbar__meta">
          <span className="navbar__safe">
            <span className="icon icon--shield">✓</span>
            Safe &amp; Secure
          </span>
          <button className="btn-1">Help</button>
        </div>
      </div>
    </header>
  );
}
