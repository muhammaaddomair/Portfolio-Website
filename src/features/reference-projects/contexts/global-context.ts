"use client";
import { useModals } from "@/providers/modals-provider";
export function useGlobalContext() { const {openConnectModal, closeConnectModal} = useModals(); return {setConnectModal: (open: boolean) => open ? openConnectModal() : closeConnectModal()}; }
