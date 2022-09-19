import React from 'react';
import "./WebShopInfo.css";
import FreeShippingIcon from '../../images/icons/free-shipping-icon.svg';
import TwentyFourSevenIcon from '../../images/icons/24-7-icon.svg';
import OnlinePaymentIcon from '../../images/icons/onlinepayment-icon.svg';
import FastDeliveryIcon from '../../images/icons/fastdelivery-icon.svg';

const WebShopInfo = () => {
  return (
    <section className="webshop-info">
        <div className="container">
            <div className="info-box">
                <img src={FreeShippingIcon} alt="Free shipping" />
                <div>
                    <h1>Free shipping</h1>
                    <p>For a local customer, we provide free shipping facility</p>
                </div>
            </div>
            <div className="info-box">
                <img src={TwentyFourSevenIcon} alt="24/7 support" />
                <div>
                    <h1>24/7 support</h1>
                    <p>For any inquiry, we are available 24 hours every day</p>
                </div>
            </div>
            <div className="info-box">
                <img src={OnlinePaymentIcon} alt="Online payment" />
                <div>
                    <h1>Online payment</h1>
                    <p>You can pay quickly and easily with our online payment system</p>
                </div>
            </div>
            <div className="info-box">
                <img src={FastDeliveryIcon} alt="Free delivery" />
                <div>
                    <h1>Free delivery</h1>
                    <p>For a local customer, we provide free shipping facility</p>
                </div>
            </div>

        </div>
    </section>
  )
}

export default WebShopInfo