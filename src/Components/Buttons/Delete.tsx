"use client"

import { useGet } from '@/hooks/useGet'
import React from 'react'


export const Delete = () => {
  const {reset} = useGet()
  return (
    <button id='delete' onClick={() => reset()}></button>
  )
}
