const tutors = {
  "Rick": {
    title: "English tutoring",
    subjects: ["english", "literature"],
    phone: "123-123-1234",
    location: "Ottawa",
    timeSlots: ["Monday 2:30 - 5:30 (recurring)", "Tuesday 10:00 - 12:00", "Saturday 12:00 - 3:00"],
    languages: ["English", "French"]
  },
  "Jane": {
    title: "Chatting & math tutor",
    subjects: ["math", "english"],
    phone: "123-123-1234",
    location: "Ottawa",
    timeSlots: ["Tuesday 10:00 - 12:00", "Saturday 12:00 - 3:00 (recurring)"],
    languages: ["English", "French"]
  },
  "Andy": {
    title: "Math and physics tut + game playing",
    subjects: ["math", "physics", "minecraft"],
    phone: "123-123-1234",
    location: "Toronto",
    timeSlots: ["Monday 11:00 - 2:00 (recurring)", "Wednesday 3:00 - 6:00 (recurring)", "Friday 9:00 - 12:00"],
    languages: ["English"]
  },
  "John": {
    title: "Science and math tutor",
    subjects: ["science", "math"],
    phone: "123-123-1234",
    location: "Toronto",
    timeSlots: ["Monday 11:00 - 2:00 (recurring)", "Tuesday 10:00 - 12:00", "Wednesday 3:00 - 6:00", "Thursday 1:00 - 4:00"],
    languages: ["English", "Arabic"]
  },
  "Sarah": {
    title: "History and geography tutor",
    subjects: ["history", "geography"],
    phone: "123-123-1234",
    location: "Vancouver",
    timeSlots: ["Tuesday 10:00 - 12:00", "Friday 9:00 - 12:00 (recurring)", "Saturday 12:00 - 3:00"],
    languages: ["English", "French"]
  },
  "Emily": {
    title: "Biology and chemistry tutor",
    subjects: ["biology", "chemistry"],
    phone: "123-123-1234",
    location: "Calgary",
    timeSlots: ["Monday 11:00 - 2:00", "Saturday 10:00 - 1:00 (recurring)"],
    languages: ["English"]
  },
  "Michael": {
    title: "Computer science tutor",
    subjects: ["computer science", "math"],
    phone: "123-123-1234",
    location: "Montreal",
    timeSlots: ["Tuesday 3:00 - 6:00", "Sunday 2:00 - 5:00 (recurring)"],
    languages: ["English"]
  },
  "Anna": {
    title: "Spanish and French tutor",
    subjects: ["spanish", "french"],
    phone: "123-123-1234",
    location: "Quebec City",
    timeSlots: ["Monday 11:00 - 2:00", "Tuesday 10:00 - 12:00"],
    languages: ["French"]
  },
  "Robert": {
    title: "Physics and math tutor",
    subjects: ["physics", "math"],
    phone: "123-123-1234",
    location: "Ottawa",
    timeSlots: ["Tuesday 3:00 - 6:00 (recurring)", "Saturday 12:00 - 3:00"],
    languages: ["English", "French"]
  },
  "Laura": {
    title: "Chemistry and biology tutor",
    subjects: ["chemistry", "biology"],
    phone: "123-123-1234",
    location: "Edmonton",
    timeSlots: ["Tuesday 10:00 - 12:00 (recurring)", "Wednesday 8:00 - 11:00"],
    languages: ["French"]
  },
  "David": {
    title: "English and history tutor",
    subjects: ["english", "history"],
    phone: "123-123-1234",
    location: "Winnipeg",
    timeSlots: ["Tuesday 10:00 - 12:00", "Thursday 1:30 - 4:30"],
    languages: ["French"]
  },
  "Sophia": {
    title: "Art and music tutor",
    subjects: ["art", "music"],
    phone: "123-123-1234",
    location: "Halifax",
    timeSlots: ["Friday 10:00 - 1:00 (recurring)", "Saturday 12:00 - 3:00"],
    languages: ["English", "French"]
  },
  "James": {
    title: "Math and computer science tutor",
    subjects: ["math", "computer science"],
    phone: "123-123-1234",
    location: "Victoria",
    timeSlots: ["Saturday 12:00 - 3:00"],
    languages: ["French"]
  },
  "Olivia": {
    title: "Literature and writing tutor",
    subjects: ["literature", "writing"],
    phone: "123-123-1234",
    location: "Toronto",
    timeSlots: ["Sunday 4:00 - 7:00 (recurring)"],
    languages: ["English"]
  },
  "William": {
    title: "Geography and social studies tutor",
    subjects: ["geography", "social studies"],
    phone: "123-123-1234",
    location: "Ottawa",
    timeSlots: ["Monday 1:00 - 4:00", "Saturday 12:00 - 3:00"],
    languages: ["English"]
  }
};

function showHomePage() {
  document.getElementById('home-page').classList.remove('hidden');
  document.getElementById('browse-page').classList.add('hidden');
  document.getElementById('tutor-info').style.display = 'none';
  populateTutorList();

  document.getElementById('home-link').classList.add('active');
  document.getElementById('browse-link').classList.remove('active');
}

function showBrowsePage() {
  document.getElementById('home-page').classList.add('hidden');
  document.getElementById('browse-page').classList.remove('hidden');
  document.getElementById('tutor-info').style.display = 'none';
  populateSubjectList();

  document.getElementById('home-link').classList.remove('active');
  document.getElementById('browse-link').classList.add('active');
}

showHomePage();

document.getElementById('search').addEventListener('input', function() {
  filterTutorList(this.value.toLowerCase());
});

function filterTutorList(query) {
  const tutorList = document.getElementById('tutor-list');
  tutorList.innerHTML = '';
  for (tutorName in tutors) {
    const tutor = tutors[tutorName];
    if (
      tutorName.toLowerCase().includes(query)
      || tutor.title.toLowerCase().includes(query)
      || tutor.subjects.some(subject => subject.toLowerCase().includes(query))
    ) {
      const row = document.createElement('tr');
      row.onclick = () => showTutorInfo(tutorName);
      row.innerHTML = `
        <td>${tutorName}</td>
        <td>${tutor.title}</td>
        <td>${tutor.subjects.join(', ')}</td>
      `;
      tutorList.appendChild(row);
    }
  }
}

function populateTutorList(filterSubject = null) {
  const tutorList = document.getElementById('tutor-list');
  tutorList.innerHTML = '';
  for (const tutorName in tutors) {
    const tutor = tutors[tutorName];
    if (filterSubject && !tutor.subjects.includes(filterSubject)) {
      continue;
    }
    const row = document.createElement('tr');
    row.onclick = () => showTutorInfo(tutorName);
    row.innerHTML = `
      <td>${tutorName}</td>
      <td>${tutor.title}</td>
      <td>${tutor.subjects.join(', ')}</td>
    `;
    tutorList.appendChild(row);
  }
}

function populateSubjectList() {
  const subjectList = document.getElementById('subject-list');
  const subjects = new Set();
  for (const tutorName in tutors) {
    const tutor = tutors[tutorName];
    tutor.subjects.forEach(subject => subjects.add(subject));
  }
  subjectList.innerHTML = '';
  subjects.forEach(subject => {
    const item = document.createElement('li');
    item.className = 'list-group-item';
    item.innerText = subject;
    item.onclick = () => {
      showHomePage();
      populateTutorList(subject);
    };
    subjectList.appendChild(item);
  });
}

function showTutorInfo(tutorName) {
  const tutor = tutors[tutorName];
  if (tutor) {
    document.getElementById('info-content').innerHTML = `
      <p><strong>Name</strong>: ${tutorName}</p>
      <p><strong>Phone</strong>: ${tutor.phone}</p>
      <p><strong>Location</strong>: ${tutor.location}</p>
      <p><strong>Available time</strong>: ${tutor.timeSlots.join(', ')}</p>
      <p><strong>Subjects</strong>: ${tutor.subjects.join(', ')}</p>
      <p><strong>Languages</strong>: ${tutor.languages.join(', ')}</p>
    `;
    document.getElementById('tutor-info').style.display = 'block';
    document.getElementById('home-page').classList.add('hidden');

    // reset form and submit button
    document.getElementById('book-tutor-form').reset();
    document.getElementById('submit-button').innerText = 'Submit!';
    document.getElementById('submit-button').disabled = false;
    document.getElementById('form-response').style.display = 'none';
  }
}

function hideTutorInfo() {
  document.getElementById('tutor-info').style.display = 'none';
  document.getElementById('home-page').classList.remove('hidden');
}

function submitForm() {
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const time = document.getElementById('time').value;
  const address = document.getElementById('address').value;

  if (name && phone && time && address) {
    document.getElementById('form-response').innerHTML = `
      <p>Sucessfully submitted!</p>
      <p>Name: ${name}</p>
      <p>Phone: ${phone}</p>
      <p>Time: ${time}</p>
      <p>Address: ${address}</p>
    `;
    document.getElementById('form-response').style.display = 'block';

    document.getElementById('submit-button').innerText = 'Submitted!';
    document.getElementById('submit-button').disabled = true;
  } else {
    document.getElementById('form-response').innerHTML = `<p>Please complete all the fields.</p>`;
    document.getElementById('form-response').style.display = 'block';
  }
}
