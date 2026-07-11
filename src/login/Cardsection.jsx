import CardStats from "./Cardstats";
import CardCollage from "./Cardcollage";
import Testimonial from "./Testimonial";
import TrustRow from "./Trustrow";

function HeroSection() {
  return (
    <section className="hero">
      <p className="hero__eyebrow">Rent. Borrow. Share.</p>
      <h1 className="hero__title">Borrow what you need, when you need it.</h1>
      <p className="hero__subtitle">
        Eliminate the need to buy expensive products, just rent it
      </p>

      <CardStats />
      <CardCollage />
      <Testimonial />
      <TrustRow />
    </section>
  );
}

export default HeroSection;