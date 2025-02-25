
import { useState } from 'react';
import type { FeedItemProps } from '@/components/FeedItem';

// Temporary mock data generator
const generateMockFeed = (prompt: string): FeedItemProps[] => {
  const mockData: FeedItemProps[] = [
    {
      id: '1',
      title: 'Understanding AI Trends',
      content: 'The latest developments in artificial intelligence are reshaping how we think about technology...',
      author: {
        name: 'Tech Insider',
        avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=tech',
      },
      source: 'AI Weekly',
      timestamp: '2h ago',
      tags: ['AI', 'Technology', 'Future'],
    },
    {
      id: '2',
      title: 'The Future of Work',
      content: 'Remote work continues to evolve as companies adapt to changing workforce demands...',
      author: {
        name: 'Work Trends',
        avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=work',
      },
      source: 'Future Insights',
      timestamp: '4h ago',
      tags: ['Remote Work', 'Future', 'Productivity'],
    },
    {
      id: '3',
      title: 'Innovation in Tech',
      content: 'New breakthroughs in quantum computing are paving the way for unprecedented advances...',
      author: {
        name: 'Quantum Daily',
        avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=quantum',
      },
      source: 'Tech Review',
      timestamp: '6h ago',
      tags: ['Quantum Computing', 'Innovation', 'Research'],
    },
  ];

  // Filter or modify based on prompt
  // This is a simple implementation - in a real app, you'd use AI to analyze the prompt
  return mockData.filter(item => 
    item.title.toLowerCase().includes(prompt.toLowerCase()) ||
    item.content.toLowerCase().includes(prompt.toLowerCase()) ||
    item.tags.some(tag => tag.toLowerCase().includes(prompt.toLowerCase()))
  );
};

export const useFeed = () => {
  const [feed, setFeed] = useState<FeedItemProps[]>([]);

  const updateFeed = (prompt: string) => {
    const newFeed = generateMockFeed(prompt);
    setFeed(newFeed);
  };

  return {
    feed,
    updateFeed,
  };
};
