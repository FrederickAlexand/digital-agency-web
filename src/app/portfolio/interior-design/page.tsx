import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, ArrowLeft } from "lucide-react";
import styles from "./interior.module.css";

export const metadata: Metadata = {
  title: { absolute: "AUREL — Spaces for the everyday" },
  description: "AUREL Interior Atelier. Thoughtful homes shaped by natural materials, the light of a room, and the people who live there.",
};

// Portfolio concept: names and locations are illustrative, not completed-client claims.
const projects = [
  {
    name: "The Everyday House",
    location: "Bandung, West Java",
    scope: "Family home · Interior & furniture",
    image: "/images/interior-design/minimal-dining.jpg",
    alt: "Minimalist dining space with a white round table, timber stools, pale walls, and large windows",
    description: "A simple place to share breakfast and let the afternoon unfold. White cabinetry, timber stools, and an uncluttered plan make everyday routines feel easy.",
    crop: "50% 58%",
  },
  {
    name: "A Light-Filled Apartment",
    location: "South Jakarta",
    scope: "Apartment · Full interior",
    image: "/images/interior-design/minimal-living.jpg",
    alt: "White sofa and ottoman with timber-framed leather chairs in a bright room with pale walls",
    description: "Soft white upholstery and slender timber chairs bring warmth without visual weight. A generous rug gathers the seating into one quiet corner.",
    crop: "50% 70%",
  },
  {
    name: "The Oak Room",
    location: "Surabaya, East Java",
    scope: "Private residence · Living space",
    image: "/images/interior-design/minimal-apartment.jpg",
    alt: "Minimalist white seating beside an oak-lined window, timber floor, and slatted oak media cabinet",
    description: "A window seat, clean-lined storage, and the grain of natural oak. A pared-back living space that leaves room for daylight and a favourite record.",
    crop: "50% 65%",
  },
];
const process = [
  { name: "A conversation, then a brief", description: "We start with how you live, what you want to keep, and what needs to change. Together we agree on the scope, priorities, and budget." },
  { name: "The room takes shape", description: "Plans, material samples, and furniture selections make the direction tangible. We review the details with you before anything is ordered." },
  { name: "From drawing to daily life", description: "We coordinate with your builders and makers, review the finishing details, and bring the room together with the final pieces." },
];

export default function InteriorDesignPage() {
  return (
    <div lang="en" className={styles.page}>
      <a href="#home" className={styles.skipLink}>Skip to page content</a>
      <header className={styles.header}>
        <a href="#home" className={styles.brand} aria-label="Aurel Interior Atelier, home">AUREL<span>INTERIOR ATELIER</span></a>
        <nav aria-label="Studio navigation" className={styles.navigation}>
          <Link href="/portfolio" className={styles.backLink}><ArrowLeft size={16} aria-hidden="true" /> Back to portfolio</Link>
          <a href="#work">Our work</a>
          <a href="#studio">The studio</a>
          <a href="#approach">Our approach</a>
        </nav>
        <Link href="/contact" className={styles.headerAction}>Discuss a project <ArrowUpRight size={16} aria-hidden="true" /></Link>
      </header>

      <section id="home" aria-labelledby="hero-heading" className={styles.hero}>
        <div className={styles.heroTop}>
          <div><p className={styles.eyebrow}>Homes with a sense of belonging</p><h1 id="hero-heading">For the way<br />you <em>really live.</em></h1></div>
          <div className={styles.heroIntro}><p>Rooms for the books you collect, the friends you invite, and the light you love. We design warm, thoughtful interiors that feel distinctly yours.</p><Link href="/contact" className={styles.button}>Discuss a project <ArrowUpRight size={17} aria-hidden="true" /></Link></div>
        </div>
        <figure className={styles.heroFigure}>
          <div className={styles.heroPhoto}><Image src={projects[0].image} alt={projects[0].alt} fill sizes="(max-width: 1440px) 92vw, 1280px" preload className={styles.photo} style={{ objectPosition: projects[0].crop }} /></div>
          <figcaption className={styles.heroCaption}><span>The Everyday House <span className={styles.captionDivider}>/</span> Bandung</span><a href="#work">Selected interiors <ArrowRight size={15} aria-hidden="true" /></a></figcaption>
        </figure>
      </section>

      <section id="work" aria-labelledby="work-heading" className={`${styles.section} ${styles.work}`}>
        <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>Selected interiors / 01—03</p><h2 id="work-heading">Different lives.<br />A considered point of view.</h2></div><p className={styles.sectionIntro}>Natural materials. Useful details. Room to breathe.<br />A selection of residential design concepts.</p></div>
        <div className={styles.projectGrid}>{projects.map((project, index) => <article key={project.name} className={styles.project}>
          <div className={styles.projectPhoto}><Image src={project.image} alt={project.alt} fill sizes="(max-width: 700px) 90vw, (max-width: 1440px) 44vw, 620px" className={styles.photo} style={{ objectPosition: project.crop }} /></div>
          <div className={styles.projectMeta}><span>{project.location}</span><span>0{index + 1}</span></div>
          <h3>{project.name}</h3><p className={styles.projectScope}>{project.scope}</p><p className={styles.projectDescription}>{project.description}</p>
        </article>)}</div>
      </section>

      <section id="studio" aria-labelledby="studio-heading" className={styles.studioBand}>
        <div className={`${styles.section} ${styles.studio}`}>
          <div><p className={styles.eyebrow}>The studio</p><h2 id="studio-heading">A room is never<br />just <em>a room.</em></h2></div>
          <div className={styles.studioCopy}><p className={styles.studioLead}>It is where the day begins, where everyone finds a seat, and where the things you love have a place.</p><p>At AUREL, that is where we start. With your routines, your existing pieces, and the character of the building. We work with the light already there, choose materials that age well, and make space for the everyday.</p><p>Our focus is residential interiors, bespoke joinery, and furniture selection. From a single living room to a complete home, the aim is the same: a space that feels settled, personal, and easy to live in.</p><a href="#approach" className={styles.textLink}>How we work <ArrowRight size={16} aria-hidden="true" /></a></div>
        </div>
      </section>

      <section id="approach" aria-labelledby="approach-heading" className={`${styles.section} ${styles.approach}`}>
        <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>A clear process</p><h2 id="approach-heading">Thought through.<br />Together.</h2></div><p className={styles.sectionIntro}>Good decisions need time and clear information.<br />We make room for both.</p></div>
        <ol className={styles.process}>{process.map((step, index) => <li key={step.name}><span className={styles.stepNumber}>0{index + 1}</span><h3>{step.name}</h3><p>{step.description}</p></li>)}</ol>
        <aside className={styles.trust} aria-labelledby="trust-heading"><h3 id="trust-heading">What you can expect</h3><p>A written scope before we begin. Material and cost decisions reviewed with you. Regular updates as the work progresses. A shared record of the details, so nothing is left to guesswork.</p></aside>
      </section>

      <section id="contact" aria-labelledby="contact-heading" className={styles.contactBand}>
        <div className={`${styles.section} ${styles.contact}`}><div><p className={styles.eyebrow}>A place to start</p><h2 id="contact-heading">Tell us about<br /><em>your space.</em></h2></div><div className={styles.contactCopy}><p>A new home, a room that needs rethinking, or an idea you have been carrying for a while. We would like to hear it.</p><p className={styles.contactHint}>Share the location, a little about the space, and what you have in mind. We can take it from there.</p><Link href="/contact" className={styles.button}>Discuss a project <ArrowUpRight size={17} aria-hidden="true" /></Link></div></div>
      </section>
      <footer className={styles.footer}><a href="#home" className={styles.footerBrand}>AUREL <span>Interior Atelier</span></a><p>Portfolio concept. Project details are illustrative; imagery is for visual reference.</p></footer>
    </div>
  );
}
