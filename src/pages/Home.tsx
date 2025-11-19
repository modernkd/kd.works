import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocale } from '../hooks/useLocale';
import { useCookieState } from '../hooks/useCookieState';
import { MetaTags } from '../hooks/useMetaTags';
import Header from '../components/ui/Header';
import { toggleDarkMode } from '../lib/themeUtils';
import Footer from '../components/ui/Footer';
import { Highlight, themes } from 'prism-react-renderer';
import styles from './Home.module.css';

/**
 * Home page component that displays the portfolio introduction and developer journey.
 * Features syntax-highlighted code example and responsive design.
 */
export default function Portfolio() {
  const { t } = useTranslation();
  const [locale, setLocale] = useLocale();
  const [isDarkMode, setIsDarkMode] = useCookieState<boolean>('darkMode', false);

  /**
   * Applies dark mode theme to the document when isDarkMode state changes.
   */
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  /**
   * Toggles the dark mode theme for the application.
   */
  const handleToggleDarkMode = () => {
    setIsDarkMode(toggleDarkMode(isDarkMode));
  };

  return (
    <>
      <MetaTags
        title="Home"
        description="A creative portfolio website with interactive elements, built with React and TypeScript. Includes a real-time collaborative sound board app powered by PartyKit."
        image="/home-screenshot.webp"
        url="/"
      />
      <Header
        showDarkModeToggle={true}
        isDarkMode={isDarkMode}
        onDarkModeToggle={handleToggleDarkMode}
        locale={locale}
        showBackLink={false}
      />
      <main>
        <div className={styles.container}>
          <div className="markdown">
            <div className={styles.introSection}>
              <img
                src="/profile.webp"
                width="500"
                height="700"
                alt="kd holding some freshly acquired baguettes in Dublin"
                className={styles.profileImage}
              />
            </div>
            <h1 className="title">{t('homeTitle')}</h1>
            <div>
              <p className={styles.intro}>{t('homeIntro')}</p>
              <p className={styles.fridgeLink}>
                <a href="/fridge">{t('homeFridgeLink')}</a>
              </p>
              <div className={styles.section}>
                <h2>{t('homeDeveloperJourneyTitle')}</h2>
                <p>{t('homeDeveloperJourneyText')}</p>

                <Highlight
                  theme={isDarkMode ? themes.nightOwl : themes.oneLight}
                  code={`

async function developerLife() {
  try {

    const problems = await identifyBugs();
    const features = await gatherRequirements();

    const fuel = await getCaffeine();
    if (fuel < 50) {
      await drink(coffee || energyDrink);
    }

    await writeCode(problems, features);
    await refactorForReadability();
    await addComprehensiveTests();

    const testsPass = await runTestSuite();
    if (!testsPass) {

      await code();
    }

    await deployToProduction();
    await celebrateSuccess();

    await learnFromExperience();
    await planNextIteration();
  } catch (error) {
    if (error.name === 'BurnoutError') {
      await takeBreak();
      await rechargeBatteries();
    } else {
      console.error('Unexpected error:', error);
      await debugAndFix(error);
    }
  } finally {

    await sleep(8 * 60 * 60 * 1000); // 8 hours in ms
    developerLife();
  }
}

developerLife();
`}
                  language="javascript"
                >
                  {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre className={`${styles.codeBlock} ${className}`} style={style}>
                      {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line })}>
                          {line.map((token, key) => (
                            <span key={key} {...getTokenProps({ token })} />
                          ))}
                        </div>
                      ))}
                    </pre>
                  )}
                </Highlight>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer locale={locale} onLocaleChange={setLocale} />
    </>
  );
}
