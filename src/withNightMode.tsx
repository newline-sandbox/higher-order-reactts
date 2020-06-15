import React from 'react'

const withNightMode = (WrappedComponent: any) => (props: any) => {
  return(
    <div style={{backgroundColor: 'wheat'}}>
      <WrappedComponent {...props} />
    </div>
  )
}

export default withNightMode