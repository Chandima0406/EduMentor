import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Button from "../components/common/Button";
import "../styles/Courses.css";

function Courses() {
  const courses = [
    {
      title: "Full Stack Web Development",
      rating: 5.5,
      reviews: 245,
      price: "LKR30,000",
      image: "path/to/course1.jpg",
    },
    {
      title: "Full Stack Web Development",
      rating: 5.5,
      reviews: 245,
      price: "LKR90,000",
      image: "path/to/course2.jpg",
    },
    {
      title: "Full Stack Web Development",
      rating: 5.5,
      reviews: 245,
      price: "LKR90,000",
      image: "path/to/course3.jpg",
    },
    {
      title: "Full Stack Web Development",
      rating: 5.5,
      reviews: 245,
      price: "LKR30,000",
      image: "path/to/course4.jpg",
    },
    {
      title: "Full Stack Web Development",
      rating: 5.5,
      reviews: 245,
      price: "LKR30,000",
      image: "path/to/course5.jpg",
    },
    {
      title: "Full Stack Web Development",
      rating: 5.5,
      reviews: 245,
      price: "LKR30,000",
      image: "path/to/course6.jpg",
    },
    {
      title: "Learn HTML, CSS, JavaScript, React & Node.js",
      rating: 5.5,
      reviews: 245,
      price: "LKR30,000",
      image: "path/to/course7.jpg",
    },
    {
      title: "Learn HTML, CSS, JavaScript, React & Node.js",
      rating: 5.5,
      reviews: 245,
      price: "LKR30,000",
      image: "path/to/course8.jpg",
    },
    {
      title: "Learn HTML, CSS, JavaScript, React & Node.js",
      rating: 5.5,
      reviews: 245,
      price: "LKR30,000",
      image: "path/to/course9.jpg",
    },
  ];

  const featuredCourses = [
    {
      title: "Full Stack Web Development",
      rating: 5.5,
      reviews: 245,
      price: "LKR30,000",
      image: "path/to/featured1.jpg",
    },
    {
      title: "Full Stack Web Development",
      rating: 5.5,
      reviews: 245,
      price: "LKR30,000",
      image: "path/to/featured2.jpg",
    },
    {
      title: "Full Stack Web Development",
      rating: 5.5,
      reviews: 245,
      price: "LKR30,000",
      image: "path/to/featured3.jpg",
    },
  ];

  return (
    <div className="courses-page">
      <Navbar />
      {/* Hero Section */}
      <section className="courses-hero">
        <h1>Explore Our Courses</h1>
        <p>
          Find the best courses designed by top universities and mentors.
          Enhance your skills, earn certificates, and advance your career.
        </p>
      </section>

      {/* Search and Filters */}
      <section className="search-filters">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search By Name, Category, University"
          />
          <button>Search</button>
        </div>
        <div className="filters">
          <div className="filter-group">
            <h4>Course Categories</h4>
            <label>
              <input type="checkbox" /> Web Development
            </label>
            <label>
              <input type="checkbox" /> Business
            </label>
            <label>
              <input type="checkbox" /> Design
            </label>
          </div>
          <div className="filter-group">
            <h4>Course Level</h4>
            <label>
              <input type="checkbox" /> Beginner
            </label>
            <label>
              <input type="checkbox" /> Intermediate
            </label>
            <label>
              <input type="checkbox" /> Advanced
            </label>
          </div>
          <div className="filter-group">
            <h4>Price</h4>
            <label>
              <input type="checkbox" /> Free
            </label>
            <label>
              <input type="checkbox" /> Paid
            </label>
          </div>
          <div className="filter-group">
            <h4>Course Duration</h4>
            <label>
              <input type="checkbox" /> Short Term Courses
            </label>
            <label>
              <input type="checkbox" /> Long Term Courses
            </label>
          </div>
          <div className="filter-group">
            <h4>Rating</h4>
            <label>
              <input type="checkbox" /> ★★★★★
            </label>
            <label>
              <input type="checkbox" /> ★★★★
            </label>
            <label>
              <input type="checkbox" /> ★★★
            </label>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="course-grid">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <img
              src={course.image}
              alt={course.title}
              className="course-image"
            />
            <div className="course-info">
              <p className="rating">
                {course.rating} ★ ({course.reviews})
              </p>
              <h3>{course.title}</h3>
              <p className="price">{course.price}</p>
              <Button text="Join Now" primary />
            </div>
          </div>
        ))}
      </section>

      {/* Featured Courses */}
      <section className="featured-courses">
        <h2>Featured Courses</h2>
        <p>
          Our top-rated courses handpicked for their quality, demand, and expert
          instruction. Upgrade your skills and advance your career with our best
          courses!
        </p>
        <div className="featured-grid">
          {featuredCourses.map((course, index) => (
            <div className="course-card" key={index}>
              <img
                src={course.image}
                alt={course.title}
                className="course-image"
              />
              <div className="course-info">
                <p className="rating">
                  {course.rating} ★ ({course.reviews})
                </p>
                <h3>{course.title}</h3>
                <p className="price">{course.price}</p>
                <Button text="Join Now" primary />
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Courses;
