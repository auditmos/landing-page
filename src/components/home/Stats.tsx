import { FC } from 'react'

interface Stat {
  value: string;
  label: string;
}

const StatCard: FC<Stat> = ({ value, label }) => (
  <div className="stat_card text-center">
    <h2 className="stat_value color_primary">{value}</h2>
    <p className="stat_label color_white">{label}</p>
  </div>
)

const Stats: FC = () => {
  const stats: Stat[] = [
    {
      value: "20+",
      label: "Successful Audits Without Hack"
    },
    {
      value: "$10M+",
      label: "Secured on Smart Contracts"
    },
    {
      value: "Free",
      label: "Support for Audited Projects"
    }
  ]

  return (
    <div className="stats_section">
      <div className="container_pp">
        <div className="stats_grid">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Stats 