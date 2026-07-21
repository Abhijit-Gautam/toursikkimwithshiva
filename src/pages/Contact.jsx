import HeroSection from '../components/HeroSection';

const Contact = () => {
  return (
    <>
      <HeroSection 
        image="/images/heroes/contact-hero.jpg"
        title="Get In Touch"
        subtitle="Ready to explore Sikkim? Our local experts are here to craft your perfect itinerary."
        height="40vh"
      />

      <section className="section container">
        <div className="grid grid-cols-2" style={{ gap: 'var(--spacing-xl)' }}>
          
          <div>
            <h2 style={{ color: 'var(--primary)', marginBottom: 'var(--spacing-sm)' }}>Send us a Message</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--spacing-lg)' }}>
              Fill out the form below and we will get back to you within 24 hours.
            </p>

            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Full Name</label>
                <input type="text" id="name" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(47, 107, 79, 0.2)', fontFamily: 'inherit', backgroundColor: 'var(--surface)', color: 'var(--text)' }} placeholder="Jane Doe" />
              </div>
              
              <div>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email Address</label>
                <input type="email" id="email" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(47, 107, 79, 0.2)', fontFamily: 'inherit', backgroundColor: 'var(--surface)', color: 'var(--text)' }} placeholder="jane@example.com" />
              </div>

              <div>
                <label htmlFor="interest" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Primary Interest</label>
                <select id="interest" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(47, 107, 79, 0.2)', fontFamily: 'inherit', backgroundColor: 'var(--surface)', color: 'var(--text)' }}>
                  <option style={{ backgroundColor: 'var(--surface)', color: 'var(--text)' }}>Sightseeing & Leisure</option>
                  <option style={{ backgroundColor: 'var(--surface)', color: 'var(--text)' }}>Trekking & Adventure</option>
                  <option style={{ backgroundColor: 'var(--surface)', color: 'var(--text)' }}>Culture & Monasteries</option>
                  <option style={{ backgroundColor: 'var(--surface)', color: 'var(--text)' }}>Honeymoon Package</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Message/Requirements</label>
                <textarea id="message" rows="5" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(47, 107, 79, 0.2)', fontFamily: 'inherit', resize: 'vertical', backgroundColor: 'var(--surface)', color: 'var(--text)' }} placeholder="Tell us about your travel dates and group size..."></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}>Send Inquiry</button>
            </form>
          </div>

          <div>
            <h2 style={{ color: 'var(--primary)', marginBottom: 'var(--spacing-sm)' }}>Our Office</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--spacing-lg)' }}>
              Visit us for a cup of local Temi tea and a chat about your travel plans.
            </p>

            <div style={{ backgroundColor: 'var(--surface)', padding: 'var(--spacing-md)', borderRadius: 'var(--radius-lg)', marginBottom: 'var(--spacing-lg)', border: '1px solid rgba(47, 107, 79, 0.15)' }}>
              <p style={{ fontWeight: '600', marginBottom: '0.25rem', color: 'var(--primary)' }}>Address:</p>
              <p style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>Tour Sikkim With Shiva<br/>MG Marg, Near Tourism Office<br/>Gangtok, Sikkim 737101, India</p>

              <p style={{ fontWeight: '600', marginBottom: '0.25rem', color: 'var(--primary)' }}>Phone:</p>
              <p style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>+91 9775228928</p>

              <p style={{ fontWeight: '600', marginBottom: '0.25rem', color: 'var(--primary)' }}>Email:</p>
              <p style={{ color: 'var(--text-muted)' }}>info@toursikkimwithshiva.com<br/>bookings@toursikkimwithshiva.com</p>
            </div>

            {/* Map Placeholder */}
            <div style={{ width: '100%', height: '250px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(47, 107, 79, 0.2)' }}>
              <span style={{ color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Interactive Map Placeholder
              </span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Contact;
