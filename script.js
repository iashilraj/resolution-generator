function generateResolution() {
    const diagnose = document.getElementById('diagnoseInput').value || 'N/A';
    const action = document.getElementById('actionInput').value || 'N/A';
    const nextAction = document.getElementById('nextActionInput').value || 'N/A';
    const comments = document.getElementById('commentsInput').value || 'N/A';
  
    const today = new Date();
    const formattedDate = formatDate(today);
  
    const resolutionOutput = `
      [AMS CSS] ${formattedDate} <br />
      Diagnosis: ${diagnose} <br />
      Action: ${action} <br />
      Next Action: ${nextAction} <br />
      Comments: ${comments}
    `;
  
    document.getElementById('output').innerHTML = resolutionOutput;
  }
  
  function formatDate(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
    return `${day}/${month}/${year}`;
  }

  function clearFields() {
    // Clear input fields
    document.getElementById('diagnoseInput').value = '';
    document.getElementById('actionInput').value = '';
    document.getElementById('nextActionInput').value = '';
    document.getElementById('commentsInput').value = '';
  
    // Clear output
    document.getElementById('output').innerHTML = '';
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

    alert('Resolution copied to clipboard!');
  }