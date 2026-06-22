import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-shell flex flex-col items-center justify-between gap-4 text-center text-sm text-slate-400 sm:flex-row sm:text-left">
        <p>Built with React, Tailwind CSS, and Framer Motion.</p>
        <p>&copy; 2025 {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
