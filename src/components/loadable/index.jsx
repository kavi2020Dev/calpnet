import React, {Suspense } from 'react';
import Loader from '../../utils/loader';

const Loadable = (Component) => (props) => (
  <Suspense fallback={<Loader />}>
    <Component {...props} />
  </Suspense>
);

export default Loadable;

