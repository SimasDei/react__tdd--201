import React from 'react';

import './styles/App.scss';

import { Header, Headline } from './components';

const App = () => {
  return (
    <div>
      <Header />
      <section className='main'>
        <Headline header={'Posts'} description={'Clicke the button to render posts'} />
      </section>
    </div>
  );
};

export default App;
