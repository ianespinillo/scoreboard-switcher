'use client'

import { competition, country, selectedScoreboard } from '@/types'
import { useEffect, useState } from 'react'
import { useFiles } from '../store/store';
import { deleteFile, downloadFile } from '@/helpers/file';
import Swal from 'sweetalert2';

export const useGet = () => {
  const {competition, countries, selectedScoreboard, setCountries, setCompetitions, setSelectedScoreboard, setCountry} = useFiles();
  useEffect(() => {
    getCountries()
  }, [])
  
  const getCountries = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/pais/`)
      .then(res => res.json())
      .then(data => setCountries(data))
  }
  const getCompetition = (paisId: string) => {
    
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/pais/detalle/${paisId}`)
      .then(res => res.json())
      .then(data => setCompetitions(data))
      .catch(err => console.error(err))
  }
  const getFiles = (competitionId:string)=>{
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/competition/${competitionId}`)
      .then(res => res.json())
      .then(data => setSelectedScoreboard(data))
  }
  const getBig = () => {
    if(!selectedScoreboard){
      
      return undefined
    }
    fetch(selectedScoreboard.big_url)
      .then(res=> res.blob())
      .then(data => {
        downloadFile(data)
      })
      .catch(err =>console.error(err))
      return {
        success: true,
        msg: 'Successfully aplied'
      }
  }
  const reset=() => {
    setSelectedScoreboard({} as selectedScoreboard)
    setCountry({} as country)
    deleteFile()
  }
  return {
    countries,
    competition,
    selectedScoreboard,
    getCountries,
    getCompetition,
    getFiles,
    getBig,
    reset,
  }
}
