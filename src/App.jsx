"use client"
import './App.css';
import ScrollToTopButton from './Shared/ScrollToTopButton';
import Home from './components/Home';
import MessengerCustomerChat from 'react-messenger-customer-chat';


function App() {

  return (
    <div>
      <Home />
      <ScrollToTopButton />
      <MessengerCustomerChat pageId="100068682063692" appId="1600567680350565"/>
    </div>
  )
}

export default App
