const Country = ({country}) => {
    const {name, flags, area, population, region} = country;
    console.log(country);
    return (
        <div className="space-y-2 border p-5 border-sky-500 mt-5 rounded-md">
            <h1 className="text-lg">{name.common} </h1>
            <img className="w-[300px] h-[200px] " src={flags.png} alt="" />
            <hr />
            <p className=" text-lg">Area: <small>{area}</small> </p>
            <p className=" text-lg">Population: <small>{population}</small> </p>
            <p className=" text-lg">Region: <small>{region}</small> </p>
            
        </div>
    );
};

export default Country;