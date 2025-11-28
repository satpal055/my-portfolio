import React, { useState } from 'react';
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
    const [toast, setToast] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const result = await response.json();

        if (result.success) {
            setToast({ type: "success", message: "Message sent successfully!" });
            e.target.reset();
        } else {
            setToast({ type: "error", message: "Failed to send message." });
        }

        setTimeout(() => setToast(null), 3000);
    };

    return (
        <div className="relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute -top-10 -left-10 w-60 h-60 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 -right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

            <section id="contact" className="relative max-w-5xl mx-auto px-6 py-20 text-center">
                <h3 className="text-4xl md:text-5xl font-bold text-cyan-400 drop-shadow-lg">Contact Me</h3>
                <p className="mt-4 text-gray-300 max-w-xl mx-auto text-lg">
                    Let’s collaborate and bring your ideas to life.
                </p>

                {/* Contact Card */}
                <form
                    onSubmit={handleSubmit}
                    className="mt-12 max-w-xl mx-auto grid gap-5 bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl"
                >
                    <input type="hidden" name="access_key" value="fc7d2601-b20d-43c7-a462-a728c08b5df8" />

                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="bg-black/30 p-4 rounded-xl outline-none text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="bg-black/30 p-4 rounded-xl outline-none text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400"
                        required
                    />

                    <textarea
                        rows="4"
                        name="message"
                        placeholder="Your Message"
                        className="bg-black/30 p-4 rounded-xl outline-none text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400"
                        required
                    ></textarea>

                    <button
                        type="submit"
                        className="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-4 rounded-2xl transition transform hover:scale-105 shadow-lg"
                    >
                        <FaPaperPlane /> Send Message
                    </button>
                </form>
            </section>

            {/* Toast Notification */}
            {toast && (
                <div
                    className={`fixed bottom-6 right-6 px-6 py-3 rounded-xl text-white shadow-xl backdrop-blur-xl border
                    ${toast.type === "success" ? "bg-green-500/80 border-green-300/30" : "bg-red-500/80 border-red-300/30"}`}
                >
                    {toast.message}
                </div>
            )}
        </div>
    );
}