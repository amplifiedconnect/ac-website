import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerAbout from '../components/BannerAbout'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import kerr from '../assets/images/john_kerr.jpg'
import sara from '../assets/images/sara.png'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>About - Amplified Connect</title>
            <meta name="description" content="About Amplified Connect" />
        </Helmet>

        <BannerAbout />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>About Us</h2>
                    </header>
                    <p>The Amplified Connect team is passionate about media and the communities we serve.  We love what we do and believe in the mission of our local media.  Every team member has at least 8 years experience working in local media. We know the pain points and the path to growth, and we will work together with you to help you be successful.     </p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <div className="image">
                        <img src={kerr} alt="" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>John Kerr</h3>
                            </header>
                            <p>John is the Vice President of Advertising at the Arizona Daily Star and the General Manager of Amplified Connect.  Over the past 20 years, he has served in sales leadership roles in radio, newspaper and magazines. </p>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Andrew McFadden</h3>
                            </header>
                            <p>Andrew is the Senior Director, Market Data and Product Development at Amplified Connect.  He is responsible for managing the team, building processes, and ensuring successful delivery for our clients.  He brings over 15 years of software and media experience.</p>
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
                                <h3>Sara Gilbert</h3>
                            </header>
                            <p>As the Market Operations Manager, Sara leads the engagement at the local market. Sara brings over eight years experience working at Lee Enterprise's corporate offices in Davenport.   Prior to joining the team, Sara worked as a Corporate Sales and Marketing Manager and focused on boosting sales growth through a combination of Corporate and Field based sales activities. Sara also has experience at Lee as a media planner, project manager, and sales lead.</p>
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
                                <h3>Christian Ramirez</h3>
                            </header>
                            <p>As the Saels and Business Development Manager, Christian is point person for our partners to build, optimize and launch campaigns and sales programs.  Prior to joining the Amplified Connect team, Christian was the Digital Campaign Manager at the Arizona Daily Star for about 4 years.  He spent eight years at Wick communications first as a web developer and then as a digital media manager where he was responsible for the online operations of 19 community newspapers. </p>
                          </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing