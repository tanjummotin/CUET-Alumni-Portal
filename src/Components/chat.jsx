import React, { useState, useEffect } from 'react';
import axios from 'axios'; // You might need axios for making HTTP requests

function Messages() {
    const [userEmail, setUserEmail] = useState('');
    const [receiverEmail, setReceiverEmail] = useState('');
    const [message, setMessage] = useState('');
    const [alumniEmails, setAlumniEmails] = useState([]);
    const [chatHistory, setChatHistory] = useState([]);

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        // Send message to server
        try {
            await axios.post('backend/api/sendMessage', { sender_email: userEmail, receiver_email: receiverEmail, message: message });
            // You might want to refresh chat history here
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    // Fetch alumni emails on component mount
    useEffect(() => {
        const fetchAlumniEmails = async () => {
            try {
                const response = await axios.get('backend/api/alumniEmails');
                setAlumniEmails(response.data);
            } catch (error) {
                console.error('Error fetching alumni emails:', error);
            }
        };
        fetchAlumniEmails();
    }, []);

    // Fetch chat history when receiver email changes
    useEffect(() => {
        const fetchChatHistory = async () => {
            try {
                const response = await axios.get(`backend/api/messages?receiver_email=${receiverEmail}`);
                setChatHistory(response.data);
            } catch (error) {
                console.error('Error fetching chat history:', error);
            }
        };
        if (receiverEmail !== '') {
            fetchChatHistory();
        }
    }, [receiverEmail]);

    return (
        <div>
            <h1>Sent and Received Messages</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="receiver_email">Select Alumni:</label>
                <select id="receiver_email" name="receiver_email" value={receiverEmail} onChange={(e) => setReceiverEmail(e.target.value)} required>
                    <option value="">Select Receiver</option>
                    {alumniEmails.map((email, index) => (
                        <option key={index} value={email}>{email}</option>
                    ))}
                </select>
                <br />
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                <br />
                <button type="submit">Send Message</button>
            </form>
            <h2>Chat History</h2>
            <ul>
                {chatHistory.map((message, index) => (
                    <li key={index}>{message.sender_email === userEmail ? 'Sent' : 'Received'} ({message.timestamp}): {message.message}</li>
                ))}
            </ul>
        </div>
    );
}

export default Messages;
