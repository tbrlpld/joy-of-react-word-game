import React from 'react'

function Banner ({ status, children, action }) {
  return (
    <div className={`${status} banner`}>
      <div className="banner__spacer">
      </div>
      <div className="banner__children">
        {children}
      </div>
      <div className="banner__action-container">
        {action}
      </div>
    </div>
  )
}

export default Banner
