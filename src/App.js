import logo from './logo.svg';
import './App.scss';
import { BuildingScene } from './scenes/BuildingScene';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row d-flex justify-content-start align-items-center">
            <div className="col flex-grow-0">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="col flex-grow-1">
              <h1 className="text-light">
                <small>Three.js structure modeled in Blender</small>
              </h1>
            </div>
          </div>
        </div>
      </header>
      <BuildingScene />
    </div>
  );
}

export default App;
