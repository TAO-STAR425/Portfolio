import { useEffect, useRef, useState } from 'react';
import { skills } from '../../constants/projects';
import { 
  Code2, 
  Server, 
  Cloud, 
  Database, 
  ShoppingCart, 
  Blocks, 
  Brain 
} from 'lucide-react';

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true); // Always visible for debugging
  const [animatedSkills, setAnimatedSkills] = useState<number[]>([]);

  useEffect(() => {
    // Immediately animate all skills for debugging
    skills.forEach((_, index) => {
      setTimeout(() => {
        setAnimatedSkills(prev => [...prev, index]);
      }, index * 100);
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skills one by one
          skills.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedSkills(prev => [...prev, index]);
            }, index * 200);
          });
        }
      },
      { threshold: 0.1 } // Lower threshold for better detection
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = Array.from(new Set(skills.map(skill => skill.category)));
  const categoryColors = {
    Frontend: 'from-blue-500 to-cyan-500',
    Backend: 'from-green-500 to-emerald-500',
    DevOps: 'from-orange-500 to-red-500',
    Database: 'from-purple-500 to-pink-500',
    'E-commerce': 'from-yellow-500 to-amber-500',
    Blockchain: 'from-indigo-500 to-blue-500',
    AI: 'from-violet-500 to-purple-500'
  };

  const categoryIcons = {
    Frontend: Code2,
    Backend: Server,
    DevOps: Cloud,
    Database: Database,
    'E-commerce': ShoppingCart,
    Blockchain: Blocks,
    AI: Brain
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-6 relative overflow-hidden bg-gray-900/20 border-t border-blue-500/30">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Mastery across the full technology stack with 7+ years of hands-on experience
          </p>
        </div>

        {/* Skills by category */}
        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <div
              key={category}
              className={`transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]} text-white font-semibold shadow-lg`}>
                  {(() => {
                    const IconComponent = categoryIcons[category as keyof typeof categoryIcons];
                    return IconComponent ? <IconComponent size={20} /> : null;
                  })()}
                  <span className="text-lg">{category}</span>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-gray-600 to-transparent" />
                <div className="text-sm text-gray-400 font-medium">
                  {skills.filter(skill => skill.category === category).length} skills
                </div>
              </div>

              {/* Category skills */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, skillIndex) => {
                    const globalIndex = skills.findIndex(s => s === skill);
                    const isAnimated = animatedSkills.includes(globalIndex);
                    
                    return (
                      <div
                        key={skill.name}
                        className="group bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-sm rounded-xl p-5 border border-gray-700/50 hover:border-gray-600/80 hover:shadow-lg hover:shadow-gray-900/20 transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-base font-semibold text-white group-hover:text-blue-400 transition-colors leading-tight">
                            {skill.name}
                          </h3>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-gray-300 bg-gray-700/50 px-2 py-1 rounded-full">
                              {skill.level}%
                            </span>
                          </div>
                        </div>
                        
                        {/* Progress bar */}
                        <div className="relative h-2 bg-gray-700/70 rounded-full overflow-hidden mb-3">
                          <div
                            className={`absolute left-0 top-0 h-full bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]} transition-all duration-1000 ease-out shadow-sm`}
                            style={{
                              width: isAnimated ? `${skill.level}%` : '0%',
                              transitionDelay: `${skillIndex * 100}ms`
                            }}
                          />
                          
                          {/* Shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer" />
                        </div>

                        {/* Skill level indicator */}
                        <div className="flex justify-between items-center">
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                                  i < Math.ceil(skill.level / 20)
                                    ? `bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]} shadow-sm`
                                    : 'bg-gray-600/70'
                                }`}
                                style={{ transitionDelay: `${(skillIndex * 100) + (i * 50)}ms` }}
                              />
                            ))}
                          </div>
                          <div className="text-xs text-gray-500 font-medium">
                            {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : skill.level >= 70 ? 'Proficient' : 'Intermediate'}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>

        {/* Experience summary */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6">
              <div className="text-3xl font-bold text-white mb-2">7+</div>
              <div className="text-sm text-gray-300 font-medium">Years Experience</div>
            </div>
            <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 backdrop-blur-sm border border-green-500/30 rounded-xl p-6">
              <div className="text-3xl font-bold text-white mb-2">35+</div>
              <div className="text-sm text-gray-300 font-medium">Technologies Mastered</div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6">
              <div className="text-3xl font-bold text-white mb-2">100+</div>
              <div className="text-sm text-gray-300 font-medium">Projects Delivered</div>
            </div>
            <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 backdrop-blur-sm border border-orange-500/30 rounded-xl p-6">
              <div className="text-3xl font-bold text-white mb-2">500K+</div>
              <div className="text-sm text-gray-300 font-medium">Users Impacted</div>
            </div>
          </div>
          
          {/* Technology stack summary */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-6">Full-Stack Technology Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div>
                  <div className="text-blue-400 font-semibold mb-2">Frontend Mastery</div>
                  <div className="text-gray-300">Modern React ecosystem with TypeScript, Next.js, and advanced animation libraries</div>
                </div>
                <div>
                  <div className="text-green-400 font-semibold mb-2">Backend Excellence</div>
                  <div className="text-gray-300">Scalable Node.js applications with robust authentication and real-time features</div>
                </div>
                <div>
                  <div className="text-purple-400 font-semibold mb-2">Cloud & DevOps</div>
                  <div className="text-gray-300">Multi-cloud deployment with containerization and orchestration expertise</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;