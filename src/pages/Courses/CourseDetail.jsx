import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './CourseDetail.css';

const courseDetails = {
  "monitoring-evaluation": {
    title: "Monitoring & Evaluation (M&E)",
    duration: "8 Weeks",
    cost: "KES 20,000",
    description: `This course equips learners with practical skills in tracking project performance and evaluating results. Learn how to set indicators, design logical frameworks, collect and analyze data, and write M&E reports that influence decision-making in NGOs, government, and private sector projects.`,
    requirements: [
      "Basic computer knowledge",
      "Familiarity with project work is an added advantage",
      "Recommended for NGO workers, project officers, and development students"
    ]
  },
  "project-management": {
    title: "Project Management",
    duration: "10 Weeks",
    cost: "KES 20,000",
    description: `Gain practical knowledge in initiating, planning, executing, monitoring, and closing projects. Learn about risk management, project budgeting, resource scheduling, and team leadership aligned with PMI standards.`,
    requirements: [
      "Basic computer skills",
      "Interest in managing projects",
      "Recommended for professionals, students, and entrepreneurs"
    ]
  },
  "graphic-design": {
    title: "Graphic Design",
    duration: "12 Weeks",
    cost: "KES 25,000",
    description: `Learn to use Adobe Photoshop, and Illustrator to design logos, banners, posters, and social media content. This course builds your creative portfolio and design thinking for digital branding and freelance work.`,
    requirements: [
      "Basic computer operation skills",
      "Access to a laptop for design practice",
      "Creative interest in digital media"
    ]
  },
  "accounting": {
    title: "Computerized Accounting (QuickBooks)",
    duration: "4 Weeks",
    cost: "KES 7,000",
    description: `Master the use of QuickBooks for bookkeeping, payroll processing, generating financial statements, and managing expenses. Perfect for business owners and aspiring accountants.`,
    requirements: [
      "Basic accounting knowledge (preferred but not mandatory)",
      "Basic computer skills",
      "Interest in financial management"
    ]
  },
  "computer-packages": {
    title: "Computer Packages",
    duration: "4-5 Weeks",
    cost: "KES 8,000",
    description: `Advanced office skills with Excel formulas, file management, mail merge, and presentations. Recommended for administrative and office roles. Learn the basics of computer operation including Microsoft Word, Excel, PowerPoint, and Internet use. Suitable for beginners, students, and professionals needing digital literacy.`,
    requirements: [
      "No prior experience required",
      "Suitable for beginners and students",
      "Interest in improving office and digital skills"
    ]
  },
  "data-analysis": {
    title: "Data Analysis (SPSS, STATA & Excel)",
    duration: "8 Weeks",
    cost: "KES 20,000",
    description: `Learn how to clean, manage, and analyze data using SPSS, STATA, and Excel. The course covers descriptive statistics, regression analysis, and visual reporting for research and evaluation projects.`,
    requirements: [
      "Basic computer skills",
      "Familiarity with research or statistical concepts is an advantage",
      "Ideal for students, researchers, and monitoring staff"
    ]
  },
  "funding-proposal": {
    title: "Funding Proposal",
    duration: "5 Weeks",
    cost: "KES 15,000",
    description: `Learn how to write persuasive proposals for grants, tenders, and donors. Covers proposal structure, budgeting, and justification with real-world samples and templates.`,
    requirements: [
      "Basic writing skills",
      "Interest in fundraising, grant writing, or project management",
      "Open to students, NGO staff, and entrepreneurs"
    ]
  },
  "basic-programming": {
    title: "Basic Programming",
    duration: "8 Weeks",
    cost: "KES 25,000",
    description: `Introduction to programming using Python and Scratch. Learn how to build simple apps, use conditionals, loops, and functions. Ideal for beginners and students.`,
    requirements: [
      "Basic computer literacy",
      "No prior coding experience required",
      "Interest in problem-solving and technology"
    ]
  },
  "ai": {
    title: "Artificial Intelligence",
    duration: "5 Weeks",
    cost: "KES 10,000",
    description: `Get introduced to AI concepts including machine learning, automation, data training, and ethical implications. Learn how AI impacts modern systems.`,
    requirements: [
      "Basic computer operation skills",
      "Interest in emerging technologies",
      "No coding experience required"
    ]
  },
  "digital-marketing": {
    title: "Digital Marketing",
    duration: "12 Weeks",
    cost: "KES 30,000",
    description: `Master the use of SEO, social media, email campaigns, Google Ads, and analytics tools. Learn how to grow brands online, generate leads, and measure ROI.`,
    requirements: [
      "Basic computer literacy",
      "Familiarity with social media platforms is an advantage",
      "Interest in marketing and brand growth"
    ]
  },
  "web-development": {
    title: "Web Development",
    duration: "12 Weeks",
    cost: "KES 25,000",
    description: `Create responsive websites using HTML, CSS, JavaScript, and React. Covers front-end and back-end basics, hosting, and Git. Perfect for anyone looking to become a web developer.`,
    requirements: [
      "Basic computer skills",
      "Interest in website creation and coding",
      "Personal laptop highly recommended"
    ]
  },
  "german-language": {
    title: "German Language ",
    duration: "12 Weeks Each",
    cost: "KES 27,000",
    description: `Start your German learning journey with basic greetings, everyday vocabulary, grammar, and simple dialogues. Perfect for visa applicants and beginners. German A2 (KES 18,000) - Enhance your German with more grammar, reading, and spoken skills. Focuses on everyday interactions, writing, and comprehension. German B1 (KES 20,000) - Advance your German to confidently handle conversations, writing emails, understanding media, and preparing for B1 certification exams.`,
    requirements: [
      "No prior German knowledge required for A1",
      "Completion of A1 required for A2",
      "Completion of A2 required for B1"
    ]
  },
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
    <div className="container py-5">
      <div className="card p-4 shadow-sm bg-white rounded">
        <h2 className="course-title">{course.title}</h2>
        <p className="text"><strong>Duration:</strong> {course.duration}</p>
        <p className="text"><strong>Cost:</strong> {course.cost}</p>
        <p>{course.description}</p>

        {course.requirements && course.requirements.length > 0 && (
          <div className="mt-3">
            <strong>Requirements:</strong>
            <ul className="mt-2">
              {course.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        )}

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
                <div className="related-card border rounded p-3 h-100 bg-light hover-card">
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
  );
};

export default CourseDetail;