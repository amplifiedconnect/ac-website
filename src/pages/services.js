import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerServices from '../components/BannerServices'

import tucsonevent from '../assets/images/tucsonbestofevent.jpg'
import bestofphoto from '../assets/images/bestofphoto.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Services - Amplified Connect</title>
            <meta name="description" content="Amplified Connect Services" />
        </Helmet>

        <BannerServices />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Promote local businesses</h2>
                    </header>
                    <p>Amplified Connect provides services for local media companies to grow local customer revenue. With any of our services, our partners receive an energized local launch of sales programs and leverage ourmarketing team for creative and fulfillment.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <div className="image">
                        <img src={tucsonevent} alt="" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Contests and Promotions</h3>
                            </header>
                            <p>Media saturation and always-on mobile devices make it difficult for a local business to stand out. With a powerful local voice, media companies can spotlight businesses with an engaging contest or promotion.  For the media company, This can be the start of a long-lasting relationship with a new advertising partner or a new, creative option for an existing one.</p>
                            <ul className="actions">
                                <li><a href="http://amplifieddigitalagency-6728858.hs-sites.com/amplified-connect" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="image">
                        <img src={bestofphoto} alt="" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Events</h3>
                            </header>
                            <p>Awards and events that highlight popular local business are much more than a revenue opportunity. Executed properly, business events give your team much needed face time with clients.  At the same time, your existing and potential clients win awards, brag to their friends, and relax.</p>
                            <ul className="actions">
                                <li><a href="http://amplifieddigitalagency-6728858.hs-sites.com/amplified-connect" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="image">
                        <img src={pic10} alt="" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Lead Nurturing</h3>
                            </header>
                            <p>Does your contest, promotion or event end once the winners are announced?  NO.  That was only act one in the Amplified Connect program. To help your sales people close more deals after a program, our team crafts custom lead nurturing communications to help you reach your revenue goal.</p>
                            <ul className="actions">
                                <li><a href="http://amplifieddigitalagency-6728858.hs-sites.com/amplified-connect" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing