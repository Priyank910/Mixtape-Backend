# 🎵 Mixtape Backend

A lightweight Node.js backend API built to support music search applications. The service fetches music and video information from YouTube and exposes search functionality through RESTful API endpoints.

This backend can be used as the engine behind music players, playlist generators, or mixtape applications.

---

## 🚀 Features

### 🎶 Music Search

- Search songs by title
- Search artists
- Search albums
- Retrieve YouTube music results

### 🔍 Video Discovery

- Find music videos
- Retrieve video metadata
- Access thumbnails and video information

### 🌐 API Integration

- RESTful API architecture
- JSON responses
- Frontend-friendly endpoints

### ⚡ Performance

- Fast search results
- Lightweight Express server
- Minimal dependencies

---

## 🛠 Tech Stack

### Backend

- Node.js
- Express.js

### External Services

- YouTube Search
- yt-search

### Utilities

- CORS

---

## 📂 Project Structure

```bash
Mixtape-Backend/
│
├── server.js
├── package.json
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Priyank910/Mixtape-Backend.git
```

### Navigate Into Project

```bash
cd Mixtape-Backend
```

### Install Dependencies

```bash
npm install
```

---

## ▶️ Run Application

```bash
npm start
```

Server starts on:

```text
http://localhost:3000
```

---

## 📡 Example API Usage

### Search Music

```http
GET /search?q=arijit+singh
```

### Example Response

```json
{
  "title": "Song Title",
  "artist": "Artist Name",
  "thumbnail": "thumbnail_url",
  "videoUrl": "youtube_video_url"
}
```

---

## 🎯 Use Cases

- Music Streaming Applications
- Playlist Builders
- Mixtape Generators
- Song Discovery Platforms
- Personal Music Projects
- Educational API Projects

---

## 📚 Learning Outcomes

- REST API Development
- Third-Party API Integration
- Backend Architecture
- JSON Data Handling
- Express.js Fundamentals
- Cross-Origin Communication

---

## 🚀 Future Improvements

- Trending Songs API
- Playlist Generation
- User Authentication
- Favorites System
- Artist Recommendations
- Search History
- Spotify Integration
- Music Analytics

---

## 📸 Screenshots

Add screenshots of:

- API Testing (Postman)
- Frontend Integration
- Search Results

---

## 👨‍💻 Author

Priyank Chavda

GitHub: https://github.com/Priyank910

---

## 📄 License

MIT License
