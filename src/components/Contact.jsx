import React, { useState } from 'react';

export default function Contact() {
    const [toast, setToast] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const result = await response.json();

        if (result.success) {
            setToast({ type: "success", message: "Message sent successfully!" });
            e.target.reset();
        } else {
            setToast({ type: "error", message: "Failed to send message." });
        }

        // Hide toast after 3 seconds
        setTimeout(() => setToast(null), 3000);
    };

    return (
        <div>
            <section id="contact" className="max-w-5xl mx-auto px-6 py-10 text-center">
                <h3 className="text-3xl font-bold">Contact Me</h3>
                <p className="mt-4 text-gray-400">Let’s build something amazing together.</p>

                <form
                    onSubmit={handleSubmit}
                    className="mt-10 max-w-xl mx-auto grid gap-5"
                >
                    <input type="hidden" name="access_key" value="fc7d2601-b20d-43c7-a462-a728c08b5df8" />

                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="bg-slate-900 p-4 rounded-xl outline-none"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="bg-slate-900 p-4 rounded-xl outline-none"
                        required
                    />

                    <textarea
                        rows="4"
                        name="message"
                        placeholder="Your Message"
                        className="bg-slate-900 p-4 rounded-xl outline-none"
                        required
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-4 rounded-2xl transition"
                    >
                        Send Message
                    </button>
                </form>
            </section>

            {/* Toast Notification */}
            {toast && (
                <div
                    className={`fixed bottom-5 right-5 px-5 py-3 rounded-xl text-white shadow-lg
                        ${toast.type === "success" ? "bg-green-500" : "bg-red-500"}`}
                >
                    {toast.message}
                </div>
            )}
        </div>
    );
}
