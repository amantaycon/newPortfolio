import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    _replyto: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // success/error message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload

    try {
      await axios.post("https://formspree.io/f/xeolvlkz", formData, {
        headers: { Accept: "application/json" },
      });
      setStatus("Message sent successfully!");
      setFormData({ name: "", _replyto: "", message: "" }); // reset form
    } catch (error) {
      setStatus("Oops! Something went wrong.");
    }
  };

  return (
    <section className="my-10">
      <motion.h3
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold text-gray-900 dark:text-white"
      >
        Contact
      </motion.h3>

      <div className="mt-4 grid md:grid-cols-1 gap-6">
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handleSubmit}
          className="p-6 rounded-xl border border-gray-200 dark:border-white/20 bg-white dark:bg-gray-900/70 text-gray-800 dark:text-gray-100"
        >
          <label className="block text-sm">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 w-full p-3 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600"
          />

          <label className="block text-sm mt-3">Email</label>
          <input
            name="_replyto"
            type="email"
            value={formData._replyto}
            onChange={handleChange}
            required
            className="mt-1 w-full p-3 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600"
          />

          <label className="block text-sm mt-3">Message</label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 w-full p-3 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600"
          ></textarea>

          <button
            type="submit"
            className="mt-4 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 text-white"
          >
            Send Message
          </button>

          {status && <p className="mt-2 text-sm">{status}</p>}
        </motion.form>
      </div>
    </section>
  );
}
