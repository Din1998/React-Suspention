import React, {Suspense } from 'react';
import img1 from './Assist/test.jpg';

const Home = React.lazy(() => import('./Home'));

const newText = () => {
  return (
    <div>
      <h1>Hi im Din</h1>
        <Suspense fallback={<div>Loading.....!</div>}>
          <Home imge={img1}/>
        </Suspense>
    </div>
  )
};

export default newText;