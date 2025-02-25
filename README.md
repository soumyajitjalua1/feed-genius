# Welcome to feed-genious
# AI Smart Feed

AI Smart Feed is a personalized content recommendation system that allows users to describe their content preferences in natural language. The system then curates a feed based on these preferences, pulling from various sources like Twitter/X, RSS feeds, and Reddit.

**URL**: https://lovable.dev/projects/202ab3f6-48bb-4626-9060-7bc199e23257

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Features

- **Natural Language Feed Customization**: Simply tell the system what content you want to see
- **Dynamic Feed Generation**: Content is fetched from multiple sources based on your preferences
- **Social Prompting**: Fine-tune your feed with natural requests like "Show me more posts from @balajis" or "Less AI content"
- **Multi-platform Support**: Access your personalized feed via web app, browser extension, or API

## System Architecture

AI Smart Feed consists of three main components:

1. **Backend Server**: Node.js/Express server with OpenAI integration
2. **Web Frontend**: Angular-based user interface
3. **Browser Extension**: Chrome extension for quick access and content enhancement

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn
- Angular CLI
- OpenAI API key

### Backend Setup

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/ai-smart-feed.git
   cd ai-smart-feed/backend
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file with your OpenAI API key
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   PORT=3000
   ```

4. Start the server
   ```bash
   npm start
   ```

The backend server will be running at http://localhost:3000

### Frontend Setup

1. Navigate to the frontend directory
   ```bash
   cd ../frontend
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   ng serve
   ```

The frontend will be available at http://localhost:4200

### Browser Extension Setup

1. Navigate to the extension directory
   ```bash
   cd ../extension
   ```

2. Build the extension
   ```bash
   npm install
   npm run build
   ```

3. Load the extension in Chrome:
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked" and select the `extension/dist` directory

## Usage

### Web Interface

1. Visit http://localhost:4200
2. Enter your content preferences in natural language
3. Browse your personalized feed
4. Click on topics or authors to refine preferences

### Browser Extension

1. Click the AI Smart Feed icon in your browser
2. Enter preferences or quick commands
3. View your feed in the popup or click to open the full dashboard

### API Endpoints

- `POST /api/update-preferences`: Update user preferences with natural language command
- `GET /api/refresh-feed`: Get personalized feed based on current preferences
- `GET /api/current-preferences`: Get current user preference settings

## Customization

### Adding New Content Sources

Edit the `FeedManager` class in `server.js` to add new content sources:

```javascript
async fetchNewContentSource() {
  // Implementation for new content source
  return this.generatePlaceholderContent('new-source', 5);
}
```

Then add the source to the `refreshFeed` method.

### Extending the UI

The Angular component can be extended with new features by modifying `app.component.ts`.

## Roadmap

- [ ] User accounts and preference saving
- [ ] AI-powered content summarization
- [ ] Image and video content support
- [ ] Mobile app version
- [ ] Advanced analytics on content consumption

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- OpenAI for providing the AI capabilities
- Angular team for the frontend framework
- All open-source contributors

---

Created with ❤️ by Soumyajit

