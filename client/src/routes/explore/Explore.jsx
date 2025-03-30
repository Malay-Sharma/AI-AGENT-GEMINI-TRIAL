import "./explore.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const features = [
  
  { 
    id: 1, 
    name: "Gemini Pro Chat", 
    description: "Experience intelligent conversations with Google's most advanced LLM.",
    icon: "💬",
//     codeExample: `const response = await model.generateContent({
//   contents: [{ role: 'user', parts: [{ text: 'Hello!' }]}],
// });`
  },
  { 
    id: 2, 
    name: "Vision Analysis", 
    description: "Generate insightful visual analyses from images and text using advanced AI-powered computer vision.",
    icon: "🎨"
  },
  { 
    id: 3, 
    name: "Multi-Chat Sessions", 
    description: "Maintain multiple chat threads for different topics and projects.",
    icon: "📑"
  },
  { 
    id: 4, 
    name: "Code Assistant", 
    description: "Get help with coding, debugging, and technical explanations.",
    icon: "👨‍💻"
  },
  { 
    id: 5, 
    name: "Video Intelligence", 
    description: "Video Understanding and Intelligence",
    icon: "🎦"
  },
  { 
    id: 6, 
    name: "Future: Voice Interaction", 
    description: "Coming soon: Voice commands and natural conversations.",
    icon: "🎤"
  },
  { 
    id: 7, 
    name: "Future: Custom Training", 
    description: "Coming soon: Train the AI on your specific needs and domain knowledge.",
    icon: "🧠"
  }
];

export default function Explore() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="explore-wrapper">


      <div className="explore-container">
        <div className="explore-header">
          <h1>Get answers. Find inspiration.</h1>
          <h1>Be more productive.</h1>
          <p>Free to use. Easy to try. Just ask and ChatGPT can help with writing, learning, brainstorming, and more.</p>
        </div>
        
        <div class="scrlwrap">
          <div class="wrapper">
            <div class="itemLeft item1">What's the relation between X and Y?</div>
            <div class="itemLeft item2">Who is Narendra Modi?</div>
            <div class="itemLeft item3">What's the relation between X and Y?</div>
            <div class="itemLeft item4">Who is Narendra Modi?</div>
            <div class="itemLeft item5">What's the relation between X and Y?</div>
            <div class="itemLeft item6">Who is Narendra Modi?</div>
            <div class="itemLeft item7">What's the relation between X and Y?</div>
            <div class="itemLeft item8">Who is Narendra Modi?</div>
          </div>
          <div class="wrapper">
            <div class="itemRight item1">Is One Piece real?</div>
            <div class="itemRight item2">Who is Sun God Nika?</div>
            <div class="itemRight item3">Is One Piece real?</div>
            <div class="itemRight item4">Who is Sun God Nika?</div>
            <div class="itemRight item5">Is One Piece real?</div>
            <div class="itemRight item6">Who is Sun God Nika?</div>
            <div class="itemRight item7">Is One Piece real?</div>
            <div class="itemRight item8">Who is Sun God Nika?</div>
          </div>

        </div>
          {/* <Link to="/dashboard">GET STARTED</Link> */}

        <div className="explore-header">
          <h1>Explore Our Features</h1>
          <p>Discover what our AI agent can do for you</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className={`feature-card ${hoveredId === feature.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredId(feature.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h2>{feature.name}</h2>
              <p>{feature.description}</p>
              {feature.codeExample && (
                <div className="code-snippet">
                  <SyntaxHighlighter 
                    language="javascript" 
                    style={atomDark}
                    customStyle={{
                      borderRadius: '8px',
                      padding: '16px',
                      marginTop: '16px',
                      fontSize: '14px'
                    }}
                  >
                    {feature.codeExample}
                  </SyntaxHighlighter>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="terms">
          <img src="/logo.png" alt="" />
          <div className="links">
            <Link to="/">Terms of Service</Link>
            <span>|</span>
            <Link to="/">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

