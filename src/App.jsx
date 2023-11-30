import './App.css';
import Counter from './components/Counter';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';

function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      <div className='buttons'>
        <Counter render={(count,increment) => <LikePost count={count} increment={increment}/>}/>
        <LikeImage/>
      </div>
    </div>
  );
}

export default App;
