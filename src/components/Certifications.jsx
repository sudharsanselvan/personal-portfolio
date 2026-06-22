import { CheckCircle2 } from "lucide-react";
import SectionTitle from "./SectionTitle";

const certifications = [
  "Java Programming Fundamentals - Infosys Springboard",
  "Software Engineering & Agile Software Development - Infosys Springboard",
];

export default function Certification() {
  return (
    <section className="relative py-12 sm:py-16">
        
      <div className="section-shell">
        <SectionTitle
                      eyebrow="Certifications Achieved"
                      title="Certifications"
                      subtitle="Proof of Skill. Path to Success"
                    />
        <div className="mx-auto max-w-4xl">
          <div className="glass-card rounded-lg p-5 sm:p-7">
            <h3 className="text-2xl font-black text-white">Certifications</h3>
            <p className="mt-2 text-sm text-slate-300">Relevant certifications earned during training.</p>
            <ul className="mt-4 space-y-3">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 size={18} className="mt-1 text-emerald-300" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-white">{cert}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}