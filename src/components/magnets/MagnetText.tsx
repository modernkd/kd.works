import MagnetLetter from './MagnetLetter';
import styles from './MagnetText.module.css';

interface MagnetHeadingProps {
  text: string;
  size?: 'large' | 'medium';
  onLetterClick?: (letter: string) => void;
}

<<<<<<< Updated upstream
export default function MagnetText({ text, size = 'large', onLetterClick }: MagnetHeadingProps) {
  // Define colors for each letter position
  const colors = ['#f6a746', '#00B9ED', '#ED5053', '#00AF4F', '#8E509F', '#F9DE00', '#f6a746'];

=======
export default function MagnetText({ text, size = 'large', onLetterClick, onSave }: MagnetHeadingProps) {
  const { t } = useTranslation();
  const [isEditing, setIsEditing] = useState(false);
  const [currentText, setCurrentText] = useState(text);
  const [editValue, setEditValue] = useState(text);

  useEffect(() => {
    setCurrentText(text);
  }, [text]);

  const colors = ['#f6a746', '#00B9ED', '#ED5053', '#00AF4F', '#8E509F', '#F9DE00', '#f6a746'];

  /**
   * Enables editing mode for the magnet text.
   */
  const handleClick = () => {
    setIsEditing(true);
    setEditValue(currentText);
  };

  /**
   * Saves the edited text and exits editing mode.
   */
  const handleSave = () => {
    const newText = editValue;
    setCurrentText(newText);
    onSave?.(newText);
    setIsEditing(false);
  };

  /**
   * Cancels editing and reverts to original text.
   */
  const handleCancel = () => {
    setEditValue(currentText);
    setIsEditing(false);
  };

  /**
   * Handles keyboard shortcuts for editing (Ctrl+Enter to save, Escape to cancel).
   * @param e - Keyboard event
   */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  /**
   * Updates the edit value as user types.
   * @param e - Change event from textarea
   */
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditValue(e.target.value);
  };

  /**
   * Saves changes when user clicks away from the textarea.
   */
  const handleBlur = () => {
    handleSave();
  };

  if (isEditing) {
    return (
      <div className={`${styles.magnetHeading} ${styles[size]} ${styles.editing}`}>
        <div className={styles.editContainer}>
          <textarea
            className={styles.editTextarea}
            value={editValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            autoFocus
            placeholder={t('enterYourTextHere')}
          />
        </div>
        <div className={styles.editButtons}>
          <button onClick={handleSave} className={styles.saveButton}>
            {t('save')}
          </button>
          <button onClick={handleCancel} className={styles.cancelButton}>
            {t('cancel')}
          </button>
        </div>
      </div>
    );
  }

>>>>>>> Stashed changes
  return (
    <div className={`${styles.magnetHeading} ${styles[size]}`}>
      {text.split(' ').map((word, wordIndex) => (
        <span key={wordIndex} className={styles.word}>
          {word.split('').map((letter, index) => (
            <MagnetLetter
              key={index}
              letter={letter}
              color={colors[index % colors.length]}
              onClick={onLetterClick ? () => onLetterClick(letter) : undefined}
            />
          ))}
          <MagnetLetter letter=" " color="transparent" />
        </span>
      ))}
    </div>
  );
}
