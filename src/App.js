import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <div className="logo-circle">
              <svg viewBox="0 0 100 100" className="logo-svg">
                <ellipse cx="50" cy="45" rx="35" ry="12" fill="currentColor" opacity="0.3"/>
                <path d="M 20 35 Q 35 25, 50 30 T 80 35 L 75 50 Q 60 55, 50 50 T 25 50 Z" fill="currentColor"/>
              </svg>
            </div>
            <span className="logo-text">Murkie</span>
          </div>
          <div className="nav-links">
            <a href="#home" className="nav-link active">Home</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#more" className="nav-link">Find Out More</a>
            <a href="#contact" className="nav-link-button">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
        <div className="hero-content">
          <h1 className="hero-title">
            Your Own Personal
            <br />
            <span className="hero-title-accent">Obfuscator</span>
          </h1>
          <p className="hero-subtitle">
            Don't let them know you more
            <br />
            than you know yourself
            <br />
            Download now
          </p>
          <button className="cta-button">
            <span>Download</span>
          </button>
        </div>
        <div className="hero-background">
          <div className="particle" style={{ left: '10%', top: '20%', animationDelay: '0s' }}></div>
          <div className="particle" style={{ left: '80%', top: '30%', animationDelay: '2s' }}></div>
          <div className="particle" style={{ left: '60%', top: '70%', animationDelay: '4s' }}></div>
          <div className="particle" style={{ left: '20%', top: '80%', animationDelay: '1s' }}></div>
          <div className="particle" style={{ left: '90%', top: '60%', animationDelay: '3s' }}></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <h2 className="section-title">What Can We Do Fo You</h2>
        
        <div className="features-grid">
          {/* Web Scraping Card */}
          <div className="feature-card">
            <div className="feature-visual code-visual">
              <div className="code-line">
                <span className="code-comment">{/* eslint-disable-line */}// Web scraping implementation</span>
              </div>
              <div className="code-line">
                <span className="code-keyword">const</span> <span className="code-var">scrapeData</span> = <span className="code-keyword">async</span> () =&gt; {'{'}
              </div>
              <div className="code-line indent">
                <span className="code-keyword">const</span> response = <span className="code-keyword">await</span> <span className="code-function">fetch</span>(url);
              </div>
              <div className="code-line indent">
                <span className="code-keyword">return</span> <span className="code-function">parseHTML</span>(response);
              </div>
              <div className="code-line">{'}'}</div>
            </div>
            <div className="feature-content">
              <h3 className="feature-title">Web Scraping For You</h3>
              <p className="feature-description">Lorem ipsum</p>
            </div>
          </div>

          {/* In House LLM Card */}
          <div className="feature-card">
            <div className="feature-visual network-visual">
              <svg viewBox="0 0 300 300" className="network-svg">
                {[...Array(3)].map((_, i) => (
                  <g key={`layer-${i}`}>
                    {[...Array(4)].map((_, j) => (
                      <React.Fragment key={`node-${i}-${j}`}>
                        <circle
                          cx={50 + i * 100}
                          cy={50 + j * 60}
                          r="20"
                          className="network-node"
                          style={{ animationDelay: `${i * 0.2 + j * 0.1}s` }}
                        />
                        {i < 2 && [...Array(4)].map((_, k) => (
                          <line
                            key={`line-${i}-${j}-${k}`}
                            x1={50 + i * 100}
                            y1={50 + j * 60}
                            x2={50 + (i + 1) * 100}
                            y2={50 + k * 60}
                            className="network-line"
                            style={{ animationDelay: `${i * 0.15 + j * 0.08 + k * 0.05}s` }}
                          />
                        ))}
                      </React.Fragment>
                    ))}
                  </g>
                ))}
              </svg>
            </div>
            <div className="feature-content">
              <h3 className="feature-title">In House LLM</h3>
              <p className="feature-description">Lorem ipsum</p>
            </div>
          </div>

          {/* User-Friendly Reports Card */}
          <div className="feature-card">
            <div className="feature-visual report-visual">
              <div className="report-header">
                <div className="report-icon">📄</div>
                <div className="report-info">
                  <div className="report-line"></div>
                  <div className="report-line short"></div>
                </div>
              </div>
              <div className="report-body">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="report-text-line" style={{ animationDelay: `${i * 0.1}s` }}></div>
                ))}
              </div>
              <div className="report-footer">
                <span className="report-tag">PrivateBin - Because ignorance is bliss</span>
              </div>
            </div>
            <div className="feature-content">
              <h3 className="feature-title">User-Friendly Reports</h3>
              <p className="feature-description">Lorem ipsum</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4 className="footer-logo">Murkie</h4>
            <p className="footer-tagline">Keep your private personal information private</p>
            <div className="footer-social">
              <a href="https://instagram.com" className="social-link" aria-label="Instagram" rel="noopener noreferrer" target="_blank">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                  <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" className="social-link" aria-label="LinkedIn" rel="noopener noreferrer" target="_blank">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://twitter.com" className="social-link" aria-label="Twitter" rel="noopener noreferrer" target="_blank">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h5 className="footer-heading">Features</h5>
            <ul className="footer-links">
              <li><a href="https://murkie.com/features">Core features</a></li>
              <li><a href="https://murkie.com/pro">Pro experience</a></li>
              <li><a href="https://murkie.com/integrations">Integrations</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h5 className="footer-heading">Learn more</h5>
            <ul className="footer-links">
              <li><a href="https://murkie.com/blog">Blog</a></li>
              <li><a href="https://murkie.com/case-studies">Case studies</a></li>
              <li><a href="https://murkie.com/customers">Customer stories</a></li>
              <li><a href="https://murkie.com/best-practices">Best practices</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h5 className="footer-heading">Support</h5>
            <ul className="footer-links">
              <li><a href="https://murkie.com/contact">Contact</a></li>
              <li><a href="https://murkie.com/support">Support</a></li>
              <li><a href="https://murkie.com/legal">Legal</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;