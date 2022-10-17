import React from 'react'
import InfoBox from '../components/InfoBox'
import FreeShippingIcon from '../assets/images/icons/free-shipping-icon.svg'
import TwentyFourSevenSupportIcon from '../assets/images/icons/24-7-icon.svg'
import OnlineDeliveryIcon from '../assets/images/icons/onlinepayment-icon.svg'
import FreeDeliveryIcon from '../assets/images/icons/fastdelivery-icon.svg'


const WebshopInfo = () => {
  return (
    <section className="webshop-info">
        <div className="container">
            
            <InfoBox title="Free shipping" description="For a local customer, we provide free shipping facility" img={FreeShippingIcon} />
            <InfoBox title="24/7 support" description="For any inquiry, we are available 24 hours every day" img={TwentyFourSevenSupportIcon} />
            <InfoBox title="Online payment" description="You can pay quickly and easily with our online payment system" img={OnlineDeliveryIcon} />
            <InfoBox title="Free delivery" description="For a local customer, we provide free shipping facility" img={FreeDeliveryIcon} />

        </div>
    </section>
  )
}

export default WebshopInfo