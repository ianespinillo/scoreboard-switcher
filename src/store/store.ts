import { create } from "zustand";
import { competition, country, selectedScoreboard } from '../types/index';

interface filesState {
    countries: Array<country>
    competition: Array<competition>
    selectedScoreboard: selectedScoreboard
    selectedCountry: country
    selectedCompetition: competition
    setCountry: (country: country) => void
    setCompetitions: (competition: Array<competition>) => void
    setSelectedScoreboard: (selectedScoreboard: selectedScoreboard) => void
    setCountries: (countries: Array<country>) => void
}

export const useFiles= create<filesState>((set) => ({
    countries: [] as Array<country>,
    competition: [] as Array<competition>,
    selectedScoreboard: {} as selectedScoreboard,
    selectedCountry: {} as country,
    selectedCompetition: {} as competition,
    setCountry:(country: country) => set((state)=>({...state, selectedCountry: country})),
    setCompetitions:(compet: Array<competition>) => set((state)=>({...state, competition: compet})),
    setSelectedScoreboard:(selectedScoreboard: selectedScoreboard) => set((state)=>({...state, selectedScoreboard: selectedScoreboard})),
    setCountries: (countries: Array<country>) => set((state)=>({...state, countries: countries})),
}));