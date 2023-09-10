import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {

    const [countries, setCountries] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then( data => setCountries(data))
    },[])


    return (
        <div>
            <h1 className='text-center border border-purple-500 p-5 rounded-lg text-2xl mt-5'>Countries: {countries.length}</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    countries.map(country => <Country
                    key={country.cca3}
                    country={country}
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