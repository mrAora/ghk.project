
const scriptURL = 'AKfycbyxZRiBsFHhmGb5a4hlEUpOuFJBNlmoTuK1vjoQCj7c'; // ဒီနေရာမှာ ရထားတဲ့ URL ထည့်ပါ
const form = document.getElementById('registerForm');

form.addEventListener('submit', e => {
  e.preventDefault();
  const data = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value
  };

  fetch(scriptURL, {
    method: 'POST',
    body: JSON.stringify(data)
  })
  .then(res => alert("Registered successfully!"))
  .catch(err => alert("Failed: " + err));
});