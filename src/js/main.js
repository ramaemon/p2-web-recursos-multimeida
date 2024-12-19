// import '@fortawesome/fontawesome-free/css/all.css';
const templesList = document.querySelectorAll(".temples-menu a");
const h1 = document.createElement("h1");
const p = document.createElement("p");

function addTempleDOM(transaction) {
    // Get sign
    const sign = transaction.amount < 0 ? '-' : '+';
  
    const item = document.createElement('li');
  
    // Add class based on value
    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
  
    item.innerHTML = `
      ${transaction.text} <span>${sign}${Math.abs(
      transaction.amount
    )}</span> <button class="delete-btn" onclick="removeTransaction(${
      transaction.id
    })">x</button>
    `;
  
    list.appendChild(item);
}

console.log(templesList);
templesList.addEventListener("click", (element) => {
  preventDefault();
  console.log(element);
  
});