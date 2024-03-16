import './index.css'

const GameImageItem = props => {
  const {eachItem, generateOppositionImage} = props
  const {id, imageUrl, testId} = eachItem

  const handleMyChoice = () => {
    generateOppositionImage(id, imageUrl)
  }

  return (
    <li className="item">
      <button
        type="button"
        className="image-button"
        onClick={handleMyChoice}
        data-testid={testId}
      >
        <img className="image" src={imageUrl} alt={id} />
      </button>
    </li>
  )
}

export default GameImageItem
