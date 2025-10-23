import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import { useCookieState } from '../hooks/useCookieState';
import { useLocale } from '../hooks/useLocale';
import { MetaTags } from '../hooks/useMetaTags';
import styles from './Admin.module.css';
import { supabase } from '../lib/supabase';
import type { User } from '@supabase/supabase-js';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
  type ColumnDef,
  type SortingState,
} from '@tanstack/react-table';

interface Note {
  id: number;
  name: string;
  email: string;
  title: string;
  message: string;
  status: string;
  created_at: string;
  approved_at?: string;
}

const getColumns = (
  t: (key: string) => string,
  toggleDropdown: (noteId: number, event: React.MouseEvent) => void,
  openDropdown: number | null,
  handleAction: (action: string, noteId: number) => Promise<void>
): ColumnDef<Note>[] => [
  {
    accessorKey: 'title',
    header: ({ column }) => (
      <button onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')} className={styles.sortButton}>
        {t('adminTableTitle')}
        {{
          asc: ' 🔼',
          desc: ' 🔽',
        }[column.getIsSorted() as string] ?? ''}
      </button>
    ),
    cell: ({ getValue }) => <span className={styles.titleCell}>{getValue() as string}</span>,
  },
  {
    accessorKey: 'message',
    header: ({ column }) => (
      <button onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')} className={styles.sortButton}>
        {t('adminTableMessage')}
        {{
          asc: ' 🔼',
          desc: ' 🔽',
        }[column.getIsSorted() as string] ?? ''}
      </button>
    ),
    cell: ({ getValue }) => <span className={styles.messageCell}>{getValue() as string}</span>,
  },
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <button onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')} className={styles.sortButton}>
        {t('adminTableName')}
        {{
          asc: ' 🔼',
          desc: ' 🔽',
        }[column.getIsSorted() as string] ?? ''}
      </button>
    ),
  },
  {
    accessorKey: 'email',
    header: ({ column }) => (
      <button onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')} className={styles.sortButton}>
        {t('adminTableEmail')}
        {{
          asc: ' 🔼',
          desc: ' 🔽',
        }[column.getIsSorted() as string] ?? ''}
      </button>
    ),
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <button onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')} className={styles.sortButton}>
        {t('adminTableStatus')}
        {{
          asc: ' 🔼',
          desc: ' 🔽',
        }[column.getIsSorted() as string] ?? ''}
      </button>
    ),
    cell: ({ getValue }) => {
      const status = getValue() as string;
      return <span className={`${styles.noteStatus} ${styles[`status-${status}`]}`}>{status}</span>;
    },
  },
  {
    accessorKey: 'created_at',
    header: ({ column }) => (
      <button onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')} className={styles.sortButton}>
        {t('adminTableDate')}
        {{
          asc: ' 🔼',
          desc: ' 🔽',
        }[column.getIsSorted() as string] ?? ''}
      </button>
    ),
    cell: ({ getValue }) => new Date(getValue() as string).toLocaleDateString(),
  },
  {
    id: 'actions',
    header: () => t('adminTableActions'),
    cell: ({ row }) => {
      const note = row.original;
      return (
        <div className={styles.actionsCell}>
          <div className={styles.dropdown}>
            <button onClick={(e) => toggleDropdown(note.id, e)} className={styles.dropdownTrigger}>
              {t('adminActionsButton')} ▼
            </button>
            {openDropdown === note.id && (
              <div className={styles.dropdownMenu}>
                {note.status === 'pending' && (
                  <>
                    <button onClick={() => handleAction('approve', note.id)} className={styles.dropdownItem}>
                      {t('adminApproveButton')}
                    </button>
                    <button onClick={() => handleAction('reject', note.id)} className={styles.dropdownItem}>
                      {t('adminRejectButton')}
                    </button>
                  </>
                )}
                {note.status === 'approved' && (
                  <button onClick={() => handleAction('archive', note.id)} className={styles.dropdownItem}>
                    {t('adminArchiveButton')}
                  </button>
                )}
                {note.status === 'rejected' && (
                  <button onClick={() => handleAction('reapprove', note.id)} className={styles.dropdownItem}>
                    {t('adminReapproveButton')}
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
        </div>
      );
    },
  },
];

export default function Admin() {
  const [user, setUser] = useState<User | null>(null);
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(false);
  const [locale, setLocale] = useLocale();
  const [isDarkMode, setIsDarkMode] = useCookieState<boolean>('darkMode', false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [sorting, setSorting] = useState<SortingState>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  // Check if user is already authenticated
  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      if (user) {
        fetchNotes();
      }
    };
    checkUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchNotes();
      }
    });

    return () => subscription.unsubscribe();
  }, []);

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
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email: 'admin@kd.works',
        options: {
          emailRedirectTo: `${window.location.origin}/admin`,
          data: {
            role: 'admin',
          },
        },
      });

      if (error) {
        alert('Failed to send magic link');
      } else {
        alert('Magic link sent to admin@kd.works');
      }
    } catch (error) {
      console.error('Auth error:', error);
      alert('Failed to send magic link');
    }
    setLoading(false);
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setNotes([]);
  };

  const fetchNotes = async () => {
    try {
      console.log('Fetching notes...');
      const {
        data: { user },
      } = await supabase.auth.getUser();
      console.log('Current user:', user);

      const { data, error } = await supabase.from('notes').select('*').order('created_at', { ascending: false });

      if (error) {
        console.error('Fetch notes error:', error);
        console.error('Error details:', error.message, error.details, error.hint);
        console.error('Error code:', error.code);
      } else {
        console.log('Fetched notes:', data);
        setNotes(data || []);
      }
    } catch (error) {
      console.error('Fetch notes error:', error);
    }
  };

  const approveNote = async (noteId: number) => {
    try {
      console.log(`Approving note ${noteId}`);
      const { error } = await supabase
        .from('notes')
        .update({
          status: 'approved',
          approved_at: new Date().toISOString(),
        })
        .eq('id', noteId);

      if (error) {
        console.error('Approve error:', error);
        alert('Failed to approve note');
      } else {
        console.log(`Note ${noteId} approved successfully`);
        fetchNotes();
      }
    } catch (error) {
      console.error('Approve error:', error);
      alert('Failed to approve note');
    }
  };

  const rejectNote = async (noteId: number) => {
    try {
      const { error } = await supabase.from('notes').update({ status: 'rejected' }).eq('id', noteId);

      if (error) {
        alert('Failed to reject note');
      } else {
        fetchNotes();
      }
    } catch (error) {
      console.error('Reject error:', error);
      alert('Failed to reject note');
    }
  };

  const deleteNote = async (noteId: number) => {
    if (!confirm('Are you sure you want to permanently delete this note?')) {
      return;
    }

    try {
      const { error } = await supabase.from('notes').delete().eq('id', noteId);

      if (error) {
        alert('Failed to delete note');
      } else {
        fetchNotes();
      }
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
        const containerRect = dropdownRef.current?.getBoundingClientRect();
        if (containerRect) {
          // Calculate position relative to the container
          const relativeLeft = rect.left - containerRect.left;
          const relativeTop = rect.bottom - containerRect.top + 4;

          dropdown.style.position = 'absolute';
          dropdown.style.left = `${relativeLeft}px`;
          dropdown.style.top = `${relativeTop}px`;
        } else {
          // Fallback to viewport positioning
          dropdown.style.left = `${rect.left}px`;
          dropdown.style.top = `${rect.bottom + 4}px`;
        }
      }
    }, 0);
  };

  const handleAction = async (action: string, noteId: number) => {
    setOpenDropdown(null);

    switch (action) {
      case 'approve':
        await approveNote(noteId);
        break;
      case 'reject':
        await rejectNote(noteId);
        break;
      case 'reapprove':
        console.log(`Reapproving note ${noteId}`);
        await approveNote(noteId);
        break;
      case 'archive':
        await rejectNote(noteId); // Archive by rejecting approved notes
        break;
      case 'delete':
        await deleteNote(noteId);
        break;
    }
  };

  const columns = getColumns(t, toggleDropdown, openDropdown, handleAction);
  const table = useReactTable({
    data: notes,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    },
  });

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
            <button onClick={signIn} disabled={loading} className={styles.loginButton}>
              {loading ? t('adminSendingButton') : t('adminSendButton')}
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
        onSignOut={signOut}
      />
      <main className={styles.adminContainer}>
        <div className={styles.adminPanel}>
          <h1>{t('adminNoteManagementTitle')}</h1>

          <div className={styles.notesTableContainer} ref={dropdownRef}>
            <table className={styles.notesTable}>
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th key={header.id}>
                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.map((row) => (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer locale={locale} onLocaleChange={setLocale} />
    </>
  );
}
