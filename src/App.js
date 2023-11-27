import { slides } from './slides';
import ImageSlider from './ImageSlider';
import './App.css';

function App() {
  return (
    <div className="App">
     <ImageSlider slides={slides} />
    </div>
  );
}

export default App;
