import React from 'react';
import SHOP_DATA from './shop.data';

// import { SliderData } from '../../data/SliderData';
// import  ImgSlider from "../../components/slider/Img-slider";
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
            <div className='shop-page'>
            {/* <ImgSlider /> */}
         {Collection.map(({ id, ...otherCollectionProps}) => (
             <CollectionPreview key={id} {...otherCollectionProps} />
             ))}
        </div>
        );
    }
}

export default ShopPage;