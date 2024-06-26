import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-block">
                <span>@ 2023 GoFood, Inc</span>
                <div className="company">
                    <section>
                        <h3>COMPANY</h3>
                        <ul>
                            <li><a href="/">About us</a></li>
                        </ul>
                    </section>
                </div>
                <div className="contact">
                    <section>
                        <h3>CONTACT</h3>
                        <ul>
                            <li><a href="/">Help & Support</a></li>
                        </ul>
                    </section>
                </div>
                <div className="legal">
                    <section>
                        <h3>LEGAL</h3>
                        <ul>
                            <li><a href="/">Terms & Conditions</a></li>
                            <li><a href="/">Refund & Cancellation</a></li>
                            <li><a href="/">Privacy Policy</a></li>
                            <li><a href="/">Offer Terms</a></li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Footer;
