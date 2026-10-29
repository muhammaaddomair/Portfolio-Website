"use client";

import { createContext, useState, ReactNode, useContext } from "react";

type ModalsContextType = {
  isConnectModalOpen: boolean;
  openConnectModal: () => void;
  closeConnectModal: () => void;

  isScheduleModalOpen: boolean;
  openScheduleModal: () => void;
  closeScheduleModal: () => void;
};

const ModalsContext = createContext<ModalsContextType | undefined>(undefined);

export const ModalsProvider = ({ children }: { children: ReactNode }) => {
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);

  const openConnectModal = () => setIsConnectModalOpen(true);
  const closeConnectModal = () => setIsConnectModalOpen(false);

  const openScheduleModal = () => setIsScheduleModalOpen(true);
  const closeScheduleModal = () => setIsScheduleModalOpen(false);

  return (
    <ModalsContext.Provider
      value={{
        isConnectModalOpen,
        openConnectModal,
        closeConnectModal,
        isScheduleModalOpen,
        openScheduleModal,
        closeScheduleModal,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
};

export const useModals = () => {
  const context = useContext(ModalsContext);

  if (!context) {
    throw new Error("useModals must be used inside ModalsProvider");
  }

  return context;
};
