
import React from 'react';
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export interface FeedItemProps {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  source: string;
  timestamp: string;
  tags: string[];
}

export const FeedItem = ({
  title,
  content,
  author,
  source,
  timestamp,
  tags,
}: FeedItemProps) => {
  return (
    <Card className="w-full p-6 mb-4 backdrop-blur-sm bg-white/90 dark:bg-black/90 hover:shadow-lg transition-all duration-300 animate-fade-up">
      <div className="flex items-start space-x-4">
        <Avatar className="w-10 h-10">
          <img src={author.avatar} alt={author.name} className="object-cover" />
        </Avatar>
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-semibold text-lg">{author.name}</h3>
              <p className="text-sm text-muted-foreground">{source} • {timestamp}</p>
            </div>
          </div>
          <h4 className="font-medium mb-2">{title}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{content}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};
