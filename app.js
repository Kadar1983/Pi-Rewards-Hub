document.getElementById('login-btn')?.addEventListener('click', () => {
  const piId = document.getElementById('pi-id').value;
  if(piId) {
    localStorage.setItem('piUser', piId);
    window.location.href = 'index.html';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const username = localStorage.getItem('piUser');
  if(username) {
    document.getElementById('username').textContent = username;
    document.getElementById('pi-balance').textContent = Math.floor(Math.random()*1000) + ' Pi';
  }
});

document.getElementById('send-btn')?.addEventListener('click', () => {
  const friendId = document.getElementById('friend-id').value;
  const amount = document.getElementById('amount').value;
  if(friendId && amount) alert(`Sent ${amount} Pi to ${friendId}!`);
});


---
