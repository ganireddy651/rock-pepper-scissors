import {useState} from 'react'
import GameImageItem from './components/GameImageItem'
import RulesButton from './components/RulesButton'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    testId: 'rockButton',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    testId: 'scissorsButton',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    testId: 'paperButton',
  },
]

const App = () => {
  const [score, setScore] = useState(0)
  const [isStarted, setIsStarted] = useState(false)
  const [myChoice, setMyChoice] = useState('')
  const [opponentChoice, setOpponentChoice] = useState('')
  const [result, setResult] = useState('')

  const generateOppositionImage = (id, imageUrl) => {
    const randomImage = Math.floor(Math.random() * choicesList.length)
    const imageOfOpponent = choicesList[randomImage].imageUrl
    setIsStarted(true)
    setMyChoice(imageUrl)
    setOpponentChoice(imageOfOpponent)
    const myIndex = choicesList.findIndex(item => item.id === id)
    if (myIndex === 2 && randomImage === 0) {
      setScore(score + 1)
      setResult('YOU WON')
    } else if (myIndex === 1 && randomImage === 2) {
      setScore(score + 1)
      setResult('YOU WON')
    } else if (myIndex === 0 && randomImage === 1) {
      setScore(score + 1)
      setResult('YOU WON')
    } else if (myIndex === randomImage) {
      setResult('IT IS DRAW')
    } else {
      setScore(score - 1)
      setResult('YOU LOSE')
    }
  }

  const renderGameResultsView = () => (
    <div className="game-results-container">
      <div className="container-result">
        <div>
          <p>You</p>
          <img className="image" src={myChoice} alt="your choice" />
        </div>
        <div>
          <p>Opponent</p>
          <img className="image" src={opponentChoice} alt="opponent choice" />
        </div>
      </div>
      <div>
        <p>{result}</p>
        <button type="button" onClick={() => setIsStarted(false)}>
          PLAY AGAIN
        </button>
      </div>
    </div>
  )

  return (
    <div className="main-container">
      <div className="header">
        <h1 className="main-heading">
          Rock
          <br /> Paper
          <br /> Scissors
        </h1>
        <div className="score-container">
          <p className="score-text">Score</p>
          <p className="score">{score}</p>
        </div>
      </div>
      {isStarted ? (
        <div style={{textAlign: 'center'}}>{renderGameResultsView()}</div>
      ) : (
        <>
          <ul className="image-list-container">
            {choicesList.map(eachItem => (
              <GameImageItem
                key={eachItem.id}
                eachItem={eachItem}
                generateOppositionImage={generateOppositionImage}
              />
            ))}
          </ul>
          <div className="button-container">
            <RulesButton />
          </div>
        </>
      )}
    </div>
  )
}

export default App
