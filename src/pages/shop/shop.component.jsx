import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import ImageSlider from '../../components/ImageSlider/index';

const ShopPage = ({ match }) => (
  <div className='shop'>
  <div className='shop-page'>
  <ImageSlider />
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
  </div>
);

export default ShopPage;


