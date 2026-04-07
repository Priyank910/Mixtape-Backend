const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());

// NEW: Advanced Synced Lyrics Fetcher
app.get("/api/lyrics", async (req, res) => {
  const songName = req.query.song;
  const artistName = req.query.artist;

  if (!songName) return res.status(400).json({ error: "No song provided" });

  try {
    const cleanSong = songName
      .split("(")[0]
      .replace(/&quot;/g, "")
      .trim();
    const cleanArtist = artistName ? artistName.split(",")[0].trim() : "";

    const response = await fetch(
      `https://lrclib.net/api/search?q=${encodeURIComponent(cleanSong + " " + cleanArtist)}`,
    );

    if (response.ok) {
      const data = await response.json();

      if (data && data.length > 0) {
        // We demand the SYNCED lyrics first!
        if (data[0].syncedLyrics) {
          return res.json({ lyrics: data[0].syncedLyrics, isSynced: true });
        }
        // If they don't have synced, we fall back to plain text
        else if (data[0].plainLyrics) {
          return res.json({ lyrics: data[0].plainLyrics, isSynced: false });
        }
      }
    }
    res.json({ lyrics: null });
  } catch (error) {
    console.error("Lyrics Error:", error.message);
    res.json({ lyrics: null });
  }
});

app.get("/api/search", async (req, res) => {
  const songName = req.query.song;

  if (!songName) {
    return res
      .status(400)
      .json({ error: "Please provide a song name to search." });
  }

  try {
    console.log(`Fetching from Sumit's JioSaavn API: ${songName}`);

    // THE MAGIC URL YOU REMEMBERED!
    const response = await fetch(
      `https://saavn.sumit.co/api/search/songs?query=${songName}&limit=30`,
    );
    const data = await response.json();

    if (data && data.success && data.data && data.data.results) {
      const formattedResults = data.data.results.map((track) => {
        // Sumit's API gives an array of download URLs, we want the highest quality one
        const bestAudio =
          track.downloadUrl && track.downloadUrl.length > 0
            ? track.downloadUrl[track.downloadUrl.length - 1].url
            : null;

        return {
          id: track.id,
          name: track.name,
          primaryArtists: track.artists
            ? track.artists.primary.map((a) => a.name).join(", ")
            : "Unknown Artist",
          image: track.image || [],
          audioUrl: bestAudio,
        };
      });

      return res.json({ data: { results: formattedResults } });
    }

    res.json({ data: { results: [] } });
  } catch (error) {
    console.error("Backend Server Error:", error.message);
    res.status(500).json({ error: "Failed to fetch music data" });
  }
});

app.listen(PORT, () => {
  console.log(`MixTape backend is live at http://localhost:${PORT}`);
});
