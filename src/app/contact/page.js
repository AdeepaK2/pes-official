"use client";

import { useState } from "react";
import { FaEnvelope, FaFacebook, FaLinkedin } from "react-icons/fa"; // Import icons
import Image from "next/image";
import { motion } from "framer-motion";
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

    return (
        <div className="mt-16 py-16 px-6 bg-gradient-to-br from-[#71F45D]/20 to-white text-black">
            <Navbar/>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                
                {/* Contact Information */}
                <div>
                    <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
                    <p className="text-gray-700 mb-4">Get in touch with IEEE PES Student Branch Chapter of University of Moratuwa.</p>

                    {/* Email */}
                    <div className="mt-4 flex items-center space-x-2">
                        <FaEnvelope className="text-[#71F45D]" />
                        <a href="mailto:ieeepessbcuniversityofmoratuwa@gmail.com" className="text-gray-700 hover:text-black">
                            ieeepessbcuniversityofmoratuwa@gmail.com
                        </a>
                    </div>

                    {/* Facebook */}
                    <div className="mt-2 flex items-center space-x-2">
                        <FaFacebook className="text-[#1877F2]" />
                        <a href="https://www.facebook.com/ieee.pes.sbc.uom" target="_blank" className="text-gray-700 hover:text-black">
                            IEEE PES Student Branch Chapter - Facebook
                        </a>
                    </div>

                    {/* LinkedIn */}
                    <div className="mt-2 flex items-center space-x-2">
                        <FaLinkedin className="text-[#0A66C2]" />
                        <a href="https://www.linkedin.com/company/ieee-pes-student-branch-chapter-of-university-of-moratuwa/" target="_blank" className="text-gray-700 hover:text-black">
                            IEEE PES Student Branch Chapter - LinkedIn
                        </a>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="w-full bg-white p-6 rounded-lg shadow-lg border-4 border-[#71F45D]">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Your Name (required)</label>
                            <input type="text" name="name" className="w-full px-3 py-2 border border-[#71F45D] rounded-lg" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Your Email (required)</label>
                            <input type="email" name="email" className="w-full px-3 py-2 border border-[#71F45D] rounded-lg" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Your Message</label>
                            <textarea name="message" className="w-full px-3 py-2 border border-[#71F45D] rounded-lg" rows="4" required></textarea>
                        </div>
                        <button type="submit" className="bg-[#71F45D] text-black font-bold py-2 px-4 rounded-lg hover:bg-[#5FC94F]">
                            Submit
                        </button>
                    </form>
                    {message && <p className="mt-4 text-green-600">{message}</p>}
                </div>
            </div>
            <Footer/>
        </div>
    );
}