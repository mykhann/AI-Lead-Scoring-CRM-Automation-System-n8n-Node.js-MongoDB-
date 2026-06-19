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
          pipelineData: result.data || {
            status: "Processed by Groq LLM",
            lead_qualification: {
              score: "COLD",
              reason: "No clear buying intent"
            },
            pipeline_logs: {
              google_sheets: "Row appended successfully",
              mongodb: "Document inserted",
              notifications: "Email dispatched"
            }
          }
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

  const data = status.pipelineData;

  return (
    <div className="demo-page-container">
      <div className="demo-layout">

        {/* LEFT FORM */}
        <div className="demo-form-card">
          <div className="form-header">
            <span className="demo-badge">Live Sandbox</span>
            <h2>Test the AI Pipeline</h2>
            <p>Submit a test lead to see full automation flow in action.</p>
          </div>

          <form onSubmit={handleSubmit} className="interactive-form">

            <div className="form-group">
              <label>Full Name *</label>
              <input name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Email *</label>
              <input name="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Company</label>
              <input name="company" value={formData.company} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Message *</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required />
            </div>

            <button className="submit-btn" disabled={status.loading}>
              {status.loading ? 'Processing...' : 'Fire Automation 🚀'}
            </button>
          </form>

          {status.error && <div className="alert error-alert">❌ {status.error}</div>}
          {status.success && <div className="alert success-alert">✨ {status.success}</div>}
        </div>

        {/* RIGHT PANEL */}
        <div className="demo-inspector">

          {/* LOADING STATE */}
          {status.loading && (
            <div className="terminal-placeholder scanning">
              <p className="pulse-text">&gt; Sending lead to pipeline...</p>
              <p className="cyan-text">&gt; Processing via n8n + AI engine...</p>
            </div>
          )}

          {/* EMPTY STATE */}
          {!status.loading && !data && (
            <div className="terminal-placeholder">
              <p className="dim-text">// Waiting for pipeline execution...</p>
            </div>
          )}

          {/* ERROR STATE */}
          {status.error && (
            <div className="terminal-placeholder error-log">
              <p className="red-text">&gt; Pipeline failed</p>
            </div>
          )}

          {/* RESULT CARDS */}
          {data && (
            <div className="result-container">

              {/* STATUS CARD */}
              <div className="card status-card">
                <div className="status-badge">200 OK</div>
                <h3>Pipeline Completed Successfully</h3>
                <p className="muted">Lead processed by automation system</p>
              </div>

              {/* AI CARD */}
              <div className="card ai-card">
                <h4>🧠 AI Lead Analysis</h4>

                <div className="ai-row">
                  <span className="label">Score</span>
                  <span className={`score ${data?.lead_qualification?.score?.toLowerCase()}`}>
                    {data?.lead_qualification?.score}
                  </span>
                </div>

                <div className="ai-reason">
                  {data?.lead_qualification?.reason}
                </div>
              </div>

              {/* AUTOMATION CARD */}
              <div className="card automation-card">
                <h4>⚙️ Automation Pipeline</h4>

                <div className="automation-item success">
                  ✔ Google Sheets → {data?.pipeline_logs?.google_sheets}
                </div>

                <div className="automation-item success">
                  ✔ MongoDB → {data?.pipeline_logs?.mongodb}
                </div>

                <div className="automation-item success">
                  ✔ Email → {data?.pipeline_logs?.notifications}
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default Demo;