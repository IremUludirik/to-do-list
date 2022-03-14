//alert type
let alertDOM = document.querySelector(`#alert`); //alerti asagida belirttik ve sitede cikmasini sagliyoruz

//boş girilirse
const alertFunction = (message, className = "warning") => `
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">  
<symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
<path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</symbol>
</svg>

<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
</button>${message}
</div>
`;

//basarili giris
const alertFunctionAdd = (message, className = "success") => `
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
<symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
<path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</symbol>
</svg>

<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
</button>${message}
</div>
`;

//clear all
const alertFunctionRemove = (message, className = "danger") => `
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
<symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
<path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</symbol>
</svg>

<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
</button>${message}
</div>
`;

//alert
function formHandler(event) {
  event.preventDefault();
  const TO_DO = document.querySelector("#todo");

  if (TO_DO.value) {
    addItem(TO_DO.value); //addItemı Aşagida tanimladik.
    TO_DO.value = ""; //kutucugun icini otomatik sifirlanmasi icin
    alertDOM.innerHTML = alertFunctionAdd("You entered information!");
    setInterval(() => {
      alertDOM.innerHTML = "";
    }, 3000);
  } else {
    alertDOM.innerHTML = alertFunction("You can't submit empty form!");
    setInterval(() => {
      alertDOM.innerHTML = "";
    }, 5000);
    //hata verdiginde alerti cagiriyoruz
  }
}

let todolistDom = document.querySelector(`#todolist`);

const li = localStorage.getItem('li');

const addItem = (todo) => {
  let liDOM = document.createElement(`li`);

  liDOM.innerHTML = `
<div class="form-check">
<input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
  <label class="form-check-label" for="flexCheckIndeterminate">
  </label>
  </div>
  <a href="#todolist" class="list-group-item list-group-item-action list-group-item-light">${todo}</a>
  `;
  
  window.localStorage.setItem('li',todo)

  


  liDOM.classList.add(
    `list-group-item`,
    `d-flex`,
    `justify-content-between`,
    `align-items-center`
  );
  // listeye göre uyarladik

  todolistDom.append(liDOM);
};

function addAll() {
  let userFormDom = document.querySelector(`#userForm`);
  userFormDom.addEventListener(`submit`, formHandler);
}

function clearAll() {
  document.getElementById("todolist").innerHTML = "";
  alertDOM.innerHTML = alertFunctionRemove("You deleted the whole list!");
  setInterval(() => {
    alertDOM.innerHTML = "";
  }, 3000);
  const TO_DO = document.querySelector("#todo");
  TO_DO.value = ""; //kutucugun icini otomatik sifirlanmasi icin
}
