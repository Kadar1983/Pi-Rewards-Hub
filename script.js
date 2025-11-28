document.addEventListener('DOMContentLoaded', () => {
  // 🔑 المفتاح مدمج مباشرة هنا
  window.validationKey = "de62ffda61541f23ccadcc2ea630fef2129b630af8a0aa57795e99d2e62419ba999006319e03819f913e3b6ca9a02ff0c5e3ddf2c654857d0fa6482779182e70";

  // عرض المفتاح في الصفحة للاختبار
  const testEl = document.getElementById('test-key');
  if(testEl) testEl.textContent = "Validation Key: " + window.validationKey;

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
