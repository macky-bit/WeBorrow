import "../css/LogIn.css";
import Navbar from "./Navbar";
import HeroSection from "./Cardsection";
import LoginPanel from "./Loginpanel";

function LogIn() {
  return (
    <>
      <Navbar />

      <main className="page">
        <HeroSection />
        <LoginPanel />
      </main>
    </>
  );
}

export default LogIn;
