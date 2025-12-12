import { Project } from '../types';

export const projects: Project[] = [
  // AI Projects
  {
    id: 'tanka-ai',
    title: 'Tanka AI',
    category: 'AI',
    description: 'Advanced AI platform for creative content generation with state-of-the-art machine learning models. Features include text generation, image synthesis, and multi-modal AI capabilities.',
    shortDescription: 'AI-powered creative content generation platform',
    technologies: ['Python', 'TensorFlow', 'React', 'FastAPI', 'Docker'],
    liveUrl: 'https://www.tanka.ai/',
    userCount: '10,000+',
    images: [
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop&auto=format'
    ],
    featured: true,
    githubUrl: ''
  },
  {
    id: 'fn7-io',
    title: 'FN7.io Platform',
    category: 'AI',
    description: 'Next-generation AI analytics platform providing real-time insights and predictive modeling for enterprise clients. Built with scalable microservices architecture.',
    shortDescription: 'Enterprise AI analytics and predictive modeling',
    technologies: ['Node.js', 'Python', 'Vue.js', 'PostgreSQL', 'Redis'],
    liveUrl: 'https://www.fn7.io/',
    userCount: '5,000+',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&auto=format'
    ],
    featured: false,
    githubUrl: ''
  },
  {
    id: 'intervue-ai',
    title: 'IntervueAI',
    category: 'AI',
    description: 'Revolutionary AI-powered interview platform that conducts realistic technical interviews with real-time feedback and comprehensive skill assessment.',
    shortDescription: 'AI-powered technical interview platform',
    technologies: ['React', 'TypeScript', 'OpenAI API', 'WebRTC', 'MongoDB'],
    liveUrl: 'https://intervueai-io.vercel.app/',
    githubUrl: 'https://github.com/maxcointech0000/AI-IntervueAI',
    userCount: '15,000+',
    images: [
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1560472355-536de3962603?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop&auto=format'
    ],
    featured: true
  },

  // Blockchain Projects
  {
    id: 'blockstellart',
    title: 'BlockstellArt',
    category: 'Blockchain',
    description: 'Decentralized NFT marketplace featuring unique digital art collections with advanced smart contract integration and cross-chain compatibility.',
    shortDescription: 'Decentralized NFT marketplace for digital art',
    technologies: ['Solidity', 'Web3.js', 'React', 'IPFS', 'Ethereum'],
    liveUrl: 'https://blockstellart.com/',
    githubUrl: 'https://github.com/maxcointech0000/blockstellart',
    userCount: '25,000+',
    images: [
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1640161704729-cbe966a08476?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop&auto=format'
    ],
    featured: true
  },
  {
    id: 'cryptoboys-nft',
    title: 'CryptoBoys NFT Marketplace',
    category: 'Blockchain',
    description: 'Full-featured NFT marketplace with minting capabilities, auction system, and integrated wallet support. Built on Ethereum with gas optimization.',
    shortDescription: 'Complete NFT marketplace with minting and auctions',
    technologies: ['Solidity', 'Next.js', 'Ethers.js', 'Hardhat', 'Polygon'],
    liveUrl: 'https://devpavan04.github.io/cryptoboys-nft-marketplace/',
    githubUrl: 'https://github.com/maxcointech0000/BLOCKCHAIN-Cryptoboys_NFT_Marketplace',
    userCount: '8,000+',
    images: [
      'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1640161704729-cbe966a08476?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop&auto=format'
    ],
    featured: false
  },

  // Chatbot Projects  
  {
    id: 'ai-shifu',
    title: 'AI Shifu',
    category: 'Chatbot',
    description: 'Advanced conversational AI assistant with natural language processing, multi-language support, and contextual understanding for enterprise applications.',
    shortDescription: 'Enterprise conversational AI assistant',
    technologies: ['Python', 'NLP', 'React', 'WebSocket', 'PostgreSQL'],
    liveUrl: 'https://ai-shifu.com/',
    githubUrl: 'https://github.com/maxcointech0000/CHATBOT-AI_Shifu',
    userCount: '50,000+',
    images: [
      'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1560472355-536de3962603?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&auto=format'
    ],
    featured: true
  },

  // App Projects
  {
    id: 'blendy-download',
    title: 'Blendy',
    category: 'App',
    description: 'Cross-platform mobile application for photo blending and manipulation with advanced filters, AI-powered enhancements, and social sharing features.',
    shortDescription: 'Photo blending and enhancement mobile app',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'ML Kit', 'Redux'],
    liveUrl: 'https://blendy-download.vercel.app/',
    githubUrl: 'https://github.com/maxcointech0000/APP-Blendy',
    userCount: '100,000+',
    images: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop&auto=format'
    ],
    featured: false
  },

  // Full Stack Projects
  {
    id: 'wanderlust',
    title: 'Wanderlust',
    category: 'Fullstack',
    description: 'Comprehensive travel booking platform with real-time availability, payment processing, user reviews, and advanced search algorithms for personalized recommendations.',
    shortDescription: 'Complete travel booking and review platform',
    technologies: ['MERN', 'Stripe', 'Socket.io', 'Redis', 'AWS S3'],
    liveUrl: 'https://wanderlust-beta.vercel.app/',
    githubUrl: 'https://github.com/maxcointech0000/MERN-Wanderlust',
    userCount: '75,000+',
    images: [
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop&auto=format'
    ],
    featured: true
  },
  {
    id: 'watchit',
    title: 'WatchIt',
    category: 'Fullstack',
    description: 'Netflix-style streaming platform with user authentication, personalized recommendations, video streaming, and comprehensive admin dashboard.',
    shortDescription: 'Video streaming platform with recommendations',
    technologies: ['React', 'Node.js', 'MongoDB', 'JWT', 'Cloudinary'],
    liveUrl: 'https://watchit-1.onrender.com/',
    githubUrl: 'https://github.com/maxcointech0000/MERN-WATCHit',
    userCount: '30,000+',
    images: [
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1595769816263-9b910be24d5f?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600&fit=crop&auto=format'
    ],
    featured: false
  }
];

export const testimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'TechCorp',
    content: 'Outstanding work on our AI platform. Delivered beyond expectations with clean, scalable code and innovative solutions.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&auto=format&crop=face',
    rating: 5
  },
  {
    id: '2', 
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'BlockTech',
    content: 'Exceptional blockchain development skills. Created a robust NFT marketplace that handles high transaction volumes seamlessly.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    rating: 5
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Startup Founder',
    company: 'InnovateLab',
    content: 'Transformed our chatbot concept into reality with advanced NLP capabilities. User engagement increased by 300%.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    rating: 5
  }
];

export const skills = [
  // Frontend Development
  { name: 'HTML5 & CSS3', level: 98, category: 'Frontend' },
  { name: 'JavaScript (ES6+)', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 92, category: 'Frontend' },
  { name: 'React.js', level: 96, category: 'Frontend' },
  { name: 'Next.js', level: 90, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 94, category: 'Frontend' },
  { name: 'Framer Motion', level: 88, category: 'Frontend' },
  
  // Backend Development
  { name: 'Node.js', level: 93, category: 'Backend' },
  { name: 'Express.js', level: 91, category: 'Backend' },
  { name: 'Python', level: 89, category: 'Backend' },
  { name: 'WebSockets', level: 87, category: 'Backend' },
  { name: 'OAuth & JWT', level: 90, category: 'Backend' },
  { name: 'Zod Validation', level: 85, category: 'Backend' },
  { name: 'Passport.js', level: 88, category: 'Backend' },
  
  // DevOps & Cloud
  { name: 'Docker', level: 92, category: 'DevOps' },
  { name: 'Kubernetes', level: 85, category: 'DevOps' },
  { name: 'AWS Services', level: 90, category: 'DevOps' },
  { name: 'Google Cloud Platform', level: 87, category: 'DevOps' },
  { name: 'Microsoft Azure', level: 84, category: 'DevOps' },
  { name: 'Nginx', level: 89, category: 'DevOps' },
  
  // Database Management
  { name: 'MySQL', level: 91, category: 'Database' },
  { name: 'PostgreSQL', level: 93, category: 'Database' },
  { name: 'MongoDB', level: 95, category: 'Database' },
  { name: 'Firebase', level: 88, category: 'Database' },
  
  // E-commerce Platforms
  { name: 'Shopify Development', level: 92, category: 'E-commerce' },
  { name: 'Magento', level: 85, category: 'E-commerce' },
  { name: 'WordPress/WooCommerce', level: 90, category: 'E-commerce' },
  
  // Blockchain & AI
  { name: 'Solidity & Smart Contracts', level: 87, category: 'Blockchain' },
  { name: 'Web3.js & Ethers.js', level: 89, category: 'Blockchain' },
  { name: 'Machine Learning', level: 86, category: 'AI' },
  { name: 'Natural Language Processing', level: 84, category: 'AI' }
];
