import React from 'react';

const servicesData = [
  {
    title: "01. MOBILE APP DEVELOPMENT",
    items: [
      "COBRA develops mobile applications designed around specific user and business requirements.",
      "We can work on applications for Android, iOS or cross-platform environments.",
      "Mobile applications can be designed for customer services, business operations, productivity or specialised requirements.",
      "Our development approach considers functionality, usability, performance and maintainability.",
      "Applications can include user accounts, forms, notifications, local data and other required features.",
      "We can develop applications that work with online services when connectivity is required.",
      "Where appropriate, applications can also be designed around offline functionality.",
      "Secure authentication and appropriate data-handling practices can be incorporated into the application architecture.",
      "Cross-platform technologies such as Flutter can help support multiple mobile platforms from a common development approach.",
      "Native Android and iOS technologies may also be considered when platform-specific functionality is important.",
      "Examples of widely used mobile technologies include Android, iOS, Flutter and React Native.",
      "Existing applications can also be reviewed for usability, functionality or technical improvement.",
      "COBRA considers the intended users before deciding how features and screens should be structured.",
      "Application development can be planned in stages according to the size and complexity of the project.",
      "Testing is important to identify functional, compatibility and usability issues before release.",
      "We aim to create mobile solutions that are practical rather than adding unnecessary features.",
      "COBRA can discuss your mobile application requirement and determine a suitable development approach based on the actual project."
    ]
  },
  {
    title: "02. SOFTWARE & APPLICATION DEVELOPMENT",
    items: [
      "COBRA develops software applications according to defined business, operational or personal requirements.",
      "Software can be created for desktop, web-based, mobile or hybrid environments depending on the project.",
      "We begin by understanding the purpose, users, workflow and required functionality of the proposed system.",
      "Applications may include data entry, reporting, user management, search, document handling and other business functions.",
      "Custom software can be useful when existing applications do not adequately match a specific workflow.",
      "We can help convert manual processes into structured digital workflows where appropriate.",
      "Application architecture is planned with consideration for performance, maintainability and future requirements.",
      "Database design can be incorporated when the application needs structured information storage.",
      "APIs can be used when different applications or services need to exchange information.",
      "Common technologies in the software industry include .NET, Java, Python, PHP, JavaScript, Dart and SQL.",
      "Popular development platforms and tools include Microsoft Visual Studio, GitHub and Docker.",
      "Existing software can also be analysed when improvements, corrections or additional functionality are required.",
      "Access controls can be incorporated when different users require different levels of system access.",
      "Software testing helps identify functional errors and unexpected behaviour before deployment.",
      "Documentation can support future maintenance and understanding of the developed system.",
      "COBRA focuses on building software around the actual requirement instead of forcing every project into the same structure.",
      "We can evaluate your requirement and propose a practical software development approach appropriate to its scope and technical needs."
    ]
  },
  {
    title: "03. WEBSITE DEVELOPMENT",
    items: [
      "COBRA develops modern websites for businesses, organisations, services, products and digital brands.",
      "A website can be designed as an informational platform, business presence, service portal or interactive web application.",
      "We consider responsive behaviour so that the website can adapt to desktop, tablet and mobile screens.",
      "Website structure is planned to make important information clear and accessible to visitors.",
      "Professional navigation helps visitors understand the available pages and services.",
      "Website development can include forms, enquiry systems, account areas and other required functionality.",
      "Where required, websites can connect with databases, APIs, payment systems or external services.",
      "Search Engine Optimisation considerations can be incorporated into the website structure and content.",
      "Proper headings, page descriptions, meaningful content and logical page structures can support search visibility.",
      "Website performance is also considered because loading speed contributes to the overall user experience.",
      "Technologies commonly used in modern web development include HTML, CSS, JavaScript, PHP and various web frameworks.",
      "Platforms and technologies such as WordPress, React, Next.js and other web solutions may be suitable depending on the project.",
      "Existing websites can be reviewed for design, usability, content structure or technical improvements.",
      "Security considerations are important when websites collect personal information or provide user accounts.",
      "Websites should also be planned with future content updates and maintenance in mind.",
      "COBRA can help transform a business requirement into a structured and professional digital presence.",
      "We can assess your website requirement and recommend a suitable design, technology and development approach."
    ]
  },
  {
    title: "04. UI/UX DESIGN & DIGITAL EXPERIENCE",
    items: [
      "COBRA creates user interface and user experience solutions focused on clarity, usability and purposeful interaction.",
      "UI design concerns how digital screens, controls, layouts and visual elements are presented to users.",
      "UX design considers how users move through a system and complete their intended tasks.",
      "A good digital interface should make important actions understandable without unnecessary complexity.",
      "We can design interfaces for websites, mobile applications, desktop software and business systems.",
      "Information hierarchy is considered so that important content receives appropriate visual attention.",
      "Navigation structures can be planned according to the actual workflow of the intended users.",
      "Consistent typography, spacing, icons and interface elements can help create a coherent digital experience.",
      "Responsive design principles can be applied when interfaces need to work across different screen sizes.",
      "Accessibility considerations can also be included where they are relevant to the project.",
      "Tools such as Figma and Adobe Creative Cloud are widely used within professional digital design workflows.",
      "Wireframes can help establish structure before detailed visual design begins.",
      "Prototypes can be used to demonstrate how important screens and interactions are expected to work.",
      "Existing interfaces can be reviewed to identify confusing navigation, unnecessary steps or inconsistent presentation.",
      "UI/UX decisions should support the purpose of the application rather than simply follow visual trends.",
      "COBRA aims to create interfaces that are professional, understandable and appropriate for their intended audience.",
      "We can help shape your digital product from its initial interface concept through to a practical user experience."
    ]
  },
  {
    title: "05. IT SUPPORT & TECHNICAL SOLUTIONS",
    items: [
      "COBRA provides technology guidance and technical solutions for common business and digital requirements.",
      "IT support may involve software issues, system configuration, application problems or technology-related workflow challenges.",
      "We first identify the nature of the problem before considering an appropriate technical solution.",
      "Support can include troubleshooting, configuration guidance and assistance with software-related issues.",
      "Businesses may require help connecting their existing tools, systems and digital processes.",
      "Technical evaluation can help identify whether a problem is caused by software, configuration, infrastructure or workflow.",
      "We can assist with planning technology requirements for new digital projects.",
      "Existing systems can be reviewed when performance, usability or operational difficulties are affecting users.",
      "Technical documentation can help businesses maintain a clearer understanding of their systems.",
      "Appropriate backup and recovery considerations can be included when data is important to business operations.",
      "We can also help evaluate software and technology options before a business commits to a particular solution.",
      "Common business technologies may include Microsoft 365, Google Workspace, Windows, Linux and various cloud platforms.",
      "Technical support should be based on the actual environment rather than applying the same solution to every organisation.",
      "COBRA considers the available resources, technical requirements and practical limitations of each project.",
      "We aim to provide understandable technical guidance rather than unnecessary complexity.",
      "Where a requirement falls outside our appropriate scope, we can identify the relevant technical area that should be addressed.",
      "COBRA can discuss your IT requirement and help determine a practical direction for resolving or improving it."
    ]
  },
  {
    title: "06. CLOUD COMPUTING & DATA SOLUTIONS",
    items: [
      "COBRA helps businesses understand and implement suitable cloud-based technology solutions.",
      "Cloud computing can provide access to computing resources, applications and storage without relying entirely on local infrastructure.",
      "Cloud solutions may support application hosting, databases, file storage, backups and business services.",
      "We can help evaluate whether cloud infrastructure is appropriate for a particular requirement.",
      "Cloud architecture should be selected according to workload, availability, security, cost and operational needs.",
      "Popular cloud platforms include Amazon Web Services, Microsoft Azure and Google Cloud.",
      "Services such as cloud databases, object storage, virtual servers and managed applications can support different business requirements.",
      "Data migration may be considered when moving suitable information from local systems to cloud environments.",
      "Backup strategies can be designed to reduce dependence on a single storage location where appropriate.",
      "Access permissions should be configured carefully so that users receive only the access they require.",
      "Cloud environments should also be monitored and maintained according to their importance and usage.",
      "Cost management is an important consideration because cloud resources can generate ongoing usage-based expenses.",
      "COBRA can help analyse the requirement before recommending a cloud architecture or service.",
      "We consider whether a cloud, local or hybrid approach is more appropriate for the specific situation.",
      "Data handling requirements should be understood before selecting a storage or hosting solution.",
      "Our approach focuses on practical cloud adoption rather than moving systems to the cloud simply because it is a current technology trend.",
      "COBRA can help plan and develop suitable cloud and data solutions according to your technical and operational requirements."
    ]
  },
  {
    title: "07. NETWORK & INFRASTRUCTURE SOLUTIONS",
    items: [
      "COBRA provides technical guidance for network and digital infrastructure requirements.",
      "Reliable infrastructure provides the foundation for computers, applications, devices and business communication.",
      "Network requirements may include local connectivity, internet access, device communication and resource sharing.",
      "We can help assess network-related problems and identify possible technical causes.",
      "Infrastructure planning considers the number of users, devices, applications and expected network usage.",
      "Appropriate network architecture can improve manageability and support future expansion.",
      "Common networking technologies include Ethernet, Wi-Fi, routers, switches, firewalls and VPN solutions.",
      "Enterprise networking platforms from companies such as Cisco and other established vendors may be considered where appropriate.",
      "Network segmentation can help separate different systems or groups of devices according to operational requirements.",
      "Secure configuration is important when network infrastructure provides access to business systems or sensitive information.",
      "Remote access requirements should be designed with appropriate authentication and security controls.",
      "Network performance can be affected by hardware, configuration, bandwidth, interference or application behaviour.",
      "Troubleshooting should therefore begin with identifying the actual source of the problem rather than changing unrelated equipment.",
      "Infrastructure documentation can help organisations understand their network and maintain it more effectively.",
      "COBRA can assist with evaluating infrastructure requirements for new or existing digital environments.",
      "We focus on practical network solutions that match the organisation's size, usage and technical requirements.",
      "COBRA can discuss your infrastructure requirement and help identify an appropriate network and technology direction."
    ]
  },
  {
    title: "08. CYBERSECURITY & DATA PROTECTION",
    items: [
      "COBRA treats cybersecurity and data protection as important considerations in modern digital systems.",
      "Cybersecurity involves protecting systems, applications, devices and information from unauthorised access and other digital threats.",
      "Security requirements should be considered during system design rather than added only after development is completed.",
      "Strong authentication can help reduce the risk associated with unauthorised account access.",
      "Access controls can restrict sensitive information to authorised users and appropriate roles.",
      "Data encryption can help protect information while it is stored or transferred, depending on the implementation.",
      "Secure backup practices can provide an additional layer of protection against accidental loss or system failure.",
      "Security monitoring can help identify unusual activity where monitoring is appropriate to the system.",
      "Software and operating systems should be maintained with relevant security updates when applicable.",
      "Common security technologies include encryption, multi-factor authentication, firewalls, password managers and endpoint protection.",
      "Services such as Cloudflare and Microsoft security technologies demonstrate how different layers can be used within modern security environments.",
      "Security should be designed according to the sensitivity and importance of the information being protected.",
      "No technology can remove every possible security risk, so responsible security planning also considers human and operational factors.",
      "Privacy requirements should be considered when systems collect, process or store personal information.",
      "COBRA can review security-related requirements and recommend practical controls appropriate to the project.",
      "Our objective is to build security into the technology approach without making the system unnecessarily difficult for legitimate users.",
      "COBRA can help you understand and address relevant cybersecurity and data protection requirements for your digital environment."
    ]
  },
  {
    title: "09. BUSINESS AUTOMATION & SYSTEM INTEGRATION",
    items: [
      "COBRA helps businesses explore opportunities to simplify repetitive digital processes through automation.",
      "Business automation can reduce unnecessary manual steps and improve consistency in suitable workflows.",
      "We first examine how the current process operates before determining whether automation is actually beneficial.",
      "Automated workflows can be designed for data entry, notifications, approvals, reporting and other recurring activities.",
      "Different applications can be connected when they need to exchange information.",
      "APIs provide a common method for allowing software systems to communicate with each other.",
      "Integration may connect websites, mobile applications, databases, business software and external services.",
      "Automation can help staff spend less time on repetitive administrative activities.",
      "It can also provide a structured sequence for tasks that previously depended entirely on manual coordination.",
      "Systems such as Microsoft Power Automate, Zapier and various API-based platforms demonstrate common approaches to business automation.",
      "The appropriate automation method depends on the existing software, data structure and business workflow.",
      "Data validation should be considered so that automation does not simply reproduce incorrect information faster.",
      "Access permissions and security should also be considered when automated processes handle business information.",
      "Proper error handling is important because automated workflows may encounter unexpected conditions.",
      "COBRA can evaluate existing workflows and identify areas where digital automation or integration may be practical.",
      "We focus on useful automation that supports business operations rather than adding technology without a clear purpose.",
      "COBRA can help transform suitable manual processes into structured and connected digital workflows."
    ]
  },
  {
    title: "10. DIGITAL TRANSFORMATION & TECHNOLOGY CONSULTING",
    items: [
      "COBRA provides technology consultation for businesses planning new or improved digital systems.",
      "Digital transformation involves using technology to improve how an organisation operates, communicates or delivers its services.",
      "Successful transformation begins with understanding the existing process and the actual problem that needs to be addressed.",
      "We can help evaluate current technology and identify areas where improvement may be practical.",
      "Consulting may cover software, websites, mobile applications, cloud infrastructure, security and business automation.",
      "Technology choices should be based on requirements rather than popularity or unnecessary complexity.",
      "We can help compare possible approaches before development or implementation begins.",
      "Project planning can identify important functionality, technical dependencies and operational considerations.",
      "Existing systems may sometimes be improved rather than completely replaced.",
      "Integration can be considered when a business already relies on multiple software systems.",
      "Scalability can be evaluated when future growth is expected, while avoiding unnecessary infrastructure costs at the beginning.",
      "Security and privacy considerations should form part of the technology planning process.",
      "Budget, maintenance requirements and available technical resources are also important factors in technology decisions.",
      "COBRA approaches consultation with the objective of finding a practical solution for the specific requirement.",
      "We can help translate business needs into understandable technical requirements and development priorities.",
      "Our role is to support informed technology decisions rather than recommend products or services without a clear purpose.",
      "COBRA can work with you to understand your requirement and establish a suitable technology roadmap for the next stage."
    ]
  },
  {
    title: "11. COBRA CYBER VAULT",
    items: [
      "COBRA Cyber Vault is our security-focused system designed to provide an additional layer of protection around selected COBRA digital services and information.",
      "It represents COBRA's approach to organising security controls around sensitive digital data and application access.",
      "Cyber Vault can incorporate security principles such as encryption, controlled access and protected data handling where applicable.",
      "The architecture is designed with the understanding that sensitive information should not be exposed unnecessarily.",
      "Security controls can be applied according to the type of application, information and operational requirement.",
      "Authentication mechanisms help establish that access is being requested by an authorised user or device.",
      "Encryption can be used to protect sensitive information so that stored data is not simply available in readable form.",
      "Device-level protection can provide an additional security consideration for applications operating on supported devices.",
      "Backup and recovery processes can also be designed with security considerations rather than treating backups as ordinary files.",
      "COBRA Cyber Vault is intended to work as part of a broader security architecture rather than as a replacement for every cybersecurity control.",
      "Security design must also consider passwords, devices, software updates, user behaviour and the surrounding technology environment.",
      "COBRA continues to evaluate security requirements as its digital products and services develop.",
      "Cyber Vault reflects our commitment to making security and privacy important parts of the COBRA technology ecosystem.",
      "Its implementation and available protections depend on the specific COBRA product, system architecture and applicable technical environment.",
      "We avoid presenting security as an absolute guarantee because responsible cybersecurity recognises that risk can never be completely eliminated.",
      "Instead, COBRA focuses on applying appropriate security measures to reduce avoidable risks and protect digital information responsibly.",
      "COBRA Cyber Vault is our security-focused foundation for developing and maintaining safer digital experiences across applicable COBRA systems."
    ]
  }
];

export const ServicesModalContent: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
        <h3 style={{ color: 'var(--text-primary)', marginBottom: '8px', fontSize: '18px', fontWeight: 'bold' }}>SERVICES</h3>
        <p style={{ marginBottom: '16px', fontWeight: 'bold' }}>Technology Solutions Designed for Your Digital Needs</p>
        <p style={{ marginBottom: '8px' }}>COBRA provides practical technology services for individuals, businesses and organisations looking to build, improve or protect their digital systems.</p>
        <p style={{ marginBottom: '8px' }}>Our services cover software, websites, mobile applications, infrastructure, cloud technologies, cybersecurity and business-focused digital solutions.</p>
        <p style={{ marginBottom: '8px' }}>We approach each requirement according to its purpose, technical environment, security considerations and expected usage.</p>
        <p style={{ marginBottom: '8px' }}>Whether you need a new digital product, improvements to an existing system or assistance with a technical challenge, COBRA can help evaluate the requirement and identify an appropriate solution.</p>
        <p>Our focus is on creating technology that is useful, maintainable, scalable where appropriate and aligned with the actual needs of the customer.</p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
        {servicesData.map((service, index) => (
          <div key={index} style={{ 
            padding: '20px', 
            borderRadius: '12px', 
            border: '1px solid var(--border-subtle)', 
            backgroundColor: 'var(--bg-card)',
            boxShadow: 'var(--shadow-card)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <h4 style={{ fontWeight: 800, color: 'var(--accent-red)', fontSize: '16px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '10px' }}>
              {service.title}
            </h4>
            <ul style={{ paddingLeft: '20px', margin: 0, fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {service.items.map((item, itemIdx) => (
                <li key={itemIdx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ 
        marginTop: '20px', 
        padding: '24px', 
        borderRadius: '12px', 
        backgroundColor: 'var(--bg-card)', 
        border: '1px solid var(--border-subtle)',
        borderLeft: '4px solid var(--accent-red)'
      }}>
        <h4 style={{ fontWeight: 800, color: 'var(--text-primary)', fontSize: '18px', marginBottom: '12px' }}>OUR SERVICES, ONE TECHNOLOGY APPROACH</h4>
        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          From mobile applications and custom software to websites, cloud infrastructure, business automation and cybersecurity, COBRA brings different areas of technology together to address real-world digital requirements. Our approach is practical, security-conscious and focused on creating solutions that serve a clear purpose. Whether you are starting a new digital project or improving an existing system, COBRA is ready to understand your requirement and explore the technology approach that best fits your needs.
        </p>
      </div>

      <div style={{ 
        marginTop: '10px', 
        padding: '24px', 
        borderRadius: '12px', 
        backgroundColor: 'var(--bg-card)', 
        border: '1px solid var(--border-subtle)',
      }}>
        <h4 style={{ fontWeight: 800, color: 'var(--text-primary)', fontSize: '18px', marginBottom: '12px' }}>TECHNOLOGY WE BUILD. SECURITY YOU CAN TRUST.</h4>
        <div style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <p>
            COBRA is an IT-focused technology company dedicated to developing practical, reliable, and secure digital solutions for modern needs. Our work covers a broad range of technology areas, including software and application development, mobile applications, websites, cloud and data solutions, cybersecurity, privacy, automation, and other digital technologies.
          </p>
          <p>
            We believe technology should be built with a clear purpose-not simply to function, but to solve real problems, improve everyday experiences, and provide lasting value. Quality, reliability, usability, security, and privacy are important parts of our development approach, helping us create solutions that people and businesses can use with confidence.
          </p>
          <p>
            Alongside technology services, COBRA also develops its own products to address practical needs. Whether we build solutions for clients or create our own products, our approach remains the same: useful technology, thoughtful design, dependable performance, and security at the core.
          </p>
        </div>
      </div>

      <div style={{ 
        marginTop: '10px', 
        padding: '24px', 
        borderRadius: '12px', 
        backgroundColor: 'var(--bg-card)', 
        border: '1px solid var(--border-subtle)',
      }}>
        <h4 style={{ fontWeight: 800, color: 'var(--accent-red)', fontSize: '18px', marginBottom: '12px' }}>OUR NOTES. YOUR PRIVACY. YOUR CONTROL.</h4>
        <div style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <p>
            Secure NOTE is COBRA's own secure digital note application, created for people who want a private and reliable place to keep their important information.
          </p>
          <p>
            Unlike ordinary note-taking applications, Secure NOTE was designed with a security-first approach. From account identity and encryption to device protection and secure backup, the application is built to keep your information protected throughout its lifecycle.
          </p>
          <p>
            Secure NOTE works offline, helping keep your personal notes away from unnecessary online exposure. Your information is protected using modern encryption and multiple layers of security designed to provide stronger protection for your valuable data.
          </p>
          
          <h5 style={{ fontWeight: 700, color: 'var(--text-primary)', marginTop: '16px' }}>Security at Every Layer</h5>
          <p>Secure NOTE incorporates multiple protection mechanisms, including:</p>
          <ul style={{ paddingLeft: '20px' }}>
            <li>AES-256 encryption</li>
            <li>Secure account identity</li>
            <li>Master Password protection</li>
            <li>Biometric authentication</li>
            <li>Device-level protection</li>
            <li>Automatic app locking</li>
            <li>Secure encrypted backup</li>
            <li>Screenshot protection</li>
            <li>Memory protection</li>
            <li>Protected backup & restore process</li>
          </ul>
          <p style={{ fontWeight: 600 }}>The goal is simple: Your information should belong to you - and its protection should come first.</p>

          <h5 style={{ fontWeight: 700, color: 'var(--text-primary)', marginTop: '16px' }}>Built for Real People</h5>
          <p>
            Secure NOTE isn't designed only for technology experts. It is designed for everyday people who need a secure place for their personal notes, important information, records and other valuable digital content. Whether you use it for everyday notes or information you consider important, Secure NOTE gives you a dedicated environment where privacy and security are treated as fundamental features, not optional extras.
          </p>
        </div>
      </div>

      <div style={{ 
        marginTop: '10px', 
        padding: '24px', 
        borderRadius: '12px', 
        backgroundColor: 'var(--bg-card)', 
        border: '1px solid var(--border-subtle)',
        borderLeft: '4px solid var(--text-primary)'
      }}>
        <h4 style={{ fontWeight: 800, color: 'var(--text-primary)', fontSize: '18px', marginBottom: '12px' }}>TECHNOLOGY WITH PURPOSE</h4>
        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          COBRA brings together IT expertise, quality-focused services and its own technology products under one vision: to create technology people can depend on. From developing digital solutions for clients to building our own products such as Secure NOTE, we focus on practical innovation, reliable performance and strong security.
        </p>
        <p style={{ fontSize: '14px', color: 'var(--text-primary)', fontWeight: 600, marginTop: '12px' }}>
          Your IT needs deserve technology built with purpose - and a partner you can trust.
        </p>
      </div>

    </div>
  );
};
