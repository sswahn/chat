import { useState, useEffect, useRef } from 'react'
import styles from './styles.module.css'

const Chat = ({ className, username, data, onSubmit }) => {
  const [isMinimized, setIsMinimized] = useState(true)
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const chatBoxRef = useRef(null)

  const toggleChat = () => {
    setIsMinimized(prevState => !prevState)
  }

  const handleOnChange = event => {
    setInputValue(event.target.value)
  }
  
  const handleOnSubmit = event => {
    event.preventDefault()
    if (inputValue.trim() !== '') {
      setMessages(prevMessages => [...prevMessages, {user: username, text: inputValue}])
      onSubmit && onSubmit({user: username, text: inputValue})
      setInputValue('')
    }
  }

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight
    }
  }, [messages])

  useEffect(() => {
    if (data?.length) {
      setMessages(data)
    }
  }, [data])
  
  return (
    <div className={`${styles.chat} ${isMinimized ? styles.min : styles.max} ${className}`}>
      <button type="button" onClick={toggleChat}>{isMinimized ? 'Maximize' : 'Minimize'}</button>
      <div ref={chatBoxRef} role="log" aria-label="chat history">
        {messages.map((message, index) => (
          <div key={index} className={message.user === username ? styles.local : styles.remote}>{message.text}</div>
        ))}
      </div>
      <form onSubmit={handleOnSubmit}>
        <input type="text" placeholder="Type your message..." value={inputValue} onChange={handleOnChange} aria-label="chat input" />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Chat
