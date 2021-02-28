import './Icon.scss';

const Icon = ({ img, title }) => {
    return (
        <>
            <a href="#" className="icon">
                <img src={img} alt=""></img>
                <h2>{title}</h2>
            </a>
        </>
    )
}

export default Icon
