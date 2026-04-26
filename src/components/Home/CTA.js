import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiCopy, FiCheck, FiMail } from "react-icons/fi";
import { HiArrowRight } from "react-icons/hi";
import { SITE } from "../../data/site";

export default function CTA() {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(SITE.contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      window.location.href = `mailto:${SITE.contact.email}`;
    }
  };

  return (
    <section className="section cta" id="contact" aria-label="Get in touch">
      <div className="container-pb">
        <span className="eyebrow">Say hello</span>
        <h2 className="section-title">Got something interesting?</h2>
        <p
          className="section-subtitle"
          style={{ marginInline: "auto" }}
        >
          I'm always up for a good conversation — whether it's a role, a project
          idea, or just tech talk. No formal pitch needed.
        </p>

        <div className="cta__email" aria-label="Email address">
          <FiMail aria-hidden />
          <span>{SITE.contact.email}</span>
          <button
            type="button"
            onClick={onCopy}
            aria-label={copied ? "Copied" : "Copy email address"}
          >
            {copied ? <FiCheck aria-hidden /> : <FiCopy aria-hidden />}
          </button>
        </div>

        <div className="cta__ctas">
          <a
            href={`mailto:${SITE.contact.email}?subject=${encodeURIComponent(
              "Hey Prasan – Let's connect"
            )}`}
            className="btn btn-primary"
          >
            <FiMail aria-hidden /> Open email
          </a>
          <Link to="/works" className="btn btn-outline">
            View my work <HiArrowRight aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
