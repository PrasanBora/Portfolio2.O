import React from "react";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { FiExternalLink } from "react-icons/fi";
import { FEATURED_WORKS } from "../../data/site";

export default function FeaturedWork() {
  return (
    <section className="section" id="featured-work" aria-label="Featured work">
      <div className="container-pb">
        <div className="featured-work__head">
          <div>
            <span className="eyebrow">Portfolio</span>
            <h2 className="section-title">Featured Work</h2>
            <p className="section-subtitle">
              A selection of products I've built and shipped — from AI platforms
              to e-commerce and client websites.
            </p>
          </div>
          <Link to="/works" className="btn btn-ghost">
            View all <HiArrowRight aria-hidden />
          </Link>
        </div>

        <div className="featured-grid">
          {FEATURED_WORKS.map((w) => (
            <article key={w.id} className="work-card">
              <div className="work-card__media">
                <span className="work-card__badge">{w.category}</span>
                <WorkArtwork id={w.id} />
              </div>
              <div className="work-card__body">
                <h3 className="work-card__title">{w.title}</h3>
                <p className="work-card__sub">{w.subtitle}</p>
                <p className="work-card__desc">{w.description}</p>
                <div className="work-card__tags">
                  {w.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={w.href}
                  target="_blank"
                  rel="noreferrer"
                  className="work-card__cta"
                  aria-label={`${w.cta}: ${w.title}`}
                >
                  {w.cta} <FiExternalLink aria-hidden />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Inline SVG art for each featured work — keeps the bundle small,
 * matches palette, and avoids broken external image deps.
 */
function WorkArtwork({ id }) {
  switch (id) {
    case "chefadora":
      return (
        <svg viewBox="0 0 800 500" role="img" aria-label="Chefadora illustration">
          <defs>
            <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#7fd3cb" />
              <stop offset="100%" stopColor="#5fb0a8" />
            </linearGradient>
          </defs>
          <rect width="800" height="500" fill="#0e1a18" />
          <circle cx="640" cy="120" r="160" fill="url(#g1)" opacity="0.15" />
          <circle cx="180" cy="380" r="120" fill="url(#g1)" opacity="0.1" />
          <g transform="translate(150,120)" fill="none" stroke="url(#g1)" strokeWidth="2">
            <rect x="0" y="0" width="320" height="220" rx="14" />
            <line x1="0" y1="40" x2="320" y2="40" />
            <circle cx="20" cy="20" r="4" />
            <circle cx="36" cy="20" r="4" />
            <circle cx="52" cy="20" r="4" />
            <rect x="20" y="60" width="120" height="14" rx="3" />
            <rect x="20" y="84" width="200" height="10" rx="3" opacity="0.6" />
            <rect x="20" y="100" width="160" height="10" rx="3" opacity="0.6" />
            <rect x="20" y="140" width="80" height="40" rx="6" fill="url(#g1)" opacity="0.5" />
          </g>
          <text x="400" y="430" textAnchor="middle" fill="#7fd3cb" fontFamily="JetBrains Mono, monospace" fontSize="22">
            chefadora.com / cooking-ai
          </text>
        </svg>
      );
    case "korperheil":
      return (
        <svg viewBox="0 0 800 500" role="img" aria-label="Korperheil illustration">
          <defs>
            <linearGradient id="g2" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#7fd3cb" />
              <stop offset="100%" stopColor="#5fb0a8" />
            </linearGradient>
          </defs>
          <rect width="800" height="500" fill="#0d1716" />
          <g transform="translate(220,120)">
            <rect x="0" y="0" width="360" height="220" rx="18" fill="none" stroke="#1c2b29" />
            <rect x="20" y="20" width="320" height="60" rx="10" fill="#11201e" />
            <rect x="20" y="100" width="200" height="14" rx="3" fill="url(#g2)" opacity="0.7" />
            <rect x="20" y="124" width="280" height="10" rx="3" fill="#384b48" />
            <rect x="20" y="142" width="240" height="10" rx="3" fill="#384b48" />
            <rect x="20" y="170" width="120" height="34" rx="17" fill="url(#g2)" />
          </g>
          <text x="400" y="430" textAnchor="middle" fill="#7fd3cb" fontFamily="JetBrains Mono, monospace" fontSize="22">
            korperheil.com
          </text>
        </svg>
      );
    case "himalayan-valley":
      return (
        <svg viewBox="0 0 800 500" role="img" aria-label="Himalayan Valley illustration">
          <defs>
            <linearGradient id="g3" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#7fd3cb" />
              <stop offset="100%" stopColor="#5fb0a8" />
            </linearGradient>
          </defs>
          <rect width="800" height="500" fill="#0c1816" />
          <polygon points="0,500 200,260 360,360 540,200 720,320 800,260 800,500" fill="url(#g3)" opacity="0.12" />
          <polygon points="0,500 220,300 380,400 600,250 800,330 800,500" fill="url(#g3)" opacity="0.18" />
          <circle cx="640" cy="120" r="60" fill="url(#g3)" opacity="0.5" />
          <text x="400" y="430" textAnchor="middle" fill="#7fd3cb" fontFamily="JetBrains Mono, monospace" fontSize="22">
            himalayanvalleyproduct.com
          </text>
        </svg>
      );
    default:
      return null;
  }
}
