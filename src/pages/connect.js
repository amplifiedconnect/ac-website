import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import tower from '../assets/images/towerbusiness.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Vision - Amplified Connect</title>
            <meta name="description" content="Amplified Connect Vision" />
            <script type="text/javascript" id="hs-script-loader" async defer src="https://js.hs-scripts.com/6728858.js"></script>
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Amplifying the Local Connnection</h1>
                    </header>
                    <p>As the local business landsape changes, agencies must adapt products and services to the new competitive environment.</p>
                    <span className="image main"><img src={tower} alt="tower landscape" /></span>
                    <p>Amplified Connect believes that real people endorsing businesses and local professionals improves the connection between citizens and the business community.</p>
                    <p>In partnership with a local agency or media company, Amplified Connect creates events, contests, and promotions to drive an engaged audience to the point of purchase.</p>
                    <ul className="actions">
                                <li><a href ="http://amplifieddigitalagency-6728858.hs-sites.com/amplified-connect" className="button next">Learn More</a></li>
                            </ul>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic