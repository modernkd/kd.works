import { u as c, r as l, j as e } from './react-CcLub2mw.js';
import { u as d, a as h, H as u, F as f } from './useCookieState-5EX9I0OU.js';
const m = '_container_1fshu_1',
  p = '_intro_1fshu_6',
  g = '_section_1fshu_14',
  x = '_codeBlock_1fshu_18',
  k = '_profileImage_1fshu_30',
  j = '_introSection_1fshu_51',
  w = '_fridgeLink_1fshu_65',
  o = {
    container: m,
    intro: p,
    section: g,
    codeBlock: x,
    profileImage: k,
    introSection: j,
    fridgeLink: w,
  };
function v() {
  const { t: s } = c(),
    [i, r] = d(),
    [t, a] = h('darkMode', !1);
  l.useEffect(() => {
    t
      ? document.documentElement.setAttribute('data-theme', 'dark')
      : document.documentElement.removeAttribute('data-theme');
  }, [t]);
  const n = () => {
    a(!t);
  };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(u, {
        showDarkModeToggle: !0,
        isDarkMode: t,
        onDarkModeToggle: n,
        locale: i,
        showBackLink: !1,
      }),
      e.jsx('main', {
        children: e.jsx('div', {
          className: o.container,
          children: e.jsxs('div', {
            className: 'markdown',
            children: [
              e.jsx('div', {
                className: o.introSection,
                children: e.jsx('img', {
                  src: '/profile.jpeg',
                  width: '500',
                  height: '700',
                  alt: 'kd holding some freshly acquired baguettes in Dublin',
                  className: o.profileImage,
                }),
              }),
              e.jsx('h1', { className: 'title', children: s('homeTitle') }),
              e.jsxs('div', {
                children: [
                  e.jsx('p', { className: o.intro, children: s('homeIntro') }),
                  e.jsx('p', {
                    className: o.fridgeLink,
                    children: e.jsx('a', {
                      href: '/fridge',
                      children: s('homeFridgeLink'),
                    }),
                  }),
                  e.jsxs('div', {
                    className: o.section,
                    children: [
                      e.jsx('h2', { children: s('homeDeveloperJourneyTitle') }),
                      e.jsx('p', { children: s('homeDeveloperJourneyText') }),
                      e.jsx('pre', {
                        className: o.codeBlock,
                        children: e.jsx('code', {
                          children: `// The Developer's Infinite Loop
async function developerLife() {
  try {
    while (true) {
      // Phase 1: Problem Discovery
      const problems = await identifyBugs();
      const features = await gatherRequirements();

      // Phase 2: Fuel Acquisition
      const fuel = await getCaffeine();
      if (fuel < 50) {
        await drink(coffee || energyDrink);
      }

      // Phase 3: The Magic Happens
      await writeCode(problems, features);
      await refactorForReadability();
      await addComprehensiveTests();

      // Phase 4: Quality Assurance
      const testsPass = await runTestSuite();
      if (!testsPass) {
        console.log("🔧 Fixing bugs...");
        continue; // Back to coding!
      }

      // Phase 5: Deployment & Celebration
      await deployToProduction();
      await celebrateSuccess();

      // Phase 6: Reflection & Growth
      await learnFromExperience();
      await planNextIteration();

      // Brief pause before the next cycle
      await sleep(8 * 60 * 60 * 1000); // 8 hours in ms
    }
  } catch (error) {
    if (error.name === 'BurnoutError') {
      await takeBreak();
      await rechargeBatteries();
    } else {
      console.error('Unexpected error:', error);
      await debugAndFix(error);
    }
    return developerLife(); // Recursion saves the day!
  }
}

// Start the endless cycle
developerLife();`,
                        }),
                      }),
                    ],
                  }),
                  e.jsxs('div', {
                    className: o.section,
                    children: [
                      e.jsx('h2', { children: s('homeLifeBeyondCodeTitle') }),
                      e.jsx('p', { children: s('homeLifeBeyondCodeText') }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      e.jsx(f, { locale: i, onLocaleChange: r }),
    ],
  });
}
export { v as default };
//# sourceMappingURL=Home-x32jHZ0j.js.map
