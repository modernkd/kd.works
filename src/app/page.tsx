"use client";

import Head from "next/head";
import { useState, useEffect } from "react";
import FreezerSection from "./components/FreezerSection";
import FridgeSection from "./components/FridgeSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { Locale } from "../../i18n";
import styles from "./Home.module.css";

export default function Home() {
  const [isLeavingNote, setIsLeavingNote] = useState(false);
  const [locale, setLocale] = useState<Locale>("en");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleNoteTaking = () => {
    setIsLeavingNote(!isLeavingNote);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Update theme attribute on document element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [isDarkMode]);
  return (
    <>
      <Head>
        <title>kd davis</title>
        <meta name="description" content="kd works" />
      </Head>
      <div className={styles.fridgeContainer}>
        <div
          className={`${styles.fridgeBody} ${isLeavingNote ? styles.open : ""}`}
        >
          {/* Shadow Left */}
          <div className={styles.fridgeShadowLeft} />

          {/* Highlight Right */}
          <div className={styles.fridgeHighlightRight} />
          <div className={styles.fridgeTopShadow} />

          {/* Fridge Door Content */}
          <div className={styles.fridgeDoorContent}>
            <FreezerSection
              setLocale={setLocale}
              onDarkModeToggle={toggleDarkMode}
              isDarkMode={isDarkMode}
              locale={locale}
            />
            <FridgeSection
              locale={locale}
              isDarkMode={isDarkMode}
              handleNoteTaking={handleNoteTaking}
            />
          </div>

          {/* Contact Form */}
          <ContactForm
            isVisible={isLeavingNote}
            onClose={() => setIsLeavingNote(false)}
          />
          <div className={styles.fridgeGlow} />
        </div>
      </div>
      <Footer />
    </>
  );
}
