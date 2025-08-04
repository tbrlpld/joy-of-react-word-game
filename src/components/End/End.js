import React from 'react';

function End({isWon, guessCount}) {
  const bannerModifierClass  = isWon ? "happy" : "sad"
  return (
    <div className={bannerModifierClass + " banner" }>
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>3 guesses</strong>.
      </p>
    </div>
  )
}

export default End;
