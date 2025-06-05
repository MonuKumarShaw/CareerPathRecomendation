
// function submitFeedback() {
//   const feedback = document.getElementById('feedbackText').value.trim();

//   if (!feedback) {
//     alert("Please enter some feedback before submitting.");
//     return;
//   }

//   // Optionally save feedback in localStorage
//   localStorage.setItem('userFeedback', feedback);

//   // Hide feedback form, show thank you section
//   document.getElementById('feedbackSection').style.display = 'none';
//   document.getElementById('thankyouSection').style.display = 'block';
// }
function submitFeedback() {
      const feedback = document.getElementById('feedbackText').value.trim();

      if (!feedback) {
        alert("Please enter some feedback before submitting.");
        return;
      }

      // Save in localStorage (optional)
      localStorage.setItem('userFeedback', feedback);

      // Hide form and show thank you
      document.getElementById('feedbackSection').style.display = 'none';
      document.getElementById('thankyouSection').style.display = 'block';
    }
