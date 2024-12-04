import PhotoDetails from '@/components/PhotoDEtails'
import React from 'react'

export default function page({params}) {
  return (
    <div>
      <PhotoDetails id={ params.id} lang={ params.lang } />
    </div>
  )
}