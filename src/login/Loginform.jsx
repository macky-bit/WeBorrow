import googleLogo from "../assets/login-icons/google-logo.png";
import facebookLogo from "../assets/login-icons/fb-logo.png";

function LoginForm() {
  return (
    <form className="login-form">
      <label htmlFor="email">Email Address</label>
      <div className="input-wrap">
        <input id="email" type="email" placeholder="Enter your email address" />
      </div>

      <label htmlFor="password">Password</label>
      <div className="input-wrap">
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
        />
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
        <img src={googleLogo} alt="Google" className="socialicon" />
        Continue with Google
      </button>

      <button type="button" className="btn-social">
        <img src={facebookLogo} alt="Facebook" className="socialicon" />
        Continue with Facebook
      </button>

      <p className="signup-link">
        Don't have an account?{" "}
        <button type="button" className="btn-1">
          Sign up here
        </button>
      </p>
    </form>
  );
}

export default LoginForm;
