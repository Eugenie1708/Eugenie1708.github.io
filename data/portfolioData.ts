import { Project, ProjectCategory } from '../types';

export const profileData = {
  name: "Eugenie (I Chia) Lai",
  initials: "EL",
  title: "Competitive Intelligence Analyst / Data Lead",
  tagline: "Bridging Data and Strategic Action",
  about: "I enjoy solving problems through data analysis that bridges the gap between raw numbers and strategic action. With experience in Data Visualization and Business Analytics, I transform complex datasets into clear, actionable business insights. I am deeply interested in Business Intelligence and Strategy, with hands-on experience in Power BI, Tableau, Python, R, SQL, NoSQL, and Figma.",
  social: {
    linkedin: "https://www.linkedin.com/in/lai-ichia-eugenie/", // Placeholder based on name
    github: "https://github.com/Eugenie1708",
    email: "eugenielai2013@gmail.com"
  }
};

export const portfolioProjects: Project[] = [
  // --- Featured Project ---
  {
    id: 'usdt-analysis',
    title: 'USDT Competitive Intelligence Report',
    category: ProjectCategory.FINANCE,
    description: 'A comprehensive on-chain analysis comparing USDT market positioning against USDC, DAI, and PYUSD using Dune Analytics and Python.',
    longDescription: 'Identified that while USDC dominates DeFi, USDT holds a massive lead in retail/micro-transactions (<$1k). Developed a "Stickiness/Velocity" metric showing most wallet interactions are single-day events. Proposed aggressive Layer 2 integration (Arbitrum/Base) to defend the retail moat.',
    imageUrl: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=1000',
    technologies: ['Dune Analytics', 'SQL', 'Python', 'Google Colab'],
    impact: 'Formalized P2P "Unlabeled" flows and provided strategic recommendations for L2 integration.',
    resources: [
      { label: 'Live Dashboard', url: 'https://dune.com/eugenielai_team_3740/badm-554-group2-miniproject2' },
      { label: 'SQL Documentation', url: 'https://github.com/Eugenie1708/Stablecoin-Analysis/blob/main/miniProject2_Queries.md' },
      { label: 'Full Report', url: 'https://docs.google.com/document/d/1jbcZu080txQ_7ecMS1V4Ng6YI_WYP1E9SKpx6WcHDAw/edit?tab=t.loxixqy8segu#heading=h.ccv4xyuhdihq' }
    ]
  },

  // --- BI & Strategy ---
  {
    id: 'fortune-1000',
    title: 'Fortune 1000 Landscape Analysis',
    category: ProjectCategory.BI,
    description: 'Multi-dimensional analysis of the Fortune 1000 landscape to evaluate business performance across sectors, geography, and workforce metrics.',
    longDescription: 'Visualized disparity between top profitable vs. loss-making companies. Calculated "Revenue Per Employee" to identify high-efficiency sectors. Mapped revenue generation by city/state density and tracked rank shifts (2019 vs 2020) to identify emerging market leaders.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    technologies: ['Tableau', 'Data Storytelling', 'Financial Analysis'],
    impact: 'Identified high-efficiency sectors versus labor-intensive industries through custom metrics.',
    resources: []
  },
  {
    id: 'yelp-strategy',
    title: 'Business Location & Strategy Analytics',
    category: ProjectCategory.BI,
    description: 'Analyzed store-opening strategies by modeling customer check-ins, ratings, and geographic patterns using the Yelp Dataset.',
    longDescription: 'Built an end-to-end data pipeline: Python preprocessing → Azure SQL upload → SQL analytics queries. Produced insights on optimal business positioning using SQL aggregations, joins, and time-based patterns.',
    imageUrl: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&q=80&w=1000',
    technologies: ['Python', 'Azure SQL', 'SQL', 'Data Modeling'],
    resources: []
  },
  {
    id: 'hr-dashboard',
    title: 'HR Talent & Profitability Dashboards',
    category: ProjectCategory.BI,
    description: 'Dynamic dashboards providing executives visibility into labor costs, contract margins, and bid-level profitability for Seventh Sense.',
    longDescription: 'Streamlined data intake workflows using MS Forms/Excel, reducing reporting cycle time. Documented data workflow and dashboard logic to support team onboarding and client transparency.',
    imageUrl: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80&w=1000',
    technologies: ['Power BI', 'DAX', 'Excel', 'Microsoft Forms'],
    impact: 'Reduced reporting cycle time and improved executive visibility into contract margins.',
    resources: []
  },

  // --- UI/UX ---
  {
    id: 'esg-ui',
    title: 'ESG Management System Interface',
    category: ProjectCategory.UI_UX,
    description: 'High-fidelity user interface for an enterprise-level ESG management system at SYSTEX Corp.',
    longDescription: 'Translated complex carbon-emission data requirements into an intuitive user journey. The clarified design requirements bridged the gap between business needs and engineering.',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000',
    technologies: ['Figma', 'UI/UX Design', 'Prototyping'],
    impact: 'Accelerated product development timeline by 6 months.',
    resources: []
  },
  {
    id: 'sustainability-dash',
    title: 'Sustainability Analytics Dashboard',
    category: ProjectCategory.UI_UX,
    description: 'Comprehensive dashboard prototype for the GIES Case Competition to visualize complex sustainability metrics.',
    longDescription: 'Focused on Information Architecture to ensure executives can distinguish between high-level ESG goals and granular operational data. Designed interactive user flows for drill-down capabilities.',
    imageUrl: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1000',
    technologies: ['Figma', 'Data Storytelling', 'Prototyping'],
    resources: []
  },

  // --- Data Science ---
  {
    id: 'love-satisfaction-research',
    title: 'Relationship Satisfaction & Parenting Styles',
    category: ProjectCategory.DATA_SCI,
    description: 'Statistical research (Jan-Nov 2024) analyzing the correlation between attachment styles, parenting, and relationship satisfaction for ages 18-25.',
    longDescription: 'Developed and executed an online survey focused on romantic relationships among individuals aged 18-25, gathering around 400 responses. Applied Python and R to perform data preprocessing, ANOVA, clustering, and regression analyses, revealing a positive correlation between responsive parenting styles and relationship satisfaction. Led a team in brainstorming research themes, supervised literature review processes, and facilitated group discussions to align objectives.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000',
    technologies: ['R', 'Python', 'ANOVA', 'Clustering', 'Survey Analysis'],
    impact: 'Demonstrated ability to handle large survey data, text processing, and lead social science research projects.',
    resources: []
  },
  /* Additional Data Science Projects{
    id: 'substance-use',
    title: 'Substance Use Prediction App',
    category: ProjectCategory.DATA_SCI,
    description: 'Interactive web application to forecast substance use tendencies using K-Means and KNN models.',
    longDescription: 'Developed a full-stack application implementing predictive models directly within the application logic. Preprocessed raw data using Python to ensure quality and consistency.',
    imageUrl: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?auto=format&fit=crop&q=80&w=1000',
    technologies: ['Python', 'Scikit-learn', 'PHP', 'SQL'],
    resources: []
  },
  */
 /*
  {
    id: 'traffic-accidents',
    title: 'Taiwan Traffic Accident Analysis',
    category: ProjectCategory.DATA_SCI,
    description: 'Advanced analysis of Taiwan’s A2-level traffic accident dataset to predict fatalities among at-fault drivers.',
    longDescription: 'Implemented classification models (KNN, K-Means) to analyze risk factors and predict outcomes for traffic safety improvements.',
    imageUrl: 'https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&q=80&w=1000',
    technologies: ['Python', 'Pandas', 'Scikit-learn'],
    resources: []
  },
  */
  {
    id: 'digital-adaptation',
    title: 'Digital Adaptation Analysis',
    category: ProjectCategory.DATA_SCI,
    description: 'Regression and factor analyses to evaluate digital development adaptation across employed age groups.',
    longDescription: 'Identified low digital adaptation levels among urban, well-educated women. Provided actionable recommendations based on statistical findings using R and Python.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    technologies: ['Python', 'R', 'Statistical Analysis'],
    resources: []
  },

  // --- Data Engineering ---
  {
    id: 'esg-pipeline',
    title: 'Automated ESG Data Pipeline',
    category: ProjectCategory.DATA_ENG,
    description: 'Automated collection of external carbon-related data reducing manual effort for SYSTEX Corp.',
    longDescription: 'Built scripts using Selenium and BeautifulSoup. Integrated Python with Power Automate and SQL for seamless data ingestion. Achieved 3rd place in Internship Proposal Competition.',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1000',
    technologies: ['Python', 'Selenium', 'Power Automate', 'SQL'],
    impact: 'Won 3rd place in Internship Proposal Competition.',
    resources: []
  },
  /*
  {
    id: 'vc-tooling',
    title: 'VC Due Diligence Tooling',
    category: ProjectCategory.DATA_ENG,
    description: 'Web scraping tool to gather target information on U.S. solar panel innovative material patents for Orchid Group.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    technologies: ['Python', 'Web Scraping', 'Data Collection'],
    impact: 'Efficiently delivered comprehensive due diligence reports.',
    resources: []
  },
  */
];
