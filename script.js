

// function multiply() {
//   let a = 1;
//   let b = 9;


//   if (isNaN(a) || isNaN(b)) {
//     console.log(isNaN(b));
    
//   }

//   let result = a * b;
//   console.log(result.toFixed(2));
// }
// multiply();

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



let tableBody = document.getElementById('tableVal');
let pageNumber = document.getElementById('pageNum');
let searchInput = document.getElementById('searchInput');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let input;
let userStatus;
let currentPage = 1;
console.log("----",typeof(currentPage));
let rowPage = 5;


console.log("GLOBAL INPUT",input);
// function handleInput() {
//   let input = document.getElementById('searchInput').value.toLowerCase();
//   console.log("typed:", input);

//   let filtered = employees.filter(emp => 
//     emp.Name.toLowerCase().includes(input) || 
//     emp.Email.toLowerCase().includes(input) ||
//     emp.Phone.toLowerCase().includes(input) ||
//     emp.Department.toLowerCase().includes(input) ||
//     emp.Role.toLowerCase().includes(input)
//   );

//   renderTable(filtered);
// }

// function renderTable(data) {
//   tableBody.innerHTML = '';
//   data.forEach((emp, index) => {
//     tableBody.innerHTML += `
//       <tr>
//         <td>${emp.Name}</td>
//         <td>${emp.Email}</td>
//         <td>${emp.Phone}</td>
//         <td>${emp.Department}</td>
//         <td>${emp.Role}</td>
//         <td>${emp.Date}</td>
//         <td>
//           <button style="background-color:orange" onclick="editDetails(${index})" data-toggle="modal" data-target="#employeeModal">Edit</button>
//           <button id="delete" style="background-color:red" onclick="deleteDetails(${index})">Delete</button>
//         </td>
//       </tr>`;
//   });
//   pageNumber.textContent = `Showing ${data.length} employee(s)`;
// }

// if(input===""){
//   modalTable(currentPage);
//   return;
// }

// searchInput.oninput = ()=>modalTable(currentPage);
// document.addEventListener("DOMContentLoaded",() =>{
//   document.querySelector(".search-input").(inputfield =>{
//     const tabrow = inputfield.closest("table").querySelector("tbody","tr");
//   })
// })

// function handleInput(){
//   let input = document.getElementById('searchInput').value;
//   console.log("typed",input);
//   if(input===""){
//     modalTable(currentPage);
//     return;
//   }

//   let filtered = employees.filter(emp => 
//     emp.Name.toLowerCase().includes(input) || 
//     emp.Email.toLowerCase().includes(input) ||
//     emp.Phone.toLowerCase().includes(input) ||
//     emp.Department.toLowerCase().includes(input) ||
//     emp.Role.toLowerCase().includes(input)
//   );
//   console.log("filtered employee",filtered);
  
//   filtered.map((emp,index)=>{
    
//     console.log("searching details",emp);
//     tableBody.innerHTML = `
//       <tr>
//         <td>${emp.Name}</td>
//         <td>${emp.Email}</td>
//         <td>${emp.Phone}</td>
//         <td>${emp.Department}</td>
//         <td>${emp.Role}</td>
//         <td>${emp.Date}</td>
//         <td>
//           <button style="background-color:orange" onclick="editDetails(${index})" data-toggle="modal" data-target="#employeeModal">Edit</button>
//           <button id="delete" style="background-color:red" onclick="deleteDetails(${index})">Delete</button>
//         </td>
//       </tr>`;
  

//   })


// }
// let d = "Active";
// console.log("status",d.toLowerCase());

function handleInput(){
input = document.getElementById('searchInput').value;
  console.log("INPUTS=====",input);
  if(input===""){
    modalTable(currentPage);
    return;
  }
  let newArr = [];
  start = (currentPage-1)*rowPage;
  end = start + rowPage;
  employees.slice(start,end).forEach((detail,index) => {
   if ((detail.Name.toLowerCase().includes(input.toLowerCase()))) {
    
    newArr.push(detail);
    console.log("pushed array",newArr);
    modalTable(newArr,newArr.length);

  }
});

}

// function handleStatus(){
//   userStatus = document.getElementById('searchStatus').value;
//   console.log("STATUS=====",userStatus);
//   if(userStatus===""){
//     modalTable(currentPage);
//     return;
//   }
//   let userArr=[];
//   employees.map((val,index)=>{
//     console.log("val",val.Status);
//     if((val.Status.toLowerCase().includes(userStatus.toLowerCase()))){
//       userArr.push(val);
//       console.log("status array",userArr);
//       modalTable(userArr);
//     }
//   });

//   }

let employees =  [{
  Name:"ravi",
  Mail:"ravi23@gmail.com",
  Status:"Active",
  Contact:9871467783,
},
{
  Name:"ram",
  Mail:"ram43@gmail.com",
  Status:"InActive",
  Contact:9898467783,
},
{
  Name:"aaa",
  Mail:"aaa13@gmail.com",
  Status:"Active",
  Contact:9876757783,
},
{
  Name:"kavi",
  Mail:"kavi93@gmail.com",
  Status:"Active",
  Contact:9871467743,
},
{
  Name:"deepa",
  Mail:"deepa13@gmail.com",
  Status:"InActive",
  Contact:9870067783,
},
{
  Name:"madhu",
  Mail:"madhu20@gmail.com",
  Status:"Active",
  Contact:6383146778,
},
{
  Name:"bbbb",
  Mail:"bbbb22@gmail.com",
  Status:"InActive",
  Contact:9871467783,
},
{
  Name:"cccc",
  Mail:"cccc55@gmail.com",
  Status:"Active",
  Contact:9871467783,
},
{
  Name:"dddd",
  Mail:"dddd88@gmail.com",
  Status:"Active",
  Contact:9871567783,
},
{
  Name:"eee",
  Mail:"eee05@gmail.com",
  Status:"InActive",
  Contact:8871467783,
},
{
  Name:"fff",
  Mail:"fff75@gmail.com",
  Status:"InActive",
  Contact:9876467783,
},
{
  Name:"gggg",
  Mail:"ggg15@gmail.com",
  Status:"Active",
  Contact:6671467783,
},
{
  Name:"hhh",
  Mail:"hhh23@gmail.com",
  Status:"InActive",
  Contact:9871469823,
},
{
  Name:"iii",
  Mail:"iiii90@gmail.com",
  Status:"Active",
  Contact:9871557783,
},
{
  Name:"jjjj",
  Mail:"jjjj12@gmail.com",
  Status:"InActive",
  Contact:9871457783,
},
{
  Name:"kkkk",
  Mail:"kkkk65@gmail.com",
  Status:"Active",
  Contact:9871467783,
},
{
  Name:"lll",
  Mail:"lll44@gmail.com",
  Status:"Active",
  Contact:9871467783,
},
{
  Name:"mmm",
  Mail:"mmm88@gmail.com",
  Status:"InActive",
  Contact:9871467783,
},
{
  Name:"nnn",
  Mail:"nnn95@gmail.com",
  Status:"Active",
  Contact:9871467783,
},
{
  Name:"oooo",
  Mail:"oooo49@gmail.com",
  Status:"Active",
  Contact:9871467783,
}
];

  localStorage.setItem("employees", JSON.stringify(employees));


  // console.log("......", localStorage.setItem("employees", JSON.stringify(employees)));

console.log("employee type :",employees);


// function modalOk() {

//   localStorage.setItem("employees", JSON.stringify(employees));
//   console.log(employees);
//   clearForm();
//   modalTable(currentPage);
// }

function clearForm() {
  empname.value = "";
  email.value = "";
  phone.value = "";
  department.value = ""; 
  role.value = "";
  error.textContent = '';
}

function button(data){
  rowPage = data;
  console.log("button",rowPage);
  totalPages = Math.ceil(employees.length / rowPage);
  start = (currentPage-1)*rowPage;
  end = start + rowPage;
  tableBody.innerHTML='';
  if(currentPage>totalPages){
    currentPage = totalPages;
  }

  employees.slice(start, end).forEach((emp, index) => {
    let row = document.createElement("tr");
        row.innerHTML += `
        <tr>
        <td>${index+1}</td>
        <td>${emp.Name}</td>
        <td>${emp.Mail}</td>
        <td>${emp.Status}</td>
        <td>${emp.Contact}</td>
        </tr>
        `;
        tableBody.appendChild(row);
        if(emp.Status == 'InActive'){
          row.style.backgroundColor = "red";
        }
        else{
          row.style.backgroundColor = "none";
        }
      
  });
  
  pageNumber.textContent = `Page ${currentPage} of ${totalPages}`;
  

}

function modalTable(page,sArr) {
  console.log("table input---",input);
  console.log("length of new ARRAY",sArr)
  console.log("search status",userStatus);
  let filtered = [... employees];
  let totalPages = Math.ceil(filtered.length / rowPage);
  if (page > totalPages) {
    currentPage = totalPages;
  }
  
  let start = (currentPage - 1) * rowPage;
  let end = start + rowPage;
  tableBody.innerHTML = '';
  console.log("in input---",input);
  
  if(input){
    employees.slice(start,end).forEach((val,index)=>{
     if((val.Name.toLowerCase().includes(input.toLowerCase()))){
     
    let row = document.createElement("tr");
        row.innerHTML += `
        <tr >
        <td>${employees.indexOf(val)+1}</td>
        <td>${val.Name}</td>
        <td>${val.Mail}</td>
        <td>${val.Status}</td>
        <td>${val.Contact}</td>
        </tr>
        `;
        tableBody.appendChild(row);
        if(val.Status == 'InActive'){
          row.style.backgroundColor = "red";
        }
        else{
          row.style.backgroundColor = "none";
        }
        if(sArr < 5){
          pageNumber.textContent = "";
        }
        else{
          pageNumber.textContent = `Page ${currentPage} of ${totalPages}`;
        }
     }
    })
    
      
    
      
  }
  // else if(userStatus){
  //   employees.map((val,index)=>{
  //    if((val.Status.toLowerCase().includes(userStatus.toLowerCase()))){
  //       tableBody.style.backgroundColor = "red";
  //   tableBody.innerHTML+=`
  //     <tr>
  //       <td>${index+1}</td>
  //       <td>${val.Name}</td>
  //       <td>${val.Mail}</td>
  //       <td>${val.Status}</td>
  //       <td>${val.Contact}</td>       
  //     </tr>
  //     `

  //    }
  //   });

  // }
  

  else{
    
    filtered.slice(start, end).forEach((emp) => {
      let row = document.createElement("tr");
        row.innerHTML += `
        <tr id="row">
        <td>${filtered.indexOf(emp)+1}</td>
        <td>${emp.Name}</td>
        <td>${emp.Mail}</td>
        <td>${emp.Status}</td>
        <td>${emp.Contact}</td>
        </tr>
        `;
        tableBody.appendChild(row);
        if(emp.Status == 'InActive'){
          row.style.backgroundColor = "red";
        }
        else{
          row.style.backgroundColor = "none";
        }
      
      pageNumber.textContent = `Page ${currentPage} of ${totalPages}`;
       if(currentPage == 1){
       prev.disabled = true;
      }else{
      prev.disabled = false;
      }

      if(totalPages == currentPage){
      next.disabled = true;
      }
      else{
      next.disabled = false;
      }
  
      
     });
  
    }
}





function prevPage() {
 
  if (currentPage > 1) {
    currentPage--;
    modalTable(currentPage);
  }
}

function nextPage() {
  let totalPages = Math.ceil(employees.length / rowPage);
  if (currentPage < totalPages) {
    currentPage++;
    modalTable(currentPage);
  }
}

modalTable(currentPage);








 

  

  



