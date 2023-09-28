

const dashboradList = document.querySelectorAll(".dashborad-list li");
console.log(dashboradList);
dashboradList.forEach(function (list) {
  list.addEventListener("click", function () {
    dashboradList.forEach(function (listdash) {
      listdash.classList.remove("list-active");
    });
    list.classList.add("list-active");
  });
});

// dashborad veiw project

const arrProjects = [
  {
    img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "my first project ",
    disc: "here is the first project i have build in my carrer so hope you like it ",
  },
  {
    img: "https://images.pexels.com/photos/38547/office-freelancer-computer-business-38547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "my first project",
    disc: "here is the first project i have build in my carrer so hope you like it",
  },
  {
    img: "https://images.pexels.com/photos/38547/office-freelancer-computer-business-38547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "my first project",
    disc: "here is the first project i have build in my carrer so hope you like it",
  },
];

arrProjects.forEach(function (project) {
  viewProject.innerHTML += `
<div class="project-details">
   <div class="project-img">
    <img src=${project.img} alt="">
   </div>
    <div class="project-title">
        <h3>${project.title}</h3>
    </div>
    <div class="project-disc">
        <p>${project.disc}</p>
    </div>
    <div class="project-btn">
        <button>DELETE</button>
    </div>
</div>
`;
});
// burger list

const burgerList = document.querySelector(".burger-list");
const asideCont = document.querySelector(".aside-container");

let open = false;
burgerList.addEventListener('click', function() {

  if (open == false) {
    asideCont.style.display = 'block';
    open = true;
  } else {
    asideCont.style.display = "none";
     open = false;
  }
})

// add project

const addBtnProject = document.querySelector(".project-add");
const addProjectDiv = document.querySelector(".add-project");
const cancelBtnadd = document.querySelector(".cancel-btn");
let show = false;
addBtnProject.addEventListener('click', function() {

  if (show == false) {
    addProjectDiv.style.display = 'block'
      viewProject.style.display = 'none'
      show = true;
  }
  
})

// cancel btn

cancelBtnadd.addEventListener("click", function () {
  if (show == true) {
    addProjectDiv.style.display = "none";
    viewProject.style.display = "block";
    show = false;
  }
});
// form
let photo = '';
let title = '';
let disc = "";
// regular 
const regularText = /^[a-zA-Z0-9 ]+$/;

titleInput.addEventListener('change', function() {

  title = titleInput.value;
   
    const match = regularText.test(title)
  
    if(match == false) {
      ererTitle.innerHTML = "this input is invalid use number and letter"
      submitBtnProj.disabled = true;
    } else{
       ererTitle.innerHTML = '';
        submitBtnProj.disabled = false;
    }


})

// disc
discInput.addEventListener("change", function () {
  disc = discInput.value;
  
  const match = regularText.test(disc)
  if (match == false) {
ererDisc.innerHTML = "this input is invalid use number and letter";
  submitBtnProj.disabled = true;
  } else {
    ererDisc.innerHTML = ''
      submitBtnProj.disabled = false;
  }

});
// photo exp
const fileInput = document.getElementById("fileInput");

fileInput.addEventListener("change", function () {
  const file = fileInput.files[0];
  

  const reader = new FileReader();

  reader.onload = function () {
    const base64Image = reader.result;
    console.log(base64Image)
photo = base64Image.split(",")[1];
    // Send the base64 encoded image to the server using an HTTP request.
    console.log(photo)
  };


});
// add project 

submitBtnProj.addEventListener("click", async function (e) {
  e.preventDefault();
      console.log(photo);
  console.log("hello kefah");
  const urlPost =
    "https://th1901mev2.execute-api.us-east-1.amazonaws.com/postdatafun";
  const item = {
    ImageData: photo,
    title: title,
    description: disc
  };
  const fetchPost = await fetch(urlPost, {
    method: "post",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
      Credential: true,
    },
    body: JSON.stringify(item)

  });
  const res = await fetchPost.json()
  console.log(res)

});
