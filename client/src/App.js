import React, { useState } from "react";
import "./App.css";
import logo from "./muye-agency.png";
import { uploadFile } from "./services/chat-pdf";
import { fetchChat } from "./services/chat-pdf";
import { FiUpload } from "react-icons/fi";
import { AiOutlineSend } from "react-icons/ai";

function App() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No file selected");
  const [messages, setMessages] = useState([]);

  const handlePdfInputChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setFileName(selectedFile ? selectedFile.name : "No file selected");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleMessageSubmit();
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("document", file);

    try {
      setMessages([]);
      await uploadFile(formData);
      console.log("File uploaded successfully!");
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleMessageSubmit = async () => {
    const messageInput = document.getElementById("message-input");
    const newMessage = messageInput.value;

    if (newMessage) {
      try {
        const params = new URLSearchParams();
        params.append("query", newMessage + "/n always answer in the same language as the query");

        const response = await fetchChat(params);
        const newMessages = [...messages, { text: newMessage, response }];
        setMessages(newMessages);

        messageInput.value = "";
      } catch (error) {
        console.error("Error fetching chat:", error);
      }
    }
  };

  return (
    <div className="app-container">
      <div className="gradient"></div>
      <div className="row">
        <div className="box conversations">
          <div className="top">
            <div className="logo-cont">
              <img className="logo-img" src={logo} />
            </div>
            <label className="new_convo" htmlFor="pdfInput">
              <div className="icon-container">
                <FiUpload className="bigger-icon" />
              </div>
            </label>

            <form className="upload-form" onSubmit={handleSubmit}>
              <input
                type="file"
                accept=".pdf"
                id="pdfInput"
                style={{ display: "none" }}
                onChange={handlePdfInputChange}
              />
              <button className="button-4" type="submit">
                Submit
              </button>
              <div className="file-name">{fileName}</div>
            </form>
            {/* <div className="spinner"></div> */}
          </div>
        </div>

        <div className="conversation disable-scrollbars">
          <div className="stop_generating stop_generating-hidden">
            <button id="cancelButton"></button>
          </div>
          <div className="box" id="messages">
            {messages.map((messageObj, index) => (
              <div key={index} className="message">
                <div className="message-text" align="right">
                  {messageObj.text}
                </div>
                <div className="message-response">{messageObj.response}</div>
              </div>
            ))}
          </div>

          <div className="user-input">
            <div className="box input-box">
              <textarea
                id="message-input"
                placeholder="Ask a question"
                cols="30"
                rows="10"
                style={{
                  whiteSpace: "pre-wrap",
                  lineHeight: "3em",
                  verticalAlign: "middle",
                  resize: "none"
                }}
                onKeyDown={handleKeyDown}
              ></textarea>
              <div id="confirm-button" onClick={handleMessageSubmit}>
                <AiOutlineSend className="send-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
