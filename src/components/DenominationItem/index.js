import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updatedBalance} = props
  const {value} = denominationDetails

  const denominationValue = () => {
    updatedBalance(value)
  }

  return (
    <li className="denomination-item">
      <button
        type="button"
        className="denomination-button"
        onClick={denominationValue}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
