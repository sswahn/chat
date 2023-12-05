import { useState, useEffect, useRef } from 'react'
import styles from './styles.module.css'

const Chat = ({ className, data, onSubmit }) => {
  const [isMinimized, setIsMinimized] = useState(true)
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const chatBoxRef = useRef(null)

  const toggleChat = () => {
    setIsMinimized((prev) => !prev)
  }

  const handleOnChange = ({ target }) => {
    setInputValue(target.value)
  }
  
  const handleOnSubmit = (event) => {
    event.preventDefault()
    if (inputValue.trim() !== '') {
      setMessages((prevMessages) => [...prevMessages, inputValue])
      onSubmit && onSubmit(inputValue)
      setInputValue('')
    }
  }

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight
    }
  }, [messages])

  useEffect(() => {
    if(data?.length) {
      setMessages(data)
    }
  }, [data])
  
  return (
    <div className={`${styles.chat} ${isMinimized ? styles.min : styles.max} ${className}`}>
      <button type="button" onClick={toggleChat}>{isMinimized ? 'Maximize' : 'Minimize'}</button>
      <div ref={chatBoxRef}>
        {messages.map((message, index) => <div key={index}>{message}</div>)}
      </div>
      <form onSubmit={handleOnSubmit}>
        <input type="text" placeholder="Type your message..." value={inputValue} onChange={handleOnChange} />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Chat
