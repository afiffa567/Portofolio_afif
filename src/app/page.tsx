import { TaglineAnimation } from "@/components/tagline-animation";
import { AnimatedTools } from "@/components/animated-tools";
import { AnimatedSkills } from "@/components/animated-skills";
import { Icons } from "@/components/icons";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { HackathonCard } from "@/components/hackathon-card";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Image from "next/image";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero" className="relative">
        <div className="mx-auto w-full max-w-2xl space-y-4 sm:space-y-5">
          <div className="flex items-center justify-between gap-4 sm:gap-6">
            <div className="flex-col flex flex-1 space-y-1.5 sm:space-y-2">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-sm sm:text-base font-medium tracking-tight text-muted-foreground"
                yOffset={6}
                text="Hello, it's me"
              />

              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-2xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight"
                yOffset={6}
                text="AFIF FAISAL ALAMSYAH"
              />

              <div className="pt-0.5">
                <TaglineAnimation taglines={DATA.taglines} />
              </div>
            </div>

            {/* Foto transparan murni tanpa background box / border */}
            <BlurFade delay={BLUR_FADE_DELAY} className="shrink-0">
              <div className="relative w-24 h-32 sm:w-32 sm:h-40 md:w-36 md:h-44">
                <Image
                  src={DATA.avatarUrl}
                  alt={DATA.name}
                  fill
                  className="object-contain object-bottom drop-shadow-md select-none"
                  sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, 144px"
                  priority
                />
              </div>
            </BlurFade>
          </div>

          {/* Deskripsi dekat dengan foto dan rata kanan kiri */}
          <BlurFade delay={BLUR_FADE_DELAY * 1.5} className="pt-3 sm:pt-1">
            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground text-justify-clean">
              {DATA.description}
            </p>
          </BlurFade>

          <div className="pt-2">
            <BlurFade delay={BLUR_FADE_DELAY * 2.5}>
              <h3 className="text-lg font-semibold mb-4 tracking-tight">
                HR TOOLS & TECHNOLOGIES
              </h3>
              <AnimatedTools tools={DATA.techStack} />
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 3.5 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 4.5 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
                description={education.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <AnimatedSkills skills={DATA.skills} />
        </div>
      </section>

      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  HR Portfolio
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  HR Projects & Portfolio
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-justify-clean">
                  A showcase of hands-on human resources projects, including recruitment & selection, HR analytics, performance management, employee administration, and automated payroll systems.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 6.5 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Organizations and Certifications
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like creating new things
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-justify-clean">
                  During my time in university, I was actively involved in
                  various organizations and earned certifications to enhance my
                  skills. These experiences helped shape my professional growth
                  and provided opportunities to connect with like-minded
                  individuals while pursuing my academic and career goals.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 7.5}>
            <ul className="mb-4 ml-8 sm:ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 8 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>

      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
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