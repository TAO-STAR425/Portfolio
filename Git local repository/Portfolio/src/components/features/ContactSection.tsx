import { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle, MapPin } from 'lucide-react';
import { ContactForm } from '../../types';
import MapBox from './MapBox';

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

// Custom LinkedIn Icon Component
const LinkedInIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065c0-1.138.92-2.063 2.063-2.063c1.14 0 2.064.925 2.064 2.063c0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const ContactSection = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [selectedEmail, setSelectedEmail] = useState('isaiasmoney2@gmail.com');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // For Netlify deployment, let the form submit naturally
      if (window.location.hostname.includes('netlify') || process.env.NODE_ENV === 'production') {
        // Let Netlify handle the form submission
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        
        // Add the selected email to form data
        formData.set('send-to', selectedEmail);
        
        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData as any).toString()
        });

        if (response.ok) {
          setSubmitStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          throw new Error('Form submission failed');
        }
      } else {
        // Development fallback - open mailto
        const subject = encodeURIComponent(`Portfolio Contact: ${formData.subject}`);
        const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
        `);
        
        window.open(`mailto:${selectedEmail}?subject=${subject}&body=${body}`);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            You can contact TAO-STAR!
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Let's discuss your next project and create innovative solutions with TAO-STAR.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Whether you need full-stack applications, AI solutions, blockchain development, or chatbot integration, 
                I'm here to help bring your vision to life with cutting-edge technology and exceptional craftsmanship.
              </p>
            </div>

            {/* Contact methods */}
            <div className="space-y-6">
              <div className="group p-4 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full group-hover:scale-110 transition-transform">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                      Email
                    </div>
                    <div className="text-gray-400 text-sm">Choose preferred email</div>
                  </div>
                </div>
                <div className="ml-16 space-y-2">
                  <a
                    href="mailto:isaiasmoney2@gmail.com?subject=To%20TAO-STAR&body=Hello%20TAO-STAR%2C%0A%0A..."
                    className="block text-blue-400 hover:text-blue-300 text-sm transition-colors"
                  >
                    isaiasmoney2@gmail.com
                  </a>
                  <a
                    href="mailto:expencive425@outlook.com?subject=To%20TAO-STAR&body=Hello%20TAO-STAR%2C%0A%0A..."
                    className="block text-blue-400 hover:text-blue-300 text-sm transition-colors"
                  >
                    expencive425@outlook.com
                  </a>
                </div>
              </div>

              <a
                href="https://discord.com/users/bittensor1"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full group-hover:scale-110 transition-transform">
                  <DiscordIcon size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white group-hover:text-indigo-400 transition-colors">
                    Discord
                  </div>
                  <div className="text-gray-400 text-sm">bittensor1</div>
                </div>
              </a>

              <div className="group p-4 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full group-hover:scale-110 transition-transform">
                    <TelegramIcon size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      Telegram
                    </div>
                    <div className="text-gray-400 text-sm">Multiple accounts available</div>
                  </div>
                </div>
                <div className="ml-16 space-y-2">
                  <a
                    href="https://t.me/smartman517"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                  >
                    @smartman517
                  </a>
                  <a
                    href="https://t.me/YC0112_425_517"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                  >
                    @YC0112_425_517
                  </a>
                </div>
              </div>

              <a
                href="https://www.linkedin.com/in/isaias-money-640056390/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-blue-600/50 transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-r from-blue-700 to-blue-600 rounded-full group-hover:scale-110 transition-transform">
                  <LinkedInIcon size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                    LinkedIn
                  </div>
                  <div className="text-gray-400 text-sm">Professional Network</div>
                </div>
              </a>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="text-center p-4 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 backdrop-blur-sm rounded-xl border border-blue-500/20">
                <div className="text-2xl font-bold text-white mb-1">&lt; 24h</div>
                <div className="text-sm text-gray-400">Response Time</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-r from-green-900/20 to-emerald-900/20 backdrop-blur-sm rounded-xl border border-green-500/20">
                <div className="text-2xl font-bold text-white mb-1">100%</div>
                <div className="text-sm text-gray-400">Project Success</div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>
            
            <form 
              onSubmit={handleSubmit} 
              className="space-y-6"
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              action="/success"
            >
              {/* Netlify form detection */}
              <input type="hidden" name="form-name" value="contact" />
              {/* Honeypot field for spam protection */}
              <div style={{ display: 'none' }}>
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </div>
              {/* Send to email field for Netlify */}
              <input type="hidden" name="send-to" value={selectedEmail} />
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/70 border border-gray-600/50 rounded-lg text-white placeholder-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/70 border border-gray-600/50 rounded-lg text-white placeholder-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="sendTo" className="block text-sm font-medium text-gray-300 mb-2">
                  Send to TAO-STAR Email
                </label>
                <select
                  id="sendTo"
                  value={selectedEmail}
                  onChange={(e) => setSelectedEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800/70 border border-gray-600/50 rounded-lg text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                >
                  <option value="isaiasmoney2@gmail.com">isaiasmoney2@gmail.com</option>
                  <option value="expencive425@outlook.com">expencive425@outlook.com</option>
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/70 border border-gray-600/50 rounded-lg text-white placeholder-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="e.g., Web Development Project, AI Integration, etc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800/70 border border-gray-600/50 rounded-lg text-white placeholder-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                  placeholder="Describe your project requirements, timeline, budget, and any specific technologies you'd like to use..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>

              {/* Status messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 p-4 bg-green-900/20 border border-green-500/30 rounded-lg text-green-400">
                  <CheckCircle size={20} />
                  <span>Message sent successfully! We'll get back to you soon.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-red-400">
                  <AlertCircle size={20} />
                  <span>Something went wrong. Please try again or contact me directly.</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Map and Location Section - Full Width */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold text-white mb-4 flex items-center justify-center gap-3">
              <MapPin className="text-blue-400" size={28} />
              Location & Availability
            </h3>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Available for remote work worldwide. I collaborate with clients across different time zones to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Interactive Map */}
            <div className="lg:col-span-2 relative">
              <div className="w-full h-96 min-h-[400px] relative">
                <MapBox className="h-full w-full" />
              </div>
            </div>

            {/* Location info */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <h4 className="text-lg font-semibold text-white mb-4">Work Preferences</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-gray-300">Remote Work Available</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-gray-300">Global Time Zone Flexibility</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span className="text-gray-300">On-site Consultation Available</span>
                  </div>
                </div>
              </div>

              {/* Time zones */}
              <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
                <h4 className="text-lg font-semibold text-white mb-4">Working Hours</h4>
                <div className="grid grid-cols-1 gap-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">EST (UTC-5)</span>
                    <span className="text-blue-400">9 AM - 6 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">GMT (UTC+0)</span>
                    <span className="text-blue-400">2 PM - 11 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">JST (UTC+9)</span>
                    <span className="text-blue-400">11 PM - 8 AM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
