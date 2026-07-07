// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects-amp-research",
          title: "projects &amp; research",
          description: "Ongoing research and side projects in economics, data science, and web development.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Gavin Qu&#39;s Curriculum Vitae.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-what-anthropic-and-costco-got-right-about-human-psychology",
        
          title: 'What Anthropic and Costco Got Right About Human Psychology <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "The hidden economics of decoys, memberships, and $1.50 hot dogs — exploring the decoy effect, prospect theory, and reciprocity through Anthropic&#39;s Claude pricing tiers and Costco&#39;s rotisserie chicken.",
        section: "Posts",
        handler: () => {
          
            window.open("https://gavinq.substack.com/p/what-anthropic-and-costco-get-right", "_blank");
          
        },
      },{id: "post-the-network-science-that-dictates-your-life",
        
          title: 'The Network Science That Dictates Your Life <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "What does big fish in small pond have in common with choosing restaurants? A tour through the friendship paradox, homophily, and coordination games that quietly shape careers and everyday choices.",
        section: "Posts",
        handler: () => {
          
            window.open("https://gavinq.substack.com/p/the-network-science-that-dictates", "_blank");
          
        },
      },{id: "post-pca-like-a-croissant-that-flattens-over-time",
        
          title: 'PCA - Like a Croissant that Flattens Over Time <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "A mini-blog explaining Principal Component Analysis using a croissant analogy, covering eigenvalues, dimensionality reduction, and applications in demand estimation.",
        section: "Posts",
        handler: () => {
          
            window.open("https://gavinq.substack.com/p/pca-like-a-croissant-that-flattens", "_blank");
          
        },
      },{id: "post-specialists-vs-generalists-in-the-age-of-hyperspecialization",
        
          title: 'Specialists vs. Generalists in the Age of Hyperspecialization <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "A Thanksgiving reflection on comparative advantage, the division of labor, and hyperspecialization, illustrated by a botanist turned EA game developer and Adam Smith&#39;s pin factory.",
        section: "Posts",
        handler: () => {
          
            window.open("https://gavinq.substack.com/p/thanksgiving-in-the-age-of-hyperspecialization", "_blank");
          
        },
      },{id: "post-the-economics-and-data-science-of-online-dating",
        
          title: 'The Economics and Data Science of Online Dating <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "A book review of Paul Oyer&#39;s Economics of Online Dating, exploring search theory, costly signaling, network externalities, statistical discrimination, and bargaining in modern romance.",
        section: "Posts",
        handler: () => {
          
            window.open("https://gavinq.substack.com/p/the-economics-of-online-dating", "_blank");
          
        },
      },{id: "post-from-medical-charts-to-economic-markets",
        
          title: 'From Medical Charts to Economic Markets <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Using K-means clustering on UKHLS health data to identify three distinct health trajectory types and their impact on labor market outcomes, gender disparities, and educational attainment.",
        section: "Posts",
        handler: () => {
          
            window.open("https://gavinq.substack.com/p/from-medical-charts-to-economic-markets", "_blank");
          
        },
      },{id: "post-why-i-chose-to-study-in-the-uk",
        
          title: "Why I Chose to Study in the UK",
        
        description: "A personal account of choosing to study economics at the University of Essex in the UK, comparing European and US graduate programs, and reflecting on a year abroad.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/uk-year-in-review/";
          
        },
      },{id: "post-first-attempt-at-economic-research",
        
          title: "First Attempt at Economic Research",
        
        description: "A first attempt at economic research using propensity score matching to study the causal effect of marital status on earnings using the UKHLS dataset.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/data-cleaning/";
          
        },
      },{id: "post-my-first-blog-post",
        
          title: 'My First Blog Post <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "A first blog post about the learning pyramid and the journey of learning Machine Learning from theory to application, including recommended books and resources.",
        section: "Posts",
        handler: () => {
          
            window.open("https://gavinq.substack.com/p/first-attempt-at-economic-research", "_blank");
          
        },
      },{id: "projects-causal-inference-methods-in-economics",
          title: 'Causal Inference Methods in Economics',
          description: "Python reimplementations of classic causal inference papers — randomized experiments, matching, difference-in-differences, instrumental variables, and regression discontinuity.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/causal_inference_notes/";
            },},{id: "projects-chronic-illness-and-labor-market-outcomes",
          title: 'Chronic Illness and Labor Market Outcomes',
          description: "An extension of my K-means health-trajectory research, studying how chronic illness onset affects labor market outcomes using a continuous difference-in-differences design.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/chronic_illness_labor_did/";
            },},{id: "projects-econjobmarket-placement-database",
          title: 'EconJobMarket Placement Database',
          description: "Scrapes and structures economics PhD placement data from 75 top US programs (1987–2025) into a portable SQLite database for analyzing hiring trends and sector breakdowns.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/econ_job_market/";
            },},{id: "projects-advice-for-phd-students-in-economics",
          title: 'Advice for PhD Students in Economics',
          description: "A community-maintained collection of resources and advice for economists, from undergraduates considering a PhD to students on the job market.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/econ_phd_advice/";
            },},{id: "projects-health-trajectories-research",
          title: 'Health Trajectories Research',
          description: "K-means clustering of health trajectories using UKHLS panel data",
          section: "Projects",handler: () => {
              window.location.href = "/projects/health_trajectories/";
            },},{id: "projects-math-amp-econ-latex-template",
          title: 'Math &amp;amp; Econ LaTeX Template',
          description: "A LaTeX template for economics and math papers, lecture notes, beamer slides, and problem sets, with shared macros and a one-line switch between biblatex and natbib.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/math_econ_template/";
            },},{id: "projects-personal-portfolio-site",
          title: 'Personal Portfolio Site',
          description: "Academic portfolio and blog built with Jekyll and al-folio",
          section: "Projects",handler: () => {
              window.location.href = "/projects/portfolio_site/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/GJQu", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/gavinqu", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/GavinJQu", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
