export const profile = {
  name: 'Devashish Dobhal',
  initials: 'DD',
  role: 'B.Tech CSE student and web developer with a growing AI/ML project portfolio.',
  headline:
    'I build practical web experiences, Python projects, and machine learning demos while continuously sharpening my engineering fundamentals.',
  summary:
    'Motivated Computer Science Engineering student at Uttaranchal University with a strong foundation in Java, Python, C, web development, and cybersecurity basics.',
  location: 'Pauri Garhwal, Uttarakhand, India',
  university: 'Uttaranchal University, Dehradun',
  degree: 'B.Tech CSE (Pursuing)',
  availability: 'Open to internships, web development roles, and AI/ML projects',
  focus: 'Web development, Python, machine learning, cybersecurity, and practical product thinking',
  email: 'devashishdobhal9@gmail.com',
  phone: '+91 9761860922',
  github: 'https://github.com/devashishdobhal',
  linkedin: 'https://www.linkedin.com/in/devashish-dobhal-52697b370/?skipRedirect=true',
  resume: `${import.meta.env.BASE_URL}Devashish_Dobhal_Resume.docx`,
}

export const stats = [
  { value: '7', label: 'Public GitHub repos' },
  { value: 'B.Tech', label: 'CSE student' },
  { value: '2024', label: 'LG internship' },
  { value: 'UIT', label: 'Ethical hacking training' },
]

export const services = [
  {
    type: 'Websites',
    title: 'Web development',
    description:
      'Responsive websites and browser-based interfaces using HTML, CSS, JavaScript, and Python-backed app ideas.',
  },
  {
    type: 'Apps',
    title: 'AI/ML projects',
    description:
      'Beginner-friendly machine learning and deep learning projects using Python, TensorFlow/Keras, Scikit-learn, and notebooks.',
  },
  {
    type: 'Content',
    title: 'Security mindset',
    description:
      'Cybersecurity fundamentals from ethical hacking training, vulnerability awareness, and controlled penetration-testing practice.',
  },
]

export const experienceItems = [
  {
    title: 'Intern at LG',
    organization: 'LG',
    period: '2024',
    highlights: [
      'Worked with the broader development team to support software and application development.',
      'Managed website design and content updates to improve functionality and visual appeal.',
      'Contributed to the development and implementation of a barcode reader system.',
    ],
  },
  {
    title: 'Ethical Hacking Training',
    organization: 'Uttaranchal Institute of Technology (UIT)',
    period: '2023',
    highlights: [
      'Gained foundational knowledge of ethical hacking principles and cybersecurity practices.',
      'Practiced security techniques in a controlled environment to understand system vulnerabilities.',
      'Conducted penetration testing on a local website to identify and analyze loopholes.',
    ],
  },
  {
    title: 'Computer Science Engineering',
    organization: 'Uttaranchal University, Dehradun',
    period: 'Pursuing',
    highlights: [
      'Building core engineering knowledge through programming, web development, and practical projects.',
      'Completed Class 12 from CBSE Board in 2023 and Class 10 from CBSE Board in 2020.',
      'Schooling from Kendriya Vidyalaya Pauri, Uttarakhand.',
    ],
  },
]

export const featuredProjects = [
  {
    title: 'Fashion Classification',
    type: 'Fashion MNIST image classifier',
    description:
      'Deep learning project that trains a CNN on Fashion MNIST and connects the saved model to a simple Flask web app for browser-based image classification.',
    stack: ['Python', 'TensorFlow', 'Keras', 'Flask', 'Jupyter'],
    link: 'https://github.com/devashishdobhal/FASHION-CLASSIFICATION',
    accent: 'lime',
  },
  {
    title: 'Graduate Admission Predictor',
    type: 'ANN regression predictor',
    description:
      'Predicts graduate admission chances from GRE, TOEFL, CGPA, SOP, LOR, research experience, and university rating using a neural network model.',
    stack: ['Python', 'Keras', 'Scikit-learn', 'Pandas', 'Gradio'],
    link: 'https://github.com/devashishdobhal/GRADUATE-ADMISSION-PREDICTOR',
    accent: 'pink',
  },
  {
    title: 'Cat vs Dog Classification',
    type: 'Computer vision classifier',
    description:
      'CNN-based image classification project for predicting whether an uploaded image contains a cat or dog, with a Streamlit app workflow.',
    stack: ['Python', 'TensorFlow', 'Keras', 'Streamlit', 'OpenCV'],
    link: 'https://github.com/devashishdobhal/CAT-VS-DOG-CLASSIFICATION',
    accent: 'cyan',
  },
  {
    title: 'Emoji Predictions Using LSTM',
    type: 'NLP sequence model',
    description:
      'Text-to-emoji prediction project using an LSTM model to learn emotional and semantic context from short input sentences.',
    stack: ['Python', 'LSTM', 'TensorFlow', 'Keras', 'NLP'],
    link: 'https://github.com/devashishdobhal/Emoji-Predictions-Using-Istm',
    accent: 'orange',
  },
  {
    title: 'Titanic Survival Predictions',
    type: 'Machine learning classifier',
    description:
      'Classic supervised learning project that predicts Titanic passenger survival using cleaned tabular features and classification models.',
    stack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Seaborn'],
    link: 'https://github.com/devashishdobhal/Titanic-Survival-Predictions',
    accent: 'lime',
  },
  {
    title: 'Weather Prediction',
    type: 'Forecasting practice project',
    description:
      'Machine learning practice project for predicting weather metrics from historical data using Python notebooks and common data science libraries.',
    stack: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Colab'],
    link: 'https://github.com/devashishdobhal/WEATHER-PREDICTION',
    accent: 'pink',
  },
  {
    title: 'Devashish Dobhal',
    type: 'Personal GitHub repository',
    description:
      'Profile repository introducing Devashish as a B.Tech student interested in web development, Java, Python, HTML, and continuous learning.',
    stack: ['Python', 'Java', 'HTML', 'Learning'],
    link: 'https://github.com/devashishdobhal/Devashish-Dobhal',
    accent: 'cyan',
  },
]

export const skills = [
  {
    title: 'Programming',
    items: ['Java', 'Python', 'C', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'AI / ML',
    items: ['Machine Learning', 'Deep Learning', 'TensorFlow', 'Keras', 'Scikit-learn'],
  },
  {
    title: 'Data Tools',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
  },
  {
    title: 'Web',
    items: ['Responsive UI', 'Flask', 'Streamlit', 'Gradio', 'Website updates'],
  },
  {
    title: 'Security',
    items: ['Ethical Hacking Basics', 'Cybersecurity', 'Penetration Testing Basics'],
  },
  {
    title: 'Languages',
    items: ['English', 'Hindi', 'Garhwali'],
  },
]

export const timeline = [
  {
    year: '2026',
    title: 'Portfolio refresh',
    description:
      'Updated public portfolio with resume-backed profile details, LinkedIn, GitHub, and live project cards from public repositories.',
  },
  {
    year: '2025',
    title: 'AI/ML GitHub projects',
    description:
      'Published machine learning and deep learning practice projects including classification, prediction, NLP, and forecasting work.',
  },
  {
    year: '2024',
    title: 'LG internship',
    description:
      'Supported software/application work, website content updates, and barcode reader system implementation.',
  },
  {
    year: '2023',
    title: 'Ethical hacking training',
    description:
      'Completed cybersecurity and ethical hacking training at Uttaranchal Institute of Technology.',
  },
]

export const certifications = [
  'Ethical Hacking Training - Uttaranchal Institute of Technology (UIT)',
  'Ethical Hacking Workshop at UIT',
]

export const strengths = [
  'Management skills',
  'Creativity',
  'Critical thinking',
  'Leadership',
  'Continuous learning',
]
