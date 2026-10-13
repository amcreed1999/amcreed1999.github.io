import TearCoupon from "./TearCoupon";
import { contactInvite } from "@/lib/portfolio-data";

export default function ContactFooter() {
  return (
    <footer id="contact" className="contact-footer">
      <div className="section-shell contact-layout contact-layout-tear">
        <TearCoupon
          stubId={contactInvite.stubId}
          label="CONTACT"
          tone="dark"
          className="contact-tear"
        >
          <p className="eyebrow">{contactInvite.eyebrow}</p>
          <h2>
            {contactInvite.headline}
          </h2>
          <p className="contact-supporting">{contactInvite.supporting}</p>
          <div className="contact-actions">
            <a
              className="button button-primary"
              href="mailto:amcreed99@gmail.com"
              data-analytics-event="contact_click"
              data-analytics-label="Email Adam"
            >
              Email Adam <span aria-hidden="true">↗</span>
            </a>
            <a
              href="/Adam-Creed-Resume.pdf"
              className="button button-secondary"
              download
              data-analytics-event="resume_download"
              data-analytics-label="Résumé from contact"
            >
              Download résumé <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="contact-stub-meta" aria-hidden="true">
            <span>Melbourne</span>
            <span>Résumé attached</span>
            <span>amcreed99@gmail.com</span>
          </div>
        </TearCoupon>

        <div className="footer-meta">
          <span>Melbourne, Australia</span>
          <div>
            <a href="https://www.linkedin.com/in/adam-creed/" target="_blank" rel="noreferrer" data-analytics-event="profile_click" data-analytics-label="LinkedIn from footer">LinkedIn ↗</a>
            <a href="https://github.com/amcreed1999" target="_blank" rel="noreferrer" data-analytics-event="profile_click" data-analytics-label="GitHub from footer">GitHub ↗</a>
          </div>
          <span>© {new Date().getFullYear()} Adam Creed</span>
        </div>
      </div>
    </footer>
  );
}
