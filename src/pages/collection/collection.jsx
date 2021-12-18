import React from 'react';

import collectionItem from '../../components/collection-items/collection-item';

import './category.scss';

const  CollectionPage = ({ match }) => {
    console.log(match.params.collectionId);
    return (
        <div className="collection-page">
            <h1>CollectionPage bitches  </h1>
        </div>
    )
}

export default CollectionPage