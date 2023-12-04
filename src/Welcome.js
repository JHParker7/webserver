import "./welcome.css";
import react_logo from "./imgs/React-icon.svg.png"
import three_logo from "./imgs/three-icon.png"
function Welcome() {
  return (
    <div id="Welcome" class="section">
      <h1>Welcome to my website</h1>
      <h3>site built with react.js  <img src={react_logo}/></h3>
      <h3>background built with three.js  <img src={three_logo}/></h3>
      <h4>Basic Controls</h4>
      <p>
        If you mouse is over the Background you can use these to control it:
      </p>
      <p>drag with left button to rotate</p>
      <p>drag with right button to move it</p>
      <p>scroll to zoom in and out</p>
    </div>
  );
}
//<p>this one is currently WIP use old one <a href="https://jhparker7.github.io/old">https://jhparker7.github.io/old</a></p>
export default Welcome;
