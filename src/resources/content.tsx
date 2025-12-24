import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Malaika",
  lastName: "Basharat",
  name: `Malaika Basharat`,
  role: "Do AI, NLP & Automation Stuff",
  avatar: "/images/malaika.jpg",
  email: "malaikabdev@gmail.com",
  location: "Asia/Karachi", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Urdu"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about Automations and AI</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/malaikabasharat004",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/malaikabdev",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/malaika_basharat_89",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@malaika_basharat_89",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>From Human to Machine</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
  I'm Malaika, an AI engineer focused on <Text as="span" size="xl" weight="strong">
  NLP, LLMs, and AI automation
  </Text>, where I build practical systems that actually scale.
  <br />
  After hours, I experiment with research ideas, open-source projects, and autonomous AI workflows.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Gujrat, Pakistan.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
      Malaika is an AI Engineer and Automation Specialist with a strong focus on Natural Language
      Processing, Large Language Models, and AI-driven workflow automation. She builds scalable
      systems that combine LLMs, RAG pipelines, and autonomous agents to solve real-world business
      and research problems.
      <br />
      <br />
      With experience spanning AI automation, applied NLP research, and production-grade AI
      systems, her work ranges from bilingual language technologies for low-resource languages to
      fully autonomous content generation pipelines using n8n and modern AI stacks.
    </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "iSimplifyAI",
        timeframe: "Jul 2025 – Present",
        role: "AI Automation Expert (n8n)",
        achievements: [
        <>
          Built fully autonomous AI-driven automation pipelines using n8n, LLMs, and Airtable to
          generate long-form content (including full novels) in under one hour.
        </>,
        <>
          Reduced manual content production effort by over 80% by eliminating repetitive writing
          tasks through end-to-end AI workflows.
        </>,
        ],
        // images: [
        //   // optional: leave the array empty if you don't want to display images
        //   {
        //     src: "/images/projects/project-01/cover-01.jpg",
        //     alt: "Once UI Project",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      },
      {
        company: "Fiverr",
        timeframe: "Aug 2024 – Jul 2025",
        role: "AI Engineer · AI Automation (n8n)",
        achievements: [
        <>
          Delivered AI-powered business solutions including RAG-based chatbots and AI agents tailored
          to client operations across multiple domains.
        </>,
        <>
          Integrated custom APIs with front-end systems and automated workflows, improving
          operational efficiency and response accuracy.
        </>,
        ],
        images: [],
      },
      {
        company: "MindBloom",
        timeframe: "Apr 2025 – Jun 2025",
        role: "NLP Researcher",
        achievements: [
        <>
          Optimized large lexical resources such as Wikidata and WordNet to enhance NLP pipelines and
          linguistic data efficiency.
        </>,
        <>
          Fine-tuned local LLMs (e.g., Mistral 7B) for offline semantic tasks and delivered
          schema-compliant APIs for fully independent deployment.
        </>,
        ],
        images: [],
      },
      {
        company: "Alton S.A.R.L",
        timeframe: "Oct 2024 – Jan 2025",
        role: "Python Developer",
        achievements: [
        <>
          Built a RAG-based HR recruitment system analyzing bilingual (English/French) CVs and job
          descriptions using semantic similarity ranking.
        </>,
        <>
          Implemented a LinkedIn fallback mechanism when matches fell below a 40% threshold,
          improving candidate sourcing reliability.
        </>,
        ],
        images: [],
      },
      {
        company: "CalmBot",
        timeframe: "Oct 2023 – Apr 2024",
        role: "NLP Engineer",
        achievements: [
        <>
          Applied NLP and deep learning techniques to develop early-stage wellness AI models for
          mental health support.
        </>,
        <>
          Extracted insights from curated datasets to validate predictions and support AI-driven
          user interaction design.
        </>,
        ],
        images: [],
      },
      {
        company: "University of Gujrat",
        timeframe: "Dec 2022 – Apr 2023",
        role: "Teaching Assistant (Data Structures & Python)",
        achievements: [
        <>
          Assisted in mentoring junior students through Data Structures (C++), Python programming,
          and Cisco Packet Tracer labs.
        </>,
        <>
          Led debugging sessions and provided one-on-one academic support to strengthen programming
          and problem-solving skills.
        </>,
        ],
      images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Gujrat",
        description: <>Bachelors in <b>Computer Science</b> (Major in <b>AI</b>)</>,
      },
      {
        name: "Build the Future",
        description: <>Studied <b>Natural Language Processing</b> and <b>n8n</b>.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Programming",
        description: (
          <>Proficient in Python, C/C++, and JavaScript for AI, research, and web development.</>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "C/C++", icon: "c" },
          { name: "JavaScript", icon: "javascript" },
        ],
      },
      {
        title: "AI / ML Frameworks",
        description: (
          <>Experience with PyTorch, TensorFlow, Hugging Face and LangChain for model development and retrieval-augmented pipelines.</>
        ),
        tags: [
          { name: "PyTorch", icon: "pytorch" },
          { name: "TensorFlow", icon: "tensorflow" },
          { name: "Hugging Face", icon: "huggingface" },
          { name: "LangChain", icon: "langchain" },
        ],
      },
      {
        title: "Tools & Platforms",
        description: (
          <>Docker, Git, VS Code, Jupyter, Linux, n8n, and Supabase for development, automation, and deployment.</>
        ),
        tags: [
          { name: "Docker", icon: "docker" },
          { name: "Git", icon: "git" },
          { name: "Jupyter", icon: "jupyter" },
          { name: "n8n", icon: "n8n" },
        ],
      },
      {
        title: "Databases & Vector Stores",
        description: (
          <>MySQL, MongoDB, Pinecone, and FAISS for storage and vector similarity search in RAG systems.</>
        ),
        tags: [
          { name: "MySQL", icon: "mysql" },
          { name: "MongoDB", icon: "mongodb" },
          { name: "Pinecone", icon: "pinecone" },
          { name: "FAISS", icon: "faiss" },
        ],
      },
      {
        title: "Specialties",
        description: (
          <>Generative AI, LLMs, NLP, RAG, Data Privacy, and AI Security.</>
        ),
        tags: [
          { name: "NLP", icon: "nlp" },
          { name: "LLM", icon: "llm" },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `AI projects and N8N by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/2.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/3.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/4.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/5.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/6.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/h1.png",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
