"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Marquee } from "@/components/ui/Marquee";
import { callToAction, contactMarqueeItems, servicesIntro } from "@/lib/homeData";

export function CallToAction() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", contactNumber: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-white dark:bg-zinc-950">
      <div className="border-y border-zinc-300 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-900 py-6">
        <Marquee
          items={contactMarqueeItems}
          separator="·"
          className="px-4 sm:px-6"
          textClassName="text-xs font-semibold uppercase tracking-[0.4em] text-zinc-600 dark:text-zinc-400"
          speed="normal"
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        {/* Header */}
        <div className="mb-16 space-y-10">
          <div className="relative">
            {/* Circular icon in top-left */}
            <div className="absolute -left-2 -top-2 h-3 w-3 rounded-full border-2 border-[#B76BFC] dark:border-[#B76BFC]">
              <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B76BFC] dark:bg-[#B76BFC]"></div>
            </div>
            {/* Star icon - pink in light, purple in dark */}
            <div className="mb-4">
              <Image
                src={servicesIntro.badgeIcon}
                alt=""
                width={50}
                height={50}
                className="h-12 w-12 star-icon-purple"
              />
            </div>
            <h2 className="text-4xl font-black uppercase tracking-[0.35em] text-zinc-900 dark:text-zinc-100 md:text-5xl">
              CONTACT
            </h2>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left Column - Information */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="mt-2 h-3 w-3 rounded-full border-2 border-[#B76BFC] dark:border-[#B76BFC]"></div>
              <div className="flex-1 space-y-6">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                  Get in Touch
                </h3>
                <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {callToAction.message}
                </p>
                <div className="flex items-center gap-3">
                  <svg
                    className="h-5 w-5 text-[#B76BFC] dark:text-[#B76BFC]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href={`mailto:${callToAction.email}`}
                    className="text-lg font-medium text-[#B76BFC] dark:text-[#B76BFC] hover:underline"
                  >
                    {callToAction.email}
                  </a>
                </div>
                <div className="pt-4">
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
                    Social
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {callToAction.socialLinks.map((social) => (
                      <Link
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-700 dark:text-zinc-300 transition-colors hover:text-[#B76BFC] dark:hover:text-[#B76BFC]"
                      >
                        {social.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-3 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:border-[#B76BFC] dark:focus:border-[#B76BFC] focus:bg-white dark:focus:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-[#B76BFC]/20 dark:focus:ring-[#B76BFC]/20"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-3 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:border-[#B76BFC] dark:focus:border-[#B76BFC] focus:bg-white dark:focus:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-[#B76BFC]/20 dark:focus:ring-[#B76BFC]/20"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contactNumber" className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  placeholder="Optional"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 px-4 py-3 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:border-[#B76BFC] dark:focus:border-[#B76BFC] focus:bg-white dark:focus:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-[#B76BFC]/20 dark:focus:ring-[#B76BFC]/20"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Say hello..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-3 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:border-[#B76BFC] dark:focus:border-[#B76BFC] focus:bg-white dark:focus:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-[#B76BFC]/20 dark:focus:ring-[#B76BFC]/20"
                />
              </div>

              {submitStatus === "success" && (
                <div className="rounded-lg bg-green-50 p-4 text-sm text-green-800">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="rounded-lg bg-red-50 p-4 text-sm text-red-800">
                  Something went wrong. Please try again or email me directly at{" "}
                  <a href={`mailto:${callToAction.email}`} className="underline">
                    {callToAction.email}
                  </a>
                </div>
              )}

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 rounded-full border border-[#B76BFC]/20 dark:border-[#B76BFC]/20 bg-white dark:bg-zinc-900 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-zinc-900 dark:text-zinc-100 transition hover:bg-[#B76BFC] dark:hover:bg-[#B76BFC] hover:text-white hover:border-[#B76BFC] dark:hover:border-[#B76BFC] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}



