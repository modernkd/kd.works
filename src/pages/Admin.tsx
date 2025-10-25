import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import { useCookieState } from '../hooks/useCookieState';
import { useLocale } from '../hooks/useLocale';
import { MetaTags } from '../hooks/useMetaTags';
import { useCurrentUser, useSignIn, useSignOut } from '../hooks/useAuth';
import { useAllNotes, useApproveNote, useRejectNote, useDeleteNote } from '../hooks/useNotes';
import { toggleDarkMode } from '../lib/themeUtils';
import styles from './Admin.module.css';

/**
 * Admin panel component for managing fridge notes.
 * Provides functionality to approve, reject, and delete notes submitted by users.
 * Requires authentication via magic link sent to admin email.
 */
export default function Admin() {
  const [locale, setLocale] = useLocale();
  const [isDarkMode, setIsDarkMode] = useCookieState<boolean>('darkMode', false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const { data: user } = useCurrentUser();
  const signInMutation = useSignIn();
  const signOutMutation = useSignOut();
  const { data: notes = [], isLoading: notesLoading } = useAllNotes();
  const approveNoteMutation = useApproveNote();
  const rejectNoteMutation = useRejectNote();
  const deleteNoteMutation = useDeleteNote();

  /**
   * Handles closing dropdown menus when clicking outside or scrolling.
   * Adds event listeners for mousedown and scroll events to close any open dropdown.
   */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    const handleScroll = () => {
      setOpenDropdown(null);
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll, true);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, []);

  /**
   * Initiates admin sign-in by sending a magic link to the admin email.
   * Uses Supabase auth to send the magic link with redirect to admin panel.
   */
  const signIn = async () => {
    try {
      await signInMutation.mutateAsync({
        email: 'admin@kd.works',
        redirectTo: `${window.location.origin}/admin`,
      });
      alert('Magic link sent to admin@kd.works');
    } catch (error) {
      console.error('Auth error:', error);
      alert('Failed to send magic link');
    }
  };

  /**
   * Handles admin sign-out by calling the sign-out mutation.
   * Logs any errors that occur during the sign-out process.
   */
  const signOutHandler = async () => {
    try {
      await signOutMutation.mutateAsync();
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  /**
   * Approves a note by calling the approve mutation.
   * Shows an alert if the operation fails.
   * @param noteId - The ID of the note to approve
   */
  const approveNoteHandler = async (noteId: number) => {
    try {
      await approveNoteMutation.mutateAsync(noteId);
    } catch (error) {
      console.error('Approve error:', error);
      alert('Failed to approve note');
    }
  };

  /**
   * Rejects a note by calling the reject mutation.
   * Shows an alert if the operation fails.
   * @param noteId - The ID of the note to reject
   */
  const rejectNoteHandler = async (noteId: number) => {
    try {
      await rejectNoteMutation.mutateAsync(noteId);
    } catch (error) {
      console.error('Reject error:', error);
      alert('Failed to reject note');
    }
  };

  /**
   * Deletes a note permanently after user confirmation.
   * Shows a confirmation dialog before proceeding with deletion.
   * @param noteId - The ID of the note to delete
   */
  const deleteNoteHandler = async (noteId: number) => {
    if (!confirm('Are you sure you want to permanently delete this note?')) {
      return;
    }

    try {
      await deleteNoteMutation.mutateAsync(noteId);
    } catch (error) {
      console.error('Delete error:', error);
      alert('Failed to delete note');
    }
  };

  /**
   * Toggles the dark mode theme for the application.
   */
  const handleToggleDarkMode = () => {
    setIsDarkMode(toggleDarkMode(isDarkMode));
  };

  /**
   * Toggles the dropdown menu for a specific note.
   * Positions the dropdown relative to the button that triggered it.
   * @param noteId - The ID of the note whose dropdown to toggle
   * @param event - The mouse event that triggered the toggle
   */
  const toggleDropdown = (noteId: number, event: React.MouseEvent) => {
    event.stopPropagation();
    const button = event.target as HTMLElement;
    const rect = button.getBoundingClientRect();

    if (openDropdown === noteId) {
      setOpenDropdown(null);
      return;
    }

    setOpenDropdown(noteId);

    setTimeout(() => {
      const dropdown = button.nextElementSibling as HTMLElement;
      if (dropdown) {
        dropdown.style.left = `${rect.left}px`;
        dropdown.style.top = `${rect.bottom + 4}px`;
      }
    }, 0);
  };

  /**
   * Handles actions from the dropdown menu for a specific note.
   * Closes the dropdown and performs the requested action.
   * @param action - The action to perform ('approve', 'reject', 'archive', 'delete')
   * @param noteId - The ID of the note to perform the action on
   */
  const handleAction = async (action: string, noteId: number) => {
    setOpenDropdown(null);

    switch (action) {
      case 'approve':
        await approveNoteHandler(noteId);
        break;
      case 'reject':
        await rejectNoteHandler(noteId);
        break;
      case 'archive':
        await rejectNoteHandler(noteId); // Archive by rejecting approved notes
        break;
      case 'delete':
        await deleteNoteHandler(noteId);
        break;
    }
  };

  /**
   * Applies the dark mode theme to the document root when isDarkMode changes.
   */
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  if (!user) {
    return (
      <>
        <MetaTags
          title="Admin - kd davis"
          description="Admin panel for managing fridge notes"
          image="/fridge-screenshot.webp"
          url="/admin"
        />
        <Header
          showDarkModeToggle={true}
          isDarkMode={isDarkMode}
          showBackLink={true}
          onDarkModeToggle={handleToggleDarkMode}
          locale={locale}
          linkTo="/fridge"
          linkText="fridge"
        />
        <main className={styles.adminContainer}>
          <div className={styles.loginForm}>
            <h1>{t('adminLoginTitle')}</h1>
            <p>{t('adminLoginDescription')}</p>
            <button onClick={signIn} disabled={signInMutation.isPending} className={styles.loginButton}>
              {signInMutation.isPending ? t('adminSendingButton') : t('adminSendButton')}
            </button>
          </div>
        </main>
        <Footer locale={locale} onLocaleChange={setLocale} />
      </>
    );
  }

  return (
    <>
      <MetaTags
        title="Admin - kd davis"
        description="Admin panel for managing fridge notes"
        image="/fridge-screenshot.webp"
        url="/admin"
      />
      <Header
        showDarkModeToggle={true}
        isDarkMode={isDarkMode}
        showBackLink={true}
        onDarkModeToggle={handleToggleDarkMode}
        locale={locale}
        linkTo="/fridge"
        linkText="Fridge"
        showSignOut={true}
        onSignOut={signOutHandler}
      />
      <main className={styles.adminContainer}>
        <div className={styles.adminPanel}>
          <h1>{t('adminNoteManagementTitle')}</h1>

          <div className={styles.notesTableContainer} ref={dropdownRef}>
            {notesLoading ? (
              <div className={styles.loadingContainer}>
                <p>Loading notes...</p>
              </div>
            ) : (
              <table className={styles.notesTable}>
                <thead>
                  <tr>
                    <th>{t('adminTableTitle')}</th>
                    <th>{t('adminTableMessage')}</th>
                    <th>{t('adminTableName')}</th>
                    <th>{t('adminTableEmail')}</th>
                    <th>{t('adminTableStatus')}</th>
                    <th>{t('adminTableDate')}</th>
                    <th>{t('adminTableActions')}</th>
                  </tr>
                </thead>
                <tbody>
                  {notes.map((note) => (
                    <tr key={note.id}>
                      <td className={styles.titleCell}>{note.title}</td>
                      <td className={styles.messageCell}>{note.message}</td>
                      <td>{note.name}</td>
                      <td>{note.email}</td>
                      <td>
                        <span className={`${styles.noteStatus} ${styles[`status-${note.status}`]}`}>{note.status}</span>
                      </td>
                      <td>{new Date(note.created_at).toLocaleDateString()}</td>
                      <td className={styles.actionsCell}>
                        <div className={styles.dropdown}>
                          <button onClick={(e) => toggleDropdown(note.id, e)} className={styles.dropdownTrigger}>
                            {t('adminActionsButton')} ▼
                          </button>
                          {openDropdown === note.id && (
                            <div className={styles.dropdownMenu}>
                              {note.status === 'pending' && (
                                <>
                                  <button
                                    onClick={() => handleAction('approve', note.id)}
                                    className={styles.dropdownItem}
                                  >
                                    {t('adminApproveButton')}
                                  </button>
                                  <button
                                    onClick={() => handleAction('reject', note.id)}
                                    className={styles.dropdownItem}
                                  >
                                    {t('adminRejectButton')}
                                  </button>
                                </>
                              )}
                              {note.status === 'approved' && (
                                <button
                                  onClick={() => handleAction('archive', note.id)}
                                  className={styles.dropdownItem}
                                >
                                  {t('adminArchiveButton')}
                                </button>
                              )}
                              <button
                                onClick={() => handleAction('delete', note.id)}
                                className={`${styles.dropdownItem} ${styles.deleteItem}`}
                              >
                                {t('adminDeleteButton')}
                              </button>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </main>
      <Footer locale={locale} onLocaleChange={setLocale} />
    </>
  );
}
