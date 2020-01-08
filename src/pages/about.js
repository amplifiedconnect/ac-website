import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import BannerAbout from '../components/BannerAbout';

import pic08 from '../assets/images/emilytintera.png';
import pic09 from '../assets/images/pic09.jpg';
import pic10 from '../assets/images/Ramirez_Picture.jpg';
import kerrbw from '../assets/images/kerrbw.jpg';
import sara from '../assets/images/sara.png';
import andrew from '../assets/images/Andrewm.jpg';

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>About - Amplified Connect"</title>
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
                        <img src={kerrbw} alt="John" />
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
                    <div className="image">
                        <img src={andrew} alt="Andrew" />
                    </div>
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
                        <img src={sara} alt="Sara" />
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
                        <img src={pic10} alt="Christian" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Christian Ramirez</h3>
                            </header>
                            <p>As the Sales and Business Development Manager, Christian is point person for our partners to build, optimize and launch campaigns and sales programs.  Prior to joining the Amplified Connect team, Christian was the Digital Campaign Manager at the Arizona Daily Star for about 4 years.  He spent eight years at Wick communications first as a web developer and then as a digital media manager where he was responsible for the online operations of 19 community newspapers. </p>
                          </div>
                    </div>
                </section>
                <section>
                    <div className="image">
                        <img src={pic08} alt="Emily" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Emily Tintera</h3>
                            </header>
                            <p>Emily is the Custom Events and Sponsorship Director at Amplified Connect. She has over 15 years of Event and Sponsorship integration in the Midwest on behalf of local news publications, lifestyle magazines, and alternative weeklies. From tasting events to festivals, to award ceremonies - Emily can work with individual publications to determine what events will be the most successful in their markets, and provide support on how to maximize sponsorship revenue.</p>
                          </div>
                    </div>
                </section>

            </section>
        </div>

    </Layout>
)

export default Landing