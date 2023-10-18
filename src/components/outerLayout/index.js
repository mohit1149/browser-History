import './index.css'

const OuterLayout = props => {
  const {eachItemDetails, deleteLine} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = eachItemDetails

  const onDelete = () => {
    deleteLine(id)
  }
  return (
    <li className="card-container">
      <div className="left-container">
        <p className="times-accessed">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logo-url" />
        <p className="title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button
        className="button"
        type="button"
        onClick={onDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-image"
          htmlFor="delete"
        />
      </button>
    </li>
  )
}

export default OuterLayout
