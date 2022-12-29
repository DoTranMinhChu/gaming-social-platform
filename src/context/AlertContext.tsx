import React, { useContext } from 'react'

export const AlertContext = React.createContext('') as any

export const useAlert = () => useContext(AlertContext)
