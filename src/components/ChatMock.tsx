"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/i18n/get-dictionary";

export default function ChatMock({ chat }: { chat: Dictionary["hero"]["chat"] }) {
  return (
    <div className="float-slow relative mx-auto w-full max-w-sm">
      <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-brand/30 to-brand-2/20 blur-2xl" />
      <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0e0e12] shadow-2xl">
        <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.03] px-4 py-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-2 text-sm font-bold text-white">
            L
          </span>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-white">{chat.title}</div>
            <div className="flex items-center gap-1.5 text-xs text-brand-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-2" />
              {chat.status}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2.5 px-4 py-5">
          {chat.messages.map((m, i) => {
            const isBot = m.from === "bot";
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.7, duration: 0.4 }}
                className={isBot ? "flex justify-start" : "flex justify-end"}
              >
                <div
                  className={
                    isBot
                      ? "max-w-[80%] rounded-2xl rounded-bl-md bg-white/8 px-3.5 py-2.5 text-sm text-white/90"
                      : "max-w-[80%] rounded-2xl rounded-br-md bg-gradient-to-br from-brand to-brand-2 px-3.5 py-2.5 text-sm text-white"
                  }
                >
                  {m.text}
                </div>
              </motion.div>
            );
          })}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{
              delay: 0.5 + chat.messages.length * 0.7,
              duration: 1.4,
              repeat: Infinity,
              repeatDelay: 2,
            }}
            className="flex w-fit gap-1 rounded-2xl rounded-bl-md bg-white/8 px-3.5 py-3"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
