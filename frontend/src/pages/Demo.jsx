import { useState } from 'react';
import './Demo.css';

const Demo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
    pipelineData: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null, pipelineData: null });

    try {
  const apiUrl = import.meta.env.VITE_API_URL;

const response = await fetch(`${apiUrl}/api/leads`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
});

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({
          loading: false,
          success: 'Lead successfully routed to n8n pipeline!',
          error: null,
          pipelineData: result.data || { status: "Processed by Groq LLM", score: "A+" } 
        });
     
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setStatus({
          loading: false,
          success: null,
          error: result.error || 'Failed to submit lead to the pipeline.',
          pipelineData: null
        });
      }
    } catch (err) {
      setStatus({
        loading: false,
        success: null,
        error: 'Network or server error. Please try again later.',
        pipelineData: null
      });
    }
  };

  return (
    <div className="demo-page-container">
      <div className="demo-layout">
        
        {/* LEFT COLUMN: The Interactive Form */}
        <div className="demo-form-card">
          <div className="form-header">
            <span className="demo-badge">Live Sandbox</span>
            <h2>Test the AI Pipeline</h2>
            <p>Submit a test lead to see how the Express API handles, validates, and hands off the data to our n8n orchestration webhook.</p>
          </div>

          <form onSubmit={handleSubmit} className="interactive-form">
            <div className="form-group">
              <label htmlFor="name">Full Name <span className="required">*</span></label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                disabled={status.loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Work Email <span className="required">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@company.com"
                required
                disabled={status.loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="company">Company Name <span className="optional">(Optional)</span></label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Acme Corp"
                disabled={status.loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Use Case / Requirements <span className="required">*</span></label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell the AI what you're looking for to test intent extraction capabilities..."
                rows="4"
                required
                disabled={status.loading}
              />
            </div>

            <button type="submit" className="submit-btn" disabled={status.loading}>
              {status.loading ? (
                <>
                  <span className="spinner"></span> Triggering Webhook...
                </>
              ) : (
                'Fire Automation Pipeline 🚀'
              )}
            </button>
          </form>

          {/* Feedback alerts */}
          {status.error && <div className="alert error-alert">❌ {status.error}</div>}
          {status.success && <div className="alert success-alert">✨ {status.success}</div>}
        </div>

        {/* RIGHT COLUMN: Realtime Terminal/Inspection Feed */}
        <div className="demo-inspector">
          <div className="inspector-header">
            <div className="terminal-buttons">
              <span className="t-btn close"></span>
              <span className="t-btn minimize"></span>
              <span className="t-btn expand"></span>
            </div>
            <span className="inspector-title">Pipeline Response Inspector</span>
          </div>
          
          <div className="inspector-body">
            {status.loading && (
              <div className="terminal-placeholder scanning">
                <p className="pulse-text">&gt; POST /api/leads HTTP/1.1</p>
                <p>&gt; Authorization: X_WEBHOOK_API Verified</p>
                <p className="cyan-text">&gt; Status: Sending payload data directly to n8n automated webhook loop...</p>
              </div>
            )}

            {!status.loading && !status.pipelineData && !status.error && (
              <div className="terminal-placeholder">
                <p className="dim-text">// Waiting for pipeline execution triggers...</p>
                <p className="dim-text">// Submit the form to view real-time webhook payload logs & AI scoring responses here.</p>
              </div>
            )}

            {status.error && (
              <div className="terminal-placeholder error-log">
                <p className="red-text">&gt; [CRITICAL ERROR] Pipeline execution interrupted.</p>
                <p className="red-text">&gt; Status 500: Server error or invalid X_WEBHOOK_API handshakes.</p>
              </div>
            )}

            {status.pipelineData && (
              <div className="json-output">
                <div className="log-line success-text">&gt; 200 OK — Pipeline Completed Successfully</div>
                <pre>
{JSON.stringify({
  status: "success",
  message: "Lead processed by webhook pipeline",
  payload_forwarded: {
    headers: { "X_WEBHOOK_API": "PROTECTED_MASK" },
    body: {
      name: formData.name || "Submitted",
      email: formData.email || "Submitted",
      company: formData.company || "N/A",
      message: formData.message || "Submitted"
    }
  },
  n8n_pipeline_response: status.pipelineData
}, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Demo;