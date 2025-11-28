
// قراءة validation-key عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
  // قراءة مفتاح validation
  fetch('/validation-key.txt')
    .then(res => res.text())
    .then(key => {
      console.log("Validation Key Loaded ✅:", key);
      window.validationKey = key; // حفظ المفتاح لاستخدام لاحق
    })
    .catch(err => console.error("Error reading validation key:", err));

  // عرض اسم المستخدم والرصيد
  const username = localStorage.getItem('piUser');
  if(username) {
    const usernameEl = document.getElementById('username');
    const balanceEl = document.getElementById('pi-balance');
    if(usernameEl) usernameEl.textContent = username;
    if(balanceEl) balanceEl.textContent = Math.floor(Math.random()*1000) + ' Pi';
  }
});

// زر تسجيل الدخول
document.getElementById('login-btn')?.addEventListener('click', () => {
  const piId = document.getElementById('pi-id').value;
  if(piId) {
    localStorage.setItem('piUser', piId);
    window.location.href = 'index.html';
  }
});

// زر إرسال Pi
document.getElementById('send-btn')?.addEventListener('click', () => {
  const friendId = document.getElementById('friend-id').value;
  const amount = document.getElementById('amount').value;
  if(friendId && amount) alert(`Sent ${amount} Pi to ${friendId}!`);
});


---
