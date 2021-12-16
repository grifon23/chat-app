import React, {FC, useState} from 'react';
import {Alert, Text, View} from 'react-native';
import {Login} from '../../auth/components/Login';
import {ChatList} from './chatList';

export const ChatApp = () => {
  const [currentPage, setCurrentPage] = useState('');
  const [user, setUser] = useState('');
  const onLogin = () => {
    setCurrentPage(currentPage);
    setUser('');
  };
  switch (currentPage) {
    case 'login':
      return <Login user={user} setUser={setUser} onLogin={onLogin} />;
    case 'chatList':
      return <ChatList />;
    default:
      return <ChatList />;
  }
};
