'use-client'
import React, { useState } from "react"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"
import "./contact.css"




function Contact() {

    const [loading, setLoading] = useState(false)
    const [toast, setToast] = useState({ show: false, message: '', type: '' })
    const showToast = (message: any, type = 'success') => {
        setToast({ show: true, message, type })
        setTimeout(() => setToast({ show: false, message: '', type: '' }), 3000)
    }
    const handleSubmit = async (e: {
        target: any; preventDefault: () => void;
    }) => {
        e.preventDefault()
        setLoading(true)

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value
        }

        try {
            const response = await fetch("/api/contact", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })

            const data = await response.json()
            showToast(data.message, 'success')

        } catch (error) {
            console.error('Error sending email', error)
        } finally {
            setLoading(false)
        }

    }
    return (
        <div className="wrapper-contact" id="contact">
            <div className="container-contact">
                <h1>Contact</h1>

                <div className="contact-grid">
                    {/* Contact Information */}
                    <div className="contact-info">
                        <h2>Let’s Talk 🚀</h2>
                        <p>If you have a project in mind or want to collaborate, feel free to reach out.</p>
                        <ul>
                            <li><Mail size={18} /> alanestebana@gmail.com</li>
                            <li><Phone size={18} /> +52 (33)-3256-6577</li>
                            <li><MapPin size={18} /> Arandas, Jalisco</li>
                        </ul>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/alan-esteban-alvizo-ortega-870750267/" target="_blank" rel="noreferrer"><Linkedin size={22} /></a>
                            <a href="https://github.com/aalvizo2" target="_blank" rel="noreferrer"><Github size={22} /></a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Your name"
                            name="name"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your email"
                            name="email"
                            required
                        />
                        <textarea
                            placeholder="Write your message..."
                            name="message"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="btn"
                        >
                            {loading ?
                                <span className="spinner"></span>
                                : "Send"
                            }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
