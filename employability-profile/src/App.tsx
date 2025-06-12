
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const events = [
  {
    title: "Adelaide Graduate Award Q&A",
    date: "9 Apr 2025",
    location: "Online",
    image: "grad_award.jpg",
    summary: "Learned how to track 150+ hrs of volunteering and workshops as part of career recognition.",
    details: "This activity helped me understand how to strategically log and reflect on extracurricular activities for professional recognition."
  },
  {
    title: "AI for Good Health Webinar",
    date: "11 Apr 2025",
    location: "Online",
    image: "ai_health.png",
    summary: "Webinar on using AI in healthcare by Cognizant and Johnson & Johnson.",
    details: "This activity helped me understand how to strategically log and reflect on extracurricular activities for professional recognition."
  },
  {
    title: "AI for Everyone – Adelaide AI",
    date: "27 May 2025",
    location: "Online",
    image: "ai_everyone.jpg",
    summary: "Learned tools like Glasp and ChatDOC for everyday AI applications.",
    details: "This activity helped me understand how to strategically log and reflect on extracurricular activities for professional recognition."
  },
  {
    title: "Interview Skills Practice Session",
    date: "22 May 2025",
    location: "Adelaide Uni",
    image: "interview_skills.png",
    summary: "Mock interview session to improve responses and confidence for job applications.",
    details: "This activity helped me understand how to strategically log and reflect on extracurricular activities for professional recognition."
  },
  {
    title: "June Meetup – Threat Intelligence",
    date: "5 Jun 2025",
    location: "UniSA",
    image: "june_meetup.png",
    summary: "Hands-on demo on cyber threat intelligence automation using Azure & SOAR.",
    details: "This activity helped me understand how to strategically log and reflect on extracurricular activities for professional recognition."
  },
  {
    title: "Kong API Optimization Webinar",
    date: "29 May 2025",
    location: "Online",
    image: "kong_api.png",
    summary: "Learned to reduce AI infrastructure costs with modern API management.",
    details: "This activity helped me understand how to strategically log and reflect on extracurricular activities for professional recognition."
  },
  {
    title: "Mastering Copilot in Word",
    date: "29 May 2025",
    location: "Online",
    image: "copilot_word.png",
    summary: "Used Copilot to generate summaries, rewrite content, and improve writing in Word.",
    details: "This activity helped me understand how to strategically log and reflect on extracurricular activities for professional recognition."
  },
  {
    title: "Microsoft Copilot & Cybersecurity",
    date: "22 Apr 2025",
    location: "Online",
    image: "copilot_cyber.jpg",
    summary: "Session about integrating Copilot for secure identity access management.",
    details: "This activity helped me understand how to strategically log and reflect on extracurricular activities for professional recognition."
  },
  {
    title: "TechConnect Global Networking",
    date: "4 Jun 2025",
    location: "Online",
    image: "techconnect.png",
    summary: "Networked with professionals, recruiters, and peers across the globe in AI & tech.",
    details: "This activity helped me understand how to strategically log and reflect on extracurricular activities for professional recognition."
  },
  {
    title: "IT Social",
    date: "2 May 2025",
    location: "Union Hotel, Adelaide",
    image: "it_social.png",
    summary: "Relaxed after-work tech social event for IT and cybersecurity networking.",
    details: "This activity helped me understand how to strategically log and reflect on extracurricular activities for professional recognition."
  }
];
type EventType = typeof events[0];


function WelcomePage() {
  return (
    <div className="welcome" style={{ backgroundColor: '#fff', color: '#000', minHeight: '100vh', textAlign: 'center', padding: '3rem' }}>
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>Welcome to My Employability Profile</motion.h1>
      <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
        <strong>Name:</strong> Mohammad Ali Rezaei<br />
        <strong>Student ID:</strong> a1714717
      </motion.p>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.4 }}>
        This portfolio showcases my engagement in professional and industry activities during Semester 1, 2025,
        as part of the Employability Profile assignment. Click below to view my event log and learning outcomes.
      </motion.p>
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.6 }}>
        <Link to="/events" style={{ marginTop: '2rem', display: 'inline-block', padding: '1rem 2rem', backgroundColor: '#007acc', color: 'white', borderRadius: '8px', textDecoration: 'none' }}>
          View My Events
        </Link>
      </motion.div>
    </div>
  );
}

function EventDetail({ event }: { event: EventType }) {
  return (
    <div className="detail-page" style={{ backgroundColor: '#fff', color: '#000', minHeight: '100vh', padding: '2rem' }}>
      <h1>{event.title}</h1>
      <img src={`/${event.image}`} alt={event.title} style={{ width: '100%', maxWidth: '500px', height: 'auto', display: 'block', marginBottom: '1rem' }} />
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p>{event.summary}</p>
      <p><strong>What I Learned:</strong> {event.details}</p>
      <Link to="/events" style={{ color: '#007acc' }}>← Back to all events</Link>
    </div>
  );
}

function EventGrid() {
  return (
    <div className="container" style={{ backgroundColor: '#fff', color: '#000', minHeight: '100vh', paddingBottom: '3rem' }}>
      <h1>Employability Profile: Semester 1, 2025</h1>
      <p><strong>Name:</strong> Mohammad Ali Rezaei &nbsp;&nbsp; <strong>Student ID:</strong> a1714717</p>
      <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {events.map((event, idx) => (
          <motion.div
            key={idx}
            className="card"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '10px', backgroundColor: '#f9f9f9' }}
          >
            <Link to={`/event/${idx}`}><img src={`/${event.image}`} alt={event.title} style={{ width: '100%', height: '200px', objectFit: 'cover', marginBottom: '0.5rem' }} /></Link>
            <h2>{event.title}</h2>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p>{event.summary}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/events" element={<EventGrid />} />
        {events.map((event, idx) => (
          <Route key={idx} path={`/event/${idx}`} element={<EventDetail event={event} />} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
