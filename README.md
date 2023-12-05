# Chat

A simple and customizable chat component with minimize/maximize functionality.

## Features

- **Minimize/Maximize:** Easily toggle between a minimized and maximized chat interface.
- **Dynamic Updates:** Automatically scrolls to the bottom when new messages are added.
- **Prepopulated Chat:** Optionally prepopulate the chat with initial messages.
- **Custom Styling:** Use CSS Modules for styling and customize the appearance.

## Installation

```bash
npm i @sswahn/chat
```

## Usage

```javascript
import Chat from '@sswahn/chat'

const YourApp = () => {
  const handleSendMessage = (message) => {
    // Handle sending the message (e.g., send to server).
    console.log(`Sending message: ${message}`)
  }

  return (
    <div>
      {/* Other components */}
      <Chat data={['Hello', 'How are you?']} onSubmit={handleSendMessage} />
    </div>
  )
}

export default YourApp
```
