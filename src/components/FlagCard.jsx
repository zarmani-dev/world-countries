import { Link } from "react-router-dom";
import Tags from "./Tags";

const FlagCard = ({ country }) => {
  return (
    <div className=" bg-darkBlue rounded-lg shadow-lg ">
      <Link to={`/${country.name}`}>
        <img
          src={country.flags.png}
          className="h-[220px] sm:h-[180px]  xl:h-[170px] w-full object-cover rounded-tr-lg rounded-tl-lg cursor-pointer"
          alt=""
        />
      </Link>
      <div className="p-5">
        <h1 className="text-2xl font-bold mb-4">{country.name}</h1>
        <Tags label="Population">{country.population.toLocaleString()}</Tags>
        <Tags label="Region">{country.region}</Tags>
        <Tags label="Capital">{country.capital}</Tags>
      </div>
    </div>
  );
};
export default FlagCard;
