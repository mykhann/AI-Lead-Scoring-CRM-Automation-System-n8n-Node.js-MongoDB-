import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="badge">AI Automation Engineer</span>
          <h1>AI-Powered Lead Qualification System</h1>
          <p className="subtitle">
            Transform your lead management with intelligent automation. 
            Our system uses advanced LLM analysis to qualify leads, 
            score prospects, and automate follow-ups.
          </p>
          <div className="hero-actions">
            <Link to="/demo" className="btn">Try Live Demo</Link>
            <a href="#workflow" className="btn btn-secondary">View Workflow</a>
          </div>
        </div>
      </section>

      {/* Workflow Diagram */}
      <section id="workflow" className="workflow">
        <h2>Automation Workflow</h2>
        <div className="workflow-diagram">
          <div className="workflow-item">
            <div className="workflow-icon">📝</div>
            <span>User Form</span>
          </div>
          <div className="workflow-arrow">↓</div>
          <div className="workflow-item">
            <div className="workflow-icon">⚡</div>
            <span>Express API</span>
          </div>
          <div className="workflow-arrow">↓</div>
          <div className="workflow-item">
            <div className="workflow-icon">🔄</div>
            <span>n8n Webhook</span>
          </div>
          <div className="workflow-arrow">↓</div>
          <div className="workflow-item">
            <div className="workflow-icon">🧠</div>
            <span>LLM Analysis</span>
          </div>
          <div className="workflow-arrow">↓</div>
          <div className="workflow-item">
            <div className="workflow-icon">📧</div>
            <span>CRM / Email</span>
          </div>
          <div className="workflow-arrow">↓</div>
          <div className="workflow-item highlight">
            <div className="workflow-icon">📊</div>
            <span>Lead Score + Report</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <h2>Why AI Automation?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Smart Qualification</h3>
            <p>Automatically analyze and qualify leads based on intelligent criteria</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📈</div>
            <h3>Real-time Scoring</h3>
            <p>Get instant lead scores and actionable insights for your sales team</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Automated Workflows</h3>
            <p>Seamless integration with n8n for end-to-end automation</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;