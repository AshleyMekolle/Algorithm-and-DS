import { create } from 'zustand';

interface ExecutionState {
  code: string;
  setCode: (code: string) => void;
}

export const useExecutionStore = create<ExecutionState>((set) => ({
  code: '',
  setCode: (code) => set({ code }),
}));
