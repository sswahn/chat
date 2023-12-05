import { useState, useEffect, useRef } from 'react'

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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: isMinimized ? '450px' : '100vh',
        position: 'absolute',
        transition: 'all 0.3s ease',
        width: isMinimized ? '300px' : '100%',
        bottom: 0,
        right: 0,
      }}
    >
      <button
        style={{
          cursor: 'pointer',
          backgroundColor: '#3498db',
          color: '#fff',
          border: 'none',
          padding: '5px 10px',
          borderRadius: '5px',
        }}
        onClick={toggleChat}
      >
        {isMinimized ? 'Maximize' : 'Minimize'}
      </button>
      <div
        ref={chatBoxRef}
        style={{
          flex: 1,
          overflowY: 'scroll',
          padding: '10px',
          boxSizing: 'border-box',
          border: '1px solid #ccc',
          marginBottom: '40px',
        }}
      >
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <form
        onSubmit={handleOnSubmit}
        style={{
          display: 'flex',
          padding: '10px',
          boxSizing: 'border-box',
          backgroundColor: '#f0f0f0',
          position: 'absolute',
          bottom: 0,
          width: '100%',
        }}
      >
        <input
          type="text"
          placeholder="Type your message..."
          value={inputValue}
          onChange={handleOnChange}
          style={{
            boxSizing: 'border-box',
            marginRight: '10px',
            transition: 'all 0.3s ease',
            width: '100%',
          }}
        />
        <button type="submit" style={{ cursor: 'pointer' }}>
          Send
        </button>
      </form>
    </div>
  )
}

export default Chat
