
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";


const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_q8knfec",
        "template_800343r",
        formData,
        "1h5WaO9PyvL64YsPy"
      )
      .then(
        (response) => {
          alert("Message sent successfully!");
          setFormData({ user_name: "", user_email: "", message: "" });
        },
        (error) => {
          alert("Failed to send message. Try again!");
        }
      );
  };

  return (
    <div id="contact" className="w-full bg-[#032323] py-20 flex items-center justify-center">

      {/* MAIN CONTAINER */}
      <div className="w-[80%] max-w-5xl bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl p-10 flex flex-col md:flex-row gap-10">

        {/* LEFT SECTION - IMAGE + SOCIAL ICONS */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-between">
          
          {/* Contact Image */}
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
            alt="Contact"
            className="rounded-xl shadow-lg w-full h-72 object-cover"
          />

          {/* Social Icons */}
          <div className="flex gap-5 mt-6">
            <a href="https://www.linkedin.com/in/jasminerai123456789" target="_blank">
              <FaLinkedin className="text-white text-3xl hover:text-blue-400 transition" />
            </a>

            <a href="https://github.com/Assistantjasmine282/      " target="_blank">
              <FaGithub className="text-white text-3xl hover:text-gray-300 transition" />
            </a>

            <a href="mailto:raijasmine282@gmail.com">
              <FaEnvelope className="text-white text-3xl hover:text-red-400 transition" />
                
           </a> 

            

            <a href=" https://x.com/jas_mine_rai12" target="_blank">
              <FaTwitter className="text-white text-3xl hover:text-sky-400 transition" />
            </a>
          </div>

          {/* CONTACT DETAILS */}
          <div className="text-white space-y-2 bg-white/5 p-5 mt-6 rounded-xl backdrop-blur-md text-lg w-full">
            <p><b>Name:</b> Jasmine Rai</p>
            <p><b>Phone:</b> 8795409362</p>
            <p><b>Email:</b> raijasmine282@gmail.com</p>
          </div>

    

        </div>

        {/* RIGHT SECTION - CONTACT FORM */}
        <form
          onSubmit={sendEmail}
          className="w-full md:w-1/2 bg-white/10 p-6 rounded-xl shadow-xl border border-white/20"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Contact Me
          </h2>

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            value={formData.user_name}
            onChange={handleChange}
            className="w-full mb-4 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 outline-none focus:border-blue-400"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            value={formData.user_email}
            onChange={handleChange}
            className="w-full mb-4 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 outline-none focus:border-blue-400"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full mb-4 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 h-32 outline-none focus:border-blue-400"
            required
          />

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

