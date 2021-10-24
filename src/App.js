import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Banner from './Pages/Home/Banner/Banner';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Footer></Footer>
    </div>
  );
}

export default App;
