import Link from "next/link";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rajnish Kumar
          </p>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Open to Senior React Native roles · Remote or hybrid.
          </p>
          <Link
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition hover:text-foreground"
          >
            Let&apos;s connect on LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
