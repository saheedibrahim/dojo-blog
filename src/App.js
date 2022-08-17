import Navbar from './navbar'
import Home from './Home'

function App() {
  // const title = "This is a new blog";
  // const val = 50;
  // const link = "https://www.google.com"

  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}

export default App;
