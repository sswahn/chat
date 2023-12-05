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
    // Scroll to the bottom when messages change
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight
    }
  }, [messages])

  // add data to state
  
  return (
    <div className={styles.chat} style={{ width: isMinimized ? '300px' : '100%', height: isMinimized ? '450px' : '100%' }}>
      <button type="button" onClick={toggleChat}>{isMinimized ? 'Maximize' : 'Minimize'}</button>
      <div className={styles.messages} ref={chatBoxRef}>
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
