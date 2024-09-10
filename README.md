# cast-app-chat

Real-time chat application built with React and Firebase Firestore. It allows users to sign in with just a name, send and receive messages in real-time, and sign out of the chat.

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

### For Future Improvements

- Implement additional chat features such as message reactions, file sharing, and threading.
- Improve performance and scalability for handling larger volumes of messages.
- Integrate real authentication and authorization for a more secure chat environment.
- Add caching to optimize load times and reduce server strain.
- Introduce API rate limiting to manage and prevent excessive usage.
- Improve error handling and recovery system.
- Implement user analytics to monitor engagement and chat interactions.
