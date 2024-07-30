/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
  Box,
  TextField,
  IconButton,
  Avatar,
  Typography,
  Paper,
} from "@mui/material";
import { Telegram } from "@mui/icons-material";
import { PulseLoader } from "react-spinners";

const messages = [
  {
    id: 1,
    sender: "Tanika Heaven",
    text: "Hiii! What's everyone doing tonight?",
    time: "just now",
    avatar: "../ChatBotSection/image.png",
  },
  {
    id: 2,
    sender: "John",
    text: "watching Shameless...",
    time: "just now",
    avatar: "path/to/john_avatar.png",
  },
  {
    id: 3,
    sender: "John",
    text: "Does anyone want to have a family BBQ on Sunday?",
    time: "just now",
    avatar: "path/to/john_avatar.png",
  },
  {
    id: 4,
    sender: "John",
    text: "That sounds like fun. Plus good",
    time: "just now",
    avatar: "path/to/john_avatar.png",
  },
  {
    id: 5,
    sender: "John",
    text: "That sounds like fun. Plus good",
    time: "just now",
    avatar: "path/to/john_avatar.png",
  },
  {
    id: 6,
    sender: "John",
    text: "That sounds like fun. Plus good",
    time: "just now",
    avatar: "path/to/john_avatar.png",
  },
  {
    id: 7,
    sender: "John",
    text: "That sounds like fun. Plus good",
    time: "just now",
    avatar: "path/to/john_avatar.png",
  },
  {
    id: 8,
    sender: "John",
    text: "That sounds like fun. Plus good",
    time: "just now",
    avatar: "path/to/john_avatar.png",
  },
];

const ChatMessage = ({ message, id }) => (
  <Box
    sx={{
      p: 1,
      m: 1,
      display: "flex",
      alignItems: "center",
      bgcolor: "transparent",
      flexDirection: id % 2 === 0 ? "row-reverse" : "row",
    }}
  >
    <Avatar
      src={message.avatar}
      sx={{ mr: id % 2 === 0 ? 0 : 2, ml: id % 2 === 0 ? 2 : 0 }}
    />
    <Box>
      <Box sx={{ bgcolor: "#9900EF", p: 2, borderRadius: "12px" }}>
        <Typography variant="body1">{message.text}</Typography>
      </Box>
    </Box>
  </Box>
);

const ChatBotMine = () => {
  const [newMessage, setNewMessage] = useState("");
  const [chatMessages, setChatMessages] = useState(messages);

  const handleSend = () => {
    if (newMessage.trim()) {
      const newChatMessage = {
        id: chatMessages.length + 1,
        sender: "You",
        text: newMessage,
        time: "just now",
        avatar: "https://iili.io/JGbBCox.jpg", // Replace with the actual path to your avatar
      };
      setChatMessages([...chatMessages, newChatMessage]);
      setNewMessage("");
    }
  };
  return (
    <Paper
      sx={{
        width: "100%",
        maxWidth: 500,
        p: "12px",
        bgcolor: "white",
        borderRadius: "14px",
        position: "fixed",
        m: 2,
        zIndex: "10000",
        bottom: "88px",
        right: "20px",
      }}
    >
      <Paper
        sx={{
          width: "100%",
          maxWidth: 600,
          p: 2,
          bgcolor: "#22194D",
          borderRadius: "14px",
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{ borderBottom: "1px solid #ccc", pb: 1, mb: 2 }}
        >
          Family Group Chat
        </Typography>
        <Box sx={{ width: "100%", maxWidth: 600, mx: "auto", mt: 5 }}>
          <Box sx={{ height: "47vh", overflowY: "auto", mb: 2 }}>
            {chatMessages.map((message) => (
              <ChatMessage key={message.id} message={message} id={message.id} />
            ))}
            <Box sx={{m:2,
              ml:3
            }}>
              <PulseLoader
                margin={2}
                size={12}
                speedMultiplier={0.6}
                color="rgb(13 47 173)"
                style={{ m: "10px" }}
              />
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Send a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSend();
                }
              }}
            />
            <IconButton onClick={handleSend} sx={{ color: "#9900EF" }}>
              <Telegram sx={{ fontSize: "40px" }} />
            </IconButton>
          </Box>
        </Box>
      </Paper>
    </Paper>
  );
};

export default ChatBotMine;
