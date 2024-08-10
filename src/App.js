import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setInterests((prev) =>
      checked ? [...prev, value] : prev.filter((interest) => interest !== value)
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <h1>Hi, I'm Alexander</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      <h2>Newsletter Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Interests:</label>
          <div>
            <label>
              <input
                type="checkbox"
                value="Coding"
                onChange={handleCheckboxChange}
              />
              Coding
            </label>
            <label>
              <input
                type="checkbox"
                value="Design"
                onChange={handleCheckboxChange}
              />
              Design
            </label>
            <label>
              <input
                type="checkbox"
                value="Marketing"
                onChange={handleCheckboxChange}
              />
              Marketing
            </label>
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div>
          <h3>Thank you, {name}!</h3>
          <p>Your subscription has been confirmed for {email}.</p>
          {interests.length > 0 && (
            <p>Your interests: {interests.join(', ')}</p>
          )}
        </div>
      )}
    </main>
  );
}

export default App;
