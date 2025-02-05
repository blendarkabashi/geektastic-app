import './Header.scss';

const Header = ({ headerLogo }) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-container">
                    <img src={headerLogo} alt=""></img>
                    <div className="login-mobilemenu">
                        <div className="login-holder">
                            <a href="/#" className="login-btn">
                                LOGIN
                            </a>
                        </div>
                        <div className="mobile-menu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
