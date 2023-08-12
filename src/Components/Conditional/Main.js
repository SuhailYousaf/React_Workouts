import React from 'react'
import Logged from './Logged'
import NotLogged from './NotLogged'

const Main = ({isLogged}) => {
  return (
    <div>
      {isLogged ? <Logged/>: <NotLogged/>}
    </div>
  )
}

export default Main
