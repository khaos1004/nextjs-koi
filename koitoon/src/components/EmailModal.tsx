import React, { useState } from 'react';
import axios from 'axios';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmailModal: React.FC<EmailModalProps> = ({ isOpen, onClose }) => {
  const [subject, setSubject] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSendEmail = async () => {
    const mailData = {
      userId: 'me',
    //   to: 'koicontent@koicontent.com',
      to: 'khaos1004@naver.com',
      subject,
      body,
      contentType: 'html',
      userName: 'Your Name',
      isSaveSentMail: true,
      isSaveTracking: true,
      isSendSeparately: false,
    };

    try {
      const response = await axios.post('https://www.worksapis.com/v1.0/users/me/mail', mailData, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_OAUTH_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200 || response.status === 202) {
        setMessage('Email sent successfully');
        setSubject('');
        setBody('');
      } else {
        setMessage('Failed to send email');
      }
    } catch (error) {
      setMessage('Failed to send email');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 relative">
        <span className="absolute top-2 right-2 text-xl cursor-pointer" onClick={onClose}>&times;</span>
        <h2 className="text-2xl mb-4">문의하기</h2>
        <input
          type="text"
          placeholder="Subject"
          className="w-full p-2 mb-2 border border-gray-300 rounded"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          placeholder="Body"
          className="w-full p-2 mb-2 border border-gray-300 rounded"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button
          onClick={handleSendEmail}
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          보내기
        </button>
        {message && <p className="mt-2 text-center">{message}</p>}
      </div>
    </div>
  );
};

export default EmailModal;
