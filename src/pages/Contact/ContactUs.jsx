import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTiktok,
  FaInstagram,
} from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Submitted successfully! You will be contacted soon.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      alert("There was an error. Please try again.");
    }
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="container py-5">
      <h2 className="mb-3 hover-underline text-center">
        Contact MI-TECH
      </h2>

      <div className="row justify-content-center">
        {/* Contact Form */}
        <div className="col-md-6 bg-white p-4 rounded shadow-sm">
          <form onSubmit={handleSubmit}>
            {["name", "email", "phone"].map((field, idx) => (
              <div className="mb-3" key={idx}>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  placeholder={
                    field === "phone"
                      ? "Phone Number*"
                      : field.charAt(0).toUpperCase() + field.slice(1) + "*"
                  }
                  value={formData[field]}
                  onChange={handleChange}
                  className="form-control rounded-3 shadow-sm"
                  required
                />
              </div>
            ))}

            <div className="mb-3">
              <textarea
                name="message"
                rows="4"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                className="form-control rounded-3 shadow-sm"
                required
              ></textarea>
            </div>

            <button className="btn btn-primary w-100" type="submit">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="col-md-4 mt-4 mt-md-0">
          <div className="card text-center mb-3 shadow-sm">
            <div className="card-body">
              <FaPhone size={30} className="text-primary mb-2" />
              <h5 className="card-title">Call Us</h5>
              <p className="card-text">+254 706 789 734</p>
            </div>
          </div>

          <div className="card text-center mb-3 shadow-sm">
            <div className="card-body">
              <FaEnvelope size={30} className="text-primary mb-2" />
              <h5 className="card-title">Email</h5>
              <p className="card-text">mitechcollege@gmail.com</p>
            </div>
          </div>

          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Follow Us</h5>
              <div>
                {[FaFacebook, FaInstagram, FaTiktok].map(
                  (Icon, idx) => (
                    <a
                      key={idx}
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary me-3"
                    >
                      <Icon size={24} />
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-2">
        <h4 className="text-center mb-2">Find Us on the Map</h4>
        <div className="ratio ratio-4x3 shadow-sm rounded">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510602.61752363417!2d36.92645315!3d-1.1000716499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x711b1ad9582018d%3A0x44108d79372c8f4b!2sMitech%20Driving%20School!5e0!3m2!1sen!2ske!4v1747725675657!5m2!1sen!2ske"
            title="MI-TECH Location"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
