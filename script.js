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

  const form = document.getElementById("portfolioForm");
const output = document.getElementById("output");
const downloadBtn = document.getElementById("downloadBtn");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const college = document.getElementById("college").value;
  const about = document.getElementById("about").value;
  const skills = document.getElementById("skills").value.split(",");
  const projects = document.getElementById("projects").value.split(",");
  const contact = document.getElementById("contact").value;

  const portfolioHTML = `
    <h2>${name}</h2>
    <p><strong>College:</strong> ${college}</p>
    <p><strong>About Me:</strong> ${about}</p>
    <p><strong>Skills:</strong> ${skills.map(s => `<li>${s.trim()}</li>`).join('')}</p>
    <p><strong>Projects:</strong> <ul>${projects.map(p => `<li>${p.trim()}</li>`).join('')}</ul></p>
    <p><strong>Contact:</strong> ${contact}</p>
  `;

  output.innerHTML = portfolioHTML;
  downloadBtn.style.display = "block";
});

downloadBtn.addEventListener("click", function () {
  const htmlContent = `
    <html>
    <head><title>Portfolio</title></head>
    <body>${output.innerHTML}</body>
    </html>
  `;

  const blob = new Blob([htmlContent], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "my_portfolio.html";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});

  