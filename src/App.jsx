import {GoArrowRight} from "react-icons/go";
import './App.css';

function App() {

  return (
    <div className="container">
      <div className="book">
        <h1>DIY DELICACIES</h1>
        <button id="enter"><GoArrowRight/></button>
      </div>
      <div id="annotate">
        <p>DIY: do-it-yourself</p>
        <p>Delicacy: <i>(noun)</i> <b>something pleasing to eat that is considered rare or luxurious</b></p>
        <p>DIY Delicacies is an application created to share a collection of do-it-yourself recipes that I have tried to make and love. The recipes are either a rendition of or credited to their respective creators.</p>
      </div>
    </div>
  )
}

export default App
