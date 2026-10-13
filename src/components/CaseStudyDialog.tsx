"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { CaseStudy } from "@/lib/portfolio-data";

interface CaseStudyDialogProps {
  study: CaseStudy;
  onClose: () => void;
}

const focusableSelector =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function CaseStudyDialog({ study, onClose }: CaseStudyDialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector),
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus();
    };
  }, [onClose]);

  return (
    <div
      className="dialog-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        className="case-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`dialog-${study.id}`}
      >
        <header className="dialog-header">
          <div>
            <p className="eyebrow">{study.category} case study</p>
            <h2 id={`dialog-${study.id}`}>{study.title}</h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            className="dialog-close"
            aria-label="Close case study"
            onClick={onClose}
            data-analytics-event="case_study_close"
            data-analytics-label={study.title}
          >
            <span aria-hidden="true">×</span>
          </button>
        </header>

        <div className="dialog-body">
          {study.image ? (
            <div className="dialog-image">
              <Image
                src={study.image}
                alt={study.imageAlt ?? ""}
                fill
                sizes="(max-width: 768px) 92vw, 760px"
                className="object-cover"
              />
            </div>
          ) : (
            <SignalDiagram study={study} />
          )}

          <div className="dialog-layout">
            <div>
              <p className="dialog-description">{study.description}</p>
              <h3>What changed</h3>
              <ul className="outcome-list">
                {study.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </div>
            <aside className="dialog-aside">
              <span className="eyebrow">Measured outcome</span>
              <strong>{study.impact}</strong>
              <p>{study.impactLabel}</p>
              <div className="tag-list">
                {study.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
              {study.website && (
                <a
                  className="button button-secondary"
                  href={study.website}
                  target="_blank"
                  rel="noreferrer"
                  data-analytics-event="project_visit"
                  data-analytics-label={study.title}
                >
                  Visit project <span aria-hidden="true">↗</span>
                </a>
              )}
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

function SignalDiagram({ study }: { study: CaseStudy }) {
  return (
    <div className="dialog-signal" aria-label={`${study.title} system flow`}>
      {study.signal.map((step, index) => (
        <div key={step} className="dialog-signal-step">
          <span>0{index + 1}</span>
          <strong>{step}</strong>
        </div>
      ))}
    </div>
  );
}
