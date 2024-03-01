'use client'

import { useGet } from '@/hooks/useGet'
import React from 'react'
import Swal from 'sweetalert2'

export const Apply = () => {
  const {getBig} = useGet()
  const handleClick = () => {
    const res= getBig()
    !res && Swal.fire({
      icon: 'error',
      title: "You didn't select a scoreboard",
      showConfirmButton: false,
      timer: 1500
    })
    res && Swal.fire({
      icon: 'success',
      title: res.msg,
      showConfirmButton: false,
      timer: 1500
    })
  }
  return (
    <button id='apply' onClick={handleClick}></button>
  )
}
