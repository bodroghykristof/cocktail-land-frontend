import React, { useState } from 'react';
import WelcomeBox from '../elements/WelcomeBox';

export default function Welcome() {
  const [verbose, setVerbose] = useState(false);

  const showMore = () => {
    setVerbose(true);
  };

  return (
    <WelcomeBox>
      <h1>Welcome to Cocktail Land</h1>
      <h2>Warning</h2>
      <p>
        This site offers a huge variety of alcoholic drinks, being not suitable
        for underage visitors. If you are under 18 please, for your own good,
        leave this page!
      </p>
      {verbose ? `` : <button onClick={showMore}>More</button>}
      <p>
        {verbose
          ? `Underage drinking is a serious public health problem in the United
        States. Alcohol is the most widely used substance among America’s youth,
        and drinking by young people poses enormous health and safety risks. The
        consequences of underage drinking can affect everyone - regardless of age
        or drinking status.`
          : ``}
      </p>
      <p>Would you like to enter the page?</p>
      <button>Yes</button>
      <button>No</button>
    </WelcomeBox>
  );
}
