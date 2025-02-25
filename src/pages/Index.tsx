
import { ChatInterface } from "@/components/ChatInterface";
import { FeedItem } from "@/components/FeedItem";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useFeed } from "@/hooks/useFeed";

const Index = () => {
  const { feed, updateFeed } = useFeed();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container py-8">
        <h1 className="text-4xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
          Feed Genius
        </h1>
        <p className="text-center text-muted-foreground mb-8">
          Your AI-powered personalized content feed
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Chat Interface - Left Side */}
          <div className="lg:col-span-4">
            <div className="sticky top-8">
              <ChatInterface onUpdateFeed={updateFeed} />
            </div>
          </div>

          {/* Feed - Right Side */}
          <div className="lg:col-span-8">
            <ScrollArea className="h-[80vh] pr-4">
              {feed.length > 0 ? (
                feed.map((item) => (
                  <FeedItem key={item.id} {...item} />
                ))
              ) : (
                <div className="text-center text-muted-foreground p-8">
                  Start by asking for content you're interested in...
                </div>
              )}
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
