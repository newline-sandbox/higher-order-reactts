import React from 'react'

interface CodeComponentProps {
  codeSample: object
}

const withNightMode = (WrappedComponent: any) => (props: CodeComponentProps) => {
  return(
    <div style={{backgroundColor: 'wheat'}}>
      <WrappedComponent {...props} />
    </div>
  )
}

export default withNightMode