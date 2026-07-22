"use client";

import { BRAND, LOGO, NAV } from "@/lib/site";
import { useState } from "react";

export default function SiteHeader({ currentSection }: { currentSection?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container">
        <a className="logo" href="/" title={BRAND}>
          <img src={LOGO} alt={`${BRAND} logo`} width={130} height={40} />
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>
        <nav className={`nav${open ? " open" : ""}`} aria-label="Main navigation">
          {NAV.map(({ name, url }) => (
            <a
              key={url}
              href={url}
              className={
                currentSection && url !== "/" && url.replace(/\//g, "") === currentSection
                  ? "on"
                  : undefined
              }
            >
              {name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
