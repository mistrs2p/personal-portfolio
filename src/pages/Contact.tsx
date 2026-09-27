import { Linkedin, Mail, Send } from "lucide-react";
import { SiGithub as Github } from "@icons-pack/react-simple-icons";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  const { t } = useTranslation();

  const contacts = [
    { key: "email", value: "MahdiMousavi40@gmail.com", href: "mailto:MahdiMousavi40@gmail.com", icon: Mail },
    { key: "github", value: "github.com/mistrs2p", href: "https://github.com/mistrs2p", icon: Github },
    { key: "linkedin", value: t("contact.addLinkedIn"), href: undefined, icon: Linkedin },
    { key: "telegram", value: t("contact.addTelegram"), href: undefined, icon: Send },
  ] as const;

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[450px] w-[650px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[140px]" />
      <div className="relative mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">{t("contact.eyebrow")}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{t("contact.title")}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-zinc-500">{t("contact.description")}</p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.div key={contact.key} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }}>
                <Card className="rounded-3xl border-white/10 bg-white/[0.02] transition hover:border-white/20 hover:bg-white/[0.04]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-emerald-400"><Icon className="h-5 w-5" /></div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-white">{t(`contact.${contact.key}`)}</p>
                        <p className="mt-1 truncate text-sm text-zinc-500">{contact.value}</p>
                      </div>
                    </div>
                    {contact.href ? (
                      <a href={contact.href} target={contact.href.startsWith("http") ? "_blank" : undefined} rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                        className={buttonVariants({ variant: "outline", className: "mt-6 w-full rounded-xl border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white" })}>
                        {t("contact.connect")}
                      </a>
                    ) : (
                      <span className="mt-6 flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-600">{t("contact.connect")}</span>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-r from-blue-500/[0.05] to-violet-500/[0.05] p-8 text-center">
          <p className="text-sm text-zinc-500">{t("contact.preferEmail")}</p>
          <a href="mailto:MahdiMousavi40@gmail.com" className="mt-2 inline-block text-lg font-medium text-white transition hover:text-blue-400">MahdiMousavi40@gmail.com</a>
        </div>
      </div>
    </div>
  );
}