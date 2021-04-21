import React from 'react';
import SHOP_DATA from './shop.data';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Collection: SHOP_DATA
        }
    }

    render() {
        return <div>
            Shop Pageee
        </div>
    }
}

export default ShopPage;