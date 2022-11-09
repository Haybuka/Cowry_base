import React,{createContext,useState} from 'react'

export const NavContext = createContext()

export const NavcontextProvider = ({children}) => {
  const [view,setView] = useState(false)
  const handleViewClick = () => {
    setView(prev => !prev)
  }
  return (
    <NavContext.Provider value={{view,handleViewClick,setView}}>
        {children}
    </NavContext.Provider>
  )
}
