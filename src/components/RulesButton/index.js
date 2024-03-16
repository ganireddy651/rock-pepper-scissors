import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import './index.css'

const RulesButton = () => (
  <Popup
    trigger={
      <button type="button" className="rules-button">
        Rules
      </button>
    }
    modal
    nested
  >
    {close => (
      <div className="modal">
        <div className="close-button-container">
          <button type="button" className="close" onClick={close}>
            &times;
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
          alt="rules"
          style={{width: '100%'}}
        />
      </div>
    )}
  </Popup>
)

export default RulesButton
