// Per project requirements, localStorage usage is outside the factory function
const GREETINGS_KEY = 'greetedNames';

function GreetingApp() {
  // Instance variable to store the greeted names
  this.greetedNames = JSON.parse(localStorage.getItem(GREETINGS_KEY)) || [];

  const nameInput = document.getElementById('nameInput');
  const greetBtn = document.getElementById('greetBtn');
  const greetingOutput = document.getElementById('greetingOutput');

  greetBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();

    // Validate name format (optional, you can add a regular expression here)
    if (!name) {
      alert('Please enter your name.');
      return;
    }

    if (!this.greetedNames.includes(name)) {
      this.greetedNames.push(name);
      localStorage.setItem(GREETINGS_KEY, JSON.stringify(this.greetedNames));
      greetingOutput.textContent = `Hello, ${name}!`;
      nameInput.value = ''; // Clear the input field
    } else {
      greetingOutput.textContent = `Hi again, ${name}!`; // Greet returning users differently
    }
  });
}

const greetingsApp = new GreetingApp();
