"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import {
  Briefcase,
  Cloud,
  Code2,
  Container,
  Database,
  FileCode2,
  Gauge,
  Link2,
  Globe,
  MonitorSmartphone,
  Network,
  Palette,
  Phone,
  Send,
  Server,
  Sparkles,
  Workflow,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { GradientButton } from "@/components/common/button";
import { GlassCard } from "@/components/common/card";
import { SectionHeading } from "@/components/common/section-heading";
import { trackEvent } from "@/services/analytics";
import type { ContactInfo, Experience, Project, ProjectCategory, Service, SkillCategory, Testimonial } from "@/types";

const iconMap = {
  Code2,
  FileCode2,
  Palette,
  Server,
  Database,
  Network,
  Container,
  Cloud,
  Workflow,
  MonitorSmartphone,
  Sparkles,
  Gauge,
};

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type Props = {
  heroRoles: string[];
  stats: { label: string; value: number }[];
  about: { title: string; summary: string; education: { title: string; subtitle: string; period: string }[] };
  skills: SkillCategory[];
  experience: Experience[];
  projects: Project[];
  services: Service[];
  testimonials: Testimonial[];
  contact: ContactInfo;
};

function TypingText({ roles }: { roles: string[] }) {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex] ?? "";
    const speed = deleting ? 45 : 85;
    const timer = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, charIndex + 1);
        setText(next);
        setCharIndex((v) => v + 1);
        if (next === current) setDeleting(true);
      } else {
        const next = current.slice(0, charIndex - 1);
        setText(next);
        setCharIndex((v) => v - 1);
        if (next.length === 0) {
          setDeleting(false);
          setRoleIndex((v) => (v + 1) % roles.length);
          setCharIndex(0);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [charIndex, deleting, roleIndex, roles]);

  return <span className="text-cyan-300">{text || roles[0]}</span>;
}

function AnimatedCounter({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let frame = 0;
    const total = 40;
    const step = () => {
      frame += 1;
      const next = Math.min(value, Math.round((frame / total) * value));
      setCount(next);
      if (frame < total) requestAnimationFrame(step);
    };
    step();
  }, [value]);
  return <span>{count}+</span>;
}

export function PortfolioSections({
  heroRoles,
  stats,
  about,
  skills,
  experience,
  projects,
  services,
  testimonials,
  contact,
}: Props) {
  const [category, setCategory] = useState<ProjectCategory>("all");
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const form = useForm<z.infer<typeof formSchema>>({ resolver: zodResolver(formSchema), defaultValues: { name: "", email: "", message: "" } });

  useEffect(() => {
    const id = setInterval(() => setTestimonialIndex((v) => (v + 1) % testimonials.length), 4500);
    return () => clearInterval(id);
  }, [testimonials.length]);

  const filteredProjects = useMemo(
    () => (category === "all" ? projects : projects.filter((p) => p.category === category)),
    [category, projects],
  );

  return (
    <>
      <section id="home" className="relative overflow-hidden px-4 py-20 md:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.22),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(129,140,248,0.2),transparent_30%),linear-gradient(180deg,#020617,#0f172a)]" />
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Ahmed • UI / Front-End</p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-slate-100 md:text-6xl">
            Premium Developer
            <span className="block bg-gradient-to-r from-cyan-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent">Portfolio Experience</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-slate-300 md:text-lg">
            <TypingText roles={heroRoles} /> crafting modern apps with clean architecture, smooth interactions, and API-ready foundations.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <GradientButton href="#contact">Hire Me</GradientButton>
            <a href="#projects" className="rounded-full border border-white/20 px-5 py-2.5 text-sm text-slate-100 hover:bg-white/10">
              View Projects
            </a>
            <a href="#" className="rounded-full border border-cyan-400/40 px-5 py-2.5 text-sm text-cyan-200 hover:bg-cyan-400/10">
              Download Resume
            </a>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <GlassCard key={stat.label}>
                <p className="text-2xl font-extrabold text-slate-100">
                  <AnimatedCounter value={stat.value} />
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-slate-400">{stat.label}</p>
              </GlassCard>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <SectionHeading eyebrow="About" title="Professional Overview" description={about.summary} />
        <div className="grid gap-5 md:grid-cols-2">
          <GlassCard>
            <h3 className="text-xl font-semibold text-slate-100">{about.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">{about.summary}</p>
          </GlassCard>
          <GlassCard>
            <h3 className="text-xl font-semibold text-slate-100">Education Timeline</h3>
            <div className="mt-4 space-y-4">
              {about.education.map((item) => (
                <div key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-slate-100">{item.title}</p>
                  <p className="text-sm text-slate-300">{item.subtitle}</p>
                  <p className="mt-1 text-xs text-cyan-300">{item.period}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <SectionHeading eyebrow="Skills" title="Technical Expertise" />
        <div className="grid gap-5 md:grid-cols-3">
          {skills.map((group) => (
            <GlassCard key={group.title}>
              <h3 className="mb-4 text-lg font-semibold text-slate-100">{group.title}</h3>
              <div className="space-y-4">
                {group.skills.map((skill) => {
                  const Icon = iconMap[skill.icon as keyof typeof iconMap] || Code2;
                  return (
                    <div key={skill.name}>
                      <div className="mb-1 flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2 text-slate-200">
                          <Icon size={15} className="text-cyan-300" /> {skill.name}
                        </span>
                        <span className="text-slate-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-800">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8 }}
                          className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <SectionHeading eyebrow="Journey" title="Work Experience Timeline" />
        <div className="space-y-5">
          {experience.map((item) => (
            <GlassCard key={item.company}>
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-slate-100">{item.role}</h3>
                  <p className="text-sm text-cyan-300">{item.company}</p>
                </div>
                <p className="text-sm text-slate-400">{item.duration}</p>
              </div>
              <p className="mt-1 text-xs text-slate-500">{item.location}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {item.responsibilities.map((point) => (
                  <li key={point} className="flex gap-2">
                    <Briefcase size={14} className="mt-1 shrink-0 text-cyan-300" />
                    {point}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <SectionHeading eyebrow="Portfolio" title="Featured Projects" />
        <div className="mb-6 flex flex-wrap gap-2">
          {(["all", "frontend", "fullstack", "backend"] as ProjectCategory[]).map((item) => (
            <button
              key={item}
              onClick={() => {
                setCategory(item);
                trackEvent("project_filter_changed", { category: item });
              }}
              className={`rounded-full px-4 py-2 text-sm capitalize ${category === item ? "bg-cyan-400 text-slate-900" : "border border-white/20 text-slate-200"}`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {filteredProjects.length ? (
            filteredProjects.map((project) => (
              <GlassCard key={project.title}>
                <div className="h-44 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/30 p-4">
                  <p className="text-sm font-semibold text-slate-200">Preview</p>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-100">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-3">
                  <a href={project.liveUrl} className="rounded-full bg-cyan-400 px-4 py-2 text-xs font-semibold text-slate-900">
                    Live Demo
                  </a>
                  <a href={project.githubUrl} className="rounded-full border border-white/20 px-4 py-2 text-xs text-slate-100">
                    <span className="inline-flex items-center gap-1">
                      <Globe size={13} /> GitHub
                    </span>
                  </a>
                </div>
              </GlassCard>
            ))
          ) : (
            <GlassCard className="md:col-span-2">
              <p className="text-sm text-slate-300">No projects in this category yet. More are coming soon.</p>
            </GlassCard>
          )}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <SectionHeading eyebrow="Services" title="How I Can Help" />
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Sparkles;
            return (
              <GlassCard key={service.title}>
                <div className="mb-3 inline-flex rounded-lg bg-cyan-400/20 p-2">
                  <Icon className="text-cyan-300" size={20} />
                </div>
                <h3 className="text-lg font-semibold text-slate-100">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{service.description}</p>
              </GlassCard>
            );
          })}
        </div>
      </section>

      <section id="testimonials" className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <SectionHeading eyebrow="Testimonials" title="What Clients Say" />
        <GlassCard className="mx-auto max-w-3xl">
          <p className="text-base italic leading-7 text-slate-100">&quot;{testimonials[testimonialIndex]?.quote}&quot;</p>
          <p className="mt-4 font-semibold text-cyan-300">{testimonials[testimonialIndex]?.name}</p>
          <p className="text-sm text-slate-400">{testimonials[testimonialIndex]?.role}</p>
          <div className="mt-4 flex gap-1.5">
            {testimonials.map((item, idx) => (
              <button
                key={item.name}
                onClick={() => {
                  setTestimonialIndex(idx);
                  trackEvent("testimonial_selected", { index: idx + 1, person: item.name });
                }}
                className={`h-2 w-8 rounded-full ${testimonialIndex === idx ? "bg-cyan-400" : "bg-white/20"}`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </GlassCard>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <SectionHeading eyebrow="Contact" title="Let&apos;s Build Something Great" />
        <div className="grid gap-5 md:grid-cols-2">
          <GlassCard>
            <h3 className="text-lg font-semibold text-slate-100">Get in Touch</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <p className="flex items-center gap-2">
                <Send size={15} className="text-cyan-300" /> {contact.email}
              </p>
              <p className="flex items-center gap-2">
                <Phone size={15} className="text-cyan-300" /> {contact.phone}
              </p>
              <p>{contact.location}</p>
              <div className="flex gap-2 pt-2">
                {contact.socials.map((social) => (
                  <a key={social.name} href={social.url} className="rounded-full border border-white/20 p-2 text-slate-100">
                    {social.name === "LinkedIn" ? <Link2 size={14} /> : <Globe size={14} />}
                  </a>
                ))}
              </div>
            </div>
          </GlassCard>
          <GlassCard>
            <h3 className="text-lg font-semibold text-slate-100">Send a Message</h3>
            <form
              className="mt-4 space-y-3"
              onSubmit={form.handleSubmit(() => {
                trackEvent("contact_form_submitted");
                form.reset();
              })}
            >
              <input {...form.register("name")} placeholder="Your name" className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2.5 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-400" />
              <input {...form.register("email")} placeholder="Work email" className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2.5 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-400" />
              <textarea {...form.register("message")} placeholder="Tell me about your project" rows={4} className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2.5 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-400" />
              <div className="space-y-1 text-xs text-rose-300">
                {Object.values(form.formState.errors).map((error) => (
                  <p key={error.message}>{error.message}</p>
                ))}
              </div>
              <GradientButton className="w-full">Send Message</GradientButton>
            </form>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
