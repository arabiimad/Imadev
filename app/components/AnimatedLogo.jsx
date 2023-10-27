import React, { useState, useEffect } from 'react';

const AnimatedLogo = () => {
  const [text, setText] = useState('Imadev');
  const phrases = ["I'madev", "I'm a dev", "I'm a developer !"];
  let phraseIndex = 0;

  useEffect(() => {
    let intervalId;

    const startAnimation = () => {
      intervalId = setInterval(() => {
        if (phraseIndex === phrases.length - 1) {
          clearInterval(intervalId);
          setTimeout(() => {
            setText('Imadev');
            setTimeout(() => {
              phraseIndex = 0;
              startAnimation();
            }, 10000);
          }, 5000);
        } else {
          phraseIndex += 1;
          setText(phrases[phraseIndex]);
        }
      }, 1500);
    }

    startAnimation();

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="text-4xl font-bold">
      {text.split(' ').map((word, index, arr) => {
        let renderedElement;

        if (word === "Imadev") {
          renderedElement = (
            <span key={index} className="text-transparent bg-clip-text bg-gradient-to-br from-orange-800 via-yellow-600 to-yellow-400">
              {word}
            </span>
          );
        } else if (word === "I'madev") {
          renderedElement = (
            <span key={index}>
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-800 via-yellow-600 to-yellow-400">
                I
              </span>
              {'\''}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-800 via-yellow-600 to-yellow-400">
                madev
              </span>
            </span>
          );
        } else if (word === "I'm") {
          renderedElement = (
            <span key={index}>
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-800 via-yellow-600 to-yellow-400">
                I
              </span>
              {'\''}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-800 via-yellow-600 to-yellow-400">
                m
              </span>
            </span>
          );
        } else if (word === "a") {
          renderedElement = (
            <span key={index} className="text-transparent bg-clip-text bg-gradient-to-br from-orange-500 via-yellow-500 to-yellow-200">
              {word}
            </span>
          );
        } else if (word === "dev") {
          renderedElement = (
            <span key={index} className="text-transparent bg-clip-text bg-gradient-to-br from-orange-500 via-yellow-500 to-yellow-200">
              {word}
            </span>
          );
        } else if (word === "developer") {
          renderedElement = (
            <span key={index}>
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-500 via-yellow-500 to-yellow-200">
                dev
              </span>
              eloper
            </span>
          );
        } else if (word === "!") {
          renderedElement = word;
        }

        return (
          <React.Fragment key={index}>
            {renderedElement}
            {(index !== arr.length - 1) && <span>&nbsp;</span>}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default AnimatedLogo;
