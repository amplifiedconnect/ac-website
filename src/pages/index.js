import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/aboutushome.jpg'
import pic03 from '../assets/images/clientresourceshome.jpg'
import pic04 from '../assets/images/pic04.jpg'
import sparkler from '../assets/images/celebratelocalhome.jpg'
import event from '../assets/images/tucsonbestofevent.jpg'


class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Amplified Connect"
                    meta={[
                        { name: 'description', content: 'Amplified Connect is the local leader in connecting businesses and communities.' },
                        { name: 'keywords', content: 'local promotion, advertising' },
                    ]}
                    html lang="en-US"
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${sparkler})`}}>
                            <header className="major">
                                <h3>Celebrating local businesses</h3>
                                <p>Our vision for connecting communities</p>
                            </header>
                            <Link to="/connect" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${event})`}}>
                            <header className="major">
                                <h3>Services</h3>
                            </header>
                            <Link to="/services" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>About us</h3>
                            </header>
                            <Link to="/about" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Client Resources</h3>
                                <p>coming soon</p>
                            </header>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>About Amplified Digital</h2>
                            </header>
                            <p>Amplified Digital is a different kind of digital advertising agency. Formed out of a passion for helping companies develop a strong digital presence, over the years we’ve evolved to provide strategic digital marketing, media planning, consulting and analytics. Our goal is to help your company successfully navigate through an ever-changing digital landscape.</p>
                            <ul className="actions">
                                <li><a href ="https://www.amplifieddigitalagency.com" className="button next">Go to Amplified Agency</a></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex