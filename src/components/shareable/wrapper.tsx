import React, { FC } from 'react'

const Wrapper:FC<{children:React.ReactNode}> = ({children}) => {
  return (
    <section>

<div className='max-w-screen-xl mx-auto px-4 '>

{children}

</div>

    </section>
  )
}

export default Wrapper