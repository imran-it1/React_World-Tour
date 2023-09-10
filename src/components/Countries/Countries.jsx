import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {

    // Countries State
    const [countries, setCountries] = useState([]);
    // Visited Countries State
    const [visited, setVisited] = useState([])
    // Visited Flags
    const [visitedFlags, setVisitedFlags] = useState([])


    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then( data => setCountries(data))
    },[])


    const handleVisitedCountry = country => {
        setVisited([...visited, country]);
    }

    const handleFlags = country => {
        setVisitedFlags([...visitedFlags, country])
    }


    return (
        <div>
            {/* Countries */}
            <h1 className='text-center border border-purple-500 p-5 rounded-lg text-2xl mt-5'>Countries: {countries.length}</h1>

            {/* Visited Countries Names*/}
            <div className=' border-2 border-green-500 mt-5 p-5 rounded-md'>
                <h1 className=' text-2xl mb-2 font-semibold'>Visited Countries: {visited.length}</h1>
                <ol className=' list-decimal list-inside'>
                    {
                        visited.map(country => <li key={country}>{country.name.common}</li>)
                    }
                </ol>
            </div>
            {/* Visited Countries Flags */}
            <div className=' border border-purple-500 p-5 mt-5 rounded-md'>
                    <h1 className=' text-2xl font-semibold mb-2'>Flags: {visitedFlags.length}</h1>
                    {
                        visitedFlags.map(country => <img className='w-[100px] h-[70px] inline-block mr-5' src={country.flags.png}></img>)
                    }
            </div>

            {/* Country Data / Component */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    countries.map(country => <Country
                    key={country.cca3}
                    country={country}
                    handleVisitedCountry={handleVisitedCountry}
                    handleFlags ={handleFlags}
                    ></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;



/**
 * Data fetch korte
 * 1. State declare kora lagbe data store korte
 * 2. useeffect use kore asyn await or fetch diye data load kore dekhte hobe
 * 3. load kora data state a pathano lagbe
 * 
 * 
 * 
 * 
 * Prapto data niye arekta component ke oi data map kore pathano jay
 * Tahole map kore paoa prottekta datar jnno oi component ta create hobe
 */