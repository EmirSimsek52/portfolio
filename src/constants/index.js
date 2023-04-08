import {
  sacaryawebdemo,
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    webtshirt,
     bank,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    cryptoimg,
    jobit,
    tripguide,
    threejs,
    cslogo,
    javalogo,
    firebaselogo,
    sqllogo,
    rentalapp,
    csporject 
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "project",
      title: "Project",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Software Developer",
      icon: backend,
    },
   
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
      title:"HTML 5"
    },
    {
      name: "CSS 3",
      icon: css,
      title: "CSS 3"
    },
    {
      name: "JavaScript",
      icon: javascript,
      title: "JavaScript",
    },
    {
      name: "React JS",
      icon: reactjs,
      title: "React JS",
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
      title: "Tailwind CSS",
    },
    {
      name: "git",
      icon: git,
      title: "git",
    },
    {
      name: "threejs",
      icon: threejs,
      title: "ThreeJs",
    },
    {
      name: "C#",
      icon: cslogo,
      title: "C#",
    },
    {
      name: "Java",
      icon: javalogo,
      title: "Java",
    },
    {
      name: "Firebase",
      icon: firebaselogo,
      title: "Firebase",
    },
    {
      name: "Sql",
      icon: sqllogo,
      title: "Sql",
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent App",
      description:
        "Rental app made for safe and quick rent car. Customers just type their want and send the informations then Admin can see the informations on his adminpage.",
      tags: [
        {
          name: "React-Native",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "orange-text-gradient",
        },
      ],
      image: rentalapp,
      source_code_link: "https://github.com/EmirSimsek52/RentaCarApp",
    },
    {
      name: "Crypto Live Price",
      description:
        "CryptoFlash include Top 50 cryptocurruncies, you can see price details and project informations on this website.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
      ],
      image: cryptoimg,
      source_code_link: "https://github.com/EmirSimsek52/CryptoWeb",
    },
    {
      name: "Car Rental Automation",
      description:
        "You can register any information about customers, cars and contract in this automation. Then you can see upload and delete them.",
      tags: [
        {
          name: "C Sharp",
          color: "blue-text-gradient",
        },
        {
          name: "SQL",
          color: "green-text-gradient",
        },
      ],
      image: csporject ,
      source_code_link: "https://github.com/EmirSimsek52/RentaCarAutomation",
    },
    {
      name: "3D T-shirt Model Design",
      description:
        "Create your t-shirt with 3D model Unleash your imagination and define your own style. ",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        { 
          name: "ThreeJS",
          color: "white-text-gradient",
        },
      ],
      image: webtshirt,
      source_code_link: "https://github.com/EmirSimsek52/3DShirtDIYWeb",
    },
    {
      name: "Modern 3D Bank Concept",
      description:
        "Modern bank website with 3D model concept",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        { 
          name: "ThreeJS",
          color: "white-text-gradient",
        },
      ],
      image: bank,
      source_code_link: "https://github.com/EmirSimsek52/FlashBank3DWeb",
    },
    {
      name: "Car Rent Website",
      description:
        "Official Sacarya Rental Website demo. You can update cars info. If someone want to rent car you will get message from emailjs.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        { 
          name: "Firebase",
          color: "orange-text-gradient",
        },
        { 
          name: "EmailJS",
          color: "text-[purple]",
        },
      ],
      image: sacaryawebdemo,
      source_code_link: "https://github.com/EmirSimsek52/FlashBank3DWeb",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };