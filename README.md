# Chat · [![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/sswahn/chat/blob/main/LICENSE) ![npm version](https://img.shields.io/npm/v/@sswahn/chat)

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

### Props
- **className**: Additional CSS classes for styling customization.
- **data**: Array of messages to prepopulate the chat.
- **onSubmit**: Callback function triggered when a new message is submitted.

```javascript
import Chat from '@sswahn/chat'

const YourApp = () => {
  const handleSendMessage = (message) => {
    // Handle sending the message (e.g., send to server).
    console.log(`Sending message: ${message}`)
  }

  return (
      <Chat
        className="custom-chat"
        data={['Hello', 'How are you?']}
        onSubmit={handleSendMessage}
      />
  )
}

export default YourApp
```

## License
Chat is [MIT Licensed](https://github.com/sswahn/chat/blob/main/LICENSE)
