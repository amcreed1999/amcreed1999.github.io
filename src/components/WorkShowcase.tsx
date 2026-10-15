"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import TearCoupon from "./TearCoupon";
import { caseStudies, type CaseStudy } from "@/lib/portfolio-data";

export default function WorkShowcase() {
  return (
    <section
      id="work"
      className="work-section"
      aria-labelledby="work-title"
    >
      <div className="section-shell section-intro work-intro">
        <p className="eyebrow">Selected software work · 01—{String(caseStudies.length).padStart(2, "0")}</p>
        <h2 id="work-title">Systems carrying real operational weight.</h2>
        <p>
          FreightCyber platforms first: reliability, financial integrations and
          live operations. Then applied AI, and an independent product that moved
          real money.
        </p>
      </div>

      <div className="work-pin-stage">
        <div className="work-chapter-stage section-shell" aria-label="Case study chapters">
          {caseStudies.map((study, index) => (
            <article
              key={study.id}
              className={`work-chapter ${index % 2 ? "work-chapter-reverse" : ""}`}
              data-work-chapter
            >
              <TearCoupon
                stubId={`AC/WRK.${String(index + 1).padStart(2, "0")}`}
                label="CASE PACKET"
                tone="paper"
                className="work-tear"
              >
                <div className="case-row case-row-static is-visible">
                  <div className="case-chapter" aria-hidden="true">
                    <span>Chapter</span>
                    <strong>{String(index + 1).padStart(2, "0")}</strong>
                    <i>{String(caseStudies.length).padStart(2, "0")}</i>
                  </div>
                  <div className="case-visual">
                    {study.image ? (
                      <Image
                        src={study.image}
                        alt={study.imageAlt ?? ""}
                        fill
                        sizes="(max-width: 767px) 100vw, 46vw"
                        className="case-image"
                      />
                    ) : (
                      <CaseSignal study={study} />
                    )}
                  </div>

                  <div className="case-copy">
                    <div className="case-meta">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <span>{study.category}</span>
                    </div>
                    <h3>{study.title}</h3>
                    <p className="case-summary">{study.summary}</p>
                    <div className="case-impact-grid" aria-label="Measured outcomes">
                      <div className="case-impact">
                        <strong>{study.impact}</strong>
                        <span>{study.impactLabel}</span>
                      </div>
                      {study.secondaryImpact && (
                        <div className="case-impact case-impact-secondary">
                          <strong>{study.secondaryImpact.value}</strong>
                          <span>{study.secondaryImpact.label}</span>
                        </div>
                      )}
                    </div>
                    <p className="case-description">{study.description}</p>
                    <div className="case-outcomes">
                      <h4>What changed</h4>
                      <ul>
                        {study.outcomes.map((outcome) => (
                          <li key={outcome}>{outcome}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="tag-list" aria-label="Technologies">
                      {study.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                    {study.website && (
                      <a
                        className="text-link case-link"
                        href={study.website}
                        target="_blank"
                        rel="noreferrer"
                        data-analytics-event="project_visit"
                        data-analytics-label={study.title}
                      >
                        Visit the project <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </TearCoupon>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseSignal({ study }: { study: CaseStudy }) {
  return (
    <div className="case-signal" aria-hidden="true">
      <div className="case-signal-grid" />
      <div className="case-signal-track">
        <span className="case-signal-packet" />
      </div>
      {study.signal.map((step, index) => (
        <div
          key={step}
          className="case-signal-node"
          data-signal-node
          style={
            {
              "--signal-step": index,
              "--node-offset": `${(index % 2 ? 1 : -1) * 0.35}rem`,
            } as CSSProperties
          }
        >
          <span>0{index + 1}</span>
          <strong>{step}</strong>
        </div>
      ))}
    </div>
  );
}
