import { Link, useNavigate, useParams } from "react-router-dom";
import useStore from "../store/useStore";
import Tags from "./Tags";
import { useEffect, useState } from "react";

const Detail = () => {
  const navigate = useNavigate();
  const { data } = useStore();
  const { name } = useParams();
  const country = data.find((item) => item.name === name);

  const [borders, setBorders] = useState([]);

  useEffect(() => {
    if (country && country.borders) {
      // Map through borders to find corresponding country names
      const foundBorders = country.borders.map((border) =>
        data.find((item) => item.alpha3Code === border)
      );

      // Limit to 3 borders if more are found
      setBorders(foundBorders.slice(0, 3));
    } else {
      setBorders([{ name: "No borders" }]);
    }
  }, [country, data]);
  return (
    <section className="container flex flex-col min-h-screen">
      <div className="my-10 lg:my-20 flex  gap-2">
        <button
          onClick={() => navigate("/")}
          className=" flex items-center gap-2 bg-lightGrayBg text-darkBlueText dark:text-white dark:bg-darkBlue shadow-lg rounded-lg px-3 py-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </button>
        <button
          onClick={() => navigate(-1)}
          className=" flex gap-2 bg-lightGrayBg text-darkBlueText dark:text-white dark:bg-darkBlue shadow-lg rounded-lg px-7 py-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
          Back
        </button>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap gap-10 lg:gap-20 pb-10">
        <div>
          <img src={country.flags.png} className="" alt={country.name} />
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-7 text-darkBlueText dark:text-white">
            {country.name}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            <div className="flex flex-col gap-2">
              <Tags label="Native Name">{country.nativeName}</Tags>
              <Tags label="Population">
                {country.population.toLocaleString()}
              </Tags>
              <Tags label="Region">{country.region}</Tags>
              <Tags label="Sub Region">{country.subregion}</Tags>
              <Tags label="Capital">{country.capital}</Tags>
            </div>
            <div className="flex flex-col gap-2">
              <Tags label="Top Level Domain">{country.topLevelDomain}</Tags>
              <Tags label="Currencies">{country.currencies[0].name}</Tags>
              <Tags label="Languages">
                {country.languages.map((l) => l.name).join(", ")}
              </Tags>
            </div>
          </div>
          <div>
            <Tags label="Border Countries" wrap={"flex mt-2"}>
              {borders.map((border, index) => (
                <button
                  disabled={border.name === "No borders"}
                  onClick={() => navigate(`/${border.name}`)}
                  key={index}
                  className="bg-lightGrayBg text-darkBlueText dark:text-white dark:bg-darkBlue px-6 py-1 rounded-md shadow-xl  mr-3"
                >
                  {border.name}
                </button>
              ))}
            </Tags>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Detail;
