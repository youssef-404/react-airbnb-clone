import Hero from './componants/hero';
import Nav from './componants/nav';
import Card from './componants/card';
import CardData from './data'

function App() {
  const cards =CardData.map(item=>{
  return(<Card
    key={item.id}
    {...item}
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


