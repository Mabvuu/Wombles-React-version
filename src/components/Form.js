import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission

    emailjs
      .sendForm('service_26imilr', 'template_7ehtpt9', form.current, '_oCWbVbcc5RThQMZj')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          console.log("Message sent! Thank you we will reply shortly")
          // Optionally, you can reset the form after successful submission
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-lg mx-auto md:max-w-xl lg:max-w-2xl px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-3xl font-bold mb-4">Contact us</h3>
          <form id="fcf-form-id" className="fcf-form-class" ref={form} onSubmit={sendEmail}>
            <div className="fcf-form-group">
              <label htmlFor="Name" className="fcf-label">
                Your name
              </label>
              <div className="fcf-input-group">
                <input
                  type="text"
                  id="Name"
                  name="user_name"
                  className="fcf-form-control rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
            </div>
            <div className="fcf-form-group">
              <label htmlFor="Email" className="fcf-label">
                Your email address
              </label>
              <div className="fcf-input-group">
                <input
                  type="email"
                  id="Email"
                  name="Email"
                  className="fcf-form-control rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
            </div>
            <div className="fcf-form-group">
              <label htmlFor="Message" className="fcf-label">
                Your message
              </label>
              <div className="fcf-input-group">
                <textarea
                  id="Message"
                  name="message"
                  className="fcf-form-control rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
                  rows="6"
                  maxLength="3000"
                  required
                ></textarea>
              </div>
            </div>
            <div className="fcf-form-group">
              <button
                type="submit"
                id="fcf-button"
                className="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
