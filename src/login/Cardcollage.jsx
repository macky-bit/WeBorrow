import img1 from "../assets/img/1.png";

function CardCollage() {
  return (
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
  );
}

export default CardCollage;
