"use client";

import { useState, useRef } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import {
  Sparkles,
  Bot,
  Send,
  User,
  RotateCcw,
  AlertCircle,
  ArrowUpRight,
  HelpCircle,
} from "lucide-react";
import Markdown from "react-markdown";
import Link from "next/link";

// ─── TYPES ───────────────────────────────────────────────────
type Role = "user" | "assistant";

interface Message {
  role: Role;
  content: string;
}

// ─── GROQ / GROK API KEY ──────────────────────────────────────
const GROK_KEY = process.env.NEXT_PUBLIC_GROQ_API_KEY || "";

// ─── SYSTEM CONTEXT ───────────────────────────────────────────
const SYSTEM_CONTEXT = `You are the professional AI Assistant representing AFIF FAISAL ALAMSYAH.
Afif Faisal Alamsyah is a Human Resources Professional with a Bachelor's degree in Informatics from Telkom University Surabaya (GPA 3.62 / 4.00).

Profile Summary:
Afif has hands-on experience supporting end-to-end HR operations, including recruitment, employee administration, attendance management, BPJS administration, and outsourced workforce coordination. He combines human-centric HR processes with data management, systems, and process automation.

Professional Experience:
1. PT Djati Perkasa Baofeng Indonesia (Jan 2026 - May 2026) - Human Resources Department (HRD):
   - Managed employee administration and maintained accurate personnel records for 30 internal employees.
   - Supported end-to-end recruitment for 5 staff vacancies by screening ~150 candidates, scheduling interviews, and facilitating selection.
   - Administered attendance, leave, and overtime using Microsoft Excel.
   - Processed BPJS Kesehatan and BPJS Ketenagakerjaan enrollment, data updates, and statutory compliance.
   - Coordinated manpower requests, onboarding, placement, and performance monitoring for 160 outsourced employees with external vendors.
   - Prepared HR reports and ensured compliance with company policies and Indonesian labor regulations.
2. MOSHEE Universitas Telkom Surabaya (Sep 2025 - Dec 2025) - Intern Back End Developer (supported 500+ users, automated deployment by 83%).
3. Telkom University Surabaya (Feb 2025 - Jun 2025 & Sep 2024 - Dec 2024) - Practicum Assistant for Informatics & Operating Systems (trained 190+ students, 92% satisfaction rate).

Education:
- Telkom University Surabaya (Aug 2022 - Dec 2025): Bachelor of Informatics, GPA 3.62 / 4.00.
- SMK Telkom Banjarbaru (Jul 2019 - May 2022): Software Engineering (BNSP Junior Web Developer Certified).

Certifications:
- Bootcamp Human Resource (2026) - KarirNex by PT Ebiz Karisma Internasional
- Kelas HR : Jago Payroll Batch 27 (2025) - PT MSDM Indonesia Bisa
- Kelas Siap Menjadi HRGA Staff (2025) - PT MSDM Indonesia Bisa
- eBootcamp HR : Staff HR (2025) - PT MSDM Indonesia Bisa
- Kelas Siap Jadi HR Generalist Batch 13 (2025) - PT MSDM Indonesia Bisa
- Conflict Management & Public Speaking with NLP (2020) - Skill Academy by Ruangguru

Key HR Projects & Portfolio:
- Recruitment & Selection: Job vacancy preparation, Behavioral Event Interview (BEI), interview reports, job analysis, PKWT, structured onboarding.
- Absence Rate & Attendance Analytics: Descriptive, diagnostic, predictive, and prescriptive attendance data analysis.
- SMART KPI Performance Dashboard: Interactive department performance scoring and tracking.
- Training Needs Analysis (TNA): Structured competency gap assessments and training design.
- Automated Payroll & Compensation: Monthly payroll calculations, payslip generation, overtime, PPh 21, BPJS, compensation, and severance pay.

HR Tools & Technologies:
Microsoft Excel for HR, Google Sheets, Word, PowerPoint, HRIS System, Odoo HR, Jibble, Google Workspace, Power BI, Tableau, SQL Database, Python.

Guidelines:
- Answer warmly, professionally, accurately, and concisely (under 150 words unless detailed explanation is asked).
- Represent Afif in the third person or as his knowledgeable AI representative.
- If asked about hiring or contacting Afif: share email ${DATA.contact.email} or WhatsApp https://wa.me/6282229634571.`;

// ─── GROK CALLER (POWERED BY GROQ LPU) ────────────────────────
async function callGrok(history: Message[], userText: string): Promise<string> {
  const models = ["openai/gpt-oss-120b", "groq/compound", "openai/gpt-oss-20b"];
  let lastError = "";

  for (const model of models) {
    try {
      const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${GROK_KEY}`,
        },
        body: JSON.stringify({
          model,
          messages: [
            { role: "system", content: SYSTEM_CONTEXT },
            ...history.map((m) => ({ role: m.role, content: m.content })),
            { role: "user", content: userText },
          ],
          max_tokens: 800,
          temperature: 0.7,
        }),
      });

      const data = (await res.json()) as {
        choices?: { message?: { content?: string } }[];
        error?: { message?: string };
      };

      if (!res.ok || data.error) {
        lastError = data.error?.message ?? `HTTP ${res.status}`;
        continue;
      }

      const text = data?.choices?.[0]?.message?.content;
      if (text) return text;
    } catch (err: unknown) {
      lastError = err instanceof Error ? err.message : "Network error";
    }
  }

  throw new Error(`Grok AI error: ${lastError || "Failed to generate response"}`);
}

// ─── HR SUGGESTIONS (FULL TEXT VISIBLE IN GRID) ───────────────
const HR_SUGGESTIONS: { title: string; category: string }[] = [
  {
    title: "What is Afif's experience in HR Operations?",
    category: "Experience",
  },
  {
    title: "How did he coordinate 160 outsourced workers?",
    category: "Workforce",
  },
  {
    title: "Tell me about his recruitment and onboarding projects",
    category: "Recruitment",
  },
  {
    title: "What HR tools and HRIS systems does he use?",
    category: "Tools & HRIS",
  },
  {
    title: "What certifications does he hold from MSDM & KarirNex?",
    category: "Certifications",
  },
  {
    title: "How does his Informatics degree benefit HR analytics?",
    category: "Background",
  },
];

// ─── MAIN COMPONENT ───────────────────────────────────────────
export default function AIPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const inputRef = useRef<HTMLTextAreaElement>(null);

  const sendMessage = async (text?: string): Promise<void> => {
    const trimmed = (text ?? input).trim();
    if (!trimmed || isLoading) return;

    setErrorMsg(null);
    setInput("");
    if (inputRef.current) inputRef.current.style.height = "auto";

    const historySnapshot = [...messages];
    const userMsg: Message = { role: "user", content: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const reply = await callGrok(historySnapshot, trimmed);
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Unknown error occurred.";
      setErrorMsg(msg);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `⚠️ ${msg}. Please try again.`,
        },
      ]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void sendMessage();
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setInput(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const clearChat = () => {
    setMessages([]);
    setErrorMsg(null);
  };

  const BLUR_DELAY = 0.04;

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-8 pb-24">
      {/* ─── HEADER ────────────────────────────────────────────── */}
      <section id="ai-header" className="relative pt-2">
        <div className="mx-auto w-full max-w-2xl space-y-5">
          <BlurFade delay={BLUR_DELAY}>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary/60 text-xs font-medium text-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>AI Assistant Online</span>
              </div>

              {messages.length > 0 && (
                <button
                  onClick={clearChat}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border border-border bg-card hover:bg-accent text-xs font-medium text-muted-foreground hover:text-foreground transition-all cursor-pointer"
                >
                  <RotateCcw className="size-3" />
                  <span>Start new conversation</span>
                </button>
              )}
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_DELAY * 1.5}>
            <div className="space-y-1.5">
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
                Ask About Afif Faisal Alamsyah
              </h1>
              <p className="text-xs sm:text-base text-muted-foreground leading-relaxed">
                An intelligent assistant with complete knowledge of Afif&apos;s HR experience, recruitment projects, BPJS compliance, payroll systems, and academic background.
              </p>
            </div>
          </BlurFade>

          {/* Active Model Indicator */}
          <BlurFade delay={BLUR_DELAY * 2}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/80 bg-secondary/50 backdrop-blur-xs text-xs font-medium text-foreground shadow-2xs">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Grok AI</span>
              <span className="text-muted-foreground/50">•</span>
              <span className="text-[11px] text-muted-foreground">High-Speed Engine Active</span>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ─── SUGGESTIONS (ALL VISIBLE IN FULL GRID - NO SCROLL) ──── */}
      {messages.length === 0 && (
        <section id="ai-suggestions" className="relative">
          <div className="mx-auto w-full max-w-2xl space-y-3">
            <BlurFade delay={BLUR_DELAY * 2.5}>
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <HelpCircle className="size-3.5" />
                <span>Frequently Asked Questions</span>
              </div>
            </BlurFade>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full">
              {HR_SUGGESTIONS.map((s, idx) => (
                <BlurFade
                  key={s.title}
                  delay={BLUR_DELAY * 3 + idx * 0.04}
                >
                  <button
                    onClick={() => void sendMessage(s.title)}
                    disabled={isLoading}
                    className="w-full text-left p-3.5 rounded-xl border border-border/80 bg-card/60 hover:bg-card hover:border-primary/50 hover:shadow-xs transition-all duration-200 flex items-start justify-between gap-3 group cursor-pointer"
                  >
                    <div className="space-y-1 flex-1 min-w-0">
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-primary">
                        {s.category}
                      </span>
                      <p className="text-xs sm:text-sm font-medium text-foreground group-hover:text-primary transition-colors leading-snug">
                        {s.title}
                      </p>
                    </div>
                    <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-0.5" />
                  </button>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── CONVERSATION STREAM (NATURAL FLOW - ZERO INNER SCROLL) ─ */}
      <section id="ai-messages" className="relative">
        <div className="mx-auto w-full max-w-2xl space-y-4">
          {errorMsg && (
            <div className="p-3.5 rounded-xl border border-destructive/30 bg-destructive/10 text-destructive text-xs flex items-center gap-2.5">
              <AlertCircle className="size-4 shrink-0" />
              <span className="flex-1 leading-relaxed">{errorMsg}</span>
            </div>
          )}

          {/* Message List: Expands naturally, text is 100% visible */}
          {messages.map((msg, idx) => {
            const isUser = msg.role === "user";
            return (
              <div
                key={idx}
                className={`flex gap-2 sm:gap-3.5 ${
                  isUser ? "justify-end" : "justify-start"
                } items-start`}
              >
                {!isUser && (
                  <div className="size-7 sm:size-8 rounded-xl bg-primary/10 text-primary border border-primary/25 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Bot className="size-3.5 sm:size-4" />
                  </div>
                )}

                <div
                  className={`rounded-2xl leading-relaxed text-xs sm:text-sm ${
                    isUser
                      ? "max-w-[88%] sm:max-w-[78%] px-3.5 py-2.5 sm:px-4 sm:py-3 bg-foreground text-background font-medium shadow-xs"
                      : "w-full p-3.5 sm:p-5 rounded-2xl border border-border/80 bg-card/70 backdrop-blur-xs shadow-xs text-foreground"
                  }`}
                >
                  {isUser ? (
                    <p className="whitespace-pre-wrap">{msg.content}</p>
                  ) : (
                    <div className="prose dark:prose-invert max-w-none text-xs sm:text-sm leading-relaxed prose-p:leading-relaxed prose-li:leading-relaxed prose-pre:bg-muted/80">
                      <Markdown>{msg.content}</Markdown>
                    </div>
                  )}
                </div>

                {isUser && (
                  <div className="size-7 sm:size-8 rounded-xl bg-foreground text-background flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <User className="size-3.5 sm:size-4" />
                  </div>
                )}
              </div>
            );
          })}

          {/* Loading Indicator */}
          {isLoading && (
            <div className="flex gap-3.5 items-start">
              <div className="size-8 rounded-xl bg-primary/10 text-primary border border-primary/25 flex items-center justify-center shrink-0 shadow-2xs">
                <Bot className="size-4" />
              </div>
              <div className="p-4 rounded-2xl border border-border/80 bg-card/70 flex items-center gap-2">
                <span className="size-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
                <span className="size-2 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
                <span className="size-2 rounded-full bg-primary animate-bounce" />
                <span className="text-xs text-muted-foreground ml-2">
                  Thinking with Grok AI...
                </span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ─── INPUT BAR (CLEAN & MODERN) ─────────────────────────── */}
      <section id="ai-input" className="relative pt-2">
        <div className="mx-auto w-full max-w-2xl space-y-3">
          <div className="p-2 rounded-2xl border border-border bg-card/90 backdrop-blur-md shadow-xs focus-within:border-primary/60 focus-within:ring-2 focus-within:ring-primary/15 transition-all">
            <div className="flex items-end gap-2 px-2 pt-1 pb-1">
              <textarea
                ref={inputRef}
                rows={2}
                value={input}
                onChange={handleTextareaChange}
                onKeyDown={handleKeyDown}
                placeholder="Ask Grok AI anything about Afif's HR experience, recruitment, payroll, education..."
                className="flex-1 bg-transparent text-xs sm:text-sm text-foreground placeholder:text-muted-foreground outline-none resize-none px-1 py-1 leading-relaxed min-h-[44px]"
              />
              <button
                onClick={() => void sendMessage()}
                disabled={!input.trim() || isLoading}
                aria-label="Send message"
                className="size-9 rounded-xl bg-foreground text-background flex items-center justify-center shrink-0 hover:bg-foreground/90 active:scale-95 disabled:opacity-30 transition-all cursor-pointer disabled:cursor-not-allowed shadow-xs"
              >
                <Send className="size-4" />
              </button>
            </div>

            <div className="flex items-center justify-between text-[11px] text-muted-foreground px-2 pt-2 border-t border-border/40">
              <span className="hidden sm:inline">
                Press <kbd className="font-mono bg-muted/80 px-1 py-0.5 rounded text-[10px] border border-border/60">Enter ↵</kbd> to send, <kbd className="font-mono bg-muted/80 px-1 py-0.5 rounded text-[10px] border border-border/60">Shift+Enter</kbd> for newline
              </span>
              <span className="sm:hidden">Enter to send</span>

              <div className="flex items-center gap-1.5">
                <span>Direct Contact:</span>
                <Link
                  href="https://wa.me/6282229634571"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium inline-flex items-center gap-0.5"
                >
                  <span>WhatsApp</span>
                  <ArrowUpRight className="size-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}