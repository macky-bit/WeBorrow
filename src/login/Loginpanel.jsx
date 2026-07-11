import LoginForm from "./Loginform";

function LoginPanel() {
  return (
    <section className="login-panel">
      <div className="login-card">
        <h2 className="login-card__title">Welcome back!</h2>
        <p className="login-card__subtitle">
          Log in to continue to{" "}
          <span className="link link--inline">We Borrow</span>
        </p>

        <LoginForm />
      </div>
    </section>
  );
}

export default LoginPanel;
