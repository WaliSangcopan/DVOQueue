document.getElementById('showFormBtn').addEventListener('click', () => {
  document.getElementById('formSection').style.display = 'block';
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});
function toggleForm(type) {
  const loginForm = document.getElementById('loginForm');
  loginForm.scrollIntoView({ behavior: 'smooth' });
}
function register() {
  const name = document.getElementById('regName').value;
  const email = document.getElementById('regEmail').value;
  const pass = document.getElementById('regPassword').value;
  alert(`Registered as ${name} (${email})`);
}
function login() {
  const email = document.getElementById('loginEmail').value;
  const pass = document.getElementById('loginPassword').value;
  alert(`Logged in as ${email}`);
}
