'use client'
import React, { useState, FormEvent } from "react"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"
import "./contact.css"
import Link from 'next/link'

type Toast = {
  show: boolean
  message: string
  type: 'success' | 'error'
}

type ContactFormData = {
  name: string
  email: string
  message: string
}

function Contact() {
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState<Toast>({ show: false, message: '', type: 'success' })

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ show: true, message, type })
    setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 3000)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget
    const formData: ContactFormData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value
    }

    try {
      const response = await fetch("/api/contact", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })

      const data: { success: boolean; message: string } = await response.json()
      showToast(data.message, data.success ? 'success' : 'error')

      if (data.success) form.reset()
    } catch (error) {
      console.error('Error sending email', error)
      showToast('Error sending email', 'error')
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
              <Link href="https://www.linkedin.com/in/alan-esteban-alvizo-ortega-870750267/" target="_blank" rel="noreferrer"><Linkedin size={22} /></Link>
              <Link href="https://github.com/aalvizo2" target="_blank" rel="noreferrer"><Github size={22} /></Link>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Your name" name="name" required />
            <input type="email" placeholder="Your email" name="email" required />
            <textarea placeholder="Write your message..." name="message" required></textarea>
            <button type="submit" className="btn">
              {loading ? <span className="spinner"></span> : "Send"}
            </button>
          </form>
        </div>
      </div>

      {/* ✅ Aquí agregamos el toast */}
      {toast.show && (
        <div className={`toast ${toast.type}`}>
          {toast.message}
        </div>
      )}
    </div>
  )
}

export default Contact
