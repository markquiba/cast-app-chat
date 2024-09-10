# cast-app-chat

Real-time chat application built with React and Firebase Firestore. It allows users to sign in with just a name, send and receive messages in real-time, and sign out of the chat.

<img width="1500" alt="cast-app-chat-home" src="https://github.com/user-attachments/assets/2e15e6b5-7eca-4245-a9c0-75bcff2b6b2b">

## Features

- Real-time messaging with Firebase Firestore.
- Simple user authentication by providing the User's name, stored on local storage.
- Supports emojis.
- Supports multi-line text input. (`shift` + `enter`)
- Supports matching multi-line message display.
- Supports copy & pasting on the text area.
- Feature to quickly return to the most recent message.
- Responsive UI for seamless chat navigation.

## Run Locally

1. **Clone repository:**

2. **Navigate to the project directory:**

   ```sh
   cd cast-app-chat
   ```

3. **Install dependencies:**

   ```sh
   npm install
   ```

4. **Start development server:**

   ```sh
   npm start
   ```

   The application will be available at `http://localhost:3000`.

## For Future Improvements

- Implement additional chat features such as message reactions, file sharing, and threading.
- Improve performance and scalability for handling larger volumes of messages.
- Integrate real authentication and authorization for a more secure chat environment.
- Add caching to optimize load times and reduce server strain.
- Introduce API rate limiting to manage and prevent excessive usage.
- Improve error handling and recovery system.
- Implement user analytics to monitor engagement and chat interactions.

## Screens

#### Emoji selector

<img width="1500" alt="cast-app-chat-emojis" src="https://github.com/user-attachments/assets/a5c94cd6-f4d3-4174-ac75-3bb5abffb702">

#### Highlight own message

<img width="1500" alt="cast-app-chat-owner-message" src="https://github.com/user-attachments/assets/83275272-373b-464d-a2c5-4ce472a8491b">

#### Welcome toast

<img width="1500" alt="cast-app-chat-conv" src="https://github.com/user-attachments/assets/54552577-c12b-4d2c-82d8-2549665cd838">

#### Sign-out toast

<img width="1500" alt="cast-app-chat-sign-out" src="https://github.com/user-attachments/assets/a1620363-04d7-40da-8f00-4ddaeadb3207">
