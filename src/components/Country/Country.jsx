import { useState } from "react";

const Country = ({country, handleVisitedCountry, handleFlags}) => {
    const {name, flags, area, population, region, cca3} = country;

    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className={` ${visited && 'bg-gray-200 text-black'} space-y-2 border-2 p-5 border-sky-500 mt-5 rounded-md`}>
            <h1 className="text-lg">{name.common} </h1>
            <img className="w-[300px] h-[200px] " src={flags.png} alt="" />
            <hr />
            <p className=" text-lg">Area: <small>{area}</small> </p>
            <p className=" text-lg">Population: <small>{population}</small> </p>
            <p className=" text-lg">Region: <small>{region}</small> </p>
            <p className=" text-lg">Code: <small>{cca3}</small> </p>
            <button className="btn mr-2 btn-md btn-accent normal-case" onClick={handleVisited}> {visited ? 'Visited' : 'Going'}  {visited}</button>
            {
                visited ? 'I have visited this country' : 'I want to visit'
            }
            <br />
            <button onClick={()=> handleVisitedCountry(country)} className="btn btn-md btn-primary normal-case" >Mark Visited</button>
            <br />
            <button onClick={ () => handleFlags(country)} className="btn btn-md btn-error normal-case">Add Flag</button>
        </div>
    );
};

export default Country;