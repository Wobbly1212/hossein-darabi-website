"use client";

import { useState, useRef, FormEvent } from "react";
import { CheckCircle, Loader2, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [focused, setFocused] = useState<string | null>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, website: honeypotRef.current?.value || "" }),
      });
      if (res.ok) { setStatus("sent"); setFormData({ name: "", email: "", message: "" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
  }

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card flex flex-col items-center py-16 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-4 inline-flex rounded-full bg-accent/10 p-4 text-accent-light"
        >
          <CheckCircle size={32} />
        </motion.div>
        <h3 className="text-lg font-semibold text-white-1">Message sent!</h3>
        <p className="mt-2 text-sm text-light-gray/60">Thanks for reaching out. I&apos;ll get back to you soon.</p>
        <button onClick={() => setStatus("idle")} className="mt-6 text-sm text-accent-light transition-colors hover:text-accent">
          Send another message
        </button>
      </motion.div>
    );
  }

  const fieldClass = "w-full rounded-xl border border-white-1/[0.08] bg-white-1/[0.03] px-4 py-3.5 text-sm text-light-gray outline-none transition-all duration-300 focus:border-accent/40 focus:shadow-sm focus:shadow-accent/5";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {["name", "email", "message"].map((field) => (
        <div key={field} className="relative">
          <label
            htmlFor={field}
            className={`absolute left-4 transition-all duration-300 pointer-events-none z-10 ${
              focused === field || formData[field as keyof typeof formData]
                ? "-top-2.5 text-[10px] text-accent-light/70 bg-smoky-black px-1"
                : "top-3.5 text-sm text-light-gray/35"
            }`}
          >
            {field === "name" ? "Name" : field === "email" ? "Email" : "Tell me about your project..."}
          </label>
          {field === "message" ? (
            <textarea
              id={field}
              required
              rows={5}
              value={formData.message}
              onFocus={() => setFocused(field)}
              onBlur={() => setFocused(null)}
              onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
              className={`${fieldClass} resize-none`}
            />
          ) : (
            <input
              id={field}
              type={field === "email" ? "email" : "text"}
              required
              value={formData[field as keyof typeof formData]}
              onFocus={() => setFocused(field)}
              onBlur={() => setFocused(null)}
              onChange={(e) => setFormData((p) => ({ ...p, [field]: e.target.value }))}
              className={fieldClass}
            />
          )}
        </div>
      ))}

      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <input type="text" name="website" ref={honeypotRef} tabIndex={-1} autoComplete="off" />
      </div>

      <motion.button
        type="submit"
        disabled={status === "sending"}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className="btn-glow shine-sweep inline-flex w-full items-center justify-center gap-2 rounded-xl border border-accent/50 bg-accent/10 px-8 py-3.5 text-sm font-medium text-accent-light transition-all hover:border-accent hover:bg-accent/20 hover:shadow-lg hover:shadow-accent/10 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
      >
        <AnimatePresence mode="wait">
          {status === "sending" ? (
            <motion.span key="s" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
              <Loader2 size={16} className="animate-spin" /> Sending...
            </motion.span>
          ) : (
            <motion.span key="i" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
              Send Message <Send size={14} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {status === "error" && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-sm text-red-400">
            Something went wrong. Please try again or email me directly.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
