import StarshipCard from './StarshipCard';

const StarshipList = ({ starShips }) => {
  return (
    <div>
      <h2>Starships</h2>
      {starShips.map((starShip, index)=>(
        <StarshipCard starShip={starShip} index={index}/>
      ))}
    </div>
  );
};

export default StarshipList;

