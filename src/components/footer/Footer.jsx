import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div className="footer-cont">
                <div className="foot-list">
                    <Link to='' className='foot-nav'>
                        <span>Business</span>
                    </Link>
                    <Link to='' className='foot-nav'>
                        <span>Finance Professionals</span>
                    </Link>
                    <Link to='' className='foot-nav'>
                        <span>Pay roll</span>
                    </Link>
                    <Link to='' className='foot-nav'>
                        <span>Pay by card</span>
                    </Link>
                    <Link to='' className='foot-nav'>
                        <span>Pay global</span>
                    </Link>
                </div>
                <div className="foot-list">
                    <Link to='' className='foot-nav'>
                        <span>How it works</span>
                    </Link>
                    <Link to='' className='foot-nav'>
                        <span>Pricing</span>
                    </Link>
                    <Link to='' className='foot-nav'>
                        <span>Security</span>
                    </Link>
                    <Link to='' className='foot-nav'>
                        <span>Faq</span>
                    </Link>
                    <Link to='' className='foot-nav'>
                        <span>Blog</span>
                    </Link>
                    <Link to='' className='foot-nav'>
                        <span>Our story</span>
                    </Link>
                    <Link to='' className='foot-nav'>
                        <span>Careers</span>
                    </Link>
                </div>
                <div className="foot-list">
                    <p>
                        By signing up you agree to our Terms and conditions and Privacy policy. To make a complaint, please refer to our Complaints policy.
                    </p>
                    <p>
                        Apron Payments Ltd (FRN: 903089) is an EMD agent of The Currency Cloud Limited. Payment services are provided by The Currency Cloud Limited. Registered in England No. 06323311. Registered Office: Stewardship Building 1st Floor, 12 Steward Street London E1 6FQ. The Currency Cloud Limited is authorised by the Financial Conduct Authority under the Electronic Money Regulations 2011 for the issuing of electronic money.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer