import React, { useState } from "react";
import {
  ArrowRight, ArrowUpRight, Menu, X,
  Phone, Mail, MapPin, CheckCircle2, Send, MessageCircle,
  DoorOpen, ShieldCheck, Fence, Warehouse, PanelTop, Grid3X3,
  Cigarette, Building2, Home, Layers3, Ruler, Wrench
} from "lucide-react";

const PHONE = "8800546608";
const EMAIL = "livingloha@gmail.com";
const WHATSAPP = "918800546608";
const ADDRESS =
  "Pilakhua, Noida, Ghaziabad, Greater Noida, Indirapuram, Sohna, Gurugram and nearby industrial areas";

const services = [
  {
    id: "gates",
    number: "01",
    title: "Custom Main & Designer Gates",
    icon: DoorOpen,
    description:
      "Custom MS and steel entrance gates ,also we have best fabrication in noida,indirapuram,greater noida for fabricated according to your required dimensions, design and site conditions. Suitable for homes, societies, offices, shops and industrial properties.",
    points: ["MS / Steel fabrication", "Custom dimensions", "Designer and practical designs"],
    image: "/images/gates/main-gate-1.png"
  },
  {
    id: "railings",
    number: "02",
    title: "Balcony & Staircase Railings",
    icon: ShieldCheck,
    description:
      "Strong and durable MS and steel railings for balconies, staircases and access areas. Designs can be customized according to safety, appearance and project requirements.",
    points: ["Balcony railings", "Staircase railings", "Custom patterns"],
    image: "/images/railings/railing-1.png"
  },
  {
    id: "fencing",
    number: "03",
    title: "Boundary Wall Frames & Fencing",
    icon: Fence,
    description:
      "Fabricated MS and steel boundary frames and fencing for homes, societies, factories and commercial properties. Built around site dimensions and security requirements.",
    points: ["Boundary frames", "Security fencing", "Custom site measurements"],
    image: "/images/fencing/boundary-wall-fencing.png"
  },
  {
    id: "sheds",
    number: "04",
    title: "Industrial Roofing Sheds & Heavy Canopies",
    icon: Warehouse,
    description:
      "Heavy-duty steel structures for factory sheds, warehouse roofing, covered work areas and large canopies, planned according to size, use and site conditions.",
    points: ["Industrial sheds", "Warehouse structures", "Heavy canopies"],
    image: "/images/sheds/industrial-roofing-sheds.png"
  },
  {
    id: "shutters",
    number: "05",
    title: "Motorized & Rolling Shutters",
    icon: PanelTop,
    description:
      "Commercial and industrial rolling shutters fabricated for security, durability and dependable daily operation. Suitable for shops, factories, warehouses and commercial entrances.",
    points: ["Rolling shutters", "Commercial shutters", "Industrial shutters"],
    image: "/images/shutters/motorized-rolling-shutters.png"
  },
  {
    id: "grills",
    number: "06",
    title: "Safety Iron Grills & Window Frames",
    icon: Grid3X3,
    description:
      "Custom iron and MS safety grills and window frames designed to provide security while maintaining a clean and professional appearance.",
    points: ["Window grills", "Safety grills", "MS frames"],
    image: "/images/grills/safety-iron-grills.png"
  },
  {
    id: "smoking",
    number: "07",
    title: "Dedicated Smoking Zone Sheds",
    icon: Cigarette,
    description:
      "Weather-protected outdoor smoking shelters fabricated with durable steel structures for offices, factories, commercial spaces and corporate campuses.",
    points: ["Steel shelter", "Outdoor roofing", "Corporate spaces"],
    image: "/images/smoking/smoking-zone-sheds.png"
  },
  {
    id: "cabins",
    number: "08",
    title: "Corporate Outdoor Breakout Cabins",
    icon: Building2,
    description:
      "Modern steel-framed outdoor cabins and covered breakout spaces for offices, employee areas and commercial properties.",
    points: ["Outdoor cabins", "Breakout spaces", "Custom steel frames"],
    image: "/images/cabins/corporate-outdoor-breakout-cabins.png"
  },
  {
    id: "security",
    number: "09",
    title: "Security Guard Cabins & Gate Checkpoints",
    icon: Home,
    description:
      "Steel security cabins and gate checkpoints for residential societies, factories, offices, warehouses and commercial premises.",
    points: ["Guard cabins", "Entry checkpoints", "Weather protection"],
    image: "/images/security/security-guard-cabin.png"
  },
  {
    id: "mezzanine",
    number: "10",
    title: "Industrial Mezzanine Floors & Steel Platforms",
    icon: Layers3,
    description:
      "Load-bearing steel mezzanine floors, platforms, stairs and industrial structures designed to create additional usable space in factories, warehouses and commercial facilities.",
    points: ["Mezzanine floors", "Steel platforms", "Industrial stairs"],
    image: "/images/mezzanine/mezzanine-work-photo.jpeg"
  },
  {
    id: "doors",
    number: "11",
    title: "MS Doors & Window Frames",
    icon: DoorOpen,
    description:
      "Durable MS doors and window frames fabricated for homes, offices, shops and industrial properties, with practical designs made to fit your openings.",
    points: ["MS doors", "Window frames", "Made-to-measure fitment"],
    image: "/images/doors/ms-doors-window-frames.jpeg"
  },
  {
    id: "staircases",
    number: "12",
    title: "Structural Steel Staircases",
    icon: Wrench,
    description:
      "Strong steel staircases and access structures fabricated for factories, warehouses, offices and commercial buildings according to site requirements.",
    points: ["Steel staircases", "Access platforms", "Structural fabrication"],
    image: "/images/staircases/structural-steel-staircases.png"
  }
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
        <div className="container nav">
          <a href="#home" className="logo" onClick={() => setOpen(false)}>
            <span className="logo-mark"><b></b><i></i></span>
            <span className="logo-text">
              <strong>LIVINGLOHA</strong>
              <small>ENTERPRISES</small>
            </span>
          </a>

          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X/> : <Menu/>}
          </button>

          <nav className={`nav-links ${open ? "open" : ""}`}>
            {[
              ["Livingloha Services", "#services"],
              ["Why Choose Us", "#why-us"],
              ["Contact Us", "#contact"]
            ].map(([name, link]) => (
              <a key={name} href={link} onClick={() => setOpen(false)}>{name}</a>
            ))}
            <a className="nav-quote" href="#contact" onClick={() => setOpen(false)}>
              <Phone size={15}/> +91 {PHONE}
            </a>
          </nav>
        </div>
      </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="eyebrow light"><span/> LIVINGLOHA ENTERPRISES</div>
          <h1>Iron & Steel Fabrication<br/><em>Built For Everyday Strength.</em></h1>
          <p>
            Professional fabrication solutions for residential, commercial and
            industrial requirements across Noida, Ghaziabad, Greater Noida, Pilakhua,
            Hapur, Indirapuram, Sohna, Gurugram and nearby industrial areas.
          </p>

          <div className="hero-buttons">
            <a className="btn primary" href="#contact">Get Free Quote <ArrowRight size={17}/></a>
            <a className="btn outline" href={`tel:+91${PHONE}`}><Phone size={17}/> +91 {PHONE}</a>
          </div>

          <div className="hero-features">
            <span><CheckCircle2/> Quality Materials</span>
            <span><CheckCircle2/> Skilled Fabrication</span>
            <span><CheckCircle2/> Custom Solutions</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const workTypes = [
    {
      title: "Industrial Fabrication",
      text: "Factory sheds, structural steel frames, warehouse roofing trusses, crane gantry girders, platforms and factory safety enclosures."
    },
    {
      title: "Commercial Fabrication",
      text: "Facade frameworks, structural staircases, decorative grilles, fire escape ladders and heavy-duty beams."
    },
    {
      title: "Residential Fabrication",
      text: "Custom iron gates, MS and stainless steel railings, window safety grills, rooftop shades and decorative metalwork."
    }
  ];

  const strengths = [
    ["High-grade materials", "Certified, high-tensile steel, iron pipes, channels and structural sections."],
    ["Precision craftsmanship", "Skilled fabricators deliver clean joints, accurate cut-outs and dependable structural integrity."],
    ["End-to-end service", "Site measurement, design consultation, material procurement, fabrication and installation."],
    ["Regional reach", "Teams serve Noida, Greater Noida, Ghaziabad, Delhi NCR, Indirapuram, Vaishali, Hapur and Pilakhua."]
  ];

  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="about-intro">
          <div className="about-copy">
            <div className="eyebrow"><span/> ABOUT LIVINGLOHA</div>
            <h2 id="about-title">Trusted Iron &amp; Steel<br/><em>Fabrication Experts</em></h2>
            <p>
              At <strong>LivingLoha Enterprises</strong>, we deliver durable, precision-engineered
              metal solutions across Delhi NCR. Headquartered in <strong>Noida Sector 63</strong>,
              we specialize in heavy metal fabrication, structural ironwork and custom designs
              for industrial, commercial and residential properties.
            </p>
            <p>
              With years of industry expertise, modern workshop machinery and skilled fabricators,
              we transform raw steel into strong structures built for time and demanding use.
            </p>
          </div>
          <div className="about-location-card">
            <MapPin size={22}/>
            <span>Serving Delhi NCR</span>
            <strong>Noida · Greater Noida · Ghaziabad · Indirapuram · Vaishali · Pilakhua · Hapur</strong>
          </div>
        </div>

        <div className="about-details">
          <div className="about-block">
            <div className="about-block-title"><Wrench size={19}/><h3>What We Do</h3></div>
            <div className="about-work-grid">
              {workTypes.map(({ title, text }) => (
                <article className="about-work-card" key={title}>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="about-block about-strengths">
            <div className="about-block-title"><ShieldCheck size={19}/><h3>Why Businesses &amp; Builders Choose Us</h3></div>
            <div className="about-strength-grid">
              {strengths.map(([title, text]) => (
                <article key={title}>
                  <CheckCircle2 size={17}/>
                  <div><h4>{title}</h4><p>{text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StaticServiceImage({ service }) {
  return (
    <div className="service-static-image">
      <img src={service.image} alt={service.title} />
    </div>
  );
}

function Services() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="heading center">
          <div className="eyebrow"><span/> OUR SERVICES <span/></div>
          <h2>LIVINGLOHA <em>SERVICES</em></h2>
          <p>
            Engineered for strength and modern architecture. We design, fabricate, and install premium iron gates, railings, roofing sheds, and industrial metal works with precision craftsmanship.
          </p>
        </div>

        <div className="service-grid">
          {services.map(service => {
            const Icon = service.icon;

            return (
              <article className="service-card" key={service.id}>
                <div className="service-number">{service.number}</div>
                <StaticServiceImage service={service} />

                <div className="service-heading">
                  <div className="service-icon"><Icon size={20}/></div>
                  <h3>{service.title}</h3>
                </div>

                <div className="service-body">
                  <p>{service.description}</p>

                  <div className="service-points">
                    {service.points.map(point => (
                      <span key={point}><CheckCircle2 size={14}/> {point}</span>
                    ))}
                  </div>

                  <button className="learn-btn" onClick={() => setSelected(service)}>
                    Learn More <ArrowUpRight size={16}/>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div className="service-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}><X/></button>

            <StaticServiceImage service={selected} />

            <div className="modal-content">
              <span className="modal-number">{selected.number}</span>
              <h2>{selected.title}</h2>
              <p>{selected.description}</p>

              <h4>What we can provide</h4>
              <ul>
                {selected.points.map(point => <li key={point}><CheckCircle2 size={16}/> {point}</li>)}
              </ul>

              <a className="btn primary" href="#contact" onClick={() => setSelected(null)}>
                Get Free Quote <ArrowRight size={17}/>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function WhyUs() {
  const reasons = [
    ["High Quality Materials", "Material selection focused on strength and application."],
    ["Customized Solutions", "Fabrication designed around your exact requirement."],
    ["Skilled Fabrication Team", "Experienced workmanship with attention to fit and finish."],
    ["Modern Technology", "Practical tools and fabrication methods for consistent work."],
    ["Timely Project Execution", "Organised work planning from fabrication to installation."],
    ["Competitive Pricing", "Balanced solutions based on scope, material and requirement."],
    ["Professional Service", "Clear communication throughout the project."],
    ["Long-Lasting Results", "Structures designed with durability and everyday use in mind."]
  ];

  return (
    <section className="why" id="why-us">
      <div className="why-bg"></div>
      <div className="container why-grid">
        <div className="why-copy">
          <div className="eyebrow light"><span/> WHY CHOOSE US?</div>
          <h2>Built With <em>Purpose.</em><br/>Finished With Care.</h2>
          <p>
            Good fabrication is more than joining metal. It is about
            understanding the requirement, getting the dimensions right and
            delivering a dependable finished result.
          </p>
          <a className="btn primary" href="#contact">Start Your Project <ArrowRight size={17}/></a>
        </div>

        <div className="reason-grid">
          {reasons.map(([title, text]) => (
            <div className="reason" key={title}>
              <CheckCircle2/>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container company-profile">
        <div className="company-profile-heading">
          <div className="eyebrow light"><span/> ABOUT LIVINGLOHA ENTERPRISES</div>
          <h2>Iron & Steel Fabrication<br/><em>Across Delhi NCR</em></h2>
          <p>
            Founded in 2020 by professionals with experience at Fortune 500 technology companies,
            Livingloha Enterprises brings disciplined project management and quality-focused
            workmanship to custom iron and structural steel fabrication, with a commitment to
            international quality standards and precision craftsmanship.
          </p>
        </div>

        <div className="company-profile-grid">
          <article>
            <h3>Who We Are</h3>
            <p>
              Based in Noida, we serve homeowners, real estate developers, commercial businesses
              and industrial units throughout Pilakhua, Hapur, Ghaziabad, Greater Noida,
              Indirapuram, Sohna, Gurugram and nearby industrial areas. Our team combines
              experienced metalworking with modern fabrication methods to deliver practical,
              durable work with careful attention to measurements, safety and finish.
            </p>
          </article>
          <article>
            <h3>What We Do</h3>
            <p>
              Our work includes custom iron and mild steel (MS), galvanized iron (GI) and
              stainless steel (SS) gates, stair and balcony railings, boundary fencing and
              security grills, industrial roofing sheds and canopies, rolling shutters,
              structural steel platforms and made-to-measure fabrication.
            </p>
          </article>
          <article>
            <h3>Quality From Planning to Installation</h3>
            <p>
              We coordinate site measurements, fabrication planning, material selection and
              installation around each project's requirements. Skilled fabricators and project
              leads follow quality and safety checks through the work, with a focus on accurate
              fit, reliable construction and on-schedule execution.
            </p>
          </article>
          <article className="company-service-area">
            <h3>Areas We Serve</h3>
            <p>
              Noida · Ghaziabad · Greater Noida · Pilakhua · Hapur · Indirapuram · Sohna ·
              Gurugram (Gurgaon), including nearby industrial areas and the wider Delhi NCR region.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function ServiceAreas() {
  return (
    <section className="service-areas-section" id="service-areas">
      <div className="container">
        <div className="service-areas-heading">
          <h2>Service Areas</h2>
          <p>
            LivingLoha Enterprises provides complete custom iron and steel fabrication services
            across Noida, Greater Noida, Ghaziabad, Delhi NCR, and neighboring industrial hubs.
          </p>
        </div>

        <div className="service-areas-card">
          <p>
            We cover major industrial and commercial areas including <strong>Noida Sector 57–68,
            Noida Phase I, Phase II &amp; III, NSEZ, Hosiery Complex, EPIP, Sector 80–90, and
            Sector 137–150</strong>, and surrounding factory and commercial zones. In Greater
            Noida, our services extend across <strong>Surajpur Industrial Area, Ecotech I–VII,
            Kasna Industrial Area, Site B, Site C, UPSIDC Industrial Areas, Knowledge Park, and
            Yamuna Expressway Industrial Area</strong>. We also serve major industrial hubs across
            <strong> Ghaziabad, Sahibabad Industrial Area, Site IV, Bulandshahr Road Industrial
            Area, Kavi Nagar, Mohan Nagar, Loni, Tronica City, Dasna, and Masuri</strong>. For
            Delhi NCR and Haryana projects, we cover <strong>Okhla, Bawana, Narela, Wazirpur,
            Mayapuri, Naraina, Patparganj, Faridabad, Ballabhgarh, IMT Faridabad, Gurugram,
            Udyog Vihar, IMT Manesar, IMT Sohna, Dharuhera, Bawal, and nearby industrial and
            factory areas</strong>. From industrial gates, MS/SS railings, boundary walls,
            structural steel, factory sheds, roofing structures, mezzanine floors, platforms,
            fencing, rolling shutters, and custom fabrication to repair and installation work,
            our fabrication setup ensures prompt, high-quality, and on-time execution for every
            project.
          </p>
        </div>
      </div>
    </section>
  );
}

function ClientCommitments() {
  const commitments = [
    {
      icon: Ruler,
      title: "Precision Craftsmanship",
      text: "Careful measurements and skilled fabrication help each gate, railing, shed or steel structure fit its purpose and site."
    },
    {
      icon: ShieldCheck,
      title: "Quality You Can Rely On",
      text: "We focus on suitable materials, strong construction, clean finishing and safety checks throughout the work."
    },
    {
      icon: CheckCircle2,
      title: "Clear, Timely Project Work",
      text: "From planning through fabrication and installation, we keep your requirements and agreed schedule in view."
    }
  ];

  return (
    <section className="client-commitments" aria-labelledby="client-commitments-title">
      <div className="container">
        <div className="client-commitments-heading">
          <h2 id="client-commitments-title">Our Commitment to Every Client</h2>
          <p>Quality standards we bring to custom iron and steel fabrication projects.</p>
        </div>

        <div className="commitment-grid">
          {commitments.map(({ icon: Icon, title, text }) => (
            <article className="commitment-card" key={title}>
              <div className="commitment-icon"><Icon size={25}/></div>
              <span className="commitment-quote" aria-hidden="true">“</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);

  const submit = e => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <section className="section contact" id="contact">
      <div className="container contact-grid">
        <div className="contact-copy">
          <div className="eyebrow"><span/> CONTACT US</div>
          <h2>Let's Talk About <em>Your Project</em></h2>
          <p>
            Send us your fabrication requirement, approximate dimensions,
            quantity and location. You can also directly call or WhatsApp us.
          </p>

          <div className="contact-details">
            <a href={`tel:+91${PHONE}`}>
              <span><Phone/></span>
              <div><small>CALL US</small><strong>{PHONE}</strong></div>
            </a>

            <a href={`mailto:${EMAIL}`}>
              <span><Mail/></span>
              <div><small>EMAIL</small><strong>{EMAIL}</strong></div>
            </a>

            <div>
              <span><MapPin/></span>
              <div><small>SERVICE AREAS</small><strong>{ADDRESS}</strong></div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={submit}>
          <div className="form-title">
            <span>FREE QUOTE</span>
            <h3>Request a Quote</h3>
          </div>

          {sent && (
            <div className="success">
              <CheckCircle2 size={17}/>
              Enquiry submitted successfully.
            </div>
          )}

          <div className="two-fields">
            <label>Name<input required name="name" placeholder="Your name"/></label>
            <label>Phone<input required name="phone" type="tel" placeholder="Mobile number"/></label>
          </div>

          <label>Email<input name="email" type="email" placeholder="Email address"/></label>

          <label>Work Required
            <select name="service" defaultValue="">
              <option value="" disabled>Select a service</option>
              {services.map(service => <option key={service.id}>{service.title}</option>)}
            </select>
          </label>

          <label>Message
            <textarea name="message" rows="5" placeholder="Dimensions, quantity, site location or other details"></textarea>
          </label>

          <button className="btn primary submit-btn" type="submit">
            Submit Enquiry <Send size={16}/>
          </button>

          <a
            className="whatsapp-form"
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hello Livingloha Enterprises, I want a quotation for fabrication work.")}`}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={17}/> WhatsApp Us Directly
          </a>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a className="logo footer-logo" href="#home">
            <span className="logo-mark"><b></b><i></i></span>
            <span className="logo-text">
              <strong>LIVINGLOHA</strong>
              <small>ENTERPRISES</small>
            </span>
          </a>
          <p>
            Custom iron and steel fabrication for homes, commercial properties and industrial
            projects across Noida, Ghaziabad, Greater Noida, Pilakhua,
            Hapur, Sohna, Gurugram and nearby industrial areas.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#services">Livingloha Services</a>
          <a href="#why-us">Why Choose Us</a>
          <a href="#contact">Contact Us</a>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          {services.slice(0, 6).map(service => (
            <a href="#services" key={service.id}>{service.title}</a>
          ))}
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <a href={`tel:+91${PHONE}`}><Phone/> {PHONE}</a>
          <a href={`mailto:${EMAIL}`}><Mail/> {EMAIL}</a>
          <span><MapPin/> {ADDRESS}</span>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Livingloha Enterprises. All Rights Reserved.</span>
        <span>Iron & Steel Fabrication • Noida, Ghaziabad, Greater Noida & Delhi NCR</span>
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello Livingloha Enterprises, I want to enquire about your fabrication services."
  );

  return (
    <a
      className="floating-whatsapp"
      href={`https://wa.me/${WHATSAPP}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
    >
      <MessageCircle/>
    </a>
  );
}

export default function App() {
  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <About/>
        <Services/>
        <WhyUs/>
        <ServiceAreas/>
        <ClientCommitments/>
        <Contact/>
      </main>
      <Footer/>
      <WhatsAppButton/>
    </>
  );
}
