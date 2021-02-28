import './Footer.scss';
import gambilingLogo from '../assets/component-footer-gamblingc.png'
import lseLogo from '../assets/component-footer-LSE.png'
import footerLogo from '../assets/component-footer-logo.png'
import sslLogo from '../assets/component-footer-SSL.png'
import plus18Logo from '../assets/component-footer-18yrs.png'

var logos = [
    {
        img: gambilingLogo
    },
    {
        img: lseLogo
    },
    {
        img: footerLogo
    },
    {
        img: sslLogo
    },
    {
        img: plus18Logo
    },
]

var message = "Underage gambing is an offence. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"

const Footer = () => {
    return (
        <footer>
            <div className="partner-logos">
                <div className="container">
                    <div className="row">
                        {
                            logos.map( (logo,index) => {
                                if(index <2){
                                    return(
                                        <div key={index} className="col-md-6 logo-holder">
                                            <img src={logo.img} alt=""></img>
                                        </div>
                                    )
                                }
                                else{
                                    return(
                                        <div key={index} className="col-md-4 logo-holder">
                                            <img src={logo.img} alt=""></img>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                    <p>{message}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
