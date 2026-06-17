import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  // Use your direct Cloudinary link as a fallback string variable
  const n8nWorkflowImg = "https://res.cloudinary.com/dsdbty95v/image/upload/v1781675877/Screenshot_2026-06-17_105019_pdvl9b.png";

  return (
    <div className="home-container">

      {/* ══════════════════════════════════
          HERO SECTION (BALANCED 2-COLUMN)
      ══════════════════════════════════ */}
      <section className="hero">
        <div className="hero-grid">
          
          {/* Left Column: Premium Value Proposition */}
          <div className="hero-content">
            <span className="badge">
              <span className="badge-star">★</span>
              AI + Automation + Intelligence
            </span>

            <h1>
              Turn Leads Into
              <span className="hero-accent">Opportunities</span>
            </h1>

            <p className="subtitle">
              Our AI-powered automation system captures leads, analyzes
              their intent, scores quality, and instantly synchronizes data across your ecosystem automatically.
            </p>

            <div className="hero-actions">
              <Link to="/demo" className="btn-primary">Try Live Demo ✈</Link>
              <a href="#workflow" className="btn-secondary">View Pipeline Structure ▶</a>
            </div>

            <div className="trust-badges">
              <div className="trust-badge">
                <span className="trust-badge-icon">⚡</span>
                <div className="trust-badge-text">
                  <strong>AI Powered</strong>
                  <span>Groq LLM Engine</span>
                </div>
              </div>
              <div className="trust-badge">
                <span className="trust-badge-icon">🤖</span>
                <div className="trust-badge-text">
                  <strong>Automated</strong>
                  <span>n8n Workflows</span>
                </div>
              </div>
              <div className="trust-badge">
                <span className="trust-badge-icon">🛡️</span>
                <div className="trust-badge-text">
                  <strong>Secure</strong>
                  <span>Webhook Protected</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Dashboard Preview */}
          <div className="hero-preview">
            <div className="dashboard-frame">
              <div className="dashboard-header">
                <div className="window-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="dashboard-title">Lead Intake Automation Pipeline</div>
                <div className="status-indicator">
                  <span className="pulse-dot"></span>
                  Live Engine
                </div>
              </div>
              <div className="dashboard-body">
                <img 
                  src={n8nWorkflowImg} 
                  alt="Lead Intake Automation Pipeline Workflow" 
                  className="pipeline-screenshot"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════
          WORKFLOW VISUALIZATION STEPS
      ══════════════════════════════════ */}
      <section className="workflow-section" id="workflow">
        <div className="workflow-container">
          <div className="wf-title">
            <span className="wf-title-icon">⚙️</span>
            System Architecture Flow
          </div>

          {/* Top row: 4 steps + 3 arrows */}
          <div className="wf-top">
            <div className="wf-step">
              <div className="wf-icon ic-blue">👤</div>
              <div className="wf-name">1. Lead Form</div>
              <div className="wf-desc">User submits lead information</div>
            </div>

            <div className="wf-arrow">- - →</div>

            <div className="wf-step">
              <div className="wf-icon ic-green">☰</div>
              <div className="wf-name">2. Express API</div>
              <div className="wf-desc">Validates &amp; sends to webhook</div>
            </div>

            <div className="wf-arrow">- - →</div>

            <div className="wf-step">
              <div className="wf-icon ic-purple">⚙️</div>
              <div className="wf-name">3. n8n Webhook</div>
              <div className="wf-desc">Triggers automation workflow</div>
            </div>

            <div className="wf-arrow">- - →</div>

            <div className="wf-step">
              <div className="wf-icon ic-orange">🧠</div>
              <div className="wf-name">4. AI Analysis</div>
              <div className="wf-desc">Groq LLM analyzes &amp; scores lead</div>
            </div>
          </div>

          {/* Turn connector */}
          <div className="wf-connector-row">
            <div className="wf-connector-dashes" />
            <div className="wf-connector-down">↙</div>
          </div>

          {/* Bottom row: 3 steps + 2 arrows */}
          <div className="wf-bottom">
            <div className="wf-step">
              <div className="wf-icon ic-yellow">📊</div>
              <div className="wf-name">5. Google Sheets</div>
              <div className="wf-desc">Lead data is saved automatically</div>
            </div>

            <div className="wf-arrow">- - →</div>

            <div className="wf-step">
              <div className="wf-icon ic-pink">✉️</div>
              <div className="wf-name">6. Email Alert</div>
              <div className="wf-desc">Notification sent to your email</div>
            </div>

            <div className="wf-arrow">- - →</div>

            <div className="wf-step">
              <div className="wf-icon ic-teal">✔️</div>
              <div className="wf-name">7. Lead Score</div>
              <div className="wf-desc">View results &amp; take action faster</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          FEATURES GRID (GLASSMORPHISM)
      ══════════════════════════════════ */}
      <section className="features">
        <p className="features-eyebrow">FEATURES</p>
        <h2>Everything You Need to Qualify Leads</h2>
        <p className="features-subtitle">
          Powerful automation combined with AI intelligence to help you focus on the best opportunities.
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-wrap iw-purple">👤</div>
            <h3>Lead Capture</h3>
            <p>Beautiful form to capture high-quality leads with important details.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrap iw-teal">⚙️</div>
            <h3>Smart Automation</h3>
            <p>n8n workflows handle routing, processing, and data management.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrap iw-purple">🧠</div>
            <h3>AI Analysis</h3>
            <p>Groq LLM analyzes intent, extracts insights, and generates summaries.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrap iw-yellow">⭐</div>
            <h3>Lead Scoring</h3>
            <p>AI-powered scoring helps you identify high-potential leads instantly.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrap iw-pink">📄</div>
            <h3>Data Storage</h3>
            <p>Automatically store leads in Google Sheets for easy tracking.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrap iw-blue">🔔</div>
            <h3>Email Notifications</h3>
            <p>Instant email alerts keep your team updated in real time.</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          STATS BAR
      ══════════════════════════════════ */}
      <section className="stats-section">
        <div className="stats-row">
          <div className="stat-item">
            <span className="stat-icon">👥</span>
            <div>
              <strong className="stat-number">500+</strong>
              <span className="stat-label">Leads Processed</span>
            </div>
          </div>
          <div className="stat-item">
            <span className="stat-icon">🎯</span>
            <div>
              <strong className="stat-number">85%</strong>
              <span className="stat-label">Accuracy Score</span>
            </div>
          </div>
          <div className="stat-item">
            <span className="stat-icon">⚡</span>
            <div>
              <strong className="stat-number">2.3s</strong>
              <span className="stat-label">Avg. Processing Time</span>
            </div>
          </div>
          <div className="stat-item">
            <span className="stat-icon">📈</span>
            <div>
              <strong className="stat-number">35%</strong>
              <span className="stat-label">Conversion Increase</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;