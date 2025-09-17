"use client";

import Head from "next/head";
import { useState } from "react";
import FreezerSection from "./components/FreezerSection";
import FridgeSection from "./components/FridgeSection";
import FridgeHandles from "./components/FridgeHandles";
import StickyNote from "./components/StickyNote";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { Locale } from "../../i18n";

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
  return (
    <>
      <Head>
        <title>kd davis</title>
        <meta name="description" content="kd works" />
      </Head>
      <div
        className={`fridge-container min-h-screen bg-gradient-radial flex flex-col items-center p-5 font-sans relative transition-all duration-500 ${
          isDarkMode ? "dark" : ""
        }`}
        style={{
          background: isDarkMode
            ? "radial-gradient(circle at center, #1a1a1a 0%, #2a2a2a 200px, #1a1a1a 200px, #1a1a1a 80%, #0a0a0a 100%)"
            : "radial-gradient(circle at center, #F0F2F4 0%, #F8AFAE 200px, #F0F2F4 200px, #F0F2F4 80%, #dcddde 100%)",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        {" "}
        <div
          className={`fridge-body ${
            isLeavingNote ? "open" : ""
          } w-[800px] h-[1200px] bg-[#def0f4] rounded-[40px] relative shadow-[0_15px_30px_rgba(0,0,0,0.3)] mb-5 border-[6px] border-[#afe0e9] transition-all duration-500`}
          style={
            isDarkMode
              ? {
                  boxShadow: `
              0 15px 30px rgba(0,0,0,0.8),
              inset -20px 0 40px rgba(255, 255, 0, 0.1),
              inset -10px 0 20px rgba(255, 255, 0, 0.2),
              inset -5px 0 10px rgba(255, 255, 0, 0.3)
            `,
                }
              : undefined
          }
        >
          {/* Shadow Left */}
          <div className="absolute h-[96%] w-[20px] bg-[#afe0e9] rounded-[40px] left-[10px] top-[20px] z-[1]" />

          {/* Highlight Right */}
          <div className="absolute h-[96%] w-[16px] bg-[#F0F2F4] rounded-[40px] right-[16px] top-[20px] z-[1]" />
          <div className="absolute w-full h-[8px] bg-[#999] top-[35%] z-[1]" />
          <FridgeHandles />
          <StickyNote onClick={handleNoteTaking} />

          {/* Fridge Door Content */}
          <div className="p-5 h-full flex flex-col">
            <FreezerSection
              setLocale={setLocale}
              onDarkModeToggle={toggleDarkMode}
              isDarkMode={isDarkMode}
              locale={locale}
            />
            <FridgeSection locale={locale} isDarkMode={isDarkMode} />
          </div>

          {/* Contact Form */}
          <ContactForm
            isVisible={isLeavingNote}
            onClose={() => setIsLeavingNote(false)}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
