import Script from 'next/script';

export function ChatBot() {
  return (
    <Script
      id="chatbot"
      src="/scripts/chatbot.js"
      data-chatbot-id={process.env.NEXT_PUBLIC_CHATBOT_ID}
    />
  );
}
