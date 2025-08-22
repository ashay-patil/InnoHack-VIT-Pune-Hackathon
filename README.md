# 🤖 AI Code Debugging Assistant

A full-stack web application that provides intelligent code review and debugging assistance using Google's Gemini AI. Built with React frontend and Node.js backend, this tool helps developers identify bugs, understand code logic, and improve code quality through AI-powered analysis.

## ✨ Features

- **🔍 Intelligent Code Analysis**: AI-powered code review with detailed bug detection and explanation
- **🐛 Bug Detection & Fixes**: Identifies syntax errors, logical issues, and provides corrected code
- **📚 Educational Feedback**: Line-by-line code explanation and learning insights
- **🚀 Optimization Suggestions**: Performance improvements and best practices recommendations
- **🔐 Security Scanning**: Detects common vulnerabilities and security flaws
- **🧪 Test Case Generation**: Auto-generates relevant unit tests for your code
- **📄 PDF Export**: Download AI guidance as a formatted PDF document
- **🌐 Multi-language Support**: Works with various programming languages
- **💡 Interview-level Feedback**: Professional code review quality feedback

## 🏗️ Architecture

### Frontend (React + Vite)
- **Framework**: React 19 with modern hooks
- **Build Tool**: Vite for fast development and building
- **Styling**: Custom CSS with modern gradient designs
- **Key Libraries**: 
  - `axios` for API communication
  - `react-markdown` for rendering AI responses
  - `html2pdf.js` for PDF export functionality

### Backend (Node.js + Express)
- **Runtime**: Node.js with Express.js framework
- **AI Integration**: Google Gemini 2.0 Flash model
- **Architecture**: MVC pattern with routes, controllers, and services
- **Key Dependencies**:
  - `@google/generative-ai` for AI capabilities
  - `cors` for cross-origin requests
  - `dotenv` for environment configuration

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Google Gemini API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ashay-patil/InnoHack-VIT-Pune-Hackathon
   cd InnoHack-VIT-Pune-Hackathon
   ```

2. **Backend Setup**
   ```bash
   cd Backend
   npm install
   
   # Create .env file
   echo "GOOGLE_GEMINI_KEY=your_api_key_here" > .env
   
   # Start the server
   npm start
   ```

3. **Frontend Setup**
   ```bash
   cd ../Frontend
   npm install
   
   # Start development server
   npm run dev
   ```

4. **Access the Application**
   - Frontend: http://localhost:5173
   - Backend: http://localhost:3000


### Getting Google Gemini API Key
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Add it to your `.env` file

## 📖 Usage

1. **Input Your Code**: Paste or type your code in the left textarea
2. **Get AI Review**: Click the "Review" button to analyze your code
3. **Review Results**: View detailed feedback, bug fixes, and explanations
4. **Download PDF**: Export the AI guidance as a PDF document

## 🎯 AI Capabilities

The AI assistant provides comprehensive code analysis including:

- **Bug Detection**: Syntax and logical error identification
- **Code Explanation**: Line-by-line breakdown of functionality
- **Optimization**: Performance and efficiency improvements
- **Security Analysis**: Vulnerability detection and fixes
- **Test Generation**: Unit test case creation
- **Best Practices**: Coding standards and recommendations

## 🛠️ Development

### Available Scripts

**Backend:**
```bash
npm start          # Start development server with nodemon
npm test           # Run tests (placeholder)
```

**Frontend:**
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

### Project Structure
```
VIT-Hackathon/
├── Backend/
│   ├── src/
│   │   ├── controllers/     # Request handlers
│   │   ├── routes/          # API endpoints
│   │   ├── services/        # Business logic & AI integration
│   │   └── app.js          # Express app configuration
│   ├── server.js            # Server entry point
│   └── package.json
├── Frontend/
│   ├── src/
│   │   ├── App.jsx         # Main application component
│   │   ├── App.css         # Application styles
│   │   └── main.jsx        # React entry point
│   ├── index.html          # HTML template
│   └── package.json
└── README.md
```

## 🌟 Key Features in Detail

### AI-Powered Code Review
- Comprehensive bug detection and explanation
- Automatic code correction suggestions
- Performance optimization recommendations
- Security vulnerability scanning

### User Experience
- Modern, responsive design with gradient themes
- Real-time code analysis
- PDF export functionality
- Markdown rendering of AI responses

### Technical Excellence
- RESTful API architecture
- Cross-origin resource sharing enabled
- Environment-based configuration
- Modular code structure

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request



**Built with ❤️ for the InnoHack2.0 Hackathon**
