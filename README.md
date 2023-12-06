# Chat · [![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/sswahn/chat/blob/main/LICENSE) ![npm version](https://img.shields.io/npm/v/@sswahn/chat)

A simple and customizable chat component.

## Features

- **Minimize/Maximize:** Easily toggle between a minimized and maximized chat interface.
- **Dynamic Updates:** Automatically scrolls to the bottom when new messages are added.
- **Prepopulated Chat:** Optionally prepopulate the chat with initial messages.
- **Custom Styling:** Use a CSS class for style overriding to customize the appearance.

## Installation

```bash
npm i @sswahn/chat
```

## Usage

### Props
- **className**: Override default CSS with custom class.
- **username**: Username of local user.
- **data**: Array of message objects for prepopulating the chat.
- **onSubmit**: Callback function triggered when a new message is submitted.

```javascript
import { useState } from 'react'
import Chat from '@sswahn/chat'

const YourApp = () => {
  const [messages, setMessages] = useState([
    {user: 'sswahn', text: 'Hello'},
    {user: 'steve', text: 'How are you?'}
  ])

  const handleSubmitMessage = message => {
    // Handle the message (e.g., send to server).
    console.log(`Sending message: ${message.text} from ${message.user}`)
  }

  return (
      <Chat
        className="custom-chat"
        username="sswahn"
        data={messages}
        onSubmit={handleSubmitMessage}
      />
  )
}

export default YourApp
```

## License
Chat is [MIT Licensed](https://github.com/sswahn/chat/blob/main/LICENSE)
