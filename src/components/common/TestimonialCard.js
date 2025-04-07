import React from 'react';
import '../../styles/TestimonialCard.css';

function TestimonialCard({ name, role, text, rating, image }) {
  return (
    <div className="testimonial-card">
      <div className="rating">{'★'.repeat(rating)}</div>
      <p>{text}</p>
      <div className="author">
        <img src={image} alt={name} className="author-img" />
        <div>
          <h4>{name}</h4>
          <p>{role}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;