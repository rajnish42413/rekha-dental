import PillarCard from '@/components/general/pillarCard'
import SectionHeader from '@/components/general/sectionHeader'
import { advancedDentalTechnologies, patientFriendlyCare, sterilizationProcess } from '@/utils/constants'
import React from 'react'

function page() {
  return (
    <div className="pt-10">
        <SectionHeader
        tag="WHY CHOOSE REKHA DENTAL"
        title="Trusted care for every smile."
        subtitle="Combining clinical excellence, advanced technology, and compassionate care to deliver exceptional dental experiences."
      />
      <div className="lg:my-16 my-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 mx-10">
        {patientFriendlyCare.map((item) => (
          <PillarCard
            key={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon}
            number={item.number}
          />
        ))}
      </div>
      <SectionHeader
        tag="WHY CHOOSE REKHA DENTAL"
        title="Trusted care for every smile."
        subtitle="Combining clinical excellence, advanced technology, and compassionate care to deliver exceptional dental experiences."
      />
      <div className="lg:my-16 my-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 mx-10">
        {sterilizationProcess.map((item) => (
          <PillarCard
            key={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon}
            number={item.number}
          />
        ))}
      </div>
      <SectionHeader
        tag="WHY CHOOSE REKHA DENTAL"
        title="Trusted care for every smile."
        subtitle="Combining clinical excellence, advanced technology, and compassionate care to deliver exceptional dental experiences."
      />
      <div className="lg:my-16 my-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 mx-10">
        {advancedDentalTechnologies.map((item) => (
          <PillarCard
            key={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon}
            number={item.number}
          />
        ))}
      </div>

    </div>
  )
}

export default page