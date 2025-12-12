import { useEffect, useState } from 'react';
import { ChevronDown, Github, Mail, MessageCircle, Linkedin } from 'lucide-react';

// Custom Discord Icon Component
const DiscordIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

// Custom Telegram Icon Component
const TelegramIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472c-.18 1.898-.962 6.502-1.36 8.627c-.168.9-.499 1.201-.820 1.23c-.696.065-1.225-.46-1.9-.902c-1.056-.693-1.653-1.124-2.678-1.8c-1.185-.78-.417-1.21.258-1.91c.177-.184 3.247-2.977 3.307-3.23c.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345c-.48.33-.913.49-1.302.48c-.428-.008-1.252-.241-1.865-.44c-.752-.245-1.349-.374-1.297-.789c.027-.216.325-.437.893-.663c3.498-1.524 5.83-2.529 6.998-3.014c3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const HeroSection = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Full Stack & Blockchain Development, AI, Mobile app';

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    // Cursor blinking
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20" />
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <div className="w-2 h-2 bg-blue-400/30 rounded-full blur-sm" />
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Main heading */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent animate-fade-in">
            TAO-STAR
          </h1>
          <div className="text-2xl md:text-4xl text-gray-300 font-light mb-6 h-12">
            {text}
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
          </div>
        </div>

        {/* Expertise badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {['AI/ML', 'Blockchain', 'Full Stack', 'Chatbots', 'Mobile Apps'].map((skill, index) => (
            <div
              key={skill}
              className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full text-blue-200 font-medium animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {skill}
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
          I 've got 7+ years of experience of crafting innovative solutions across full-stack development, AI and blockchain . 
          My mission is to transform innovative ideas into exceptional digital experiences.
        </p>

        {/* Social links */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a
            href="mailto:isaiasmoney2@gmail.com?subject=To%20TAO-STAR&body=Hello%20TAO-STAR%2C%0A%0A..."
            className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300"
          >
            <Mail size={20} />
            Email
          </a>
          
          <a
            href="https://discord.com/users/bittensor1"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-1 transition-all duration-300"
          >
            <DiscordIcon size={20} />
            Discord
          </a>

          <a
            href="https://t.me/smartman517"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-1 transition-all duration-300"
          >
            <TelegramIcon size={20} />
            Telegram
          </a>

          <a
            href="https://www.linkedin.com/in/isaias-money-640056390/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-700 to-blue-600 text-white rounded-full hover:shadow-lg hover:shadow-blue-600/25 transform hover:-translate-y-1 transition-all duration-300"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>

          <a
            href="https://github.com/DEV-MAT1996"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-full hover:shadow-lg hover:shadow-gray-600/25 transform hover:-translate-y-1 transition-all duration-300"
          >
            <Github size={20} />
            GitHub
          </a>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToProjects}
          className="animate-bounce text-gray-400 hover:text-white transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
