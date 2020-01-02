import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import tower from '../assets/images/tower.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Vision - Amplified Connect</title>
            <meta name="description" content="Amplified Connect Vision" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Amplifying the Local Connnection</h1>
                    </header>
                    <span className="image main"><img src={tower} alt="" /></span>
                    <p>As the local business landsape changes, agencies must adapt products and services to the new competitive environment.</p>
                    <p>Amplified Connect believes:</p>
                    <p>We offer:</p>
                    <p>Connect with us to learn more</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic