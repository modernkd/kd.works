import { useState } from "react";
import emailjs from "@emailjs/browser";

interface ContactFormProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function ContactForm({ isVisible, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    title: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      alert(
        "Email configuration missing. Please set up EmailJS environment variables."
      );
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          title: formData.title || "No Title",
        },
        publicKey
      );
      alert("Note sent successfully!");
    } catch (error) {
      console.error("Email send error:", error);
      alert("Failed to send note. Please try again.");
    }

    setFormData({ name: "", email: "", message: "", title: "" });
    setIsSubmitting(false);
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div className="contact-form absolute top-0 left-0 w-full h-full bg-[rgba(255,255,255,0.95)] p-5 z-[5] rounded-[5px]">
      <h3 className="text-center text-[#333]">Leave a Note</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-[10px]">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="p-[10px] border border-[#ccc] rounded-[5px]"
        />
        <input
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleInputChange}
          required
          className="p-[10px] border border-[#ccc] rounded-[5px]"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="p-[10px] border border-[#ccc] rounded-[5px]"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={4}
          className="p-[10px] border border-[#ccc] rounded-[5px]"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="p-[10px] bg-[#4caf50] text-white border-none rounded-[5px] cursor-pointer"
        >
          {isSubmitting ? "Sending..." : "Send Note"}
        </button>
      </form>
    </div>
  );
}
