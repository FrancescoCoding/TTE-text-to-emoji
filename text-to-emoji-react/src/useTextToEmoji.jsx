import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function debounce(func, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const useTextToEmoji = (textPrompt, singleEmoji = false, apiKey) => {
  const [emoji, setEmoji] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const debouncedFetchRef = useRef(debounce(async (prompt) => {
    setIsLoading(true);
    try {
      const content = singleEmoji
        ? `Please convert the following sequence of words into a single emoji. Just one that summarizes all the words. Assume you have a max length of 1. No words allowed: "${prompt}"`
        : `Please convert the following text into the most appropriate emojis. No words allowed: "${prompt}"`;
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: "gpt-4",
        messages: [{ "role": "user", "content": content }],
        temperature: 0.1
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        }
      });

      setEmoji(response.data.choices[0].message.content.trim());
    } catch (error) {
      console.error('Error fetching emoji:', error);
    } finally {
      setIsLoading(false);
    }
  }, 700));

  useEffect(() => {
    if (textPrompt) {
      debouncedFetchRef.current(textPrompt);
    }
  }, [textPrompt, singleEmoji, apiKey]);

  return [emoji, isLoading];
};

export default useTextToEmoji;
