import React from 'react'

interface Props {
  children: React.ReactNode
}

const MainContainer = ({
  children
}: Props) => {


  return (
    <main
      id='main-container'
      className="my-4 pt-4 md:pt-0"
    >
      <div className="px-8  max-w-6xl justify-center mx-auto">
        {children}
      </div>
    </main>
  )
}

export default MainContainer

