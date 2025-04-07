import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Button from '../components/common/Button';
import TestimonialCard from '../components/common/TestimonialCard';
import whyChooseImage from '../assets/images/why-choose-image.jpg';
import signupIcon from '../assets/images/signup-icon.png'; 
import enrollIcon from '../assets/images/enroll-icon.png';
import mentorshipIcon from '../assets/images/mentorship-icon.png';
import certifyIcon from '../assets/images/certify-icon.png';
import inviteIcon from '../assets/images/invite-icon.png';
import '../styles/Home.css';

function Home() {
  const testimonials = [
    {
      name: 'Anjali Perera',
      role: 'Software Engineering Student',
      text: 'SmartEduMentor completely transformed my learning experience. The courses and real projects helped me land an internship, and the mentors provided career guidance.',
      rating: 5,
      image: 'path/to/anjali.jpg',
    },
    {
      name: 'Ravindu Fernando',
      role: 'Data Science Enthusiast',
      text: 'The mentor program helped me through challenging coding projects, interview prep, and portfolio building. It’s the best platform for career growth.',
      rating: 5,
      image: 'path/to/ravindu.jpg',
    },
    {
      name: 'Meera Jayasinghe',
      role: 'BSc (Hons) Student',
      text: 'I love how easy it is to access expert-led courses from top universities. The one-on-one mentorship gave me confidence in my studies.',
      rating: 5,
      image: 'path/to/meera.jpg',
    },
    {
      name: 'Tharindu Silva',
      role: 'Software Engineer',
      text: 'Being a mentor on SmartEduMentor has been a rewarding experience. I get to guide students while earning a side income.',
      rating: 5,
      image: 'path/to/tharindu.jpg',
    },
    {
      name: 'Nimal Perera',
      role: 'Data Analyst',
      text: 'This platform allows me to share my expertise with students eager to learn. Seeing my mentees grow and succeed in their careers is a great boost!',
      rating: 5,
      image: 'path/to/nimal.jpg',
    },
    {
      name: 'Kavinda Jayawardena',
      role: 'BSc (Hons) Student',
      text: 'SmartEduMentor connected me with mentors who provided personalized learning, rating, and feedback. I appreciate the flexibility of working on my own.',
      rating: 5,
      image: 'path/to/kavinda.jpg',
    },
  ];

  const steps = [
    {
      icon: signupIcon,
      title: 'Sign Up & Choose Course',
      description: 'Register and select from a variety of courses from top universities.',
    },
    {
      icon: enrollIcon,
      title: 'Enroll & Learn',
      description: 'Start learning through video lectures & interactive materials.',
    },
    {
      icon: mentorshipIcon,
      title: 'Get Mentorship',
      description: 'Connect with expert mentors for personalized guidance.',
    },
    {
      icon: certifyIcon,
      title: 'Complete Assignments & Get Certified',
      description: 'Finish assignments, submit projects, and earn university-backed certification.',
    },
    {
      icon: inviteIcon,
      title: 'Invite & Earn',
      description: 'Refer friends & earn cashback through the platform.',
    },
  ];

  const pricingPlans = [
    {
      title: 'Free',
      price: 'Rs 0 / Month',
      features: [
        'Basic content and lectures',
        'Individual tutorials & quizzes',
        'Community support',
        'Course certification',
      ],
    },
    {
      title: 'Mentor Plan',
      price: 'LKR3000',
      features: [
        'One-to-one mentorship',
        'High-quality courses with structured learning',
        'Individual project-based assessments',
        'University-backed certification',
      ],
    },
    {
      title: 'University Plan',
      price: 'LKR9000',
      features: [
        'Comprehensive courses',
        'One-to-one mentorship sessions',
        'University-backed certification',
        'Career guidance & internship support',
      ],
    },
  ];

  return (
    <div className="home-page">
      <Navbar />
      {/* Hero Section */}
      <section className="hero">
        <h1>Gain real world skills, connect with expert mentors, and get certified all in one platform!</h1>
        <p>Join thousands of students & professionals enhancing their skills through our expert courses and one-on-one mentorship.</p>
        <div className="stats">
          <div><span>408+</span> Thousands of students</div>
          <div><span>4.9</span> Ratings</div>
          <div><span>10+</span> Expert mentors</div>
          <div><span>200+</span> Courses</div>
        </div>
        <div className="hero-buttons">
          <Button text="Become Mentor" primary />
          <Button text="Get Started" />
        </div>
      </section>

      {/* Why Choose SmartEduMentor */}
      <section className="why-choose">
        <h2>Why Choose SmartEduMentor</h2>
        <p>A powerful learning & mentorship guide to enhance your career</p>
        <div className="why-choose-content">
        <img src={whyChooseImage} alt="Why Choose" className="why-choose-img" />
          <ul>
            <li>Comprehensive Courses</li>
            <li>High-quality courses from top universities</li>
            <li>Live Mentorship</li>
            <li>Get guidance from industry experts & certified mentors</li>
            <li>Certification</li>
            <li>Earn valid certificates from top universities</li>
            <li>Affiliate Program</li>
            <li>Invite friends & earn cashback through the platform</li>
            <li>Flexible Learning</li>
            <li>Choose the best mentor based on student ratings & reviews</li>
          </ul>
        </div>
        <Button text="Explore Courses Now" primary />
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <p>Start learning, mentoring, and growing in just a few steps.</p>
        <div className="steps">
          {steps.map((step, index) => (
            <div className="step" key={index}>
              <img src={step.icon} alt={`Step ${index + 1}`} className="step-icon" />
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Students & Mentors Say</h2>
        <p>Join thousands of students and mentors who are transforming their careers with SmartEduMentor.</p>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </section>

      {/* Partner Section */}
      <section className="partner">
        <h2>Join as a Mentor or University Partner</h2>
        <p>
          Empower the next generation of learners by becoming a mentor or partnering as a university. Help students gain real-world skills, provide guidance, and earn rewards while shaping professionals.
        </p>
        <p>
          As a mentor on the SmartEduMentor platform, you can earn a 10% commission for each student you mentor, providing a rewarding financial incentive. Additionally, mentors can build a strong personal brand as an educator, gaining recognition in your field. Students can rate and recommend you, helping you grow your reputation and contribute to skill development and career growth, shaping the future of aspiring professionals while advancing your own expertise.
        </p>
        <p>
          Universities partnering with the SmartEduMentor platform can register as course providers, gaining access to thousands of students eager to enhance their skills. By offering certifications upon course completion, institutions can add value to students’ learning journeys while strengthening their reputation. The platform also helps increase institutional visibility and credibility, positioning universities as leaders in education. Additionally, universities can attract talented graduates to become mentors, fostering a strong academic community and bridging the gap between education and industry.
        </p>
        <img src="path/to/partner-image.jpg" alt="Partner" className="partner-img" />
      </section>

      {/* Pricing Section */}
      <section className="pricing">
        <h2>Pricing & Membership</h2>
        <p>Choose a membership that fits your learning needs. Whether you’re seeking courses, expert mentorship, or industry-recognized certifications, we have the perfect plan for you!</p>
        <div className="pricing-cards">
          {pricingPlans.map((plan, index) => (
            <div className="pricing-card" key={index}>
              <h3>{plan.title}</h3>
              <p>{plan.price}</p>
              <ul>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <Button text="Start Learning Now" primary />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;