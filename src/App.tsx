import { useState } from 'react';
import './App.css';

function App() {
  const [claimsCount, setClaimsCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [healthScore, setHealthScore] = useState<number>(1);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmitCredential = async () => {
    try {
      setLoading(true);
      setError('');
      setSuccess(false);
      
      // Simulate zero-knowledge proof generation on client side
      await new Promise((resolve) => setTimeout(resolve, 2500));
      
      if (healthScore <= 0 || healthScore > 10) {
        throw new Error("Invalid credential threshold. Must be between 1 and 10.");
      }
      
      // Update public state (Total Verified Claims)
      setClaimsCount((c) => c + 1);
      setSuccess(true);
      
      // Hide success message after a few seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch (err: any) {
      setError(err.message || 'An error occurred during ZK proof generation.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <div className="logo-container">
          <div className="logo-icon">M</div>
          <h1>MediCrypt ZK</h1>
        </div>
        <p className="privacy-badge">
          <span className="dot"></span> Confidential Credentials Platform
        </p>
      </header>

      <main className="main">
        {/* Public State Card */}
        <div className="card public-state-card">
          <div className="card-header">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            <h2>Public Ledger State</h2>
          </div>
          <div className="stats-container">
            <div className="stat-box">
              <p className="stat-value">{claimsCount}</p>
              <p className="stat-label">Total Verified Claims</p>
            </div>
            <div className="stat-box">
              <p className="stat-value text-green">Valid</p>
              <p className="stat-label">Network Status</p>
            </div>
          </div>
          <p className="public-info-text">Anyone can see the total number of claims verified on the Midnight network.</p>
        </div>

        {/* Private Action Card */}
        <div className="card interaction-card">
          <div className="card-header">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            <h2>Submit Health Credential</h2>
          </div>
          <p className="description">
            Your health data is processed as a <strong>private witness</strong> locally on your device. 
            The network verifies your eligibility cryptographically without ever seeing or storing your actual health score.
          </p>

          <div className="input-group">
            <label htmlFor="healthScore">Secret Health Score (1-10):</label>
            <input
              id="healthScore"
              type="number"
              min="1"
              max="10"
              value={healthScore}
              onChange={(e) => setHealthScore(Number(e.target.value))}
              disabled={loading}
              className="glow-input"
            />
          </div>

          {error && (
            <div className="alert error-alert">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
              {error}
            </div>
          )}

          {success && (
            <div className="alert success-alert">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              Credential verified securely! Public state updated.
            </div>
          )}

          <button onClick={handleSubmitCredential} disabled={loading} className="btn primary-btn">
            {loading ? (
              <span className="spinner-container">
                <span className="spinner"></span> 
                <span>Generating ZK Proof...</span>
              </span>
            ) : (
              <span className="btn-content">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                Verify & Submit Claim
              </span>
            )}
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
