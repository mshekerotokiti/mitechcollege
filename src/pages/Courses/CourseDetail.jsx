import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './CourseDetail.css';

const courseDetails = {
  "monitoring-evaluation": {
    title: "Monitoring & Evaluation (M&E)",
    duration: "8 Weeks",
    cost: "KES 20,000",
    description: `This course equips learners with practical skills in tracking project performance and evaluating results. Learn how to set indicators, design logical frameworks, collect and analyze data, and write M&E reports that influence decision-making in NGOs, government, and private sector projects.`,
  },
  "project-management": {
    title: "Project Management",
    duration: "10 Weeks",
    cost: "KES 30,000",
    description: `Gain practical knowledge in initiating, planning, executing, monitoring, and closing projects. Learn about risk management, project budgeting, resource scheduling, and team leadership aligned with PMI standards.`,
  },
  "graphic-design": {
    title: "Graphic Design",
    duration: "8 Weeks",
    cost: "KES 20,000",
    description: `Learn to use Adobe Photoshop, Illustrator, and Canva to design logos, banners, posters, and social media content. This course builds your creative portfolio and design thinking for digital branding and freelance work.`,
  },
  "accounting": {
    title: "Computerized Accounting (QuickBooks)",
    duration: "4 Weeks",
    cost: "KES 8,000",
    description: `Master the use of QuickBooks for bookkeeping, payroll processing, generating financial statements, and managing expenses. Perfect for business owners and aspiring accountants.`,
  },
  "computer-packages": {
    title: "Computer Packages",
    duration: "4-5 Weeks",
    cost: "KES 8,000",
    description: `Advanced office skills with Excel formulas, file management, mail merge, and presentations. Recommended for administrative and office roles. Learn the basics of computer operation including Microsoft Word, Excel, PowerPoint, and Internet use. Suitable for beginners, students, and professionals needing digital literacy. `,
  },
  

  "data-analysis": {
    title: "Data Analysis (SPSS, STATA & Excel)",
    duration: "8 Weeks",
    cost: "KES 20,000",
    description: `Learn how to clean, manage, and analyze data using SPSS, STATA, and Excel. The course covers descriptive statistics, regression analysis, and visual reporting for research and evaluation projects.`,
  },
  "funding-proposal": {
    title: "Funding Proposal",
    duration: "5 Weeks",
    cost: "KES 15,000",
    description: `Learn how to write persuasive proposals for grants, tenders, and donors. Covers proposal structure, budgeting, and justification with real-world samples and templates.`,
  },
  "basic-programming": {
    title: "Basic Programming",
    duration: "8 Weeks",
    cost: "KES 25,000",
    description: `Introduction to programming using Python and Scratch. Learn how to build simple apps, use conditionals, loops, and functions. Ideal for beginners and students.`,
  },
  "ai": {
    title: "Artificial Intelligence",
    duration: "5 Weeks",
    cost: "KES 10,000",
    description: `Get introduced to AI concepts including machine learning, automation, data training, and ethical implications.Learn how AI impacts modern systems.`,
  },
  "digital-marketing": {
    title: "Digital Marketing",
    duration: "12 Weeks",
    cost: "KES 15,000",
    description: `Master the use of SEO, social media, email campaigns, Google Ads, and analytics tools. Learn how to grow brands online, generate leads, and measure ROI.`,
  },
  "web-development": {
    title: "Web Development",
    duration: "12 Weeks",
    cost: "KES 25,000",
    description: `Create responsive websites using HTML, CSS, JavaScript, and React. Covers front-end and back-end basics, hosting, and Git. Perfect for anyone looking to become a web developer.`,
  },
  "german-language": {
    title: "German Language",
    duration: "12 Weeks Each",
    cost: "KES 30,000",
    description: `Start your German learning journey with basic greetings, everyday vocabulary, grammar, and simple dialogues. Perfect for visa applicants and beginners. German A2(18,000)-Enhance your German with more grammar, reading, and spoken skills. Focuses on everyday interactions, writing, and comprehension. German B1(20,000)-Advance your German to confidently handle conversations, writing emails, understanding media, and preparing for B1 certification exams.`,
  },
  // "german-a2": {
  //   title: "German Language A2",
  //   duration: "8 Weeks",
  //   cost: "KES 18,000",
  //   description: `Enhance your German with more grammar, reading, and spoken skills. Focuses on everyday interactions, writing, and comprehension.`,
  // },
  // "german-b1": {
  //   title: "German Language B1",
  //   duration: "8 Weeks",
  //   cost: "KES 20,000",
  //   description: `Advance your German to confidently handle conversations, writing emails, understanding media, and preparing for B1 certification exams.`,
  // },
};

const CourseDetail = () => {
  const { courseSlug } = useParams();
  const course = courseDetails[courseSlug];

  const relatedCourses = Object.entries(courseDetails).filter(
    ([slug]) => slug !== courseSlug
  );

  if (!course) {
    return (
      <div className="container py-5">
        <h3>Course not found</h3>
      </div>
    );
  }

  return (
    <div className="course-detail-container py-5 px-3">
      <div className="container">
        <div className="card p-4 shadow-sm bg-white rounded">
          <h2 className="course-title">{course.title}</h2>
          <p className="text-muted"><strong>Duration:</strong> {course.duration}</p>
          <p className="text-muted"><strong>Cost:</strong> {course.cost}</p>
          <p>{course.description}</p>
          <a
            href="https://docs.google.com/forms/d/192YkpS1bQ2Ic7FfEyfIeJ62fxILkrGxM8rrcTxAE2TI/edit"
            className="btn custom-register-btn mt-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register Now
          </a>
        </div>

        {/* Related Courses */}
        <div className="mt-5">
          <h4 className="mb-3">Other Courses You May Like</h4>
          <div className="row row-cols-1 row-cols-md-3 g-3">
            {relatedCourses.slice(0, 6).map(([slug, rc]) => (
              <div key={slug} className="col">
                <Link
                  to={`/courses/${slug}`}
                  className="text-decoration-none"
                >
                  <div className="border rounded p-3 h-100 bg-light hover-card">
                    <h6 className="mb-1">{rc.title}</h6>
                    <p className="text-muted small mb-1">{rc.duration}</p>
                    <span className="text-primary small">View Course →</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
