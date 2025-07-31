import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router';
import { faFacebook, faInstagram, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='footer bg-dark text-white text-center mt-5 p-3'>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-2">
                        <Link to="/" className='text-white text-decoration-none'>
                            <h3>POWER <span className='text-warning'>X</span></h3>
                        </Link>
                    </div>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-3 text-start">
                                <h5>Need Help?</h5>
                                <ul className='list-unstyled mt-3'>
                                    <li className='mb-3'><Link to="/" className='text-white link-underline link-underline-opacity-0'>Help Center</Link></li>
                                    <li className='mb-3'><Link to="/" className='text-white link-underline link-underline-opacity-0'>Email Support</Link></li>
                                    <li className='mb-3'><Link to="/" className='text-white link-underline link-underline-opacity-0'>Live Chat</Link></li>
                                    <li className='mb-3'><Link to="/" className='text-white link-underline link-underline-opacity-0'>Gift Certificates</Link></li>
                                    <li className='mb-3'><Link to="/" className='text-white link-underline link-underline-opacity-0'>Send Us Feedback</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-3 text-start">
                                <h5>Digital Resources</h5>
                                <ul className='list-unstyled mt-3'>
                                    <li className='mb-3'><Link to="/articles" className='text-white link-underline link-underline-opacity-0'>Articles</Link></li>
                                    <li className='mb-3'><Link to="/ebook" className='text-white link-underline link-underline-opacity-0'>E-books</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-3 text-start">
                                <h5>Contact with Us</h5>
                                <ul className='list-unstyled mt-3'>
                                    <li className='mb-3 fs-4'>
                                        <Link to="/articles" className='text-white me-2'>
                                            <FontAwesomeIcon icon={faYoutube} />
                                        </Link>
                                        <Link to="/articles" className='text-white me-2'>
                                            <FontAwesomeIcon icon={faFacebook} />
                                        </Link>
                                        <Link to="/articles" className='text-white me-2'>
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </Link>
                                        <Link to="/articles" className='text-white me-2'>
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </Link>
                                        <Link to="/whatsapp" className='text-white me-2'>
                                            <FontAwesomeIcon icon={faWhatsapp} />
                                        </Link>
                                    </li>
                                    <li className='mb-3'><Link to="/forum" className='text-white link-underline link-underline-opacity-0'>Forum</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-3 text-start">
                                <h5>Join Our Newsletter</h5>
                                <p className='mt-3'>Subscribe to our newsletter for the latest updates and offers.</p>
                                <form className='mt-3'>
                                    <input type="email" placeholder='Enter your email' className='form-control mb-2' />
                                    <button type="submit" className='btn btn-warning'>Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-12">
                        <div className="d-flex justify-content-center">
                            <div className='text-white'>
                                <p>Follow us on social media for more updates.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p>© {(new Date()).getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
    );
};

export default Footer;