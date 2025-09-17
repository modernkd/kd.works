import MagnetText from "./MagnetText";
import FamilyWhiteboard from "./FamilyWhiteboard";
import { messages, Locale } from "../../../i18n";

interface FridgeSectionProps {
  locale: Locale;
  isDarkMode: boolean;
}

export default function FridgeSection({ locale, isDarkMode }: FridgeSectionProps) {
  const mainText = messages[locale].mainText;

  return (
    <div className="fridge-section flex-1 pt-4">
      <div className="flex flex-col items-center space-y-3">
        <div className="w-100">
          <MagnetText text={mainText} size="medium" />
        </div>

        {/* Family Whiteboard */}
        <div className="mt-3">
          <FamilyWhiteboard isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
}
