import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/common/Footer';
import { FaUserCircle } from 'react-icons/fa'; // Icons
import '../styles/Checkout.css';

function Checkout() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    university: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    couponCode: '',
  });

  const [discountApplied, setDiscountApplied] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleApplyCoupon = () => {
    if (formData.couponCode) {
      setDiscountApplied(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Checkout form submitted:', formData);
    // Add payment processing logic here (e.g., API call to payment gateway)
  };

  return (
    <div className="checkout-page">
      <nav className="navbar">
      <div className="logo">EduMentor</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
      <div className="user-profile">
            <FaUserCircle />
            <div className="user-info">
              <p>S. Wijerathna</p>
              <p>Software Engineer Student</p>
            </div>
        </div>
    </nav>

      {/* Main Section */}
      <section className="checkout-main">
        <div className="checkout-header">
          <h1>Checkout</h1>
          {/* <div className="user-profile">
            <FaUserCircle />
            <div className="user-info">
              <p>S. Wijerathna</p>
              <p>Software Engineer Student</p>
            </div>
          </div> */}
        </div>

        <div className="checkout-content">
          {/* Checkout Form */}
          <div className="checkout-form">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="university">University</label>
                <select
                  name="university"
                  value={formData.university}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select your university</option>
                  <option value="University of Colombo">University of Colombo</option>
                  <option value="University of Moratuwa">University of Moratuwa</option>
                  <option value="University of Peradeniya">University of Peradeniya</option>
                </select>
              </div>
              <div className="payment-method">
                <h3>Payment Method</h3>
                <div className="payment-options">
                  <img src="https://via.placeholder.com/50x30?text=Visa" alt="Visa" />
                  <img src="https://via.placeholder.com/50x30?text=PayPal" alt="PayPal" />
                  <img src="https://via.placeholder.com/50x30?text=Bank" alt="Bank" />
                </div>
              </div>
              <div className="input-group">
                <label htmlFor="cardNumber">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="card-details">
                <div className="input-group">
                  <label htmlFor="expiryDate">Expiry Date</label>
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="cvv">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={formData.cvv}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <button type="submit" className="complete-btn">Complete Purchase</button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="order-summary">
            <h2>Order Summary</h2>
            <div className="course-info">
              <img src="https://via.placeholder.com/100" alt="Course" />
              <div>
                <h3>Advanced Web Development</h3>
                <p>University of Colombo</p>
                <p>LKR 30,000</p>
              </div>
            </div>
            <div className="coupon-section">
              <input
                type="text"
                name="couponCode"
                placeholder="Affiliate or Coupon Code"
                value={formData.couponCode}
                onChange={handleChange}
              />
              <button onClick={handleApplyCoupon}>Apply</button>
            </div>
            <div className="price-breakdown">
              <p>Course Price <span>LKR 30,000</span></p>
              {discountApplied && (
                <p>Affiliate Discount <span>-LKR 3,000</span></p>
              )}
              <p className="total">Total <span>LKR {discountApplied ? '27,000' : '30,000'}</span></p>
            </div>
            <div className="referral-info">
              <p>Share your link! Your friends get 10% off their first purchase, and you get 10% off your next one.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Checkout;