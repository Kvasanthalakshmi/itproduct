import React from 'react';
import './ShippingPolicy.css'; // Importing CSS file

const ShippingPolicy = () => {
  const shippingPoints = [
    "We offer FREE Shipping on all orders through www.hifiitpark.com for eligible locations.",
    "Each order may be shipped only to a single destination address specified at the time of payment for that order. If you wish to ship products to different addresses, you shall need to place multiple orders.",
    "We make our best efforts to ship each item in your order within 2-5 working days of the order. For other states, we may take 4 - 7 working days to ship the order.",
    "We ship on all weekdays (Monday to Saturday), excluding public holidays.",
    "To ensure that your order reaches you in the fastest time and in good condition, we only ship through reputed courier agencies.",
    "While we shall strive to ship all items in your order together, this may not always be possible due to product characteristics or availability.",
    "If you believe that the product is not in good condition, or if the packaging is tampered with or damaged, before accepting delivery of the goods, please refuse to take delivery of the package, and call our Customer Care mentioning your order reference number. We shall make our best efforts to ensure that a replacement delivery is made to you at the earliest.",
    "You may track the shipping status of your order by the tracking Order ID / Billing No.",
    "Please note all items will be shipped with an invoice mentioning the price, as per Indian Tax Regulations."
  ];

  return (
    <div className="shipping-policy">
      <h2>Shipping Policy</h2>
      <ul>
        {shippingPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShippingPolicy;
