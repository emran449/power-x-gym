import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './PriceList.css'; // Assuming you have a CSS file for styles

const PriceList = () => {
  const plansData = [
    {
      plan: "Advanced Plan",
      style: 'advanced',
      price: '$140',
      billingCycle: "monthly",
      features: [
        "Mobile-Optimized",
        "Best Hosting",
        "Free Custom",
        "Outstanding",
        "Happy Customers",
      ],
      action: "Purchase",
    },
    {
      plan: "Basic Plan",
        style: 'basic',
      price: "$120",
      billingCycle: "monthly",
      features: [
        "Mobile-Optimized",
        "Best Hosting",
        "Free Custom",
        "Outstanding",
        "Happy Customers",
      ],
      action: "Purchase",
    },
    {
      plan: "Beginners",
        style: 'beginners',
      price: '$90',
      billingCycle: "monthly",
      features: [
        "Mobile-Optimized",
        "Best Hosting",
        "Free Custom",
        "Outstanding",
        "Happy Customers",
      ],
      action: "Purchase",
    },
  ];
  return (
    <div className="container my-5">
      <div className="text-center ">
        <h1 className="text-center my-3">
          <span className="text-warning">CHOSE THE OFFER</span> THAT SUITS YOU
        </h1>
        <div className="container d-flex justify-content-center flex-wrap">
          <p className="w-50 text-secondary">
            Lorem distinctio fuga,dantium in recusandae debitis nihil
            laboriosam, fugit dicta?
          </p>
        </div>
      </div>
      <div className="row">
        {plansData.map((plan, index) => (
            <div className={`col-md-4`} key={index}>
                <div className={`card text-center ${plan.style}`}>
            <div className="price-content py-5">
                <h6 className="text-warning">BILLED MONTHLY</h6>
              <h2 className="text-white">{plan.plan}</h2>
              <h3 className="text-warning" style={{fontSize: '3rem'}}>{plan.price}</h3>
              <ul className="list-unstyled text-white text-start d-flex flex-column align-items-center">
                {plan.features.map((feature, idx) => (
                  <li className="my-1" key={idx}><FontAwesomeIcon icon={faCheck} /> {feature}</li>
                ))}
              </ul>
              <button className="btn btn-warning">{plan.action}</button>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceList;
