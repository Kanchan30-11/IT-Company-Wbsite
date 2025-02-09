import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";
import { FaRobot, FaTimes } from "react-icons/fa";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you?", sender: "bot" },
  ]);
  const [userInput, setUserInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    // Add user message to chat
    setMessages([...messages, { text: userInput, sender: "user" }]);

    // Simulate bot response
    setTimeout(() => {
      const botReply = getBotResponse(userInput);
      setMessages((prevMessages) => [...prevMessages, { text: botReply, sender: "bot" }]);
    }, 1000);

    setUserInput("");
  };

  // Function to simulate AI response
  const getBotResponse = (input) => {
    const responses = {
      "hello": "Hi there! How can I assist you?",
      "services": "We offer Web Development, AI Solutions, and Cloud Services.",
      "contact": "You can reach us via email at contact@itcompany.com.",
      "default": "I'm not sure about that. Can you rephrase?",
    };

    return responses[input.toLowerCase()] || responses["default"];
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat Icon */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          <FaRobot size={24} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-72 bg-white shadow-lg rounded-lg">
          <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
            <h3 className="text-lg font-semibold">Chat Support</h3>
            <FaTimes className="cursor-pointer" onClick={toggleChat} />
          </div>

          <div className="h-60 p-3 overflow-y-auto space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-md max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white self-end ml-auto"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input Field */}
          <div className="p-3 border-t flex">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full p-2 border rounded-md focus:outline-none"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button
              className="ml-2 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
              onClick={handleSendMessage}
            >
              <IoMdSend size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
