function Testimonial() {
  return (
    <div className="testimonial">
      <span className="testimonial__quote" aria-hidden="true">
        &ldquo;
      </span>
      <blockquote className="testimonial__text">
        I rented a camera for my vacation and saved hundreds. The process was
        smooth and the owner was great!
      </blockquote>
      <div className="testimonial__author">
        <span className="testimonial__avatar" aria-hidden="true">
          SM
        </span>
        <div>
          <p className="testimonial__name">Sarah M.</p>
          <p className="testimonial__stars" aria-label="5 out of 5 stars">
            ★★★★★
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
