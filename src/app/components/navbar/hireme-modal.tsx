import React from "react";
import "./hireMeModal.css";


interface HireMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HireMeModal: React.FC<HireMeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // si está cerrado no renderiza nada

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✖
        </button>
        <h2>Work with Me 🚀</h2>
        <form>
          <label>Name</label>
          <input type="text" placeholder="Your name" required />

          <label>Email</label>
          <input type="email" placeholder="Your email" required />

          <label>Message</label>
          <textarea placeholder="Tell me about your project..." required />

          <button type="submit" className="send-btn">Send</button>
        </form>
      </div>
    </div>
  );
};

export default HireMeModal;
