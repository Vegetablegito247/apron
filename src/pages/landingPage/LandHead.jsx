import React from 'react';
import './style/landHead.css';
import { Link } from 'react-router-dom';
import landHead from '../../asset/landimg/dani-reid.png';

function LandHead() {
  return (
    <div className='land-head'>
      <div className="land-head-title">
        <div className="head-title-cont">
          <div className="title-top-head">
            <h3>Apron for business owners</h3>
          </div>
          <div className="title-middle-head">
            <h1>
              FLIP PAYMENTS FROM A BARRIER TO A BOOSTER.
            </h1>
          </div>
          <div className="title-middle-paragraph">
            <p>
              Sort, pay and reconcile your invoices in seconds.
            </p>
          </div>
          <Link className="start-btn">
            <span>START NOW</span>
          </Link>
        </div>
      </div>
      <div className="land-head-img">
        <div className="head-img">
          <img src={landHead} alt="" />
        </div>
        <div className="head-img-title">
          <h3>Dani Reid, Owner at Potter & Reid</h3>
          <p>Apron user</p>
        </div>
        <div className="grid-head"></div>
      </div>
    </div>
  )
}

export default LandHead