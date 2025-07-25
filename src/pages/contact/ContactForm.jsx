import React, { useState } from "react";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiSend,
  FiUser,
  FiMessageSquare,
  FiCheckCircle,
  FiX,
} from "react-icons/fi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="get-in-touch" className="bg-gray-50 py-16 relative">
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setShowSuccess(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <FiX className="text-xl" />
            </button>

            <div className="text-center py-6">
              <FiCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-serif font-normal text-gray-800 mb-2">
                Message Sent Successfully!
              </h3>
              <p className="text-gray-600">
                Thank you for contacting us. We'll get back to you soon.
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                className="mt-6 px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-md transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-normal text-gray-800 mb-2">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600">
            Get in touch with YARA Production
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-normal text-gray-800 mb-6 flex items-center">
                <FiMapPin className="text-amber-600 mr-2" />
                Our Location
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <FiMapPin className="text-amber-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-800">Address</h4>
                    <p className="text-gray-600">
                      Trav. Borrás, 9, 12300 Morella, Castellón, Spain
                    </p>
                  </div>
                </div>

                {/* <div className="flex items-start">
                  <FiPhone className="text-amber-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-800">Phone</h4>
                    <p className="text-gray-600">+90 212 675 24 98</p>
                  </div>
                </div> */}

                {/* <div className="flex items-start">
                  <FiPhone className="text-amber-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-800">Fax</h4>
                    <p className="text-gray-600">+90 212 675 24 99</p>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.5475553106176!2d-0.10469022411326452!3d40.61780504337703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5f826890aed477%3A0x91cf3e81adedbca6!2sTrav.%20Borr%C3%A1s%2C%209%2C%2012300%20Morella%2C%20Castell%C3%B3n%2C%20Spain!5e0!3m2!1sen!2sbd!4v1750326698002!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-serif font-normal text-gray-800 mb-6 flex items-center">
              <FiSend className="text-amber-600 mr-2" />
              Send Us a Message
            </h3>
            <p className="text-gray-600 mb-8">
              Fill out the form below to connect with us:
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <label className="text-gray-700 flex items-center">
                  <FiUser className="mr-2 text-amber-600" />
                  Name & Surname
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-gray-700 flex items-center">
                  <FiMail className="mr-2 text-amber-600" />
                  E-Mail Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-gray-700">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Subject of your message"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-gray-700">Phone (int format)</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="+90 212 123 4567"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-gray-700 flex items-center">
                  <FiMessageSquare className="mr-2 text-amber-600" />
                  Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-md transition duration-300 flex items-center justify-center ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <FiSend className="mr-2" />
                    SEND NOW
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
