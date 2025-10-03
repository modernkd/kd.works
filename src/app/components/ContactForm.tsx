import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Locale, messages } from "../../../i18n";
import styles from "./ContactForm.module.css";

interface ContactFormProps {
  isVisible: boolean;
  onClose: () => void;
  locale: Locale;
}

export default function ContactForm({
  isVisible,
  onClose,
  locale,
}: ContactFormProps) {
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
      alert(messages[locale].contactConfigErrorMessage);
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
      alert(messages[locale].contactSuccessMessage);
    } catch (error) {
      console.error("Email send error:", error);
      alert(messages[locale].contactErrorMessage);
    }

    setFormData({ name: "", email: "", message: "", title: "" });
    setIsSubmitting(false);
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div className={styles.contactForm}>
      <h3 className={styles.contactTitle}>{messages[locale].contactTitle}</h3>
      <form onSubmit={handleSubmit} className={styles.contactFormElement}>
        <input
          type="text"
          name="name"
          placeholder={messages[locale].contactNamePlaceholder}
          value={formData.name}
          onChange={handleInputChange}
          required
          className={styles.formInput}
        />
        <input
          name="title"
          placeholder={messages[locale].contactTitlePlaceholder}
          value={formData.title}
          onChange={handleInputChange}
          required
          className={styles.formInput}
        />
        <input
          type="email"
          name="email"
          placeholder={messages[locale].contactEmailPlaceholder}
          value={formData.email}
          onChange={handleInputChange}
          required
          className={styles.formInput}
        />
        <textarea
          name="message"
          placeholder={messages[locale].contactMessagePlaceholder}
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={4}
          className={styles.formTextarea}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={styles.submitButton}
        >
          {isSubmitting
            ? messages[locale].contactSendingButton
            : messages[locale].contactSendButton}
        </button>
      </form>
    </div>
  );
}
