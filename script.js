// Student Data
const students = [
  {"StudentID":"STU012","Name":"Swathi Priya","Age":18,"Gender":"F","City":"Chennai","State":"Tamil Nadu","Class/Course":"12th Std","College/School":"Chettinad Vidyashram"},
  {"StudentID":"STU021","Name":"Tarun Varma","Age":20,"Gender":"M","City":"Hyderabad","State":"Telangana","Class/Course":"B.Tech Mechanical","College/School":"Malla Reddy College"},
  {"StudentID":"STU003","Name":"Sneha Krishna","Age":19,"Gender":"F","City":"Chennai","State":"Tamil Nadu","Class/Course":"B.Sc Physics","College/School":"Loyola College"},
  {"StudentID":"STU016","Name":"Deepika M","Age":19,"Gender":"F","City":"Chennai","State":"Tamil Nadu","Class/Course":"B.Tech AI","College/School":"Anna University"},
  {"StudentID":"STU005","Name":"Farhan Ali","Age":20,"Gender":"M","City":"Bengaluru","State":"Karnataka","Class/Course":"BCA","College/School":"Christ University"},
  {"StudentID":"STU010","Name":"Meera Joseph","Age":19,"Gender":"F","City":"Bengaluru","State":"Karnataka","Class/Course":"BA English","College/School":"Mount Carmel College"},
  {"StudentID":"STU024","Name":"Ritu Chawla","Age":22,"Gender":"F","City":"Mumbai","State":"Maharashtra","Class/Course":"BMS","College/School":"Mithibai College"},
  {"StudentID":"STU002","Name":"Adithya R","Age":21,"Gender":"M","City":"Chennai","State":"Tamilnadu","Class/Course":"B.Tech","College/School":"Rajalakshmi Institute of Technology"},
  {"StudentID":"STU007","Name":"Raghav Rao","Age":23,"Gender":"M","City":"Hyderabad","State":"Telangana","Class/Course":"MBA","College/School":"ICFAI"},
  {"StudentID":"STU008","Name":"Priya Nair","Age":21,"Gender":"F","City":"Kochi","State":"Kerala","Class/Course":"B.Tech ECE","College/School":"FISAT"},
  {"StudentID":"STU001","Name":"Jahnavi M","Age":20,"Gender":"F","City":"Hyderabad","State":"Telangana","Class/Course":"B.Tech CSE","College/School":"SRMIST Ramapuram Chennai"},
  {"StudentID":"STU020","Name":"Neha Gupta","Age":21,"Gender":"F","City":"Delhi","State":"Delhi","Class/Course":"B.Com","College/School":"SRCC"},
  {"StudentID":"STU018","Name":"Kavya Patel","Age":20,"Gender":"F","City":"Ahmedabad","State":"Gujarat","Class/Course":"B.Sc Maths","College/School":"Gujarat University"},
  {"StudentID":"STU014","Name":"Ananya Das","Age":20,"Gender":"F","City":"Bengaluru","State":"Karnataka","Class/Course":"BBA Aviation","College/School":"Jain University"},
  {"StudentID":"STU013","Name":"Vishal Reddy","Age":21,"Gender":"M","City":"Hyderabad","State":"Telangana","Class/Course":"B.Com Computers","College/School":"Osmania University"},
  {"StudentID":"STU011","Name":"Harish K","Age":22,"Gender":"M","City":"Hyderabad","State":"Telangana","Class/Course":"B.Tech IT","College/School":"CBIT"},
  {"StudentID":"STU006","Name":"Niharika S","Age":18,"Gender":"F","City":"Chennai","State":"Tamil Nadu","Class/Course":"12th Std","College/School":"DAV School"},
  {"StudentID":"STU004","Name":"Aakash Menon","Age":22,"Gender":"M","City":"Kochi","State":"Kerala","Class/Course":"B.Com","College/School":"Sacred Heart College"},
  {"StudentID":"STU023","Name":"Karthik M","Age":19,"Gender":"M","City":"Chennai","State":"Tamil Nadu","Class/Course":"BCA","College/School":"Saveetha University"},
  {"StudentID":"STU017","Name":"Rohit Sharma","Age":18,"Gender":"M","City":"Mumbai","State":"Maharashtra","Class/Course":"12th Std","College/School":"Poddar School"},
  {"StudentID":"STU025","Name":"Jayesh R","Age":20,"Gender":"M","City":"Ahmedabad","State":"Gujarat","Class/Course":"B.Tech Civil","College/School":"Nirma University"},
  {"StudentID":"STU015","Name":"Sameer Khan","Age":23,"Gender":"M","City":"Hyderabad","State":"Telangana","Class/Course":"MCA","College/School":"JNTU-H"},
  {"StudentID":"STU022","Name":"Pooja Sharma","Age":18,"Gender":"F","City":"Bengaluru","State":"Karnataka","Class/Course":"12th Std","College/School":"National Public School"},
  {"StudentID":"STU019","Name":"Arjun Singh","Age":22,"Gender":"M","City":"Delhi","State":"Delhi","Class/Course":"BA Political Science","College/School":"DU"},
  {"StudentID":"STU009","Name":"Lokesh Kumar","Age":20,"Gender":"M","City":"Chennai","State":"Tamil Nadu","Class/Course":"B.Sc Computer Science","College/School":"SRM College"}
];

// Elements
const studentsContainer = document.querySelector('.students-container');
const stateFilter = document.getElementById('stateFilter');
const courseFilter = document.getElementById('courseFilter');
const genderFilter = document.getElementById('genderFilter');
const sortFilter = document.getElementById('sortFilter');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

// Modal
const modal = document.getElementById("studentModal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementsByClassName("close")[0];

// Populate filters
const states = [...new Set(students.map(s=>s.State))].sort();
const courses = [...new Set(students.map(s=>s["Class/Course"]))].sort();

states.forEach(s=> stateFilter.innerHTML += `<option value="${s}">${s}</option>`);
courses.forEach(c=> courseFilter.innerHTML += `<option value="${c}">${c}</option>`);

// Render Students
function renderStudents(list){
  studentsContainer.innerHTML = '';
  list.forEach(student=>{
    const card = document.createElement('div');
    card.className = 'student-card glow';
    card.innerHTML = `
      <h3>${student.Name}</h3>
      <p><strong>Age:</strong> ${student.Age}</p>
      <p><strong>City:</strong> ${student.City}</p>
      <p><strong>College:</strong> ${student["College/School"]}</p>
    `;
    card.addEventListener('click', ()=>{
      showModal(student);
    });
    studentsContainer.appendChild(card);
  });
}

// Modal
function showModal(student){
  modalBody.innerHTML = `
    <h2>${student.Name}</h2>
    <p><strong>Student ID:</strong> ${student.StudentID}</p>
    <p><strong>Age:</strong> ${student.Age}</p>
    <p><strong>Gender:</strong> ${student.Gender}</p>
    <p><strong>City:</strong> ${student.City}</p>
    <p><strong>State:</strong> ${student.State}</p>
    <p><strong>Class/Course:</strong> ${student["Class/Course"]}</p>
    <p><strong>College/School:</strong> ${student["College/School"]}</p>
  `;
  modal.style.display = 'block';
}

closeModal.onclick = () => { modal.style.display = 'none'; }
window.onclick = (e) => { if(e.target == modal) modal.style.display = 'none'; }

// Filters & Search
function filterStudents(){
  let filtered = students.filter(s=>{
    return (stateFilter.value === '' || s.State === stateFilter.value) &&
           (courseFilter.value === '' || s["Class/Course"] === courseFilter.value) &&
           (genderFilter.value === '' || s.Gender === genderFilter.value) &&
           (searchInput.value === '' || 
            s.Name.toLowerCase().includes(searchInput.value.toLowerCase()) ||
            s.City.toLowerCase().includes(searchInput.value.toLowerCase()) ||
            s["College/School"].toLowerCase().includes(searchInput.value.toLowerCase()));
  });

  // Sort
  if(sortFilter.value === 'name') filtered.sort((a,b)=>a.Name.localeCompare(b.Name));
  if(sortFilter.value === 'age') filtered.sort((a,b)=>a.Age-b.Age);
  if(sortFilter.value === 'college') filtered.sort((a,b)=>a["College/School"].localeCompare(b["College/School"]));

  renderStudents(filtered);
  updateStats(filtered);
}

// Event Listeners
stateFilter.addEventListener('change', filterStudents);
courseFilter.addEventListener('change', filterStudents);
genderFilter.addEventListener('change', filterStudents);
sortFilter.addEventListener('change', filterStudents);
searchBtn.addEventListener('click', filterStudents);

// Stats
function updateStats(list){
  document.getElementById('totalStudents').innerText = list.length;
  const colleges = [...new Set(list.map(s=>s["College/School"]))];
  const states = [...new Set(list.map(s=>s.State))];
  document.getElementById('totalColleges').innerText = colleges.length;
  document.getElementById('totalStates').innerText = states.length;
}

// Initial Render
renderStudents(students);
updateStats(students);
