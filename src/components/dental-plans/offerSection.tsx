
import { offers } from '@/data/dentalPlans'
import OfferCard from './offerCard'

function OfferSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6 pb-24">
  {offers.map((offer) => (
    <OfferCard
      key={offer.title}
      title={offer.title}
      offer={offer.offer}
      price={offer.price}
      description={offer.description}
      icon={offer.icon}
      slug={offer.slug}
    />
  ))}
</div>
  )
}

export default OfferSection