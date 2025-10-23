import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import { useCookieState } from '../hooks/useCookieState';
import { useLocale } from '../hooks/useLocale';
import { MetaTags } from '../hooks/useMetaTags';
import { useCurrentUser, useSignIn, useSignOut } from '../hooks/useAuth';
import { useAllNotes, useApproveNote, useRejectNote, useDeleteNote } from '../hooks/useNotes';
import styles from './Admin.module.css';

export default function Admin() {
  const [locale, setLocale] = useLocale();
  const [isDarkMode, setIsDarkMode] = useCookieState<boolean>('darkMode', false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  // Use TanStack Query hooks
  const { data: user } = useCurrentUser();
  const signInMutation = useSignIn();
  const signOutMutation = useSignOut();
  const { data: notes = [], isLoading: notesLoading } = useAllNotes();
  const approveNoteMutation = useApproveNote();
  const rejectNoteMutation = useRejectNote();
  const deleteNoteMutation = useDeleteNote();

  // Close dropdown when clicking outside or scrolling
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

  const signOutHandler = async () => {
    try {
      await signOutMutation.mutateAsync();
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  const approveNoteHandler = async (noteId: number) => {
    try {
      await approveNoteMutation.mutateAsync(noteId);
    } catch (error) {
      console.error('Approve error:', error);
      alert('Failed to approve note');
    }
  };

  const rejectNoteHandler = async (noteId: number) => {
    try {
      await rejectNoteMutation.mutateAsync(noteId);
    } catch (error) {
      console.error('Reject error:', error);
      alert('Failed to reject note');
    }
  };

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

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleDropdown = (noteId: number, event: React.MouseEvent) => {
    event.stopPropagation();
    const button = event.target as HTMLElement;
    const rect = button.getBoundingClientRect();

    if (openDropdown === noteId) {
      setOpenDropdown(null);
      return;
    }

    setOpenDropdown(noteId);

    // Position the dropdown dynamically after state update
    setTimeout(() => {
      const dropdown = button.nextElementSibling as HTMLElement;
      if (dropdown) {
        dropdown.style.left = `${rect.left}px`;
        dropdown.style.top = `${rect.bottom + 4}px`;
      }
    }, 0);
  };

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

  // Update theme attribute on document element
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
          onDarkModeToggle={toggleDarkMode}
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
        onDarkModeToggle={toggleDarkMode}
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
                      <td>{new Date(note.createdAt).toLocaleDateString()}</td>
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
