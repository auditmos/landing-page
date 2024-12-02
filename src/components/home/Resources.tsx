import { FC } from 'react'
import { LINKS } from '@/constants/links'

interface Resource {
  title: string;
  description: string;
  link: string;
}

const ResourceCard: FC<Resource> = ({ title, description, link }) => (
  <div className="border_col_section5">
    <div className="ico_section_5">
      <svg id="calendar" xmlns="http://www.w3.org/2000/svg" width="34.5" height="34.5" viewBox="0 0 34.5 34.5">
        <path id="Path_3468" data-name="Path_3468" d="M30.053,2.7h-3.1V1.078a1.078,1.078,0,0,0-2.156,0V2.7H9.7V1.078a1.078,1.078,0,0,0-2.156,0V2.7h-3.1A4.452,4.452,0,0,0,0,7.143v22.91A4.452,4.452,0,0,0,4.447,34.5H30.053A4.452,4.452,0,0,0,34.5,30.053V7.143A4.452,4.452,0,0,0,30.053,2.7Z" fill="#03e3ff"/>
      </svg>
    </div>
    <a href={link} target="_blank">
      <div className="title_section_5">
        <h4 className="h4_head color_white" dangerouslySetInnerHTML={{ __html: title }} />
        <p className="lead color_white">{description}</p>
      </div>
    </a>
  </div>
)

const Resources: FC = () => {
  const resources: Resource[] = [
    {
      title: 'Prepare to <span class="color_primary">Audit</span>',
      description: 'Basic informations about our process of auditing, getting a quote and receive the best quality report.',
      link: LINKS.RESOURCES.AUDIT_PROCESS
    },
    {
      title: 'Work with <span class="color_primary">Us</span>',
      description: 'If you are applying for a position at auditmos, please audit these contracts and provide us with a security report.',
      link: LINKS.RESOURCES.WORK_WITH_US
    },
    {
      title: 'Blockchain Security <span class="color_primary">Contacts</span>',
      description: 'Directory of security contacts for projects building on blockchain.',
      link: LINKS.RESOURCES.SECURITY_CONTACTS
    }
  ]

  return (
    <div id="resources" className="background_primary">
      <div className="container_pp">
        <div className="headline_section">
          <h3 className="h3_head color_white text-center">Resources</h3>
        </div>
        <div className="three_col_1 text-center">
          {resources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>
        <div className="button_section_5 text-center">
          <a 
            href="https://github.com/auditmos/audits/issues/new/choose" 
            target="_blank"
            className="btn btn_primary"
          >
            Request Audit
          </a>
        </div>
      </div>
    </div>
  )
}

export default Resources 