import React, { useState, FormEvent } from "react"
import "./hireMeModal.css"

interface HireMeModalProps {
  isOpen: boolean
  onClose: () => void
}

type Toast = {
  show: boolean
  message: string
  type: 'success' | 'error'
}

function HireMeModal({ isOpen, onClose }: HireMeModalProps) {
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
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      showToast(data.message, data.success ? "success" : "error")

      if (data.success) {
        form.reset()
        onClose() // ✅ Cerramos inmediatamente el modal
      }
    } catch (error) {
      console.error("Error sending email", error)
      showToast("Error sending email", "error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Toast fuera de cualquier overlay - siempre visible */}
      {toast.show && (
        <div className={`toast global-toast ${toast.type}`}>
          {toast.message}
        </div>
      )}

      {/* Modal */}
      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={onClose}>✖</button>
            <h2>Work with Me 🚀</h2>

            <form onSubmit={handleSubmit}>
              <label>Name</label>
              <input type="text" placeholder="Your name" name="name" required />

              <label>Email</label>
              <input type="email" placeholder="Your email" name="email" required />

              <label>Message</label>
              <textarea placeholder="Tell me about your project..." name="message" required />

              <button type="submit" className="send-btn">
                {loading ? <span className="spinner"></span> : "Send"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
export default HireMeModal
