import Start from '../images/star.png'


export default function Card(promps) {
    return (
      <div className="card">
        <img src={require("../images/"+promps.img)} alt={promps.img.split(".")[0]} className="card--image"/>
        <div className="card--info">
            <img src={Start} alt="start icon"/>
             <p>{promps.rating}</p>
            <p>({promps.reviewCount})</p>
            <p>•</p>
            <p>{promps.location}</p>
        </div>
        <p className="card--title">{promps.title}</p>
        <p className="card--price"><span>From ${promps.price} </span>/ person</p>
      </div> 
    );
}
