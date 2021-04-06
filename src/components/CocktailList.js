import React from 'react';
import { MOCK } from '../assets/mock';
import CocktailCard from './CocktailCard';

export default function CocktailList() {

    const [data, setData] = React.useState(MOCK);
    const handleDelete = (myself) => {
        let dataModified = [...data]
        dataModified.splice(dataModified.indexOf(myself), 1)
        setData(dataModified)
    };



    const cardArray = data.map( cocktail => {
        return (
            <CocktailCard 
                key={cocktail.id} 
                cocktail={cocktail}
                handleDelete={handleDelete}
            />
        );
    });

    return(
        <div>
            {cardArray}
        </div>
    );
}