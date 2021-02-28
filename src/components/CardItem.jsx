import './CardItem.scss';

const CardItem = ({img, title, description}) => {
    return (
        <div className="col-xl-4 card-wrapper">
            <div className="card">
                <div className="card-img-holder">
                    <div className="card-img" style={{ backgroundImage: 'url('+ img +')' }}></div>
                </div>
                <p><span className="green">{title} </span> {description}</p>
            </div>
        </div>
    )
}

export default CardItem
