import React from 'react'

import Banner from '../Banner'

function LostBanner ({ answer, reset }) {
  return (
    <Banner status="sad" action={reset}>
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </Banner>
  )
}

export default LostBanner
