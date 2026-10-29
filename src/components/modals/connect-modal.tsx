"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { useModals } from "@/providers/modals-provider";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

import CalenderIcon from "../../../public/icons/calender-icon.png";
import MailIcon from "../../../public/icons/mail-icon.png";
import FormIcon from "../../../public/icons/form-icon.png";
import CallIcon from "../../../public/icons/call-icon.png";

function ConnectModal() {
  const { isConnectModalOpen, closeConnectModal } = useModals();

  return (
    <Dialog
      open={isConnectModalOpen}
      onOpenChange={(open) => !open && closeConnectModal()}
    >
      <DialogContent className="md:max-w-120 max-w-[90%] border border-white/10 bg-black/60 backdrop-blur-2xl shadow-[0_30px_120px_rgba(0,0,0,0.35)] rounded-2xl! overflow-hidden z-50">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-32 -left-32 h-70 w-70 rounded-full blur-[120px] opacity-40"
            style={{
              background:
                "radial-gradient(circle, #4f46e5 0%, transparent 70%)",
            }}
          />

          <div
            className="absolute -bottom-32 -right-32 h-70 w-70 rounded-full blur-[120px] opacity-30"
            style={{
              background:
                "radial-gradient(circle, #3730a3 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col gap-6">
          <DialogHeader className="text-center flex-center flex-col gap-0">
            <DialogTitle className="md:text-2xl text-xl text-heading font-manrope uppercase font-bold">
              Start a Conversation
            </DialogTitle>
            <DialogDescription className="text-sub-heading text-sm">
              Choose the communication channel that works best for you
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-4 w-full rounded-xl border border-white/30 px-4 py-4 transition-all"
            >
              <Image src={CalenderIcon} alt="calendar" width={28} height={28} />
              <span className="md:text-base text-sm text-dark-foreground">
                Schedule Consultation
              </span>
            </motion.button>

            <div className="flex max-md:flex-col items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 w-full rounded-xl border border-white/10 bg-white/3
              hover:bg-white/6 px-4 py-4 transition-all"
              >
                <Image src={MailIcon} alt="mail" width={26} height={26} />
                <span className="md:text-base text-sm text-dark-foreground">
                  Send an Email
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 w-full rounded-xl border border-white/10 bg-white/3
              hover:bg-white/6 px-4 py-4 transition-all"
              >
                <Image src={CallIcon} alt="call" width={26} height={26} />
                <span className="md:text-base text-sm text-dark-foreground">
                  Talk on Call
                </span>
              </motion.button>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-4 w-full rounded-xl border border-white/10 bg-white/3
              hover:bg-white/6 px-4 py-4 transition-all"
            >
              <Image src={FormIcon} alt="form" width={26} height={26} />
              <span className="md:text-base text-sm text-dark-foreground">
                Fill a Form
              </span>
            </motion.button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ConnectModal;
