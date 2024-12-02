import { FC } from 'react'

const ServiceCard: FC<{
    title: string;
    description: string;
}> = ({ title, description }) => (
    <div className="single_col_3_1">
        <div className="ico_border">
            <span>
                <svg id="calendar" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path id="Path_3468" data-name="Path 3468" d="M20.906,1.875H18.75V.75a.75.75,0,0,0-1.5,0V1.875H6.75V.75a.75.75,0,0,0-1.5,0V1.875H3.094A3.1,3.1,0,0,0,0,4.969V20.906A3.1,3.1,0,0,0,3.094,24H20.906A3.1,3.1,0,0,0,24,20.906V4.969A3.1,3.1,0,0,0,20.906,1.875ZM3.094,3.375H5.25v.75a.75.75,0,0,0,1.5,0v-.75h10.5v.75a.75.75,0,0,0,1.5,0v-.75h2.156A1.6,1.6,0,0,1,22.5,4.969V6.75H1.5V4.969A1.6,1.6,0,0,1,3.094,3.375ZM20.906,22.5H3.094A1.6,1.6,0,0,1,1.5,20.906V8.25h21V20.906A1.6,1.6,0,0,1,20.906,22.5Z" fill="#13255b" />
                </svg>
            </span>
        </div>
        <div className="right_col_3_hp">
            <div className="sub_headline">
                <h4 className="h4_head color_d_blue">{title}</h4>
            </div>
            <div className="lead_col_3">
                <p className="lead color_d_blue">{description}</p>
            </div>
        </div>
    </div>
)

const Services: FC = () => {
    const services = [
        {
            title: "Smart Contracts Audits",
            description: "Our expert team reviews your smart contracts to ensure they are secure and reliable. With years of experience building blockchain solutions, we know exactly what makes contracts safe and efficient. We give you peace of mind knowing your code is protected."
        },
        {
            title: "Token Listing Readiness",
            description: "We help prepare your token for successful exchange listing and ensure proper liquidity setup. Our expert guidance makes the listing process smooth and helps you avoid common pitfalls, giving your token the best chance of success."
        },
        {
            title: "DevSecOps",
            description: "We help your development team write better, safer code through clear guidance and best practices. Our security-focused approach helps catch issues early, speeds up development, and ensures your software is both reliable and secure."
        },
        {
            title: "Risk Management",
            description: "We help protect your business by finding and fixing potential risks in your blockchain project. Our team carefully checks your system to make sure it's safe, tells you what's working well and what needs improvement, and guides you on making it more secure. This gives you and your users peace of mind."
        },
        {
            title: "GDRP Compliance",
            description: "We will help you to ensure that your project complies with the General Data Protection Regulation (GDPR). This includes ensuring that your project has the necessary processes in place to protect user data and that it is compliant with the GDPR."
        },
        {
            title: "SOC 2 Compliance",
            description: "We will help you to ensure that your project complies with the System and Organization Controls (SOC) 2 standards. This includes ensuring that your project has the necessary security controls, processes and procedures to protect sensitive data and meet trust service criteria."
        }
    ]

    return (
        <div id="services" className="section_3_home">
            <div className="container_pp">
                <div className="headline_section">
                    <h3 className="h3_head color_d_blue">What We <span className="color_primary">Offer</span> For You</h3>
                </div>
                <div className="two_col_50">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services 