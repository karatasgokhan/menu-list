import { useState } from 'react'

const useExternalHookAsState = () => {
  const [message, setMessage] = useState('nothing yet')

  const updateMessage = (newMessage) => {
    setMessage(newMessage)
  }

  return [message, updateMessage]
}

export default useExternalHookAsState
