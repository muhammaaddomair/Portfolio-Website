"use client";

import dynamic from "next/dynamic";
import { useModals } from "@/providers/modals-provider";

const ConnectModal = dynamic(() => import("./connect-modal"), { ssr: false });

export default function DeferredConnectModal() {
  const { isConnectModalOpen } = useModals();
  return isConnectModalOpen ? <ConnectModal /> : null;
}
