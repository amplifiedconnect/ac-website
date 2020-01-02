import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import tower from '../assets/images/tower.JPG'

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
                    <p>As the local business landsape changes, agencies must adapt products and services to the new competitive environment.</p>
                    <span className="image main"><img src={tower} alt="" /></span>
                    <p>Amplified Connect believes...</p>
                    <p>We offer...</p>
                    <p>Connect with us to learn more</p>
                    <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic