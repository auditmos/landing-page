import { FC } from 'react'

const WhyAuditmos: FC = () => {
  return (
    <div className="section_2_home">
      <div className="container_pp">
        <div className="section_2_home_grid">
          <div className="section_2_home_left">
            <h2 className="h2_head color_white">Why <span className="color_primary">Auditmos?</span></h2>
            <p className="lead color_white mb2">
              An experienced team can cope with the task without any problems. Auditmos is a guarantee of a secure code.
            </p>
            <a 
              href="https://github.com/auditmos/audits/issues/new/choose" 
              target="_blank"
              className="btn btn_primary d-inline-block"
            >
              Request Audit
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyAuditmos 