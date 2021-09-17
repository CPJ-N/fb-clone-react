
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Widget from './components/Widget';

function App() {
  return (
    <div className="App"> 
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
     </div>
  );
}
// voSki3wu7WZ9CG39

export default App;
