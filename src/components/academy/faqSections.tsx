
import React from 'react'
import SectionHeader from '../general/sectionHeader'
import FAQ from '../general/faq'
import { academyFaqData } from '@/utils/constants'

function FaqSections() {
  return (
    <div className=' mb-10 py-10 overflow-hidden flex items-center justify-center flex-col'>
        <div className='max-w-7xl mx-auto px-6 lg:px-10'>
        <SectionHeader
          tag="FAQ"
          title="Quietly answered."
        />
        <FAQ data={academyFaqData}/>
        </div>

    </div>
  )
}

export default FaqSections