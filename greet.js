// Per project requirements, global variable for greeting count
let uniqueGreetings = 0;

// Global object to store names greeted (using camelCase for consistency)
var namesGreeted = {};

// Function to update greeting count and display on screen
function updateGreetCount() {
  uniqueGreetings++;
  document.getElementById('greetCount').textContent = `Unique Greetings: ${uniqueGreetings}`;
}

function GreetingApp() {
  // Instance variable to store the greeted names (not used anymore)
  // this.greetedNames = JSON.parse(localStorage.getItem(GREETINGS_KEY)) || [];

  const nameInput = document.getElementById('nameInput');
  const greetBtn = document.getElementById('greetBtn');
  const resetBtn = document.getElementById('resetBtn');
  const greetingOutput = document.getElementById('greetingOutput');
  const languageRadios = document.querySelectorAll('input[name="language"]');

  greetBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();

    // Validate name format (optional, you can add a regular expression here)
    if (!name) {
      alert('Please enter your name.');
      return;
    }

    if (namesGreeted[name] === undefined) {
      updateGreetCount();
      namesGreeted[name] = 1;
    }

    const selectedLanguage = [...languageRadios].find(radio => radio.checked).value;
    let greeting;
    switch (selectedLanguage) {
      case 'english':
        greeting = `Hello, ${name}!`;
        break;
      case 'spanish':
        greeting = `Hola, ${name}!`;
        




