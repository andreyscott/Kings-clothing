import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import { selectCollections } from '../../redux/shop/shop.selector';
import ImageSlider from '../../components/ImageSlider/index';
import CollectionPreview from '../../components/collection-preview/collection-preview';


const ShopPage = ({ collections }) => ( 
            <div className='shop'>
                 <div className='shop-page'>
            <ImageSlider />
         {collections.map(({ id, ...otherCollectionProps}) => (
             <CollectionPreview key={id} {...otherCollectionProps} />
             ))}
        </div>
            </div>
);

const mapStateToProps = createStructuredSelector({
    collections : selectCollections
})

export default connect(mapStateToProps)(ShopPage);