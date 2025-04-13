document.getElementById("portfolioForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const about = document.getElementById("about").value;
    const skills = document.getElementById("skills").value.split(",");
    const projects = document.getElementById("projects").value.split(",");
  
    let output = `
      <h3>${name}</h3>
      <p><strong>About Me:</strong> ${about}</p>
      <p><strong>Skills:</strong></p>
      <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join("")}</ul>
      <p><strong>Projects:</strong></p>
      <ul>${projects.map(project => `<li>${project.trim()}</li>`).join("")}</ul>
    `;
  
    document.getElementById("portfolioOutput").innerHTML = output;
  });
  