import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { profile } from "../data/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const CONTACT_ITEMS = [
  { icon: FiMail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: FiPhone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: FiMapPin, label: profile.location, href: null },
];


const SOCIALS = [
  { icon: FiGithub, href: profile.social.github, label: "GitHub" },
  { icon: FiLinkedin, href: profile.social.linkedin, label: "LinkedIn" },
  { icon: FaInstagram, href: profile.social.instagram, label: "Instagram" },
];


const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email address.";
    if (!form.subject.trim()) e.subject = "Please add a subject.";
    if (!form.message.trim()) e.message = "Please write a message.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      // Replace with your own EmailJS service ID, template ID, and public key.
      await emailjs.send(
        "service_etatg03",
        "template_i6coxl8",
        { from_name: form.name, from_email: form.email, subject: form.subject, message: form.message },
        "8bsHHAMSJDLgQELzi"
      );
      setStatus("sent");
      setForm(initialForm);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          subtitle="Have a role, project, or just want to say hi? My inbox is open."
        />

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8">
          <Reveal direction="right">
            <div className="glass rounded-2xl p-6 sm:p-8 h-full flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                {CONTACT_ITEMS.map((c) => (
                  <div key={c.label} className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-violet-800 flex items-center justify-center shrink-0">
                      <c.icon />
                    </span>
                    {c.href ? (
                      <a href={c.href} className="text-sm hover:text-lilac-300 transition-colors break-all">{c.label}</a>
                    ) : (
                      <span className="text-sm">{c.label}</span>
                    )}
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-white/10">
                <p className="text-xs uppercase tracking-wider text-mist mb-3">Find me elsewhere</p>
                <div className="flex flex-wrap gap-2.5">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:text-lilac-300 hover:border-lilac-300/40 transition-colors"
                    >
                      <s.icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <form onSubmit={handleSubmit} noValidate className="glass rounded-2xl p-6 sm:p-8 flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs text-mist mb-1.5 block">Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full bg-white/5 border border-white/10 focus:border-lilac-300/60 outline-none rounded-xl px-4 py-3 text-sm transition-colors"
                  />
                  {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="text-xs text-mist mb-1.5 block">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full bg-white/5 border border-white/10 focus:border-lilac-300/60 outline-none rounded-xl px-4 py-3 text-sm transition-colors"
                  />
                  {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label className="text-xs text-mist mb-1.5 block">Subject</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="What's this about?"
                  className="w-full bg-white/5 border border-white/10 focus:border-lilac-300/60 outline-none rounded-xl px-4 py-3 text-sm transition-colors"
                />
                {errors.subject && <p className="text-xs text-red-400 mt-1">{errors.subject}</p>}
              </div>
              <div>
                <label className="text-xs text-mist mb-1.5 block">Message</label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me a bit about the opportunity or project..."
                  className="w-full bg-white/5 border border-white/10 focus:border-lilac-300/60 outline-none rounded-xl px-4 py-3 text-sm resize-none transition-colors"
                />
                {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
              </div>

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileTap={{ scale: 0.97 }}
                className="btn-glow inline-flex items-center justify-center gap-2 font-semibold text-sm px-6 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-violet-800 disabled:opacity-60"
              >
                <FiSend /> {status === "sending" ? "Sending..." : "Send Message"}
              </motion.button>

              {status === "sent" && (
                <p className="text-sm text-emerald-400">Thanks! Your message has been sent — I'll get back to you soon.</p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-400">
                  Something went wrong. Please add your EmailJS credentials in Contact.jsx, or email me directly.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
