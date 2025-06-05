
function recommendCareer() {
  const interest = document.getElementById('interest').value;
  const strength = document.getElementById('strength').value;
  const performance = document.getElementById('performance').value;
  const workStyle = document.getElementById('workStyle').value;
  const hobby = document.getElementById('hobby').value;
  const balance = document.getElementById('balance').value;
  const result = document.getElementById('result');

  if (!interest || !strength || !performance || !workStyle || !hobby || !balance) {
    result.style.display = 'block';
    result.innerHTML = "<strong>Please complete all fields.</strong>";
    document.querySelector('.actions').style.display = 'none';
    return;
  }

  const baseRecommendations = {
    technology: {
      creativity: 'Game Developer, UI/UX Designer',
      problemSolving: 'Software Engineer, Cybersecurity Analyst',
      communication: 'Technical Writer, Product Manager',
      leadership: 'Tech Lead, IT Director',
      analytical: 'Data Scientist, AI Developer'
    },
    art: {
      creativity: 'Graphic Designer, Illustrator',
      problemSolving: 'Creative Director, Set Designer',
      communication: 'Art Teacher, Art Therapist',
      leadership: 'Creative Lead, Art Director',
      analytical: 'Art Critic, Exhibit Curator'
    },
    healthcare: {
      creativity: 'Recreational Therapist, Art Therapist',
      problemSolving: 'Doctor, Surgeon, Paramedic',
      communication: 'Nurse, Counselor',
      leadership: 'Health Administrator',
      analytical: 'Medical Researcher, Lab Technician'
    },
    business: {
      creativity: 'Marketing Specialist, Brand Designer',
      problemSolving: 'Business Analyst, Consultant',
      communication: 'Sales Manager, HR Specialist',
      leadership: 'Entrepreneur, CEO',
      analytical: 'Finance Analyst, Accountant'
    },
    science: {
      creativity: 'Science Communicator, Research Writer',
      problemSolving: 'Engineer, Chemist',
      communication: 'Lecturer, Policy Advisor',
      leadership: 'Lab Manager, R&D Head',
      analytical: 'Physicist, Biotechnologist'
    }
  };

  let career = baseRecommendations[interest][strength];
  let tips = [];

  if (performance === 'excellent') tips.push('You should explore top universities or competitive exams.');
  else if (performance === 'good') tips.push('Try building a strong online portfolio or get internships.');
  else if (performance === 'average') tips.push('Focus on certifications and hands-on projects.');
  else tips.push('Skill-based programs or diplomas can boost your career options.');

  if (workStyle === 'remote') tips.push('Look into remote jobs like content writing, coding, or design.');
  else if (workStyle === 'field') tips.push('Explore careers like journalism, sales, or site engineering.');
  else if (workStyle === 'teamwork') tips.push('You may enjoy collaborative roles like project management.');
  else tips.push('Independent roles such as research or freelancing may suit you.');

  if (hobby === 'writing') tips.push('Consider content writing, copywriting, or journalism.');
  if (hobby === 'coding') tips.push('Look into app development, software engineering, or robotics.');
  if (hobby === 'teaching') tips.push('Education, coaching, or training roles would suit you.');
  if (hobby === 'drawing') tips.push('Try animation, graphic design, or illustration.');

  if (balance === 'high') tips.push('Freelancing, remote work, or government jobs might fit well.');
  if (balance === 'low') tips.push('You may be open to high-demand roles like startups or research.');

  result.style.display = 'block';
  result.innerHTML = `
    <div>
      <strong>Recommended Career Paths:</strong><br>${career}<br><br>
      <em>Additional Suggestions:</em>
      <ul>${tips.map(t => `<li>${t}</li>`).join('')}</ul>
    </div>
  `;

  document.querySelector('.actions').style.display = 'flex';
}

function downloadPDF() {
  const result = document.getElementById('result').innerHTML;
  const win = window.open('', '_blank');
  win.document.write(`<html><head><title>Career Recommendation</title></head><body>${result}</body></html>`);
  win.document.close();
  win.print();
}

function sendEmail() {
  const result = document.getElementById('result').innerText;
  const subject = encodeURIComponent('My Career Path Recommendation');
  const body = encodeURIComponent(`Hello,\n\nHere are my career recommendations:\n\n${result}\n\nRegards,\n`);
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
}

