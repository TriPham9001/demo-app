import React from 'react'
import { BsTwitter, BsFacebook, BsLinkedin } from 'react-icons/bs'
import "../Footer/footer.css"

function Footer() {
    return (
        <>
            <div className='container footer'>
                <div className='row'>
                    <div className='col-6 col-lg-2'>
                        <h1>Products</h1>
                        <p>Scale Rapid</p>
                        <p>Scale Studio</p>
                        <p>Scale Studio</p>
                        <p>Scale Image</p>
                        <p>Scale Video</p>
                        <p>Scale Text</p>
                        <p>Scale Document AI</p>
                        <p>Scale Audio</p>
                        <p>Scale Nucleus</p>
                        <p>Scale Mapping</p>
                    </div>
                    <div className='col-6 col-lg-2'>
                        <h1>Solutions</h1>
                        <p>Retail & eCommerce</p>
                        <p>Defense</p>
                        <p>Logistics</p>
                        <p>Autonomous Vehicles</p>
                        <p>Robotics</p>
                        <p>AR/VR</p>
                        <p>Document Processing</p>
                        <p>Content & Language</p>
                    </div>
                    <div className='col-6 col-lg-2'>
                        <h1>Company</h1>
                        <p>About</p>
                        <p>Pricing</p>
                        <p>Careers</p>
                        <p>Security</p>
                        <p>Legal</p>
                    </div>
                    <div className='col-6 col-lg-2'>
                        <h1>Resources</h1>
                        <p>Blog</p>
                        <p>Customers</p>
                        <p>Events</p>
                        <p>Open Datasets</p>
                        <p>Interviews</p>
                        <p>Documentation</p>
                        <p>Guides</p>
                        <p>Community</p>
                        <p>AI Readiness Report</p>
                    </div>
                    <div className='col-6 col-lg-2'>
                        <h1>Guides</h1>
                        <p>Data Labeling</p>
                        <p>ML Model Training</p>
                        <p>Diffusion Models</p>
                    </div>
                    <div className='col-lg-2'>
                        <h1>Contact</h1>
                        <p>sales@scale.com</p>
                        <p>support@scale.com</p>
                        <p>careers</p>
                        <p>press@scale.com</p>
                        <div className='icon-snw'>
                            <BsTwitter className='my-cs-icon' />
                            <BsFacebook className='my-cs-icon' />
                            <BsLinkedin className='my-cs-icon' />
                        </div>
                    </div>

                </div>

            </div>
            <div className='container footer-end'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <p className='txt-left'>Copyright © 2022</p>
                    </div>
                    <div className='col-lg-6'>
                        <p className='txt-right'>Terms of Use & Privacy Policy</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer