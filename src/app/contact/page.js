"use client";

import { useState, useEffect } from "react";
import { FaEnvelope, FaFacebook, FaLinkedin } from "react-icons/fa"; 
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function ContactUs() {
    const [message, setMessage] = useState("");

    const scriptURL ="https://script.google.com/macros/s/AKfycbzbxUyb1mCKSctNZadBlEHYGkZmv1LxlMml7gjQh_K-9etccADifpvFYRZRa1ag9W3w8g/exec";

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        try {
            const response = await fetch(scriptURL, {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                setMessage("✅ Thank you! Your message has been sent.");
                event.target.reset();
            } else {
                setMessage("❌ There was an error submitting the form. Please try again.");
            }
        } catch (error) {
            setMessage("❌ Network error. Please check your connection and try again.");
        }
    };

    // Prevent horizontal scrolling issues
    useEffect(() => {
        document.body.style.overflowX = "hidden";
        return () => {
            document.body.style.overflowX = "auto";
        };
    }, []);

    return (
        <div className="overflow-x-hidden bg-gradient-to-br from-[#71F45D]/20 to-white text-black">
            {/* Navbar */}
            <Navbar />

            {/* Add padding to prevent navbar overlap */}
            <div className="pt-20 px-4 md:px-12 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    
                    {/* Contact Information */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
                        <p className="text-gray-700 mb-4">
                            Get in touch with IEEE PES Student Branch Chapter of University of Moratuwa. We are here to assist you with any queries or information you need. Feel free to reach out to us through the following contact details:
                        </p>

                        {/* Email */}
                        <div className="mt-4 flex items-center gap-3">
                            <FaEnvelope className="text-[#064E3B] text-lg" />
                            <a href="mailto:ieeepessbcuniversityofmoratuwa@gmail.com" 
                               className="text-gray-700 hover:text-black text-sm md:text-base">
                                ieeepessbcuniversityofmoratuwa@gmail.com
                            </a>
                        </div>

                        {/* Facebook */}
                        <div className="mt-2 flex items-center gap-3">
                            <FaFacebook className="text-[#064E3B] text-lg" />
                            <a href="https://www.facebook.com/ieee.pes.sbc.uom" 
                               target="_blank" className="text-gray-700 hover:text-black text-sm md:text-base">
                                IEEE PES Student Branch Chapter - Facebook
                            </a>
                        </div>

                        {/* LinkedIn */}
                        <div className="mt-2 flex items-center gap-3">
                            <FaLinkedin className="text-[#064E3B] text-lg" />
                            <a href="https://www.linkedin.com/company/ieee-pes-student-branch-chapter-of-university-of-moratuwa/" 
                               target="_blank" className="text-gray-700 hover:text-black text-sm md:text-base">
                                IEEE PES Student Branch Chapter - LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <div className="w-full bg-white p-6 md:p-8 rounded-lg shadow-lg border-4 border-[#71F45D]">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2">Your Name (required)</label>
                                <input type="text" name="name" 
                                       className="w-full px-3 py-2 border border-[#71F45D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#71F45D]" required />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2">Your Email (required)</label>
                                <input type="email" name="email" 
                                       className="w-full px-3 py-2 border border-[#71F45D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#71F45D]" required />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2">Your Message</label>
                                <textarea name="message" 
                                          className="w-full px-3 py-2 border border-[#71F45D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#71F45D]" 
                                          rows="4" required></textarea>
                            </div>
                            <button type="submit" 
                                    className="w-full bg-[#71F45D] text-black font-bold py-2 px-4 rounded-lg hover:bg-[#5FC94F] transition">
                                Submit
                            </button>
                        </form>
                        {message && <p className="mt-4 text-green-600">{message}</p>}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
