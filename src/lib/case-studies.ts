export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  summary: string;
  problem: string;
  solution: string;
  impact: string[];
  technologies: string[];
  image: string;
  featured?: boolean;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "1",
    slug: "inventory-management-dashboard",
    title: "Inventory Management Dashboard for Retail SME",
    client: "RetailCorp Asia",
    industry: "Retail & E-Commerce",
    summary:
      "A real-time inventory management platform that eliminated stock discrepancies and reduced manual reconciliation by 40%.",
    problem:
      "RetailCorp Asia managed inventory across 12 retail locations using disconnected spreadsheets and a legacy POS system. Store managers spent 6+ hours weekly on manual stock counts, leading to frequent stockouts, overstocking, and revenue loss estimated at $120K annually.",
    solution:
      "We designed and built a centralized inventory dashboard with real-time sync across all locations, automated low-stock alerts, and predictive reorder recommendations. The solution integrated with their existing POS via REST APIs and included role-based dashboards for store managers, regional supervisors, and executive leadership.",
    impact: [
      "40% reduction in time spent on inventory reconciliation",
      "28% decrease in stockout incidents within 6 months",
      "$95K annual savings from optimized stock levels",
      "Real-time visibility across 12 locations from a single dashboard",
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Redis", "REST APIs"],
    image: "/images/case-study-inventory.svg",
    featured: true,
  },
  {
    id: "2",
    slug: "hr-payroll-portal",
    title: "Internal HR & Payroll Portal",
    client: "FinEdge Solutions",
    industry: "Financial Services",
    summary:
      "A secure employee self-service portal that streamlined HR operations and reduced payroll processing time by 60%.",
    problem:
      "FinEdge Solutions' HR team processed payroll for 350+ employees manually each month, relying on email submissions for leave requests, expense claims, and personal data updates. The process was error-prone, lacked audit trails, and created compliance risks under local labor regulations.",
    solution:
      "We delivered a comprehensive HR & payroll portal with employee self-service modules, automated payroll calculation engines, digital approval workflows, and full audit logging. The system integrated with their accounting software and included compliance reporting features tailored to Singapore employment regulations.",
    impact: [
      "60% reduction in monthly payroll processing time",
      "99.2% accuracy rate in payroll calculations (up from 94%)",
      "100% digital audit trail for compliance reviews",
      "Employee satisfaction score increased from 3.2 to 4.6 / 5",
    ],
    technologies: ["React", "Python", "Django", "PostgreSQL", "AWS"],
    image: "/images/case-study-hr.svg",
    featured: true,
  },
];
