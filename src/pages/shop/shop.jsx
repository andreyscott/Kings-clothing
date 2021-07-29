import React from 'react';
import SHOP_DATA from './shop.data';
import ImageSlider from '../../components/ImageSlider/index';

//  import { SliderData } from '../../data/SliderData';
// import Hero from '../../components/Hero/index';

import CollectionPreview from '../../components/collection-preview/collection-preview';



class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Collection: SHOP_DATA
        }
    }

    render() {
        const {Collection} = this.state
        return ( 
            <div className='shop'>
                 <div className='shop-page'>
            {/* <Hero slides={SliderData} /> */}
            <ImageSlider />
         {Collection.map(({ id, ...otherCollectionProps}) => (
             <CollectionPreview key={id} {...otherCollectionProps} />
             ))}
        </div>
            </div>
        );
    }
}

export default ShopPage;