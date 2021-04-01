import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Aside from './components/Aside'

function App() {
  return (<div className="body">
    <div className="container">

      <Header />
      <div className="row">
        <Main />
        <Aside />
      </div>

    </div>
  </div>

  );
}

export default App;
