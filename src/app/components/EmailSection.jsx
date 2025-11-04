"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent successfully!");
      setEmailSubmitted(true);
      e.target.reset(); // Clear form after submission
    } else {
      console.error("Failed to send email:", resData);
    }
  };

  return (
    <section className="grid md:grid-cols-2 my-12 py-24 gap-4 relative">
      {/* Background gradient */}
      <div className="bg-[radial-gradient(ellipse_at_center,_#1e3a8a,_transparent)] rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2"></div>

      {/* Left Side - Contact Info */}
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always open. 
          Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>

        <div className="socials flex flex-row gap-3">
          <Link href="https://github.com" target="_blank">
            <Image
              src={GithubIcon}
              alt="GitHub icon"
              width={40}
              height={40}
              className="invert hover:opacity-80 transition duration-200"
            />
          </Link>

          <Link href="https://linkedin.com" target="_blank">
            <Image
              src={LinkedinIcon}
              alt="LinkedIn icon"
              width={40}
              height={40}
              className="invert hover:opacity-80 transition duration-200"
            />
          </Link>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="z-10">
        {!emailSubmitted ? (
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                placeholder="you@example.com"
                className="p-3 rounded-lg border bg-transparent border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-white transition duration-200 block w-full"
              />
            </div>

            {/* Subject Input */}
            <div>
              <label
                htmlFor="subject"
                className="text-white block mb-2 text-sm font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                placeholder="Just saying hi"
                className="p-3 rounded-lg border bg-transparent border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-white transition duration-200 block w-full"
              />
            </div>

            {/* Message Input */}
            <div>
              <label
                htmlFor="message"
                className="text-white block mb-2 text-sm font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                required
                placeholder="Let's talk about..."
                className="p-3 rounded-lg border bg-transparent border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-white transition duration-200 block w-full"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-5 rounded-lg w-full transition duration-200"
            >
              Send Message
            </button>
          </form>
        ) : (
          <p className="text-green-500 text-sm mt-2">
            ✅ Email sent successfully!
          </p>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
