// Load team name from storage on page load
document.getElementById('teamInput').value = localStorage.getItem('teamName');
generateResolution();

function generateResolution() {
  const team = document.getElementById('teamInput').value || 'Team Name';
  const diagnose = document.getElementById('diagnoseInput').value || 'N/A';
  const action = document.getElementById('actionInput').value || 'N/A';
  const nextAction = document.getElementById('nextActionInput').value || 'N/A';
  const comments = document.getElementById('commentsInput').value || 'N/A';

  const includeDate = document.getElementById('includeDate').checked;
  const formattedDate = includeDate ? formatDate(new Date()) : '';

  const teamNamePart = `[${team}] ${formattedDate ? formattedDate + '<br />' : '' + '<br />'}`;
  const diagnosisPart = `Diagnosis: ${diagnose} <br />`;
  const actionPart = `Action: ${action} <br />`;
  const nextActionPart = `Next Action: ${nextAction} <br />`;
  const commentsPart = `Comments: ${comments}`;

  const resolutionOutput = teamNamePart + diagnosisPart + actionPart + nextActionPart + commentsPart;

  document.getElementById('output').innerHTML = resolutionOutput;
}

function saveTeamName() {
  const teamName = document.getElementById('teamInput').value;
  localStorage.setItem('teamName', teamName);
}
  
function formatDate(date) {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString().slice(-0);
  return `${day}/${month}/${year}`;
}

function clearFields() {
  document.getElementById('diagnoseInput').value = '';
  document.getElementById('actionInput').value = '';
  document.getElementById('nextActionInput').value = '';
  document.getElementById('commentsInput').value = '';

  generateResolution();
}

function copyToClipboard() {
  const outputText = document.getElementById('output').innerText;
  const tempTextArea = document.createElement('textarea');
  tempTextArea.value = outputText;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  tempTextArea.setSelectionRange(0, 99999);
  document.execCommand('copy');
  document.body.removeChild(tempTextArea);

  const statusMessage = document.getElementById('statusMessage');
  statusMessage.textContent = 'Resolution copied to clipboard!';

  setTimeout(() => {
    statusMessage.textContent = '';
  }, 1500);
}

// Theme
function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark-mode');
  const isDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);

  const themeToggle = document.querySelector('.theme-toggle');
  themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
}

const isDarkMode = JSON.parse(localStorage.getItem('darkMode'));
if (isDarkMode) {
    document.body.classList.add('dark-mode');
}

const themeToggle = document.querySelector('.theme-toggle');
themeToggle.textContent = isDarkMode ? '☀️' : '🌙';