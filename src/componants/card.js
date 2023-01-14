import Start from '../images/star.png'


export default function Card(props) {
    console.log(props)
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
      <div className="card">
        {badgeText &&<div className="card--badge">{badgeText}</div>}
        <img src={require("../images/"+props.coverImg)} className="card--image"/>
        <div className="card--info">
            <img src={Start} alt="start icon"/>
             <p>{props.stats.rating}</p>
            <p>({props.stats.reviewCount})</p>
            <p>•</p>
            <p>{props.location}</p>
        </div>
        <p className="card--title">{props.title}</p>
        <p className="card--price"><span>From ${props.price} </span>/ person</p>
      </div> 
    );
}
