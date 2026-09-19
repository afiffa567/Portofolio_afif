import BlurFade from "@/components/magicui/blur-fade";
import { Icons } from "@/components/icons";
import { DATA } from "@/data/resume";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  FileText,
  Briefcase,
  Users,
  GraduationCap,
  Award,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  BarChart3,
  Receipt,
  UserCheck,
} from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function AboutPage() {
  const stats = [
    {
      value: "30+",
      label: "Internal Personnel",
      sub: "Records & administration",
      icon: Users,
      color: "text-blue-500",
    },
    {
      value: "160",
      label: "Outsourced Workforce",
      sub: "Vendor coordination",
      icon: Briefcase,
      color: "text-emerald-500",
    },
    {
      value: "3.62",
      label: "GPA / 4.00",
      sub: "Bachelor of Informatics",
      icon: GraduationCap,
      color: "text-amber-500",
    },
    {
      value: "5+",
      label: "HR Certifications",
      sub: "MSDM & KarirNex certified",
      icon: Award,
      color: "text-purple-500",
    },
  ];

  const pillars = [
    {
      title: "HR Operations & Personnel Admin",
      desc: "Managed employee administration and confidential personnel files for 30 internal employees, ensuring complete, accurate, and up-to-date HR documentation.",
      icon: UserCheck,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
    {
      title: "Recruitment & Onboarding",
      desc: "Screened ~150 candidates for 5 staff vacancies, scheduled interviews, conducted Behavioral Event Interviews (BEI), and orchestrated structured onboarding programs.",
      icon: CheckCircle2,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      title: "BPJS & Labor Compliance",
      desc: "Administered BPJS Kesehatan & Ketenagakerjaan enrollment, data verification, and drafted PKWT employment contracts in compliance with Indonesian labor law.",
      icon: ShieldCheck,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
    },
    {
      title: "Outsourced Workforce Coordination",
      desc: "Managed manpower fulfillment, onboarding, placement, and performance monitoring for 160 outsourced workers, collaborating closely with external vendors.",
      icon: Users,
      color: "text-violet-500",
      bg: "bg-violet-500/10",
    },
    {
      title: "Payroll & Compensation",
      desc: "Calculated overtime, attendance, statutory deductions (PPh 21 & BPJS), severance entitlements, and managed automated monthly payroll systems with payslips.",
      icon: Receipt,
      color: "text-rose-500",
      bg: "bg-rose-500/10",
    },
    {
      title: "People Analytics & HRIS",
      desc: "Analyzed absence rates, formulated SMART KPI dashboards, and leveraged modern HRIS tools (Odoo HR, Jibble, Excel) to make HR data-driven and efficient.",
      icon: BarChart3,
      color: "text-cyan-500",
      bg: "bg-cyan-500/10",
    },
  ];

  const row1Tools = DATA.techStack.slice(0, 6);
  const row2Tools = DATA.techStack.slice(6, 12);

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-12 pb-16">
      {/* ─── ABOUT HERO SECTION (MODERN & SIMPLE) ───────────────────────── */}
      <section id="about-hero" className="relative">
        <div className="mx-auto w-full max-w-2xl space-y-6">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="flex items-center justify-between gap-4 sm:gap-6">
              <div className="flex-col flex flex-1 space-y-1.5 sm:space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-xs font-semibold w-fit">
                  About Me
                </div>
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                  AFIF FAISAL ALAMSYAH
                </h1>
                <p className="text-sm sm:text-base font-medium text-muted-foreground">
                  Human Resources Professional
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    href={DATA.contact.social.CV.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground text-background text-xs sm:text-sm font-medium hover:bg-foreground/90 transition-all duration-200 shadow-xs hover:scale-105 active:scale-95"
                  >
                    <FileText className="size-4" />
                    <span>View Resume</span>
                    <ExternalLink className="size-3 opacity-70" />
                  </Link>
                  <Link
                    href={DATA.contact.social.LinkedIn.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card hover:bg-accent text-xs sm:text-sm font-medium transition-all duration-200 shadow-xs hover:scale-105 active:scale-95"
                  >
                    <Icons.linkedin className="size-3.5" />
                    <span>LinkedIn</span>
                  </Link>
                </div>
              </div>

              {/* Foto transparan murni drop shadow - selaras dengan halaman utama */}
              <div className="shrink-0">
                <div className="relative w-28 h-36 sm:w-36 sm:h-44 md:w-40 md:h-48">
                  <Image
                    src={DATA.avatarUrl}
                    alt={DATA.name}
                    fill
                    className="object-contain object-bottom drop-shadow-md select-none"
                    sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, 160px"
                    priority
                  />
                </div>
              </div>
            </div>
          </BlurFade>

          {/* ─── ABOUT STORY ("Hi there, glad you're here!") ─────────────── */}
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="space-y-3 pt-2">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                Hi there, glad you&apos;re here!
              </h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground text-justify-clean">
                {DATA.about.content.split("\n\n").map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ─── STATS GRID WITH COLORFUL ICONS & EXPANDING ACCENT LINE ──────── */}
      <section id="about-stats" className="relative">
        <div className="mx-auto w-full max-w-2xl">
          <BlurFade delay={BLUR_FADE_DELAY * 3.5}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-2 w-full">
              {stats.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="relative overflow-hidden p-3.5 sm:px-2.5 sm:py-3 rounded-xl border border-border/70 bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-1 flex flex-col justify-between group cursor-default"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xl sm:text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                        {item.value}
                      </span>
                      <Icon className={cn("size-5 shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12", item.color)} />
                    </div>
                    <div className="pt-2">
                      <p className="text-xs sm:text-[11px] md:text-xs font-semibold text-foreground whitespace-nowrap tracking-tight">
                        {item.label}
                      </p>
                      <p className="text-[11px] sm:text-[9.5px] md:text-[10.5px] text-muted-foreground whitespace-nowrap tracking-tight pt-0.5">
                        {item.sub}
                      </p>
                    </div>

                    {/* Expanding Accent Line on Hover */}
                    <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-primary to-sky-400 transition-all duration-300 ease-out" />
                  </div>
                );
              })}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ─── ANIMASI 3: CORE HR COMPETENCIES DENGAN CORNER BADGE MORPH & TILT ─── */}
      <section id="about-pillars" className="relative">
        <div className="mx-auto w-full max-w-2xl space-y-5">
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="space-y-1.5">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                Core HR Competencies
              </h2>
              <p className="text-sm text-muted-foreground">
                Verified hands-on expertise aligned with professional standards and labor laws.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
            {pillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <BlurFade
                  key={pillar.title}
                  delay={BLUR_FADE_DELAY * 4.5 + idx * 0.05}
                >
                  <div className="p-4 rounded-xl border border-border/70 bg-card/60 hover:bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 h-full flex flex-col justify-start gap-2 group cursor-pointer">
                    <div className="flex items-center gap-2.5">
                      {/* Icon Badge Morph on Hover */}
                      <div className={cn("p-2 rounded-lg shrink-0 shadow-2xs transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6", pillar.bg, pillar.color)}>
                        <PillarIcon className="size-4" />
                      </div>
                      <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-xs leading-relaxed text-muted-foreground text-justify-clean pt-1">
                      {pillar.desc}
                    </p>
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── ANIMASI 4: DUAL-TRACK INFINITE MARQUEE WITH EDGE GRADIENT FADES ─── */}
      <section id="about-tools" className="relative">
        <div className="mx-auto w-full max-w-2xl space-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="space-y-1.5">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                HR Tools & Technologies
              </h2>
              <p className="text-sm text-muted-foreground">
                Software, analytical platforms, and systems utilized in daily HR operations.
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 5.5}>
            <div className="relative overflow-hidden py-2 space-y-3 w-full rounded-2xl border border-border/60 bg-card/40 p-4">
              {/* Left & Right Edge Fades */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-card to-transparent z-10" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-card to-transparent z-10" />

              {/* Track 1: Glides Left */}
              <div className="relative overflow-hidden whitespace-nowrap">
                <div className="animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
                  <div className="inline-flex gap-3">
                    {[...Array(4)].map((_, loopIdx) => (
                      <div key={loopIdx} className="inline-flex gap-3">
                        {row1Tools.map((tech) => {
                          const IconComponent = Icons[tech.icon as keyof typeof Icons];
                          return (
                            <div
                              key={`t1-${loopIdx}-${tech.name}`}
                              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-border bg-card/80 hover:bg-accent hover:border-primary/40 text-xs font-medium text-foreground transition-colors shrink-0 shadow-2xs cursor-default"
                            >
                              {IconComponent && <IconComponent className="size-4 shrink-0" />}
                              <span>{tech.name}</span>
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Track 2: Glides Right */}
              <div className="relative overflow-hidden whitespace-nowrap">
                <div className="animate-marquee-reverse hover:[animation-play-state:paused] whitespace-nowrap">
                  <div className="inline-flex gap-3">
                    {[...Array(4)].map((_, loopIdx) => (
                      <div key={loopIdx} className="inline-flex gap-3">
                        {row2Tools.map((tech) => {
                          const IconComponent = Icons[tech.icon as keyof typeof Icons];
                          return (
                            <div
                              key={`t2-${loopIdx}-${tech.name}`}
                              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-border bg-card/80 hover:bg-accent hover:border-primary/40 text-xs font-medium text-foreground transition-colors shrink-0 shadow-2xs cursor-default"
                            >
                              {IconComponent && <IconComponent className="size-4 shrink-0" />}
                              <span>{tech.name}</span>
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ─── CONTACT SECTION (MATCHING HOME PAGE) ─────────────────────── */}
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just send me a direct message{" "}
                <Link
                  href="https://wa.me/6282229634571"
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on WhatsApp
                </Link>{" "}
                and I&apos;ll respond whenever I can. I will ignore all forms of
                solicitation.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}