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
            description: "The team that will check your smart contract has extensive experience in many ecosystems. They specialize in writing contracts from scratch, so they know what solutions have strengths and weaknesses during implementation. Trust us, we will make you do not have to worry."
        },
        {
            title: "Token Listing Readiness",
            description: "Thanks to an experienced team of IT Developers, we are able to assess the progress of work on creating a pair for the stock exchange and adding liquidity. Using our experience and tips, you will be put on the right track during further work."
        },
        {
            title: "DevSecOps",
            description: "The team of IT developers developing software will receive clear instructions on how to make their work more optimal. The audit will help to automate the code creation processes by eliminating errors and will make the used solutions convenient and safe."
        },
        {
            title: "Risk Management",
            description: "Risk management is one of the most important issues when implementing blockchain projects. A design is only strong if the risks are minimized and continuously controlled to prevent errors. Our team will point out strengths and weaknesses and provide tips on how to fix them."
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