import React from 'react';

interface ServiceItem {
  number: string;
  title: string;
  tagline: string;
  items: string[];
}

const servicesList: ServiceItem[] = [
  {
    number: "01",
    title: "MOBILE APP DEVELOPMENT",
    tagline: "Native & cross-platform mobile solutions engineered for security and usability",
    items: [
      "COBRA develops mobile applications designed around specific user and business requirements.",
      "We build applications for Android, iOS or cross-platform environments using Flutter and React Native.",
      "Mobile applications can be designed for customer services, business operations, productivity or specialised requirements.",
      "Our development approach considers functionality, usability, performance and maintainability.",
      "Applications can include user accounts, forms, notifications, local data and offline-first functionality.",
      "Secure authentication and client-side data-handling practices are incorporated into the application architecture.",
      "Thorough testing identifies functional, compatibility and usability issues before release."
    ]
  },
  {
    number: "02",
    title: "SOFTWARE & APPLICATION DEVELOPMENT",
    tagline: "Tailored software solutions designed around custom business workflows",
    items: [
      "COBRA develops custom software applications according to defined business, operational or personal requirements.",
      "Software can be created for desktop, web-based, mobile or hybrid environments.",
      "Applications cover data entry, reporting, user management, search, document handling and business functions.",
      "We help convert manual processes into structured, automated digital workflows.",
      "Application architecture is planned with consideration for performance, maintainability and future requirements.",
      "Database design and API integrations ensure seamless, secure data exchange.",
      "Enterprise access controls ensure role-based permissions and audit trails."
    ]
  },
  {
    number: "03",
    title: "WEBSITE DEVELOPMENT",
    tagline: "High-performance, responsive websites and modern digital portals",
    items: [
      "COBRA develops modern websites for businesses, organisations, services, products and digital brands.",
      "Responsive design ensures an optimal experience across desktop, tablet and mobile devices.",
      "Logical information architecture and intuitive navigation make critical information immediately accessible.",
      "Integrations with databases, APIs, payment systems and third-party services.",
      "Built-in search engine optimisation (SEO), semantic markup and fast loading speed.",
      "Security-first architecture for user accounts and data collection.",
      "Designed for long-term scalability and effortless content maintenance."
    ]
  },
  {
    number: "04",
    title: "UI/UX DESIGN & DIGITAL EXPERIENCE",
    tagline: "Clarity, purpose, and intuitive human-centered interface design",
    items: [
      "COBRA creates user interface and user experience solutions focused on clarity, usability and purposeful interaction.",
      "Information hierarchy ensures critical content and calls-to-action receive appropriate visual attention.",
      "Coherent typography, balanced spacing, curated iconography and fluid micro-interactions.",
      "Interactive wireframes and high-fidelity prototypes demonstrate workflows prior to development.",
      "Design audits for existing interfaces to eliminate friction, clutter and navigation roadblocks.",
      "Accessibility considerations built into color palettes, contrast ratios and touch targets."
    ]
  },
  {
    number: "05",
    title: "IT SUPPORT & TECHNICAL SOLUTIONS",
    tagline: "Comprehensive technology guidance, infrastructure diagnosis and issue resolution",
    items: [
      "COBRA provides technology guidance and technical solutions for digital requirements.",
      "Thorough diagnosis to determine whether issues originate in software, configuration, infrastructure or workflow.",
      "Assistance with software configuration, environment setup and system optimization.",
      "Reliable backup strategies and disaster recovery planning to safeguard mission-critical data.",
      "Clear, actionable documentation to empower your internal teams.",
      "Technology evaluation and feasibility studies prior to making major software investments."
    ]
  },
  {
    number: "06",
    title: "CLOUD COMPUTING & DATA SOLUTIONS",
    tagline: "Scalable, resilient cloud infrastructure and sovereign data architecture",
    items: [
      "COBRA helps businesses understand and implement suitable cloud-based technology solutions.",
      "Architectures tailored for AWS, Microsoft Azure, Google Cloud and hybrid deployments.",
      "Secure data migration from legacy local systems to modern cloud environments.",
      "Automated backup strategies with decentralized redundancy.",
      "Granular access control and least-privilege permission configuration.",
      "Proactive cloud cost optimization and continuous resource monitoring."
    ]
  },
  {
    number: "07",
    title: "NETWORK & INFRASTRUCTURE SOLUTIONS",
    tagline: "Robust, high-throughput network engineering with enterprise security",
    items: [
      "Technical guidance and planning for physical and digital infrastructure requirements.",
      "Network architecture designed for scalability, low latency and maximum uptime.",
      "Network segmentation to isolate sensitive systems and manage threat vectors.",
      "Enterprise VPN and zero-trust remote access solutions for distributed workforces.",
      "Root-cause diagnosis for throughput bottlenecks and configuration conflicts.",
      "Comprehensive network topology documentation and compliance mapping."
    ]
  },
  {
    number: "08",
    title: "CYBERSECURITY & DATA PROTECTION",
    tagline: "Defense-in-depth protection, zero-knowledge encryption and threat mitigation",
    items: [
      "Security requirements designed into systems from day one rather than patched on later.",
      "Zero-knowledge encryption and client-side cryptographic key derivation.",
      "Multi-factor authentication (MFA) and hardware security key integration.",
      "Rigorous role-based access control and end-to-end data encryption at rest and in transit.",
      "Continuous threat monitoring, incident response planning and patch management.",
      "Privacy compliance alignment for sensitive personal and corporate data."
    ]
  },
  {
    number: "09",
    title: "BUSINESS AUTOMATION & SYSTEM INTEGRATION",
    tagline: "Streamlining repetitive digital operations and connecting fragmented systems",
    items: [
      "Evaluation of existing manual workflows to identify high-value automation opportunities.",
      "Automated workflows for data entry, transaction routing, approvals and notifications.",
      "Custom API connectors to unify disparate software systems and databases.",
      "Robust data validation to prevent incorrect information propagation.",
      "Resilient error handling and logging for automated mission-critical pipelines.",
      "Measurable time savings and elimination of human data-entry errors."
    ]
  },
  {
    number: "10",
    title: "DIGITAL TRANSFORMATION & CONSULTING",
    tagline: "Strategic technology roadmaps grounded in practical business realities",
    items: [
      "Holistic technology assessments to modernize outdated legacy processes.",
      "Objective technology evaluations focused on proven ROI rather than hype cycles.",
      "Structured project roadmaps identifying key milestones, risks and dependencies.",
      "Guidance on optimizing existing infrastructure vs. building net-new platforms.",
      "Budget planning, vendor assessment and technical team alignment."
    ]
  },
  {
    number: "11",
    title: "COBRA CYBER VAULT",
    tagline: "Our flagship personal zero-knowledge security foundation and cryptographic locker",
    items: [
      "Client-side encryption using Argon2id key derivation and AES-256-GCM ciphers.",
      "Completely zero-knowledge architecture: no backdoors, no telemetry, no tracking.",
      "Biometric hardware authentication and local secure enclave protection.",
      "Encrypted offline snapshots and cold-storage compatibility.",
      "Memory protection, automatic locking, and screenshot prevention.",
      "Built for privacy-conscious individuals and security-demanding organizations."
    ]
  }
];

export const ServicesPage: React.FC = () => {
  return (
    <main className="page-main-content" style={{ animation: 'fadeIn 0.3s ease-out' }}>
      <div className="page-inner-container">
        
        {/* Page Header */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{
            display: 'inline-block',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.12em',
            color: 'var(--accent-red)',
            textTransform: 'uppercase',
            marginBottom: '8px',
          }}>
            What We Do
          </div>
          <h1 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
            marginBottom: '14px',
            lineHeight: 1.15,
          }}>
            Technology Solutions Designed for Your Digital Needs
          </h1>
          <p style={{
            fontSize: '16px',
            color: 'var(--text-secondary)',
            maxWidth: '820px',
            lineHeight: 1.6,
          }}>
            COBRA provides practical technology services for individuals, businesses and organisations looking to build, improve or protect their digital systems. Our services cover software, websites, mobile applications, infrastructure, cloud technologies, cybersecurity and business-focused digital solutions.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '24px',
          marginBottom: '48px',
        }}>
          {servicesList.map((service) => (
            <div
              key={service.number}
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '16px',
                padding: '28px',
                boxShadow: 'var(--shadow-card)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'var(--accent-red)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(2, 42, 72, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.boxShadow = 'var(--shadow-card)';
              }}
            >
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '12px',
                  borderBottom: '1px solid var(--border-subtle)',
                  paddingBottom: '12px',
                }}>
                  <span style={{
                    fontSize: '13px',
                    fontWeight: 800,
                    color: 'var(--accent-red)',
                    letterSpacing: '0.08em',
                  }}>
                    SERVICE {service.number}
                  </span>
                  <span style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-red)',
                  }} />
                </div>

                <h3 style={{
                  fontSize: '17px',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.01em',
                  marginBottom: '8px',
                  lineHeight: 1.3,
                }}>
                  {service.title}
                </h3>

                <p style={{
                  fontSize: '13px',
                  color: 'var(--text-muted)',
                  marginBottom: '16px',
                  lineHeight: 1.5,
                  fontWeight: 500,
                }}>
                  {service.tagline}
                </p>

                <ul style={{
                  margin: 0,
                  paddingLeft: '18px',
                  fontSize: '13.5px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}>
                  {service.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Highlight Banners */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <div style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderLeft: '5px solid var(--accent-red)',
            borderRadius: '14px',
            padding: '28px',
            boxShadow: 'var(--shadow-card)',
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: 800,
              color: 'var(--text-primary)',
              marginBottom: '10px',
              letterSpacing: '-0.01em',
            }}>
              OUR SERVICES, ONE TECHNOLOGY APPROACH
            </h3>
            <p style={{
              fontSize: '14.5px',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
              margin: 0,
            }}>
              From mobile applications and custom software to websites, cloud infrastructure, business automation and cybersecurity, COBRA brings different areas of technology together to address real-world digital requirements. Our approach is practical, security-conscious and focused on creating solutions that serve a clear purpose.
            </p>
          </div>

          <div style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '14px',
            padding: '28px',
            boxShadow: 'var(--shadow-card)',
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: 800,
              color: 'var(--accent-red)',
              marginBottom: '12px',
              letterSpacing: '-0.01em',
            }}>
              OUR NOTES. YOUR PRIVACY. YOUR CONTROL.
            </h3>
            <p style={{
              fontSize: '14.5px',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
              marginBottom: '14px',
            }}>
              Secure NOTE is COBRA's dedicated digital note application, created for individuals and teams who require an uncompromisingly private and dependable repository for critical records and sensitive information.
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: '10px',
              marginTop: '12px',
            }}>
              {[
                'AES-256 Encryption',
                'Client-Side Key Derivation',
                'Biometric Authentication',
                'Offline-First Functionality',
                'Zero Telemetry / No Ads',
                'Encrypted Cold Backup',
              ].map((feat, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--bg-page)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '8px',
                    padding: '10px 14px',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <span style={{ color: 'var(--accent-red)', fontWeight: 800 }}>✓</span>
                  {feat}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </main>
  );
};
