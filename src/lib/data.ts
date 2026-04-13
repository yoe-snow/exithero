export type Severity = "high" | "medium" | "low";

export interface Risk {
  id: string;
  title: string;
  severity: Severity;
  summary: string;
  whyItMatters: string;
  originalClause: string;
  plainEnglish: string;
  negotiationAngle: string;
}

export interface EconomicsLine {
  label: string;
  amount: string;
  note?: string;
  highlight?: boolean;
}

export interface NegotiationTip {
  id: string;
  text: string;
  priority: Severity;
}

export const dealOverview = {
  dealType: "Acquisition",
  headlinePrice: "$12M",
  cashUpfront: "$9M",
  deferred: "$3M Seller Note",
  escrow: "5% ($600K) for 12 months",
  exclusivity: "60 days",
  dealQuality: 6.5,
};

export const risks: Risk[] = [
  {
    id: "exclusivity",
    title: "Exclusivity Clause",
    severity: "high",
    summary: "You cannot negotiate with other buyers for 60 days.",
    whyItMatters:
      "This significantly reduces your leverage. If this deal falls through, you've lost two months of negotiating power and market momentum.",
    originalClause:
      '"During the Exclusivity Period of sixty (60) calendar days following execution of this LOI, the Seller agrees not to solicit, encourage, or engage in discussions with any third party regarding the acquisition, merger, or sale of any material portion of the Company\'s assets or equity."',
    plainEnglish:
      "For 60 days after signing, you can't talk to any other potential buyers, investors, or acquirers about selling your company — even if a better offer comes along.",
    negotiationAngle:
      "Push to shorten the exclusivity period to 30 days. Add a clause that exclusivity terminates automatically if the buyer fails to meet key milestones (e.g., completing due diligence within 21 days).",
  },
  {
    id: "seller-note",
    title: "Seller Note ($3M Deferred)",
    severity: "medium",
    summary: "$3M is deferred and paid over 2 years at 4% interest.",
    whyItMatters:
      "25% of the deal value depends on the buyer's ability and willingness to pay you over time. If the business underperforms post-acquisition, repayment risk increases.",
    originalClause:
      '"Three Million Dollars ($3,000,000) shall be paid via a Seller Promissory Note bearing interest at four percent (4%) per annum, with quarterly payments over a period of twenty-four (24) months following the Closing Date."',
    plainEnglish:
      "Instead of getting $12M at closing, you'll get $9M in cash and then $3M paid out in installments over 2 years, with 4% interest.",
    negotiationAngle:
      "Negotiate for a higher upfront cash portion (e.g., $10M cash / $2M note). If the note stays at $3M, push for personal guarantees from the buyer or accelerated payment triggers.",
  },
  {
    id: "indemnification",
    title: "Indemnification Obligation",
    severity: "medium",
    summary: "You may be liable for future claims up to 20% of deal value.",
    whyItMatters:
      "Post-sale claims could claw back up to $2.4M. This creates lingering financial exposure even after you've exited the business.",
    originalClause:
      '"The Seller shall indemnify and hold harmless the Buyer from any losses, damages, or liabilities arising from breaches of representations, warranties, or covenants, up to a maximum of twenty percent (20%) of the Purchase Price, for a period of eighteen (18) months following Closing."',
    plainEnglish:
      "If the buyer discovers problems after the sale (like undisclosed liabilities or broken promises), you could owe them up to $2.4M for up to 18 months after closing.",
    negotiationAngle:
      "Cap indemnification at 10–15% of deal value. Push for a shorter survival period (12 months instead of 18). Negotiate a materiality threshold — small claims under $50K shouldn't trigger indemnification.",
  },
  {
    id: "escrow",
    title: "Escrow Holdback",
    severity: "low",
    summary: "5% of purchase price ($600K) held in escrow for 12 months.",
    whyItMatters:
      "While standard in acquisitions, this $600K is money you won't see for a year. It's used to cover potential indemnification claims.",
    originalClause:
      '"At Closing, five percent (5%) of the Purchase Price ($600,000) shall be deposited into an escrow account administered by a mutually agreed-upon escrow agent, to be held for a period of twelve (12) months to satisfy any indemnification claims."',
    plainEnglish:
      "$600K of your money will sit in a third-party escrow account for a year. If the buyer makes any claims against you, the money comes from this pool first.",
    negotiationAngle:
      "This is relatively standard, but push for a 6–9 month escrow period instead of 12. Ensure the escrow agent is truly independent and that release is automatic if no claims are filed.",
  },
  {
    id: "non-compete",
    title: "Non-Compete Agreement",
    severity: "high",
    summary: "3-year non-compete within your industry and adjacent markets.",
    whyItMatters:
      "You won't be able to start or join a competing business for 3 years. This limits your career options significantly if you're a domain expert.",
    originalClause:
      '"For a period of thirty-six (36) months following the Closing Date, the Seller shall not, directly or indirectly, engage in, own, manage, or participate in any business that competes with the Business within the United States and any territory in which the Company currently operates or has concrete plans to operate."',
    plainEnglish:
      "For 3 years after the sale, you can't start, run, invest in, or work for any business that competes with your current company — anywhere in the US.",
    negotiationAngle:
      "Narrow the scope: limit to your specific niche rather than \"adjacent markets.\" Shorten to 18–24 months. Define \"competing business\" precisely to preserve your ability to advise, invest, or work in related-but-not-competing areas.",
  },
];

export const economics: EconomicsLine[] = [
  { label: "Headline Purchase Price", amount: "$12,000,000" },
  { label: "Cash at Closing", amount: "$9,000,000", highlight: true },
  { label: "Seller Note (2-year payout)", amount: "$3,000,000" },
  { label: "Escrow Holdback (12 months)", amount: "-$600,000" },
  {
    label: "Net Guaranteed at Closing",
    amount: "$8,400,000",
    note: "70% of headline price",
    highlight: true,
  },
];

export const negotiationTips: NegotiationTip[] = [
  {
    id: "1",
    text: "Shorten the exclusivity period from 60 days to 30 days",
    priority: "high",
  },
  {
    id: "2",
    text: "Push for a higher upfront cash portion ($10M+)",
    priority: "high",
  },
  {
    id: "3",
    text: "Cap indemnification exposure at 10–15%",
    priority: "medium",
  },
  {
    id: "4",
    text: "Narrow non-compete scope and shorten to 18–24 months",
    priority: "high",
  },
  {
    id: "5",
    text: "Reduce escrow period from 12 to 6–9 months",
    priority: "low",
  },
  {
    id: "6",
    text: "Add milestone-based termination triggers to exclusivity",
    priority: "medium",
  },
  {
    id: "7",
    text: "Define 'competing business' precisely in non-compete",
    priority: "medium",
  },
  {
    id: "8",
    text: "Require personal guarantee on seller note from buyer",
    priority: "medium",
  },
];

export function severityColor(severity: Severity) {
  switch (severity) {
    case "high":
      return { bg: "bg-red-50", border: "border-red-200", text: "text-red-700", badge: "bg-red-100 text-red-700", dot: "bg-red-500" };
    case "medium":
      return { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-700", badge: "bg-amber-100 text-amber-700", dot: "bg-amber-500" };
    case "low":
      return { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-700", badge: "bg-emerald-100 text-emerald-700", dot: "bg-emerald-500" };
  }
}
