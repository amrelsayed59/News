import React, { Suspense } from 'react';
import Routes from './routes';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './scss/style.scss';
import Loader from './components/Loader';

const App: React.FC = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes />
      </Suspense>
    </>
  );
};

export default App;
