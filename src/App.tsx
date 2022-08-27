import clsx from 'clsx';
import { useEffect, useState } from 'react';
import './App.css';
import { shuffle } from './utils/shuffle';

enum Blocks {
  Header,
  LeftPanel,
  Main,
  RightPanel,
  Footer,
}

export const COLORS = ['white', 'red', 'yellow', 'blue', 'orange'];

function App() {
  const [images, setImages] = useState([
    'cats',
    'chubaka',
    'dogs',
    'dyno',
    'planets',
  ]);
  const [colorIndex, setColorIndex] = useState(0);

  const moveImages = () => {
    setImages((images) => shuffle(images));
    setColorIndex((colorIndex) => {
      const newColorIndex = colorIndex + 1;
      return COLORS[newColorIndex] ? newColorIndex : 0;
    });
  };

  useEffect(() => {
    const INTERVAL_TIME = 31200;
    const intervalId = setInterval(moveImages, INTERVAL_TIME);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const getBackgroundImage = (index: number) => `image-${images[index]}`;

  return (
    <div className="app">
      <div className="wrapper">
        <header className={getBackgroundImage(Blocks.Header)} />
        <div className="content">
          <div
            className={clsx('left-panel', getBackgroundImage(Blocks.LeftPanel))}
          />
          <div className={clsx('main', getBackgroundImage(Blocks.Main))}>
            <button
              style={{
                backgroundColor: COLORS[colorIndex],
                cursor: 'pointer',
              }}
              onClick={moveImages}
            >
              Move images
            </button>
          </div>
          <div
            className={clsx(
              'right-panel',
              getBackgroundImage(Blocks.RightPanel)
            )}
          />
        </div>
        <footer className={getBackgroundImage(Blocks.Footer)} />
      </div>
    </div>
  );
}

export default App;
