import img1 from './assets/img/1.png'
import './LogIn.css'

function App() {
  return (
    <>
      <header className="navbar">
        <div className="navbar__inner">
          <div className="logo">
            we<span className="logo__accent">Borrow</span>
          </div>

          <nav className="navbar__links">
            <button className="btn-1">How It Works</button>
            <button className="btn-1">Browse Items</button>
            <button className="btn-1">List become lender</button>
            <button className="btn-1">about us</button>
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

      <main className="page">
        <section className="hero">
          <p className="hero__eyebrow">Rent. Borrow. Share.</p>
          <h1 className="hero__title">Borrow what you need, when you need it.</h1>
          <p className="hero__subtitle">
            Eliminate the need to buy expensive products, just rent it
          </p>

          <div className="stats">
            <div className="stat">
              <span className="stat__icon stat__icon--wallet">P</span>
              <div>
                <p className="stat__value">10,000+</p>
                <p className="stat__label">Items Available</p>
              </div>
            </div>

            <div className="stat">
              <span className="stat__icon stat__icon--users">◉</span>
              <div>
                <p className="stat__value">5,000+</p>
                <p className="stat__label">Active Users</p>
              </div>
            </div>

            <div className="stat">
              <span className="stat__icon stat__icon--rate">✓</span>
              <div>
                <p className="stat__value">98%</p>
                <p className="stat__label">Satisfaction Rate</p>
              </div>
            </div>
          </div>

          <div className="collage">
            <div className="collage__badge">
              <span className="collage__badge-icon">✓</span>
              <p>
                <strong>Verified members.</strong>
                <br />
                <span className="collage__badge-secure">Secure</span> payments.
                <br />
                Peace of mind.
              </p>
            </div>

            <div className="collage__scene">
              <img src={img1} alt="testIMG" />
            </div>
          </div>

          <div className="testimonial">
            <span className="testimonial__quote">&ldquo;</span>
            <p className="testimonial__text">
              I rented a camera for my vacation and saved hundreds. The process was
              smooth and the owner was great!
            </p>
            <div className="testimonial__author">
              <span className="testimonial__avatar">SM</span>
              <div>
                <p className="testimonial__name">Sarah M.</p>
                <p className="testimonial__stars">★★★★★</p>
              </div>
            </div>
          </div>

          <ul className="trust-row">
            <li>
              <span className="icon">🛡</span> Verified Community
            </li>
            <li>
              <span className="icon">🔒</span> Secure Payments
            </li>
            <li>
              <span className="icon">💬</span> 24/7 Support
            </li>
            <li>
              <span className="icon">🌱</span> Sustainable Sharing
            </li>
          </ul>
        </section>

        {/* RIGHT: LOGIN CARD */}
        <section className="login-panel">
          <div className="login-card">
            <h2 className="login-card__title">Welcome back!</h2>
            <p className="login-card__subtitle">
              Log in to continue to <span className="link link--inline">We Borrow</span>
            </p>

            <form className="login-form">
              <label htmlFor="email">Email Address</label>
              <div className="input-wrap">
                <input id="email" type="email" placeholder="Enter your email address" />
              </div>

              <label htmlFor="password">Password</label>
              <div className="input-wrap">
                <input id="password" type="password" placeholder="Enter your password" />
              </div>

              <div className="login-form__row">
                <label className="checkbox">
                  <input type="checkbox" />
                  Remember me
                </label>
                <div className="link forgot-link">Forgot Password?</div>
              </div>

              <button type="submit" className="btn-primary">
                Log In
              </button>

              <div className="divider">
                <span>or continue with</span>
              </div>

              <button type="button" className="btn-social">
                Continue with Google
              </button>

              <button type="button" className="btn-social">
                Continue with Facebook
              </button>

              <p className="signup-link">
                Don't have an account? <button type="button" className="btn-1">Sign up here</button>
              </p>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
