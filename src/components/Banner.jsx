import './Banner.scss';
import Button from './Button'

function Banner({ backgroundImg }) {
    return (
        <div className="banner-section">
            <div className="background-image" style={{ backgroundImage: 'url('+ backgroundImg +')' }}>
                <p className="winners-mobile-only"><span className="yellow">Winners: </span>Jane <span className="white">$3.00</span>, Mike891 <span
                    className="white">$10.00</span>, Eva <span className="white">$1.00</span>
                </p> 
            </div>
            <Button text="JOIN NOW TO GET YOUR WELCOME PACK"/>
        </div>
    )
}

export default Banner
