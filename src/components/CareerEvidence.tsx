"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import GitHubCommitCalendar from "./GitHubCommitCalendar";
import Reveal from "./Reveal";
import { careerEntries, engineeringRoots, personalArc } from "@/lib/portfolio-data";
import {
  canUsePinnedScroll,
  gsap,
  registerScrollPlugins,
} from "@/lib/scroll";

const testimonials = [
  {
    quote:
      "His drive and passion for technical excellence in real-world settings make him an invaluable problem-solver.",
    name: "Leah Twomey",
    role: "Researcher · University College Cork",
    image: "/Images/Leah_Twomey.jpeg",
  },
  {
    quote:
      "If your local business needed a new software system? Adam’s your guy. If your sports club is trying to raise funds? Adam’s your guy.",
    name: "Jack Scannell",
    role: "Supply Chain Manager · Veolia Ireland",
    image: "/Images/Jack_Scannell.jpeg",
  },
];

export default function CareerEvidence() {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list || !canUsePinnedScroll()) return;

    registerScrollPlugins();
    const entries = list.querySelectorAll<HTMLElement>(".career-entry");
    const markers = list.querySelectorAll<HTMLElement>(".career-marker");

    const ctx = gsap.context(() => {
      entries.forEach((entry, index) => {
        gsap.fromTo(
          entry,
          { opacity: 0.35 },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: entry,
              start: "top 75%",
              end: "top 40%",
              scrub: 0.4,
            },
          },
        );
        if (markers[index]) {
          gsap.fromTo(
            markers[index],
            { scale: 0.6, backgroundColor: "transparent" },
            {
              scale: 1,
              scrollTrigger: {
                trigger: entry,
                start: "top 70%",
                end: "top 45%",
                scrub: true,
              },
            },
          );
        }
      });
    }, list);

    return () => ctx.revert();
  }, []);

  return (
    <section id="journey" className="journey-section section-shell" aria-labelledby="journey-title">
      <Reveal className="section-intro journey-intro">
        <p className="eyebrow">Journey</p>
        <h2 id="journey-title">Ireland foundations. Melbourne leadership.</h2>
        <p>{personalArc}</p>
      </Reveal>

      <div className="journey-layout">
        <div ref={listRef} className="career-list">
          {careerEntries.map((entry, index) => (
            <Reveal key={`${entry.period}-${entry.role}`} className="career-entry" delay={index * 60}>
              <span className="career-marker" aria-hidden="true" />
              <time>{entry.period}</time>
              <div>
                <h3>{entry.role}</h3>
                <strong>{entry.organisation}</strong>
                <p>{entry.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="education-panel">
          <p className="eyebrow">Credentials</p>
          <h3>MEngSc + BEng</h3>
          <p>
            Master of Engineering by Research and Bachelor of Electrical and
            Electronic Engineering, University College Cork, 2024 — Ireland,
            before Melbourne.
          </p>
          <div className="education-detail">
            <span>Applied AI</span>
            <strong>Hugging Face AI Agents Fundamentals</strong>
          </div>
          <div className="education-detail">
            <span>Machine learning</span>
            <strong>Stanford / DeepLearning.AI specialisation</strong>
          </div>
        </Reveal>
      </div>

      <Reveal className="roots-section">
        <div className="roots-heading">
          <p className="eyebrow">Engineering foundations</p>
          <h3>Useful context, not the headline.</h3>
          <p>
            Electronics and research in Ireland trained me to reason from first
            principles. That background supports production software leadership
            in Melbourne.
          </p>
        </div>
        <div className="roots-list">
          {engineeringRoots.map((root) => (
            <article key={root.title}>
              <span>{root.context}</span>
              <h4>{root.title}</h4>
              <p>{root.description}</p>
            </article>
          ))}
        </div>
      </Reveal>

      <div className="testimonial-strip" aria-label="Testimonials">
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.name} as="figure" className="testimonial" delay={index * 100}>
            <blockquote>“{testimonial.quote}”</blockquote>
            <figcaption>
              <Image
                src={testimonial.image}
                alt=""
                width={48}
                height={48}
                className="testimonial-avatar"
              />
              <span>
                <strong>{testimonial.name}</strong>
                <small>{testimonial.role}</small>
              </span>
            </figcaption>
          </Reveal>
        ))}
      </div>

      <Reveal className="github-panel">
        <div className="github-copy">
          <p className="eyebrow">Still in the code</p>
          <h3>Staying hands-on matters.</h3>
          <a className="text-link" href="https://github.com/amcreed1999" target="_blank" rel="noreferrer" data-analytics-event="profile_click" data-analytics-label="GitHub from work log">
            Open GitHub profile <span aria-hidden="true">↗</span>
          </a>
        </div>
        <GitHubCommitCalendar />
      </Reveal>
    </section>
  );
}
