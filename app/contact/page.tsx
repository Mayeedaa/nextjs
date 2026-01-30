"use client";

import { FormEvent, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./page.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <Header />
      <main>
        <section className={styles.container}>
          <div className={styles.header}>
            <h1>Get in Touch</h1>
            <p>Have a question or want to work together? I'd love to hear from you.</p>
          </div>

          <div className={styles.content}>
            {/* Contact Info */}
            <div className={styles.contactInfo}>
              <div className={styles.infoCard}>
                <div className={styles.icon}>📧</div>
                <h3>Email</h3>
                <p>
                  <a href="mailto:hello@example.com">hello@example.com</a>
                </p>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.icon}>📍</div>
                <h3>Location</h3>
                <p>San Francisco, CA, USA</p>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.icon}>💼</div>
                <h3>LinkedIn</h3>
                <p>
                  <a
                    href="https://linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Profile
                  </a>
                </p>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.icon}>🐙</div>
                <h3>GitHub</h3>
                <p>
                  <a
                    href="https://github.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Profile
                  </a>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.formContainer}>
              <h2>Send Me a Message</h2>
              {submitted && (
                <div className={styles.successMessage}>
                  ✓ Thank you for your message! I'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can I help?"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message here..."
                    rows={5}
                  ></textarea>
                </div>

                <button type="submit" className={styles.submitButton}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
