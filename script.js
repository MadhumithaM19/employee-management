

function multiply() {
  let a = 1;
  let b = 9;

  if (isNaN(a) || isNaN(b)) {
    console.log(isNaN(b));
    
  }

  let result = a * b;
  console.log(result.toFixed(2));
}
multiply();

// // Model
// const model = {
//   message: "Hello MVC!"
// };

// // View
// const view = {
//   render(msg) {
//     document.body.innerHTML = `<h1>${msg}</h1>`;
//   }
// };

// // Controller
// const controller = {
//   init() {
//     view.render(model.message);
//   }
// };

// controller.init();

// // Model
// const model = {
//   name: ""
// };

// // View
// const view = {
//   render(name) {
//     document.querySelector("#output").textContent = `Hello ${name}`;
//   }
// };

// // Controller
// const controller = {
//   init() {
//     document.querySelector("button").addEventListener("click", () => {
//       model.name = document.querySelector("#name").value;
//       view.render(model.name);
//     });
//   }
// };

// controller.init();

// function showMessage(type, message) {
//   const msgBox = document.getElementById("msg");
//   msgBox.textContent = message;
//   msgBox.style.color = type === "error" ? "red" : "green";
// }

// showMessage("success", "Data saved!");
// showMessage("error", "Something went wrong!");

// const el = document.getElementById("text");

// function updateText(newText) {
//   if (el.textContent !== newText) {
//     el.textContent = newText;
//   }
// }

// updateText("Hello");
// updateText("Hello"); // Won’t update again if the same

// function addBookmark(name) {
//   const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
//   bookmarks.push(name);
//   localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
// }

// addBookmark("Page 1");
// console.log(localStorage.getItem("bookmarks"));

 
// const cardsPerPage = 4; // Number of cards to show per page 
// const dataContainer = document.getElementById('data-container'); 
// const pagination = document.getElementById('pagination'); 
// const prevButton = document.getElementById('prev'); 
// const nextButton = document.getElementById('next'); 
// const pageNumbers = document.getElementById('page-numbers'); 
// const pageLinks = document.querySelectorAll('.page-link'); 

// const cards = 
// 	Array.from(dataContainer.getElementsByClassName('card')); 

// // Calculate the total number of pages 
// const totalPages = Math.ceil(cards.length / cardsPerPage); 
// let currentPage = 1; 

// // Function to display cards for a specific page 
// function displayPage(page) { 
// 	const startIndex = (page - 1) * cardsPerPage; 
// 	const endIndex = startIndex + cardsPerPage; 
// 	cards.forEach((card, index) => { 
// 		if (index >= startIndex && index < endIndex) { 
// 			card.style.display = 'block'; 
// 		} else { 
// 			card.style.display = 'none'; 
// 		} 
// 	}); 
// } 

// // Function to update pagination buttons and page numbers 
// function updatePagination() { 
// 	pageNumbers.textContent = 
// 		`Page ${currentPage} of ${totalPages}`; 
// 	prevButton.disabled = currentPage === 1; 
// 	nextButton.disabled = currentPage === totalPages; 
// 	pageLinks.forEach((link) => { 
// 		const page = parseInt(link.getAttribute('data-page')); 
// 		link.classList.toggle('active', page === currentPage); 
// 	}); 
// } 

// // Event listener for "Previous" button 
// prevButton.addEventListener('click', () => { 
// 	if (currentPage > 1) { 
// 		currentPage--; 
// 		displayPage(currentPage); 
// 		updatePagination(); 
// 	} 
// }); 

// // Event listener for "Next" button 
// nextButton.addEventListener('click', () => { 
// 	if (currentPage < totalPages) { 
// 		currentPage++; 
// 		displayPage(currentPage); 
// 		updatePagination(); 
// 	} 
// }); 

// // Event listener for page number buttons 
// pageLinks.forEach((link) => { 
// 	link.addEventListener('click', (e) => { 
// 		e.preventDefault(); 
// 		const page = parseInt(link.getAttribute('data-page')); 
// 		if (page !== currentPage) { 
// 			currentPage = page; 
// 			displayPage(currentPage); 
// 			updatePagination(); 
// 		} 
// 	}); 
// }); 

// // Initial page load 
// displayPage(currentPage); 
// updatePagination();


let empname = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phoneNumber');
let department = document.getElementById('department');
let role = document.getElementById('role');
let error = document.getElementById('Error');
let tableBody = document.getElementById('tableVal');
let pageNumber = document.getElementById('pageNum');
let search = document.getElementById('search');
let prev = document.getElementById('prev');
let next = document.getElementById('next');


  let employees = [];
function modalOk(){
let empName = empname.value.trim();
let empEmail = email.value.trim();
let empPhone = phone.value.trim();
let empDept = department.value.trim();
let empRole= role.value.trim();
let empDate = new Date().toDateString();
  if((empName ==="") && (empEmail === "") && (empPhone === "") && (empDept === "") && (empRole=== "")){
    
    error.textContent ="Enter all inputs";
    return;

  }

   let employee = {
    Name:empName,
    Email:empEmail,
    Phone:empPhone,
    Department:empDept,
    Role:empRole,
    Date:empDate,
  }
  employees.push(employee);
  console.log("emp details:",employee);
  modalTable();

  empname.value ="";
  email.value="";
  phone.value="";
  department.value ="";
  role.value = "";

}
function modalTable(page){
  tableBody.innerHTML="";
  let startVal = (page-1)*rowPage;
  let endVal = startVal + rowPage;

  const row = document.createElement('tr');
  employees.map((emp,index)=>{
  row.innerHTML = `  
    <td>${emp.Name}</td>
    <td>${emp.Email}</td>
    <td>${emp.Phone}</td>
    <td>${emp.Department}</td>
    <td>${emp.Role}</td>
    <td>${emp.Date}</td>
    <td><button style="background-color:orange"  onclick=editDetails(${index})>Edit</button>  <button id="delete" style="background-color:red" onclick=deleteDetails(${index})>Delete</button></td>
  `
})
  tableBody.appendChild(row);
  pageNumber.innerHTML = "page",currentPage,"of",totalPages;
  prev.ariaDisabled = (currentPage===1);
  next.ariaDisabled = (currentPage === totalPages);

}

function addDetails(){

}
function saveDetails(){
  localStorage.setItem("employee details",JSON.stringify(employees));
  console.log("saved Items",localStorage.getItem("employee details"));
}
  
function editDetails(val){
  let emp = employees[val];
  empname.value= emp.Name,
  email.value= emp.Email,
  phone.value= emp.Phone,
  department.value= emp.Department,
  role.value= emp.Role
}

function deleteDetails(val){
 
  employees.splice(val,1);
  console.log("deleted detail",employees);
  
}

let employeeData = [...employees];
const rowPage = 5;
let currentPage = 1;
const totalPages = Math.ceil(employeeData.length/rowPage);


function prevPage(){
  if(currentPage > 1){
    currentPage--;
    modalTable(currentPage);
  }
}
function nextPage(){
  if(currentPage < totalPages){
    currentPage++;
    modalTable(currentPage);
  }
}
modalTable(currentPage);






 

  

  


 
