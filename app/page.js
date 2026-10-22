import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <main>
      {/* Official Top Announcement Bar matching royalconversion.co */}
      <div className="announcement-bar">
        FREE shipping on orders $250+ (USA only) &bull; 100% Precision Engineered Fit
      </div>

      {/* Navigation Header matching royalconversion.co */}
      <header className="header-nav">
        <div className="header-container">
          <a href="#" className="logo-wrap">
            <span className="logo-badge">RS</span>
            <span className="logo-text">
              Royal <span>Straps</span>
            </span>
          </a>
          
          <nav>
            <ul className="nav-links">
              <li><a href="#collections" className="nav-item">Base</a></li>
              <li><a href="#collections" className="nav-item">Essentials</a></li>
              <li><a href="#collections" className="nav-item">Signature</a></li>
              <li><a href="#guide" className="nav-item">Collector&apos;s Guide</a></li>
              <li><a href="#specifications" className="nav-item">Specifications</a></li>
            </ul>
          </nav>

          <div className="header-actions">
            <a href="#collections" className="header-pill-btn">
              Explore Collections &darr;
            </a>
          </div>
        </div>
      </header>

      <div className="page-container">
        {/* Hero Section */}
        <section className="hero-section" id="hero">
          <div className="hero-grid">
            <div className="hero-content">
              <span className="hero-tagline">Royal Pop Conversion Atelier</span>
              <h1 className="hero-title">
                Elevate Your Timepiece With Royal Pop Straps
              </h1>
              <p className="hero-desc">
                Curated premium straps. Handcrafted quality. A definitive upgrade for your watch. 
                Engineered with millimeter precision for zero-lug-play case integration, ergonomic comfort, 
                and striking aesthetics.
              </p>
              
              <div className="hero-actions">
                {/* Button "Shop Royal Pop Straps" -> https://royalconversion.co/ (Exact anchor, normal link, same tab, no tracking) */}
                <a href="https://royalconversion.co/" className="btn-primary-dark">
                  Shop Royal Pop Straps
                  <ArrowRight size={18} />
                </a>
                <a href="#guide" className="btn-secondary-light">
                  Read Buying Guide
                </a>
              </div>
            </div>

            <div className="hero-media-wrap">
              <img 
                src="/images/cover_image.png" 
                alt="Official Royal Conversion Royal Pop straps showcase on luxury timepieces" 
              />
            </div>
          </div>
        </section>

        {/* Featured Collections Section */}
        <section className="collections-section" id="collections">
          <div className="section-header">
            <span className="section-label">Curated Collections</span>
            <h2 className="section-title">The Three Pillar Collections</h2>
            <p className="section-subtitle">
              Every strap is designed with purposeful geometry to balance wrist ergonomics, 
              aesthetic restraint, and enduring resilience across daily environments.
            </p>
          </div>

          <div className="products-grid">
            {/* Base Straps Card */}
            <article className="product-card">
              <div className="product-img-frame">
                <img 
                  src="/images/base_real.png" 
                  alt="Official Royal Pop Base Sport Strap Vertical Crown from royalconversion.co" 
                />
              </div>
              <span className="product-series">Sport Tier</span>
              <h3 className="product-name">Base Collection</h3>
              <p className="product-desc">
                Textured vulcanized high-performance rubber featuring the signature Royal Pop crown. 
                Engineered for maximum moisture resistance, flexible contouring, and all-day casual wear.
              </p>
              <div className="product-action-row">
                {/* "Base straps" -> https://royalconversion.co/collections/base-collection (Exact anchor, normal link, same tab, no tracking) */}
                <a 
                  href="https://royalconversion.co/collections/base-collection" 
                  className="card-direct-link"
                >
                  Base straps
                </a>
              </div>
            </article>

            {/* Essentials Straps Card */}
            <article className="product-card">
              <div className="product-img-frame">
                <img 
                  src="/images/essentials_real.png" 
                  alt="Official Royal Pop Essentials Link Strap Vertical Crown from royalconversion.co" 
                />
              </div>
              <span className="product-series">Versatile Luxury</span>
              <h3 className="product-name">Essentials Collection</h3>
              <p className="product-desc">
                Architectural link architecture engineered for seamless case continuity. Tailored 
                for effortless transitions between formal engagements and dynamic weekend outings.
              </p>
              <div className="product-action-row">
                {/* "Essentials straps" -> https://royalconversion.co/collections/essentials-collection (Exact anchor, normal link, same tab, no tracking) */}
                <a 
                  href="https://royalconversion.co/collections/essentials-collection" 
                  className="card-direct-link"
                >
                  Essentials straps
                </a>
              </div>
            </article>

            {/* Signature Straps Card */}
            <article className="product-card">
              <div className="product-img-frame">
                <img 
                  src="/images/signature_real.png" 
                  alt="Official Royal Pop Signature Metal Sport Strap Vertical Crown from royalconversion.co" 
                />
              </div>
              <span className="product-series">Artisanal Metal</span>
              <h3 className="product-name">Signature Collection</h3>
              <p className="product-desc">
                The flagship line incorporating precision metal end-links, reinforced deployant 
                hardware, and dual-tone finishes formulating the highest tier of bespoke wrist presence.
              </p>
              <div className="product-action-row">
                {/* "Signature straps" -> https://royalconversion.co/collections/signature-collection (Exact anchor, normal link, same tab, no tracking) */}
                <a 
                  href="https://royalconversion.co/collections/signature-collection" 
                  className="card-direct-link"
                >
                  Signature straps
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* Editorial Guide Section (> 500 Words) */}
        <section className="editorial-wrap" id="guide">
          <div className="editorial-header">
            <span className="section-label">Collector&apos;s Compendium</span>
            <h2 className="editorial-title">
              The Collector&apos;s Guide to Bespoke Watch Strap Conversions
            </h2>
          </div>

          <div className="editorial-content">
            <p>
              In contemporary horology, the relationship between a case silhouette and its bracelet 
              defines the visual identity of a timepiece. For decades, integrated sports watches have 
              captivated enthusiasts with their sharp geometric bezels, contrasting brushed facets, and 
              commanding wrist presence. However, rigid factory metal bracelets often restrict stylistic versatility 
              and remain susceptible to hairline abrasions during routine daily wear. Enter the concept of high-end 
              bespoke strap conversions: a movement designed to grant collectors complete autonomy over their 
              aesthetic expression without compromising case integrity or authenticity.
            </p>

            <div className="editorial-quote">
              &ldquo;A strap is not merely an attachment to a timepiece; it is the architectural frame that dictates how 
              light, shadow, and proportion interact on the wrist.&rdquo;
            </div>

            <h3>Material Science: Bioceramic, FKM Rubber &amp; Engineered Hardware</h3>
            <p>
              Not all flexible straps are created equal. Inexpensive commercial silicone bands quickly attract lint, 
              trap moisture against the skin, and deteriorate under routine exposure to ultraviolet sunlight and skin oils. 
              In contrast, high-grade conversion straps utilize premium vulcanized fluoroelastomer (FKM) rubber. Originally 
              developed for demanding aerospace and deep-sea marine applications, FKM possesses outstanding tensile strength, 
              complete impermeability to moisture, and a dense, silky-matte tactile finish that remains immaculate over years 
              of continuous wear.
            </p>
            <ul>
              <li><strong>Zero Lint Adhesion:</strong> Specially treated surface matrix actively repels microscopic dust and clothing fibers.</li>
              <li><strong>Thermal Stability:</strong> Retains supple ergonomic pliability in sub-zero winter chills as well as summer heat.</li>
              <li><strong>Hypoallergenic Composition:</strong> 100% free from toxic chemical fillers, preventing skin irritation during active sports.</li>
              <li><strong>Reinforced Lug Core:</strong> Embedded high-grade stainless steel inserts protect the case connection against mechanical shear.</li>
            </ul>

            
          </div>

          {/* Technical Specifications */}
          <div id="specifications" style={{ paddingTop: '2.5rem' }}>
            <span className="section-label">Engineering Specifications</span>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 700, color: '#121316', marginBottom: '1.25rem' }}>
              Collection Technical Breakdown
            </h3>
            <div className="specs-wrapper">
              <table className="specs-table">
                <thead>
                  <tr>
                    <th>Collection</th>
                    <th>Material Architecture</th>
                    <th>Case Integration</th>
                    <th>Hardware Finish</th>
                    <th>Water Resistance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong style={{ color: '#121316' }}>Base Collection</strong></td>
                    <td>Vulcanized FKM Fluoroelastomer</td>
                    <td>Flush Curved Lug Fit</td>
                    <td>316L Brushed Steel / Gold Tang</td>
                    <td>100m / 10 ATM Waterproof</td>
                  </tr>
                  <tr>
                    <td><strong style={{ color: '#121316' }}>Essentials Collection</strong></td>
                    <td>High-Flex Precision Polymer Link</td>
                    <td>Reinforced Steel Core Insert</td>
                    <td>Integrated Crown Hardware</td>
                    <td>50m Splash Resistant</td>
                  </tr>
                  <tr>
                    <td><strong style={{ color: '#121316' }}>Signature Collection</strong></td>
                    <td>Metal Sport End-Links &amp; FKM Body</td>
                    <td>Contoured End-Link Joint</td>
                    <td>Heavy-Duty Deployant Clasp</td>
                    <td>Daily Weatherproof</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>

      {/* Footer Section matching royalconversion.co warm luxury color #f9f7f3 */}
      <footer className="footer-section">
        <div className="page-container">
          <div className="footer-top-grid">
            <div>
              <div className="footer-logo-wrap">
                <a href="#" className="logo-wrap">
                  <span className="logo-badge">RS</span>
                  <span className="logo-text">
                    Royal <span>Straps</span>
                  </span>
                </a>
              </div>
              <p className="footer-brand-text">
                An independent buyer&apos;s guide and curated showcase dedicated to high-precision horological 
                straps, ergonomic wrist conversions, and bespoke watchmaking craftsmanship.
              </p>
            </div>

            <div>
              <h4 className="footer-col-header">Quick Links</h4>
              <ul className="footer-nav">
                <li><a href="#hero">Overview</a></li>
                <li><a href="#collections">Curated Collections</a></li>
                <li><a href="#guide">Editorial Guide</a></li>
                <li><a href="#specifications">Technical Specs</a></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-col-header">Craftsmanship</h4>
              <ul className="footer-trust-list">
                <li><span className="footer-trust-dot"></span> 100% Precision Engineered Fit</li>
                <li><span className="footer-trust-dot"></span> Zero-Lug-Play Integration</li>
                <li><span className="footer-trust-dot"></span> Hypoallergenic Vulcanized FKM</li>
                <li><span className="footer-trust-dot"></span> Worldwide Insured Delivery</li>
              </ul>
            </div>
          </div>

          {/* User Required Compliance & Publishing Text (Only place where "Royal Conversion" is linked) */}
          <div className="footer-compliance-box">
            <p className="footer-compliance-text">
              This guide is published by <a href="https://royalconversion.co/" className="footer-exact-link">Royal Conversion</a>, a maker of Royal Pop straps.
            </p>
            <p className="footer-disclaimer-note">
              Not affiliated with Audemars Piguet or Swatch.
            </p>
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} Royal Straps. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
