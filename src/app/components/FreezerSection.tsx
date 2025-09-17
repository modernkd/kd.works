import MagnetText from "./MagnetText";
import MooseMagnet from "./MooseMagnet";
import EagleMagnet from "./EagleMagnet";
import DarkModeMagnet from "./DarkModeMagnet";

import { Locale, messages } from "../../../i18n";

interface FreezerSectionProps {
  setLocale: (lang: Locale) => void;
  onDarkModeToggle: () => void;
  isDarkMode: boolean;
  locale: Locale;
}

export default function FreezerSection({
  setLocale,
  onDarkModeToggle,
  isDarkMode,
  locale,
}: FreezerSectionProps) {
  return (
    <div className="freezer-section h-[35%] pb-4 mb-4 relative">
      {/* Cowbell Magnet Link */}
      <a
        href="/more-cowbell"
        className="cowbell-magnet block bg-[#48A860] text-[#333] p-[10px_15px] rounded-[5px] text-[18px] font-bold text-center shadow-[2px_2px_5px_rgba(0,0,0,0.3)] no-underline border-[3px] border-[#ff8c00] w-max absolute top-[30%] left-[10%] transform rotate-12"
      >
        🐮🛎️
      </a>

      {/* First MagnetText */}
      <div className="absolute top-[5%] left-1/2 transform -translate-x-1/2 m-0 w-120">
        <MagnetText text={messages[locale].hiText} size="large" />
      </div>

      {/* Moose Magnet - Switches to Swedish */}
      <div className="absolute top-[40%] left-[50%] transform -rotate-6">
        <MooseMagnet onClick={() => setLocale("sv")} />
      </div>

      {/* Moose Magnet - Switches to English */}
      <div className="absolute top-[40%] left-[70%] transform -rotate-6">
        <EagleMagnet onClick={() => setLocale("en")} />
      </div>

      {/* Dark Mode Toggle Magnet */}
      <div className="absolute top-[60%] left-[10%] transform rotate-12">
        <DarkModeMagnet isDarkMode={isDarkMode} onClick={onDarkModeToggle} />
      </div>
    </div>
  );
}
