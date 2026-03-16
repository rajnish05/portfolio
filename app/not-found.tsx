import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4">
      <h1 className="text-2xl font-bold">404</h1>
      <p className="text-muted-foreground">This page could not be found.</p>
      <Link
        href="/"
        className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:opacity-90"
      >
        Back to home
      </Link>
    </div>
  );
}
