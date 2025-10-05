
/**
 * Contact page
 * - Collects basic info and message
 * - On submit: save to localStorage and redirect to Home
 * - This fulfills the "capture and redirect" requirement without a backend
 */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact(){
  const [form, setForm] = useState({
    fname:'', lname:'', contact:'', email:'', message:''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({...prev, [name]: value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // basic validation
    if(!form.fname || !form.email || !form.message){
      alert('Please fill at least your first name, email and message.');
      return;
    }
    // save for Home page alert
    localStorage.setItem('contactSubmission', JSON.stringify(form));
    navigate('/');
  };

  return (
    <div className="container section">
      <h2>Contact Me</h2>
      <div className="card">
        <div style={{padding:'8px 0'}}>
          <p><strong>Email:</strong> mohcinebeh@gmail.com</p>
          <p><strong>Phone:</strong> +1 (437) 555-1234</p>
          <p><strong>Location:</strong> Toronto, Canada</p>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <input name="fname" placeholder="First Name" value={form.fname} onChange={handleChange} />
          <input name="lname" placeholder="Last Name" value={form.lname} onChange={handleChange} />
          <input name="contact" placeholder="Contact Number" value={form.contact} onChange={handleChange} />
          <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} />
          <textarea name="message" placeholder="Message" rows="5" value={form.message} onChange={handleChange} />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
