import React, { useRef, useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import SectionWrapper from '../Reusables/SectionWrapper';
import GlassCard from '../Reusables/GlassCard';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

type Status = null | 'success' | 'error';

const ContactSection: React.FC = () => {
  const refForm = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>(null);

  const isValidEmail = (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!refForm.current) return;

    const formData = new FormData(refForm.current);
    const email = formData.get('email') as string;
    const name = formData.get('name') as string;

    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    emailjs
      .sendForm('service_nj4aeh5', 'template_ogqgudi', refForm.current, 'cY2UcSIMLnEaSJ-1P')
      .then(() => {
        emailjs.send('service_nj4aeh5', 'template_iv4xktv', {
          to_name: name,
          to_email: email,
        }, 'cY2UcSIMLnEaSJ-1P');
        setStatus('success');
        refForm.current?.reset();
      })
      .catch(() => {
        setStatus('error');
      });
  };

  return (
    <SectionWrapper id="contact" alt>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark">
        Get in Touch
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Contact Form */}
        <GlassCard hover={false}>
          {status === 'success' ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">&#10003;</div>
              <h3 className="text-xl font-semibold text-dark mb-2">Message Sent!</h3>
              <p className="text-slate-500">Thank you for reaching out. I'll get back to you soon.</p>
              <button
                onClick={() => setStatus(null)}
                className="mt-6 px-4 py-2 text-primary font-medium hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form ref={refForm} onSubmit={sendEmail} className="space-y-4">
              <input
                className="w-full px-4 py-3 rounded-xl bg-white/50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                placeholder="Name"
                type="text"
                name="name"
                required
              />
              <input
                className="w-full px-4 py-3 rounded-xl bg-white/50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                placeholder="Email"
                type="email"
                name="email"
                required
              />
              <input
                className="w-full px-4 py-3 rounded-xl bg-white/50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                placeholder="Subject"
                type="text"
                name="subject"
                required
              />
              <textarea
                className="w-full px-4 py-3 rounded-xl bg-white/50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition min-h-[150px] resize-none"
                placeholder="Message"
                name="message"
                required
              />
              {status === 'error' && (
                <p className="text-red-500 text-sm">Failed to send. Please try again.</p>
              )}
              <button
                type="submit"
                className="w-full py-3 rounded-xl text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                style={{ background: 'linear-gradient(135deg, #2563EB, #0EA5E9)' }}
              >
                Send Message
              </button>
            </form>
          )}
        </GlassCard>

        {/* Social links */}
        <div className="space-y-4">
          <p className="text-slate-600 text-lg mb-6">
            Whether it's asking me about my experience, a coffee chat,
            or sharing an exciting opportunity you know about, please do not
            hesitate to reach out! :)
          </p>
          <a
            href="mailto:burkhart.d@northeastern.edu"
            className="flex items-center gap-4 glass rounded-xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            <FaEnvelope className="text-2xl text-primary" />
            <div>
              <p className="font-medium text-dark">Email</p>
              <p className="text-sm text-slate-500">burkhart.d@northeastern.edu</p>
            </div>
          </a>
          <a
            href="https://linkedin.com/in/dalton-burkhart"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 glass rounded-xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            <FaLinkedin className="text-2xl text-[#0A66C2]" />
            <div>
              <p className="font-medium text-dark">LinkedIn</p>
              <p className="text-sm text-slate-500">dalton-burkhart</p>
            </div>
          </a>
          <a
            href="https://github.com/dburkhart07"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 glass rounded-xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            <FaGithub className="text-2xl text-dark" />
            <div>
              <p className="font-medium text-dark">GitHub</p>
              <p className="text-sm text-slate-500">dburkhart07</p>
            </div>
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
