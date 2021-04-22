import React from 'react';

import CollectionItem from '../collection-items/collection-item';
import './preview.scss';

const CollectionPreview = ({title, items }) => (
       <div className='collection-preview'>
           <h1 className="title">{title.toUpperCase()}</h1>
           <div className='preview'>
               {items
               .filter((item, idx ) => idx < 5 )
               .map(({id, ...otherItemProps })  => (
                   <CollectionItem key={id} {...otherItemProps } />
               ))}
           </div>
       </div>
);

export default CollectionPreview;