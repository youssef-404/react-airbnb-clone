import Hero from './componants/hero';
import Nav from './componants/nav';
import Card from './componants/card';
import CardData from './data'

function App() {
  const cards =CardData.map(card=>{
  return(<Card
    key={card.id}
    img={card.coverImg}
    rating={card.stats.rating}
    reviewCount={card.stats.reviewCount}
    location={card.location}
    title={card.title}
    price={card.price}
    />)
  })
  return (
    <div className="Container">
      <Nav/>
      <Hero/>
      <div className='cards-list'>
        {cards}
      </div>
    </div>
  );
}

export default App;


