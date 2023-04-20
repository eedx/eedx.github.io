import './App.css';
import Menu from './components/Menu/Menu';
import Home from './components/Home/Home';
import Personajes from './components/Personajes/Personajes';
import Episodios from './components/Episodios/Episodios';
import Lugares from './components/Lugares/Lugares';
import Footer from './components/Footer/Footer';

function App() {
  const currentUrl = window.location.pathname;

  function renderContent() {
    switch (currentUrl) {
      case "/":
        return <Home />
      case "/personajes":
        return <Personajes />
      case "/episodios":
        return <Episodios />
      case "/lugares":
        return <Lugares />
      default:
        return <Home />
    };
  };

  return (
    <div className="App">
      <Menu />
      <main>
        { renderContent() }
      </main>
      <Footer />
    </div>
  );
};

export default App;
