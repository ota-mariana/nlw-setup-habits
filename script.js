const form = document.querySelector('#form-habits');
const nlwSetup = new NLWSetup(form);
const buttonAdd = document.querySelector('header button');

buttonAdd.addEventListener('click', addDay);
form.addEventListener('change', saveChange)

function addDay() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5);
  const dayExists = nlwSetup.dayExists(today);

  if (dayExists) {
    alert('Esse dia já está incluso!');
    return
  }
  nlwSetup.addDay(today);
  alert('Dia adicionado com sucesso!')
};

function saveChange() {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data));
};

 const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {};
 nlwSetup.setData(data);
 nlwSetup.load();
  