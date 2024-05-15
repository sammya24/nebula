
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Header from './Header';
import Footer from './Footer';
import BigBox from './BigBox';
import Moons from './Moons';
import MoonsSection from './MoonsSection';
import About from './About';
import Signs from './Signs';
import './style.css';
import Newsletter from './Newsletter';



function App() {



  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <BigBox />
        <About />
        <MoonsSection />
        <Signs />
        <Newsletter />
        {/* <Moons /> */}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
