import React, { useState } from "react";
import "./UserReviews.css";

const UserReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    comment: "",
    topic: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, { ...newReview, id: Date.now() }]);
    setNewReview({ name: "", rating: 5, comment: "", topic: "" });
  };

  return (
    <div className="reviews-container">
      <h2>User Reviews</h2>
      
      {/* Feedback Form */}
      <div className="feedback-form">
        <h3>Submit Your Feedback</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Your Name"
              value={newReview.name}
              onChange={(e) => setNewReview({...newReview, name: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <select
              value={newReview.rating}
              onChange={(e) => setNewReview({...newReview, rating: Number(e.target.value)})}
              required
            >
              <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
              <option value="4">⭐⭐⭐⭐ Very Good</option>
              <option value="3">⭐⭐⭐ Good</option>
              <option value="2">⭐⭐ Fair</option>
              <option value="1">⭐ Poor</option>
            </select>
          </div>

          <div className="form-group">
            <textarea
              placeholder="Your Review"
              value={newReview.comment}
              onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
              required
            />
          </div>

          <button type="submit">Submit Review</button>
        </form>
      </div>

      {/* Reviews Display */}
      <div className="reviews-list">
        <h3>Recent Reviews</h3>
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-header">
              <h4>{review.name}</h4>
              <div className="stars">
                {"⭐".repeat(review.rating)}
              </div>
            </div>
            <p className="comment">{review.comment}</p>
          </div>
        ))}
        {reviews.length === 0 && (
          <p className="no-reviews">No reviews yet. Be the first to review!</p>
        )}
      </div>
    </div>
  );
};

export default UserReviews;
