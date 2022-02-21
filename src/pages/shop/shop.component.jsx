import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import ImageSlider from '../../components/ImageSlider/index';

class ShopPage extends React.Component {
  render() {
    const { match } = this.props;
   return (
    <div className='shop'>
    <div className='shop-page'>
    <ImageSlider />
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
    </div>
   )
  }
}

export default ShopPage;