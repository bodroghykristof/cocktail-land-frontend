import './App.css';
import DynamicScroller from './components/scrolling/DynamicScroller';

function App() {
  return (
    <div className='App'>
      <DynamicScroller>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
      </DynamicScroller>
    </div>
  );
}

export default App;
