import type { CSSProperties, ReactNode } from "react";

type TearTone = "paper" | "ink" | "dark";

interface TearCouponProps {
  stubId: string;
  label?: string;
  tone?: TearTone;
  className?: string;
  children: ReactNode;
  style?: CSSProperties;
}

export default function TearCoupon({
  stubId,
  label = "EVIDENCE",
  tone = "paper",
  className = "",
  children,
  style,
}: TearCouponProps) {
  return (
    <article
      className={`tear-coupon tear-coupon-${tone} ${className}`.trim()}
      style={style}
      data-stub={stubId}
    >
      <header className="tear-coupon-head">
        <span>{label}</span>
        <span className="tear-coupon-stub">{stubId}</span>
      </header>
      <div className="tear-coupon-perforation" aria-hidden="true">
        <i />
      </div>
      <div className="tear-coupon-body">{children}</div>
      <footer className="tear-coupon-foot" aria-hidden="true">
        <span>Adam Creed</span>
        <span>Melbourne</span>
      </footer>
    </article>
  );
}
