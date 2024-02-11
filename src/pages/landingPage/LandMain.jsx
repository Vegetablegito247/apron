import React from 'react';
import './style/landMain.css';
import pull from '../../asset/landimg/illustration-all-in-one.png';
import batch from '../../asset/landimg/illustration-batch.png';
import smooth from '../../asset/landimg/illustration-approvals.png';
import recon from '../../asset/landimg/illustration-reconciliation.png';
import setup from '../../asset/landimg/illustration-owners-setup.jpg';
import avatar from '../../asset/landimg/avatar-mark-.jpg';
import { GoArrowDown } from "react-icons/go";
import { MdOutlineCurrencyPound } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { FaRotate } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function LandMain() {
  const invoice = [
    {
      id: 1,
      icon: <GoArrowDown />,
      head: 'Pull all your invoices together.',
      text: 'Let invoices flow straight from your accounting app to Apron, or just send them to an Apron email.',
      img: pull
    },
    {
      id: 2,
      icon: <MdOutlineCurrencyPound />,
      head: 'Batch pay suppliers.',
      text: 'Click click click and you’ve picked who to pay. Payments go out directly from your bank.',
      img: batch
    },
    {
      id: 3,
      icon: <IoMdCheckmark />,
      head: 'Smooth out approvals.',
      text: 'Set up roles and workflows to improve communication and keep payments moving.',
      img: smooth
    },
    {
      id: 4,
      icon: <FaRotate />,
      head: 'Get automatic reconciliation.',
      text: 'Payments are reconciled instantly in your accounting app. And you’re done!',
      img: recon
    }
  ];

  const testimony = [
    {
      id: 1,
      para1: <><b>Apron has been life-changing</b>. Post-Covid, supplier credit terms changed to weekly. Across two sites, that cost us 6 hours a week in messy payment runs.</>,
      para2: <>With Apron, <b>we pay all suppliers in 10 minutes</b> and <b>instantly reconcile</b> in Xero.`</>,
      username: 'Marc Summers',
      userCompany: 'Owner at Bubala',
      userImg: avatar
    },
    {
      id: 2,
      para1: <><b>So easy to use!</b> Honestly, it’s brilliant</>,
      para2: '',
      username: 'Jay Patel',
      userCompany: 'Owner at Legare',
      userImg: avatar
    },
    {
      id: 3,
      para1: <>I’ve made a handful of payments through the app so far and everything is <b>straightforward</b>, especially the <b>instant reconciliation</b> in Xero.</>,
      para2: <><b>It just works</b> and you don’t need to prod around with it too much!</>,
      username: 'Greg Murphy',
      userCompany: 'Chief Operating Officer at M3ter',
      userImg: avatar
    },
  ];

  return (
    <div className='land-main'>
      <div className="apron-edge">
        <div className="apron-svg-bg"></div>
        <div className="apron-edge-cont">
          <div className="apron-edge-content">
            <h3>The Apron edge</h3>
            <h1>
              Apron is the <b>partner</b> that every small business needs, <b>pulling together</b> and paying your invoices, <b>fast</b>. So instead of wading through admin, you can get back to moving your business forward.
            </h1>
          </div>
        </div>
        <div className="invoice-ad">
          <div className="invoice-cont">
            {
              invoice.map((inv) => (
                <div key={inv.id} className="invoice-content">
                  <div className="inv-icon">
                    {inv.icon}
                  </div>
                  <div className="inv-title">
                    <h3>{inv.head}</h3>
                    <p>{inv.text}</p>
                  </div>
                  <div className="inv-img">
                    <img src={inv.img} alt="" />
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <div className="setup">
        <div className="setup-cont">
          <div className="setup-img">
            <img src={setup} alt="" />
            <div className="grid-head"></div>
          </div>
          <div className="setup-txt">
            <h3>Get set up in minutes</h3>
            <h1>
              Sign up using Xero or QuickBooks. Complete 3-minute security checks. Make your first payment.
            </h1>
            <div className="grid-head"></div>
          </div>
        </div>
      </div>

      <div className="testimonial">
        <div class="test-svg">
          <svg fill="none" viewBox="0 0 590 350">
            <path fill="#FDF5CF" d="M253.3 349.9h165.4L590 77.6 402.6 0 253.3 328v21.9ZM0 349.9h166.9L336.7 77.6 150.7 0 0 328v21.9Z"></path>
          </svg>
        </div>
        <div class="test-svg2">
          <svg fill="none" viewBox="0 0 590 350">
            <path fill="#FDF5CF" d="M253.3 349.9h165.4L590 77.6 402.6 0 253.3 328v21.9ZM0 349.9h166.9L336.7 77.6 150.7 0 0 328v21.9Z"></path>
          </svg>
        </div>
        <div className="testimonial-cont">
          <div className="testimonial-text">
            <div className="testimonial-abt-txt">
              <h3>Testimonials</h3>
            </div>
            <div className="testimonial-main-txt">
              <h1>Bye Slow</h1>
              <h1>Hi Slick.</h1>
            </div>
          </div>
          <div className="testimonial-user">
            {
              testimony.map((testify) => (
                <div key={testify.id} className="user-testify">
                  <div className="user-content">
                    <p>{testify.para1}</p>
                    <p>{testify.para2}</p>
                  </div>
                  <div className="user-title">
                    <div className="user-img">
                      <img src={testify.userImg} alt="" />
                    </div>
                    <div className="user-desc">
                      <div className="username">
                        <h3>{testify.username}</h3>
                      </div>
                      <div className="user-company">
                        <span>{testify.userCompany}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <div className="get-apron">
        <div className="get-apron-cont">
          <div className="get-apron-head">
            <h1>GET YOUR APRON ON.</h1>
          </div>
          <Link className="get-apron-btn">
            <span>START NOW</span>
          </Link>
          <div className="get-apron-price">
            <span>Find out about <Link>Pricing</Link></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandMain