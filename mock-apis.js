// Read operation GET all jobs

const API_URL = "https://63d20cd64abff88834033efe.mockapi.io/jobs";


const overlay = document.getElementById("overlay");

overlay.addEventListener("click", ()=>{
    overlay.style.display = "none";
})

function openJobForm(){
    overlay.style.display = "block";
}

const tBody = document.querySelector("tbody");

// // DELETE  a data ----> DELETE Method

const deleteJob = async (jobId) => {
  const response = await fetch(`${API_URL}/${jobId}`, {
    method: "DELETE",
  });

  await response.json();
  // console.log(deleteJobResponse);
  const jobRow = document.getElementById(`${jobId}`);
  tBody.removeChild(jobRow);
};

// // deleteJob('3')

const getAllJobs = async () => {
  const response = await fetch(API_URL);
  const jobs = await response.json();
  // console.log(jobs);

  jobs.map((job) => {
    const jobRow = document.createElement("tr");
    jobRow.id = job.id;
    const idTd = document.createElement("td");
    idTd.innerText = job.id;
    const titleTd = document.createElement("td");
    titleTd.innerText = job.title;
    const postedTd = document.createElement("td");
    postedTd.innerText = job.postedAt;

    const actionsTd = document.createElement("td");

    // Action Buttons
    const editButton = document.createElement("button");
    editButton.setAttribute("class", "btn btn-warning m-1");
    editButton.innerText = "Edit";
    // editButton.innerText = "<i class="fa-solid fa-pen-to-square"></i>

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "btn btn-danger m-1");
    deleteButton.innerText = "Delete";

    actionsTd.append(editButton, deleteButton);

    jobRow.append(idTd, titleTd, postedTd, actionsTd);
    tBody.appendChild(jobRow);

    deleteButton.addEventListener("click", () => {
      deleteJob(job.id);
    });
  });
};

// getAllJobs();

// // Read GET one data
const getIndividualJob = async (jobId) => {
  const response = await fetch(`${API_URL}/${jobId}`);
  const job = await response.json();
  console.log(job);
};

// // getIndividualJob('2');

// // CREATE POST a new Job

// const createJob = async(newJobInfo) =>{
//     const response = await fetch(
//         API_URL,
//         {
//             method: 'POST',
//             body: JSON.stringify(newJobInfo),
//             headers: {
//                 'Content-Type':'application/json;charset=UTF-8'
//             }
//         }
//     );
//     const createdJobResponse = await response.json();
//     console.log(createdJobResponse);

// }

// // createJob(
// //     {
// //         postedAt:new Date().toISOString(),
// //         title:'Senior Tester'

// //     }
// // )

// // -----------------------------------------------------------------------------
// // Update Method ---> PUT Method to edit the data

// const editJob = async(newJobInfo, jobId) =>{
//     const response = await fetch(
//         `${API_URL}/${jobId}`,
//         {
//             method: 'PUT',
//             body: JSON.stringify(newJobInfo),
//             headers: {
//                 'Content-Type':'application/json;charset=UTF-8'
//             }
//         }
//     );
//     const editedJobResponse = await response.json();
//     console.log(editedJobResponse);

// }

// // editJob(
// //     {
// //         title :'UI/UX Designer',
// //         postedAt : new Date().toISOString(),

// //     },
// //     '2'
// // )

// // editJob(
// //     {
// //         title :'Data Analyst',
// //         postedAt : new Date().toISOString(),

// //     },
// //     '10'
// // )

// // --------------------

window.addEventListener("DOMContentLoaded", () => {
  getAllJobs();
  //  getIndividualJob('2')
});
