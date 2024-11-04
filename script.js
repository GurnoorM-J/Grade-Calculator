function calculateGrade() {
    // Get the values from the input fields
    const grade1 = parseFloat(document.getElementById('grade1').value) || 0;
    const grade2 = parseFloat(document.getElementById('grade2').value) || 0;
    const grade3 = parseFloat(document.getElementById('grade3').value) || 0;
    const grade4 = parseFloat(document.getElementById('grade4').value) || 0;
    const grade5 = parseFloat(document.getElementById('grade5').value) || 0;
  
    // Calculate the average
    const average = (grade1 + grade2 + grade3 + grade4 + grade5) / 5;
  
    // Display the average grade
    document.getElementById('finalGrade').textContent = average.toFixed(2);
  }
  