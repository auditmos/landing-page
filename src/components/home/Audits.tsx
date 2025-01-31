import { FC, useState } from 'react'

interface Audit {
  name: string;
  reportUrl: string;
}

const AuditCard: FC<Audit> = ({ name, reportUrl }) => (
  <div className="single_audit text-center">
    <div className="audit_name_col">
      <h5 className="h5_head">{name}</h5>
    </div>
    <div className="audit_date_col">
      <div className="audit_date_ico">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 78.369 78.369">
          <g>
            <path d="M78.049,19.015L29.458,67.606c-0.428,0.428-1.121,0.428-1.548,0L0.32,40.015c-0.427-0.426-0.427-1.119,0-1.547l6.704-6.704 c0.428-0.427,1.121-0.427,1.548,0l20.113,20.112l41.113-41.113c0.429-0.427,1.12-0.427,1.548,0l6.703,6.704 C78.477,17.894,78.477,18.586,78.049,19.015z" fill="#03e3ff"/>
          </g>
        </svg>
      </div>
      <div className="audit_date_date">
        Secured
      </div>
    </div>
    <div className="audit_date_button">
      <a href={reportUrl} target="_blank" className="btn btn_primary">Report</a>
    </div>
  </div>
)

const Audits: FC = () => {
  const [showAll, setShowAll] = useState(false)
  const INITIAL_DISPLAY_COUNT = 5

  const audits: Audit[] = [
    {
      name: "Honey Fun Token",
      reportUrl: "https://github.com/auditmos/audits/blob/main/2025_01_30_HONEY_FUN_TOKEN.pdf"
    },
    {
      name: "Cookie3 Airdrop Farming Lock",
      reportUrl: "https://github.com/auditmos/audits/blob/main/2025_01_08_COOKIE3_AIRDROP_FARMING_LOCK.pdf"
    },
    {
      name: "AI Agent Layer",
      reportUrl: "https://github.com/auditmos/audits/blob/main/2024_11_08_AI_AGENT_LAYER.pdf"
    },
    {
      name: "Cookie3",
      reportUrl: "https://github.com/auditmos/audits/blob/main/2024_06_04_COOKIE3.pdf"
    },
    {
      name: "Alaska Gold Rush",
      reportUrl: "https://github.com/auditmos/audits/blob/main/2024_04_15_ALASKA_GOLD_RUSH.pdf"
    },
    {
      name: "SpartaDEX",
      reportUrl: "https://github.com/auditmos/audits/blob/main/2024_04_10_SPARTADEX.pdf"
    },
    {
      name: "StarHeroes",
      reportUrl: "https://github.com/auditmos/audits/blob/main/2024_02_26_STARHEROES.pdf"
    },
    {
      name: "GameSwift",
      reportUrl: "https://github.com/auditmos/audits/blob/main/2023_23_06_GAMESWIFT.pdf"
    },
    {
      name: "RoboHero",
      reportUrl: "https://github.com/auditmos/audits/blob/main/2022_03_04_ROBOHERO.pdf"
    },
    {
      name: "LunaVerse",
      reportUrl: "https://github.com/auditmos/audits/blob/main/2022_02_22_LUNAVERSE.pdf"
    },
    {
      name: "Terrnado",
      reportUrl: "https://github.com/auditmos/audits/blob/main/2022_02_10_TERRNADO.pdf"
    },
    {
      name: "Kujira Orca",
      reportUrl: "https://github.com/auditmos/audits/blob/main/2022_01_24_KUJIRA_ORCA.pdf"
    },
    {
      name: "Bitlocus Token Lock",
      reportUrl: "https://github.com/auditmos/audits/blob/main/2022_01_20_BITLOCUS_TOKEN_LOCK.pdf"
    },
    {
      name: "PlayNity",
      reportUrl: "https://github.com/auditmos/audits/blob/main/2021_12_15_PLAYNITY.pdf"
    },
    {
      name: "MintDAO",
      reportUrl: "https://github.com/auditmos/audits/blob/main/2021_12_05_MINTDAO.pdf"
    },
    {
      name: "Bitlocus",
      reportUrl: "https://github.com/auditmos/audits/blob/main/2021_11_25_BITLOCUS.pdf"
    },
    {
      name: "Loop Finance",
      reportUrl: "https://github.com/auditmos/audits/blob/main/2021_11_05_LOOP.pdf"
    },
    {
      name: "TerraLand",
      reportUrl: "https://github.com/auditmos/audits/blob/main/2021_11_04_TERRALAND.pdf"
    },
    {
      name: "Loop Finance",
      reportUrl: "https://github.com/auditmos/audits/blob/main/2021_10_10_LOOP.pdf"
    },
    {
      name: "StarTerra",
      reportUrl: "https://github.com/auditmos/audits/blob/main/2021_08_21_STARTERRA.pdf"
    }
  ]

  const displayedAudits = showAll ? audits : audits.slice(0, INITIAL_DISPLAY_COUNT)

  return (
    <div id="audits" className="section_4_home_audits">
      <div className="container_pp">
        <div className="headline_section">
          <h3 className="h3_head color_d_blue text-center">Our <span className="color_primary">Audits</span></h3>
        </div>
        <div className="audits_boxes">
          {displayedAudits.map((audit, index) => (
            <AuditCard key={index} {...audit} />
          ))}
        </div>
        {audits.length > INITIAL_DISPLAY_COUNT && (
          <div className="button_section_5 text-center">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="btn btn_primary"
            >
              {showAll ? 'Show Less Audits' : 'Show More Audits'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Audits 