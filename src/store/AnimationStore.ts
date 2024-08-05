import { create } from 'zustand';

interface AnimationStoreInterface {
    started: boolean,
    zoom: 'in' | 'out',
    startAnimation: (zoom: 'in' | 'out') => any,
    endAnimation: () => any,
}

export const useAnimationStore = create<AnimationStoreInterface>((set, get) => ({
    started: false,
    zoom: 'out',
    startAnimation: (zoom) => set((state) => ({ started: true, zoom: zoom })),
    endAnimation: () => set((state) => ({ ...state, started: false })),
}));