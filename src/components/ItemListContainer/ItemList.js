import React, { useState, useEffect } from 'react';
import Item from './Item';


function ItemList ({items}) {
    const [, setPhotos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos/2')
            .then((response) => response.json())
            .then((json) => setPhotos(json));
    }, []); 

    return (
        <div>
            {items.map = ((photos) => {
                <div>
                    <Item data={photos} />
                </div>
            })}
        </div>
    );
};

export default ItemList;