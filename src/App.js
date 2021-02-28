// import components 
import Header from './components/Header.jsx'
import WinnersSection from './components/WinnersSection.jsx'
import Footer from './components/Footer.jsx'
import Button from './components/Button.jsx';
import Banner from './components/Banner.jsx';
import Icon from './components/Icon.jsx';
import RedAd from './components/RedAd.jsx';
import CardItem from './components/CardItem.jsx';

// import images
import welcomeIcon from './assets/component-icon-welcomepack-off.svg'
import bingoIcon from './assets/component-icon-bingo-off.svg'
import originalContentIcon from './assets/component-icon-originalgames-off.svg'
import slotsIcon from './assets/component-icon-slots-off.svg'
import bannerImg from './assets/banner-desktop.png'
import starburstImg from './assets/game-icon-1.png'
import rainbowRichesImg from './assets/game-icon-2.png'
import cleopatraImg from './assets/game-icon-3.png'
import headerLogo from './assets/component-logo.svg'

// fetch data 
var icons = [
  {
    img: welcomeIcon,
    title: 'Welcome pack'
  },
  {
    img: bingoIcon,
    title: 'Bingo'
  },
  {
    img: originalContentIcon,
    title: 'Original Content'
  },
  {
    img: slotsIcon,
    title: 'Slots'
  }
]

var cards = [
  {
    img: starburstImg,
    title: 'Starburst',
    description: "Return to the days of old-school arcade fun with Starburst, the glittering slot that's just bursting with jackpots and bonuses!"
  },
  {
    img: rainbowRichesImg,
    title: 'Rainbow Riches',
    description: "If you fancy some good ol' Irish fun, then Rainbow Riches is the slot for you"
  },
  {
    img: cleopatraImg,
    title: 'Cleopatra',
    description: "Cleopatra is to just dying to meet you - how will you fare in the presence of the last true ruler of Egypt?"
  },
]

function App() {
  return (
    <div className="App">
      <Header headerLogo={headerLogo}/>
      <WinnersSection />

      <main>

        <Banner backgroundImg={ bannerImg } />

        <div className="icons">
            <div className="container">
                <div className="icons-holder">
                  {/* iterate through icon components */}
                  {icons.map((icon, index) =>
                    <Icon key={index} img={icon.img} title={icon.title} />
                  )}
                </div>
            </div>
        </div>

        <div className="cards">
            <div className="container-wide">
                <div className="row">
                  {/* iterate through card components */}
                  { cards.map( (card,index) => 
                    <CardItem key={ index } img={ card.img } title={ card.title } description={ card.description } />
                  )}
                </div>
            </div>
            <Button text="JOIN NOW TO GET YOUR WELCOME PACK" />
        </div>
        <RedAd />
      </main>

      <Footer />

    </div>
  );
}

export default App;
