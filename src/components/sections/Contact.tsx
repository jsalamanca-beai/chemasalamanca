'use client';

import { useState } from 'react';
import Image from 'next/image';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { useDictionary } from '@/i18n/context';

export default function Contact() {
  const dict = useDictionary();
  const contact = dict.contact;
  const form = contact.form;
  const info = contact.info;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || form.errorDefault);
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setIsError(true);
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage(form.errorDefault);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[var(--teal)] font-semibold mb-2">{contact.sectionLabel}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--gray-dark)] mb-4">
            {contact.title}
          </h2>
          <p className="text-lg text-[var(--gray-medium)] max-w-2xl mx-auto">
            {contact.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <AnimateOnScroll direction="left">
            <div>
              <div className="relative rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/images/chema-contact.jpg"
                  alt={contact.photoAlt}
                  width={500}
                  height={400}
                  className="object-cover w-full"
                />
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--teal)]/10 rounded-lg flex items-center justify-center text-[var(--teal)] flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--gray-dark)]">{info.emailLabel}</p>
                    <a
                      href={`mailto:${info.email}`}
                      className="text-[var(--teal)] hover:text-[var(--teal-dark)] transition-colors"
                    >
                      {info.email}
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--teal)]/10 rounded-lg flex items-center justify-center text-[var(--teal)] flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--gray-dark)]">{info.linkedinLabel}</p>
                    <a
                      href="https://www.linkedin.com/in/chema-salamanca-a869402/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--teal)] hover:text-[var(--teal-dark)] transition-colors"
                    >
                      {info.linkedin}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--teal)]/10 rounded-lg flex items-center justify-center text-[var(--teal)] flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--gray-dark)]">{info.locationLabel}</p>
                    <p className="text-[var(--gray-medium)]">{info.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Contact Form */}
          <AnimateOnScroll direction="right">
            <div className="bg-[var(--gray-light)] rounded-2xl p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-[var(--teal)] rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--gray-dark)] mb-2">
                    {form.successTitle}
                  </h3>
                  <p className="text-[var(--gray-medium)]">
                    {form.successMessage}
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setIsError(false);
                      setErrorMessage('');
                    }}
                    className="mt-6 text-[var(--teal)] font-medium hover:text-[var(--teal-dark)] transition-colors"
                  >
                    {form.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Error Alert */}
                  {isError && (
                    <div className="p-4 rounded-lg border border-red-300 bg-red-50 text-red-700">
                      <div className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <div>
                          <p className="font-medium text-sm">{form.errorTitle}</p>
                          <p className="text-sm mt-1">{errorMessage}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[var(--gray-dark)] mb-2"
                    >
                      {form.nameLabel}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border ${
                        isError ? 'border-red-300' : 'border-gray-200'
                      } focus:border-[var(--teal)] focus:ring-2 focus:ring-[var(--teal)]/20 outline-none transition-all`}
                      placeholder={form.namePlaceholder}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[var(--gray-dark)] mb-2"
                    >
                      {form.emailLabel}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border ${
                        isError ? 'border-red-300' : 'border-gray-200'
                      } focus:border-[var(--teal)] focus:ring-2 focus:ring-[var(--teal)]/20 outline-none transition-all`}
                      placeholder={form.emailPlaceholder}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-[var(--gray-dark)] mb-2"
                    >
                      {form.subjectLabel}
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border ${
                        isError ? 'border-red-300' : 'border-gray-200'
                      } focus:border-[var(--teal)] focus:ring-2 focus:ring-[var(--teal)]/20 outline-none transition-all bg-white`}
                    >
                      <option value="">{form.subjectPlaceholder}</option>
                      {(form.subjectOptions as Array<{ value: string; label: string }>).map(
                        (opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        )
                      )}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[var(--gray-dark)] mb-2"
                    >
                      {form.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        isError ? 'border-red-300' : 'border-gray-200'
                      } focus:border-[var(--teal)] focus:ring-2 focus:ring-[var(--teal)]/20 outline-none transition-all resize-none`}
                      placeholder={form.messagePlaceholder}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[var(--teal)] text-white py-4 rounded-lg font-semibold hover:bg-[var(--teal-dark)] transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        {form.submitting}
                      </>
                    ) : (
                      form.submit
                    )}
                  </button>
                </form>
              )}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
