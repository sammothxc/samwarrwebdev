import { useState, useEffect, React } from 'react'
import { useForm, ValidationError } from '@formspree/react';
import Typewriter from 'typewriter-effect';
import './App.css'

function Menu({ toggleTheme, theme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header id='sticky-header'>
      <nav>
      <div className='menu-toggle' onClick={toggleMenu}>
          <span className='menu-icon'>☰</span>
        </div>
        <ul className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <a className='draw-border' onClick={() => scrollToSection('home')}>
              Home /<p className='outline'>/</p>
            </a>
          </li>
          <li>
            <a className='draw-border' onClick={() => scrollToSection('services')}>
              What We Do /<p className='outline'>/</p>
            </a>
          </li>
          <li>
            <a className='draw-border' onClick={() => scrollToSection('projects')}>
              Completed Projects /<p className='outline'>/</p>
            </a>
          </li>
          <li>
            <a className='draw-border' onClick={() => scrollToSection('contact')}>
              Contact Us /<p className='outline'>/</p>
            </a>
          </li>
          <li className='toggle-container'>
            <div>Dark Mode /<p className='outline'>/</p></div>
            <input
              type='checkbox'
              id='theme-toggle'
              className='theme-toggle-checkbox'
              checked={theme === 'dark'}
              onChange={toggleTheme}
            />
            <label
              htmlFor='theme-toggle'
              className='theme-toggle-label'>
            </label>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Home() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <section id='home' className='section'>
      <div>
        <div>
          <img src={`/mainbl.svg`} className='svgs dark' id='home-svg'/>
        </div>
      </div>
      <div className='terminal-container'>
        <div className='terminal mono'>
          <Typewriter
            className='typewriter'
            options={{
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 20,
              cursor: '█',
            }}
            onInit={(typewriter) => {
              typewriter.typeString(
                  '//> Empowering businesses and individuals through custom web solutions'
                )
                .pauseFor(1000)
                .deleteChars(20)
                .typeString('webserver management')
                .pauseFor(2500)
                .deleteChars(20)
                .typeString('social media handling')
                .pauseFor(2500)
                .deleteAll()
                .start();
            }}
          />
        </div>
      </div>
      <a className='draw-border button o2' onClick={() => scrollToSection('services')}>
        Learn More /<p className='outline o2'>/</p>
      </a>
    </section>
  )
}

function Services() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const [rawHTML, setRawHTML] = useState('');
  useEffect(() => {
    const captureRawHTML = () => {
      const rawHTMLString = document.documentElement.outerHTML;
      setRawHTML(rawHTMLString);
    };
    captureRawHTML();
  }, []);

  return (
    <section id='services' className='section'>
      <h1>What We Do /<p className='outline o1'>/</p></h1>
      <div className='skills-grid'>
        <div className='skill'>
          <div className='scrolling-background mono' id='scrolly'>
            {rawHTML}
          </div>
          <h2>Web Development /<p className='outline o2'>/</p></h2>
          <div className='wrpr mono'>
            <img src={`/webdev.jpg`} className='skill-image'/>
            <p>
              From single page portfolios to multi-page business websites,
              we offer different tiers to suit all your needs. These are:
            </p>
            <li>
              Static Websites (HTML, CSS, JS)
            </li>
            <li>
              Dynamic Websites (Backend development, Node.js server-side and
              client-side, and API calls)
            </li>
            <li>
              Web Applications (User authentication, information portals,
              one-off online web tools)
            </li>
            <p>
              We specialize in the React.js framework, but we are open to
              developing your website using the framework of your choice. 
              To enhance your website, we offer these additional services:
            </p>
            <li>
              Business logo design
            </li>
            <li>
              SEO optimization
            </li>
            <li>
              Designated copywriting for web content
            </li>
          </div>
        </div>
        <div className='skill'>
          <h2>Web Hosting /<p className='outline o2'>/</p></h2>
          <div className='wrpr mono'>
            <p>
              Don't have a web sever or a domain? We will host your website for
              you. We handle all the technical details so you can
              focus on your business. These services are included with hosting:
            </p>
            <li>
              Making sure your website is always online and functioning properly
            </li>
            <li>
              Website analytics and security (provided by Cloudflare)
            </li>
            <li>
              Domain registration and management (yourbusiness.com)
            </li>
            <li>
              Custom email addresses (you@yourbusiness.com)
            </li>
            <li>
              Webpage load time optimization
            </li>
            <li>
              Form and quote submission handling
            </li>
            <img src={`/webhost.svg`} className='skill-image svgs'/>
          </div>
        </div>
        <div className='skill'>
          <h2>Other Services /<p className='outline o2'>/</p></h2>
          <div className='wrpr mono'>
            <p>
              In addition to web development and hosting, we offer 
              a variety of other services to enhance your online presence 
              and marketing efforts:
            </p>
            <br />
            <li>
              Social Media Management
              <br />
              <br />
              We can manage your social media accounts on platforms 
              like Facebook and Instagram, creating engaging content, 
              scheduling posts, and interacting with your audience 
              to boost your brand's online visibility and engagement.
            </li>
            <br />
            <li>
              Logo Design
              <br />
              <br />
              Our design team uses tools such as Photoshop, Gimp, 
              and Inkscape to create unique and professional logos 
              that represent your brand's identity. We work closely 
              with you to ensure the logo aligns with your vision 
              and business goals.
            </li>
            <br />
            <li>
              Search Engine Optimization (SEO)
              <br />
              <br />
              We provide comprehensive SEO services to improve 
              your website's search engine ranking. Our services 
              include keyword research, on-page and off-page 
              optimization, and enhancing website performance to 
              ensure faster load times, all aimed at increasing 
              your online visibility and attracting more traffic.
            </li>
          </div>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const projects = [
    {
      name: 'RootRevolution Seed Crowdfunding',
      url: 'https://rootrevolution.store',
      imgName: 'rr.jpg'
    },
    {
      name: 'SCSS Personal Portfolio',
      url: 'https://old.sam-warr.com',
      imgName: 'swp.jpg'
    },
    {
      name: 'Sam Warr Web Development Business Website',
      url: 'https://samwarrwebdev.com',
      imgName: 'swwd.jpg'
    },
    // Add new projects here
  ];

  return (
    <section id='projects' className='section'>
      <h1>Completed Projects /<p className='outline o1'>/</p></h1>
      <div className='projects-grid'>
        {projects.map((project, index) => (
          <a
            href={project.url}
            className='project-link'
            key={index}
            target='_blank'
            rel='noopener noreferrer' >
            <div className='project draw-border'>
              <img
                src={`/${project.imgName}`}
                alt={project.name}
                className='project-image'
                />
              <hr />
              <h3>{project.name} /<p className='outline o3'>/</p></h3>
              <p className='mono'>{project.url}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <section id='contact'>
      <h1>Let's Start /<p className='outline o1'>/</p></h1>
      <p className='mono'>
        Send us an email or a quote and we'll get back to you as soon as possible!
      </p>
      <div id='contact-container'>
        <div id='left' className='contact'>
          <a onClick={togglePopup} className='cta mono'>
            <span>Get Quote</span>
            <span>
              <svg width='66px' height='43px' viewBox='0 0 66 43' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'>
                <g id='arrow' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                  <path className='one' d='M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z' fill='#FFFFFF'></path>
                  <path className='two' d='M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z' fill='#FFFFFF'></path>
                  <path className='three' d='M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z' fill='#FFFFFF'></path>
                </g>
              </svg>
            </span> 
          </a>
          {showPopup && <Popup togglePopup={togglePopup} />}
        </div>
        <div className='contact o0'>
          <div>/<p className='outline o0'>/</p></div>
        </div>
        <div id='right' className='contact'>

          <a 
            href='mailto:contact@samwarrwebdev.com?subject=Inquiry'
            className='mono email'>
            contact@samwarrwebdev.com
          </a>
        </div>
      </div>
      <div id='links-container'>
        <div id='footer-img'>
          <img id='footerimg' src={'/footerimg.svg'} className='svgs dark'/>
        </div>
        <div className='links'>
          <li><a href='/'>
            Copyright © 2024, Sam Warr Web Development
          </a></li>
          <br />
          <li><a href='https://github.com/sammothxc/samwarrwebdev'>
            Github
          </a></li>
          <li><a href='/sitemap.xml'>
            Sitemap
          </a></li>
          <li><a href='/mainbl.svg'>
            Logo
          </a></li>
          <li><a href='/copyright-notice'>
            Copyright Notice
          </a></li>
          <li><a href='/privacy-policy'>
            Privacy Policy
          </a></li>
        </div>
      </div>
    </section>
  )
}

function Popup({ togglePopup }) {
  const handleClose = () => {
    togglePopup();
  };
  return (
    <div id='popup-overlay'>
      <div id='popup-content'>
        <div id='menu'>
          <h2>Get Quote /<p className='outline o2'>/</p></h2>
          <a onClick={handleClose} id='close-btn' className='draw-border button'>
            Close
          </a>
        </div>
        <Quote />
      </div>
    </div>
  );
}

function Quote() {
  const [state, handleSubmit] = useForm('mdoqvzyp');
  if (state.succeeded) {
      return <p id='sent'>Thanks for your interest! We will get back to you as soon as we can.</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>
        Your Name
      </label>
      <input
        className='input-box'
        id='name'
        type='text' 
        name='name'
        required
      />
      <ValidationError 
        prefix='Name' 
        field='name'
        errors={state.errors}
      />
      <label htmlFor='email'>
        Email Address
      </label>
      <input
      className='input-box'
        id='email'
        type='email' 
        name='email'
        required
      />
      <ValidationError 
        prefix='Email' 
        field='email'
        errors={state.errors}
      />
      <p htmlFor='service'>
        Service(s) Requesting
      </p>
      <div id='cbox'>

        <label htmlFor='single'>
          <input
            id='single'
            type='checkbox' 
            name='service'
            value='single' />
          <span className='mono'>Single Page Website</span>
        </label>

        <label htmlFor='multi'>
          <input
            id='multi'
            type='checkbox' 
            name='service'
            value='multi' />
          <span className='mono'>Multi-page Website</span>
        </label>

        <label htmlFor='webapp'>
          <input
            id='webapp'
            type='checkbox' 
            name='service'
            value='webapp' />
          <span className='mono'>Web Application</span>
        </label>

        <label htmlFor='mgmt'>
          <input
            id='mgmt'
            type='checkbox' 
            name='service'
            value='mgmt' />
          <span className='mono'>Complete Webserver Management</span>
        </label>

        <label htmlFor='social'>
          <input
            id='social'
            type='checkbox' 
            name='service'
            value='social' />
          <span className='mono'>Social Media Management</span>
        </label>

      </div>
      <ValidationError 
        prefix='Service' 
        field='service'
        errors={state.errors}
      />
      <label htmlFor='budget'>
        Budget (USD$)
      </label>
      <input
        className='input-box'
        id='budget'
        type='number' 
        name='budget'
        required
      />
      <ValidationError 
        prefix='Budget' 
        field='budget'
        errors={state.errors}
      />
      <label htmlFor='message'>
        Put your message here (optional)
      </label>
      <textarea
        className='input-box'
        id='message'
        name='message'
      />
      <ValidationError 
        prefix='Message' 
        field='message'
        errors={state.errors}
      />
      <button className='button draw-border' type='submit' disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

function App() {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem('theme') || 'dark'
  );

  useEffect(() => {
    document.body.setAttribute('class', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.body.setAttribute('class', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    if (localStorage.getItem('intro') === 'true') return;
    const timeoutId = setTimeout(() => {toggleTheme();}, 2000);
    return () => clearTimeout(timeoutId);
  }, []);
  useEffect(() => {
    if (localStorage.getItem('intro') === 'true') return;
    const timeoutId = setTimeout(() => {toggleTheme();}, 3200);
    return () => clearTimeout(timeoutId);
  }, []);
  useEffect(() => {
    if (localStorage.getItem('intro') === 'true') return;
    const timeoutId = setTimeout(() =>
      {localStorage.setItem('intro', 'true');}, 500
    );
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <Menu theme={theme} toggleTheme={toggleTheme} />
      <Home />
      <Services />
      <Projects />
      <Contact />
    </div>
  )
}
export default App