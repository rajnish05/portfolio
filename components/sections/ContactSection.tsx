"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const FIELD_REQUIRED = "Please fill this field.";

type FieldErrors = { name?: string; email?: string; subject?: string; message?: string };

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage("");
    setFieldErrors({});

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const subject = (form.elements.namedItem("subject") as HTMLInputElement | null)?.value.trim() ?? "";
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    const errors: FieldErrors = {};
    if (!name) errors.name = FIELD_REQUIRED;
    if (!email) errors.email = FIELD_REQUIRED;
    if (!subject) errors.subject = FIELD_REQUIRED;
    if (!message) errors.message = FIELD_REQUIRED;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus("done");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(
          typeof data.error === "string"
            ? data.error
            : "Something went wrong. Please try again or email directly."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Network error. Please check your connection and try again."
      );
    }
  }

  return (
    <SectionWrapper id="contact" className="px-4 md:px-6">
      <div className="mx-auto max-w-xl">
        <motion.h2
          className="mb-4 text-center text-2xl font-bold md:text-3xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="mb-10 text-center text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Have a project in mind or want to connect? Send a message.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          noValidate
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium">
              Name
            </label>
            <Input
              id="name"
              name="name"
              placeholder="Your name"
              className={cn(fieldErrors.name && "border-red-500/50 focus:ring-red-500/50")}
              aria-invalid={!!fieldErrors.name}
              aria-describedby={fieldErrors.name ? "name-error" : undefined}
              onChange={() => fieldErrors.name && setFieldErrors((e) => ({ ...e, name: undefined }))}
            />
            <AnimatePresence mode="wait">
              {fieldErrors.name && (
                <motion.p
                  id="name-error"
                  role="alert"
                  className="mt-1.5 text-sm text-red-500"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                >
                  {fieldErrors.name}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className={cn(fieldErrors.email && "border-red-500/50 focus:ring-red-500/50")}
              aria-invalid={!!fieldErrors.email}
              aria-describedby={fieldErrors.email ? "email-error" : undefined}
              onChange={() => fieldErrors.email && setFieldErrors((e) => ({ ...e, email: undefined }))}
            />
            <AnimatePresence mode="wait">
              {fieldErrors.email && (
                <motion.p
                  id="email-error"
                  role="alert"
                  className="mt-1.5 text-sm text-red-500"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                >
                  {fieldErrors.email}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
          <div>
            <label htmlFor="subject" className="mb-2 block text-sm font-medium">
              Subject
            </label>
            <Input
              id="subject"
              name="subject"
              placeholder="What would you like to talk about?"
              className={cn(fieldErrors.subject && "border-red-500/50 focus:ring-red-500/50")}
              aria-invalid={!!fieldErrors.subject}
              aria-describedby={fieldErrors.subject ? "subject-error" : undefined}
              onChange={() =>
                fieldErrors.subject &&
                setFieldErrors((e) => ({ ...e, subject: undefined }))
              }
            />
            <AnimatePresence mode="wait">
              {fieldErrors.subject && (
                <motion.p
                  id="subject-error"
                  role="alert"
                  className="mt-1.5 text-sm text-red-500"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                >
                  {fieldErrors.subject}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your message..."
              rows={5}
              className={cn(fieldErrors.message && "border-red-500/50 focus:ring-red-500/50")}
              aria-invalid={!!fieldErrors.message}
              aria-describedby={fieldErrors.message ? "message-error" : undefined}
              onChange={() => fieldErrors.message && setFieldErrors((e) => ({ ...e, message: undefined }))}
            />
            <AnimatePresence mode="wait">
              {fieldErrors.message && (
                <motion.p
                  id="message-error"
                  role="alert"
                  className="mt-1.5 text-sm text-red-500"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                >
                  {fieldErrors.message}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
          <Button
            type="submit"
            className="w-full"
            disabled={status === "sending"}
          >
            {status === "sending" ? (
              "Sending..."
            ) : (
              <>
                <Send className="h-4 w-4" />
                Send Message
              </>
            )}
          </Button>

          <AnimatePresence mode="wait">
            {status === "done" && (
              <motion.div
                role="status"
                aria-live="polite"
                className="flex items-center justify-center gap-2 rounded-lg border border-green-500/30 bg-green-500/10 py-3 text-green-600 dark:text-green-400"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <CheckCircle className="h-5 w-5 shrink-0" />
                <p className="text-sm font-medium">
                  Message sent successfully. I&apos;ll get back to you soon.
                </p>
              </motion.div>
            )}
            {status === "error" && errorMessage && (
              <motion.div
                role="alert"
                className="flex items-start gap-2 rounded-lg border border-red-500/30 bg-red-500/10 py-3 px-4 text-red-600 dark:text-red-400"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                <p className="text-sm">{errorMessage}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>

        <motion.div
          className="mt-10 flex justify-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition hover:text-foreground"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition hover:text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
