import Header from './components/Header.js'
import WinnersSection from './components/WinnersSection.js'
import Footer from './components/Footer.js'
import Button from './components/Button.js';

function App() {
  return (
    <div className="App">
      <Header />
      <WinnersSection />
      <Button text="JOIN NOW TO GET YOUR WELCOME PACK" />
      <Footer />
    </div>
  );
}

export default App;
