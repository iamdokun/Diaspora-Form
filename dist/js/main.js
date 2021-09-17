// import {getNationality} from './data.js'

// Selecting buttons that add more input fields
const firstDegreeBtn = document.querySelector("#first-degree-add-more");
const secondDegreeBtn = document.querySelector("#second-degree-add-more");
const phdBtn = document.querySelector("#phd-add-more");
const currentEmployerBtn = document.querySelector("#add-current-employment");
const previousEmployerBtn = document.querySelector("#add-previous-employment");
const IntrestedCourseBtn = document.querySelector("#intrested-course-btn");
const prefferedIntitutionBtn = document.querySelector(
  "#preffered-intitution-btn"
);
const wesAieaBtn = document.querySelector("#wes-aiea-btn");
const passportBtn = document.querySelector("#passport-btn");
const certificateBtn = document.querySelector("#certificate-btn");
const researchExperienceBtn = document.querySelector(
  "#research-experience-btn"
);
const honorsAwardBtn = document.querySelector("#honors-award-btn");
const refereeBtn = document.querySelector("#referee-btn");
const nationalityBtn = document.querySelector("#nationality-btn");

// Selecting the DIV wrap that holds the inputs
let firstDegreeWrap = document.querySelector(".first-degree-wrap");
let secondDegreeWrap = document.querySelector(".second-degree-wrap");
let phdWrap = document.querySelector(".phd-wrap");
let currentEmployerWrap = document.querySelector(".current-employment-wrap");
let previousEmployerWrap = document.querySelector(".previous-employment-wrap");
let IntrestedCourseWrap = document.querySelector(".intrested-course-wrap");
let prefferedIntitutionWrap = document.querySelector(
  ".preffered-intitution-wrap"
);
let wesAieaWrap = document.querySelector(".wes-aiea-wrap");
let passportWrap = document.querySelector(".passport-wrap");
let certficationWrap = document.querySelector(".certfication-wrap");
let researchExperienceWrap = document.querySelector(
  ".research-experience-wrap"
);
let honorsAwardWrap = document.querySelector(".honors-award-wrap");
let refereeWrap = document.querySelector(".referee-wrap");
let nationalityWrap = document.querySelector(".nationality-wrap");

// Adding Event on the buttons selected
firstDegreeBtn.addEventListener("click", firstDegreeFunc);
secondDegreeBtn.addEventListener("click", secondDegreeFunc);
phdBtn.addEventListener("click", phdFunc);
currentEmployerBtn.addEventListener("click", currentEmployerFunc);
previousEmployerBtn.addEventListener("click", previousEmployerFunc);
IntrestedCourseBtn.addEventListener("click", IntrestedCourseFunc);
prefferedIntitutionBtn.addEventListener("click", prefferedIntitutionFunc);
wesAieaBtn.addEventListener("click", wesAieaFunc);
passportBtn.addEventListener("click", passportFunc);
certificateBtn.addEventListener("click", certficationFunc);
researchExperienceBtn.addEventListener("click", researchExperienceFunc);
honorsAwardBtn.addEventListener("click", honorsAwardFunc);
refereeBtn.addEventListener("click", refereeFunc);
nationalityBtn.addEventListener("click", nationalityFunc);

const extraField = {
  nationality: ["nationality-001a"],
  firstDegree: [
    ["fDegree-001a"],
    ["fInstitute-001a"],
    ["fStartDate-001a"],
    ["fendDate-001a"],
  ],
  secondDegree: [],
  phd: [],
  intrestedCourse: [],
  prefferedInstitution: [],
  certificate: [],
  researchExperience: [],
  honorsAward: [],
  currentEmployment: [],
  previousEmployment: [],
  referee: [],
  wesAiea: [],
  passport: [],
};



function deleteFun(e) {
  // Delete Button
  const btnId = document.getElementById(e.id);
  btnId.parentElement.parentElement.parentElement.remove();



  // Deleting selected ID in the First-Degree array for degree input
  fdegree()

  // Deleting selected ID in the Nationality array
  nationalityArrDel();
}



// Deleting selected ID in the First-Degree array
const fdegree = () => {

  // Degree Input
const fDegreeArr = extraField.firstDegree[0];
console.log(fDegreeArr);
let fDegreeInput;
newfDegreeInput.map((item) => {
  fDegreeInput = item.id;
  return fDegreeInput;
});
const index1 = fDegreeArr.indexOf(fDegreeInput);
fDegreeArr.splice(index1, 1);


// Institution Input
const finstitutionArr = extraField.firstDegree[1];
let finstitutionInput;
newfIntution.map(item => {
  finstitutionInput = item.id;
  return finstitutionInput;
});
const index2 = finstitutionArr.indexOf(finstitutionInput);

finstitutionArr.splice(index2, 1);


// Start Date
const fStartDateArr = extraField.firstDegree[2];
let fStartInput;
newfStartDate.map(item => {
 fStartInput = item.id;
  return fStartInput;
})
const index3 = fStartDateArr.indexOf(fStartInput);
fStartDateArr.splice(index3, 1)

// End Date
const fEndDateArr = extraField.firstDegree[3];
let fEndDateInput;
newfEndDate.map(item => {
  fEndDateInput = item.id;
  return fEndDateInput;
})
const index4 = fEndDateArr.indexOf(fEndDateInput);
fEndDateArr.splice(index4, 1)

}

// Deleting selected ID in the Nationality array Function
const nationalityArrDel = () => {
   let selectInputN;
   newDeleteNationality.map((item) => {
     selectInputN =
       item.parentElement.parentElement.previousElementSibling.getElementsByClassName(
         "form-group"
       )[0].children[1].id;
     return selectInputN;
   });
   const nationalityInput = selectInputN;
   const nationalityArr = extraField.nationality;
   const index = nationalityArr.indexOf(nationalityInput);
  //  console.log("id index: ", index);
   nationalityArr.splice(index, 1);
  //  console.log("After delete", extraField.nationality);
}

function nationalityFunc() {
  let counter = `nationality-${new Date().getMilliseconds()}`;
  let nationalityRow = document.createElement("div");
  nationalityRow.classList.add("row", "m-t-2");
  nationalityRow.innerHTML = `<div class="col-md-11">
                        <div class="form-group" id='too'>
                          <label for="inputState">Nationality</label>
                          <select id="${counter}" class="form-control nationality" >
                            <option selected>Choose...</option>
                            <option>...</option>
                            <option>Nigeria</option>
                            <option>Ghana</option>
                            <option>Kenya</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-1 d-flex justify-content-end align-items-center">
                        <div class="delete-btn-wrap form-group d-flex justify-content-center align-items-center m-t-1">
                          <label for="jobTitle1"></label>
                          <button onClick='deleteFun(this)' class="btn btn-danger btn-sm delete-nationality" type="button"
                            id="${new Date().getTime()}" class="${new Date().getMilliseconds()}">x</button>
                        </div>
                      </div>`;

  nationalityWrap.appendChild(nationalityRow);

  console.log(counter);
  extraField.nationality.push(counter);
  console.log("Push id to nationality arr: ", extraField.nationality);

  const deletNationality = document.querySelectorAll(".delete-nationality");
  newDeleteNationality = [...deletNationality]

}
let newDeleteNationality = [];

function firstDegreeFunc() {
  let degreeCounter = `fDegree-${new Date().getMilliseconds()}`;
  let instituteCounter = `fInstitute-${new Date().getMilliseconds()}`;
  let startDateCounter = `fStartDate-${new Date().getMilliseconds()}`;
  let endDateCounter = `fendDate-${new Date().getMilliseconds()}`;

  let firstDegreeRow = document.createElement("div");
  firstDegreeRow.classList.add("row", "m-t-2");
  firstDegreeRow.innerHTML = `
                      <div class="col-md" >
                        <div class="form-group">
                          <label for="jobTitle1"></label>
                          <select id="${degreeCounter}" class="form-control fdegree-input">
                            <option selected>Degree</option>
                            <option>...</option>
                            <option>BSc</option>
                            <option>BEng</option>
                            <option>LLM</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md">
                        <div class="form-group">
                          <label for="videoUrl1"></label>
                          <select id="${instituteCounter}" class="form-control finstitution-input">
                            <option selected>Name Of Institution</option>
                            <option>...</option>
                            <option>University of Lagos</option>
                            <option>University of Jos</option>
                            <option>Ekiti State University</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md">
                        <div class="form-group">
                          <div class="row">
                            <div class="col-md">
                              <small for="videoUrl1">Start Date:</small>
                              <input class="form-control fstart-date" id="${startDateCounter}" name="jobTitle2" type="date">
                            </div>
                            <div class="col-md">
                              <small for="videoUrl1">End Date:</small>
                              <input class="form-control fend-date" id="${endDateCounter}" name="jobTitle2" type="date">
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-1 d-flex justify-content-end align-items-center">
                        <div class="delete-btn-wrap form-group d-flex justify-content-center align-items-center m-t-1">
                          <label for="jobTitle1"></label>
                          <button onClick='deleteFun(this)' class="btn btn-danger btn-sm delete-first-degree" type="button" id="${new Date().getTime()}">x</button>
                        </div>
                      </div>`;

  firstDegreeWrap.appendChild(firstDegreeRow);
  extraField.firstDegree[0].push(degreeCounter);
  extraField.firstDegree[1].push(instituteCounter);
  extraField.firstDegree[2].push(startDateCounter);
  extraField.firstDegree[3].push(endDateCounter);

  console.log(extraField.firstDegree);

  const deleteFD = document.querySelectorAll(".delete-first-degree");
  newDeleteFD = [...deleteFD];

  const fDegreeInput = document.querySelectorAll(".fdegree-input");
  newfDegreeInput = [...fDegreeInput];

  const fInstituteInput = document.querySelectorAll(".finstitution-input");
newfIntution = [...fInstituteInput]

  const fStartDate = document.querySelectorAll(".fstart-date");
  newfStartDate = [...fStartDate];

  const fEndDate = document.querySelectorAll(".fend-date");
  newfEndDate = [...fEndDate];
  
 
}

let newDeleteFD = [];
let newfDegreeInput = [];
let newfIntution = []
let newfStartDate = []
let newfEndDate = []

function secondDegreeFunc() {
  let secondDegreeRow = document.createElement("div");
  secondDegreeRow.classList.add("row", "m-t-2");
  secondDegreeRow.innerHTML = `
                      <div class="col-md">
                        <div class="form-group">
                          <label for="jobTitle1"></label>
                          <select id="inputState" class="form-control">
                            <option selected>Degree</option>
                            <option>...</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md">
                        <div class="form-group">
                          <label for="videoUrl1"></label>
                          <select id="inputState" class="form-control">
                            <option selected>Name Of Institution</option>
                            <option>...</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md">
                        <div class="form-group">
                          <div class="row">
                            <div class="col-md">
                              <small for="videoUrl1">Start Date:</small>
                              <input class="form-control" name="jobTitle2" type="date">
                            </div>
                            <div class="col-md">
                              <small for="videoUrl1">End Date:</small>
                              <input class="form-control" name="jobTitle2" type="date">
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-1 d-flex justify-content-end align-items-center">
                        <div class="delete-btn-wrap form-group d-flex justify-content-center align-items-center m-t-1">
                          <label for="jobTitle1"></label>
                         <button onClick='deleteFun(this)' class="btn btn-danger btn-sm delete-first-degree" type="button" id="${new Date().getTime()}">x</button>
                        </div>
                      </div>`;

  secondDegreeWrap.appendChild(secondDegreeRow);
}

function phdFunc() {
  let phdRow = document.createElement("div");
  phdRow.classList.add("row", "m-t-2");
  phdRow.innerHTML = `
                      <div class="col-md">
                        <div class="form-group">
                          <label for="jobTitle1"></label>
                          <select id="inputState" class="form-control">
                            <option selected>Degree</option>
                            <option>...</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md">
                        <div class="form-group">
                          <label for="videoUrl1"></label>
                          <select id="inputState" class="form-control">
                            <option selected>Name Of Institution</option>
                            <option>...</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md">
                        <div class="form-group">
                          <div class="row">
                            <div class="col-md">
                              <small for="videoUrl1">Start Date:</small>
                              <input class="form-control" name="jobTitle2" type="date">
                            </div>
                            <div class="col-md">
                              <small for="videoUrl1">End Date:</small>
                              <input class="form-control" name="jobTitle2" type="date">
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-1 d-flex justify-content-end align-items-center">
                        <div class="delete-btn-wrap form-group d-flex justify-content-center align-items-center m-t-1">
                          <label for="jobTitle1"></label>
                          <button onClick='deleteFun(this)' class="btn btn-danger btn-sm delete-first-degree" type="button" id="${new Date().getTime()}">x</button>
                        </div>
                      </div>`;

  phdWrap.appendChild(phdRow);
}

function currentEmployerFunc() {
  let currentEmployerRow = document.createElement("div");
  currentEmployerRow.classList.add("row", "m-t-2");
  currentEmployerRow.innerHTML = `
                      <div class="col-md">
                        <div class="form-group">
                          <label for="jobTitle1"></label>
                          <input class="form-control" type="text" name="firstname" placeholder="Employer" />
                        </div>
                      </div>
                      <div class="col-md">
                        <div class="form-group">
                          <label for="videoUrl1"></label>
                          <select id="inputState" class="form-control">
                            <option selected>Role / Position</option>
                            <option>...</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md">
                        <div class="form-group">
                          <div class="row">
                            <div class="col-md">
                              <small for="videoUrl1">Start Date:</small>
                              <input class="form-control" name="jobTitle2" type="date">
                            </div>
                            <div class="col-md">
                              <small for="videoUrl1">End Date:</small>
                              <input class="form-control" name="jobTitle2" type="date">
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-1 d-flex justify-content-end align-items-center">
                        <div class="delete-btn-wrap form-group d-flex justify-content-center align-items-center m-t-1">
                          <label for="jobTitle1"></label>
                          <button onClick='deleteFun(this)' class="btn btn-danger btn-sm delete-first-degree" type="button" id="${new Date().getTime()}">x</button>
                        </div>
                      </div>`;

  currentEmployerWrap.appendChild(currentEmployerRow);
}

function previousEmployerFunc() {
  let previousEmployerRow = document.createElement("div");
  previousEmployerRow.classList.add("row", "m-t-2");
  previousEmployerRow.innerHTML = `
                      <div class="col-md">
                        <div class="form-group">
                          <label for="current-employer"></label>
                          <input class="form-control" type="text" name="current-employer" placeholder="Employer" />
                        </div>
                      </div>
                      <div class="col-md">
                        <div class="form-group">
                          <label for="videoUrl1"></label>
                          <select id="inputState" class="form-control">
                            <option selected>Role / Position</option>
                            <option>...</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md">
                        <div class="form-group">
                          <div class="row">
                            <div class="col-md">
                              <small for="videoUrl1">Start Date:</small>
                              <input class="form-control" name="jobTitle2" type="date">
                            </div>
                            <div class="col-md">
                              <small for="videoUrl1">End Date:</small>
                              <input class="form-control" name="jobTitle2" type="date">
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-1 d-flex justify-content-end align-items-center">
                        <div class="delete-btn-wrap form-group d-flex justify-content-center align-items-center m-t-1">
                          <label for="jobTitle1"></label>
                         <button onClick='deleteFun(this)' class="btn btn-danger btn-sm delete-first-degree" type="button" id="${new Date().getTime()}">x</button>
                        </div>
                      </div>`;

  previousEmployerWrap.appendChild(previousEmployerRow);
}

function IntrestedCourseFunc() {
  let IntrestedCourseRow = document.createElement("div");
  IntrestedCourseRow.classList.add("row", "m-t-2");
  IntrestedCourseRow.innerHTML = `<div class="col-md-1">
                        <label for="inputEmail3" class="col-form-label m-t-2">Course Title</label>
                      </div>
                      <div class="col-md">
                        <div class="form-group">
                          <label for="jobTitle1"></label>
                          <select id="inputState" class="form-control">
                            <option selected>Select Course</option>
                            <option>...</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-1 d-flex justify-content-end align-items-center">
                        <div class="delete-btn-wrap form-group d-flex justify-content-center align-items-center m-t-1">
                          <label for="jobTitle1"></label>
                          <button onClick='deleteFun(this)' class="btn btn-danger btn-sm delete-first-degree" type="button" id="${new Date().getTime()}">x</button>
                        </div>
                      </div>`;

  IntrestedCourseWrap.appendChild(IntrestedCourseRow);
}

function prefferedIntitutionFunc() {
  let prefferedIntitutionRow = document.createElement("div");
  prefferedIntitutionRow.classList.add("row", "m-t-2");
  prefferedIntitutionRow.innerHTML = ` <div class="col-md-1">
                        <label for="inputEmail3" class="col-form-label m-t-2">Institution</label>
                      </div>
                      <div class="col-md">
                        <div class="form-group">
                          <label for="jobTitle1"></label>
                          <select id="inputState" class="form-control">
                            <option selected>Select Institute</option>
                            <option>...</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-1 d-flex justify-content-end align-items-center">
                        <div class="delete-btn-wrap form-group d-flex justify-content-center align-items-center m-t-1">
                          <label for="jobTitle1"></label>
                          <button onClick='deleteFun(this)' class="btn btn-danger btn-sm delete-first-degree" type="button" id="${new Date().getTime()}">x</button>
                        </div>
                      </div>`;

  prefferedIntitutionWrap.appendChild(prefferedIntitutionRow);
}

function wesAieaFunc() {
  let wesAieaRow = document.createElement("div");
  wesAieaRow.classList.add("row", "m-t-2");
  wesAieaRow.innerHTML = `  <div class="col-md">
                        <div class="form-group">
                          <div class="custom-file">
                            <input type="file" class="custom-file-input form-control" id="inputGroupFile02">
                            <label class="custom-file-label" for="inputGroupFile02">Document Upload</label>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-1 d-flex justify-content-end align-items-center">
                        <div class="delete-btn-wrap form-group d-flex justify-content-center align-items-center m-t-1">
                          <label for="jobTitle1"></label>
                          <button onClick='deleteFun(this)' class="btn btn-danger btn-sm delete-first-degree" type="button" id="${new Date().getTime()}">x</button>
                        </div>
                      </div>`;

  wesAieaWrap.appendChild(wesAieaRow);
}

function passportFunc() {
  let passportRow = document.createElement("div");
  passportRow.classList.add("row", "m-t-2");
  passportRow.innerHTML = `  <div class="col-md">
                        <div class="form-group">
                          <div class="custom-file">
                            <input type="file" class="custom-file-input form-control" id="inputGroupFile02">
                            <label class="custom-file-label" for="inputGroupFile02">Image Upload</label>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-1 d-flex justify-content-end align-items-center">
                        <div class="delete-btn-wrap form-group d-flex justify-content-center align-items-center m-t-1">
                          <label for="jobTitle1"></label>
                          <button onClick='deleteFun(this)' class="btn btn-danger btn-sm delete-first-degree" type="button" id="${new Date().getTime()}">x</button>
                        </div>
                      </div>`;

  passportWrap.appendChild(passportRow);
}

function certficationFunc() {
  let certficationRow = document.createElement("div");
  certficationRow.classList.add("row", "m-t-2");
  certficationRow.innerHTML = `<div class="col-md">
                        <div class="form-group">
                          <label for="inputState"></label>
                          <select id="inputState" class="form-control">
                            <option selected>Title of Certfication</option>
                            <option>...</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md">
                        <div class="form-group">
                          <label for="inputState"></label>
                          <select id="inputState" class="form-control">
                            <option selected>Year</option>
                            <option>...</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-1 d-flex justify-content-end align-items-center">
                        <div class="delete-btn-wrap form-group d-flex justify-content-center align-items-center m-t-1">
                          <label for="jobTitle1"></label>
                          <button onClick='deleteFun(this)' class="btn btn-danger btn-sm delete-first-degree" type="button"
                            id="${new Date().getTime()}">x</button>
                        </div>
                      </div>`;

  certficationWrap.appendChild(certficationRow);
}

function researchExperienceFunc() {
  let researchExperienceRow = document.createElement("div");
  researchExperienceRow.classList.add("row", "m-t-2");
  researchExperienceRow.innerHTML = ` <div class="col-md">
                          <div class="form-group">
                            <label for="inputState"></label>
                            <select id="inputState" class="form-control">
                              <option selected>Name of Institute</option>
                              <option>...</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-md">
                          <div class="form-group">
                            <label for="advisorName1"></label>
                            <input class="form-control" type="text" name="advisor-name" placeholder="Advisor Name" />
                          </div>
                        </div>
                        <div class="col-md">
                          <div class="form-group">
                            <div class="row">
                              <div class="col-md">
                                <small for="videoUrl1">Start Date:</small>
                                <input class="form-control" name="jobTitle2" type="date" />
                              </div>
                              <div class="col-md">
                                <small for="videoUrl1">End Date:</small>
                                <input class="form-control" name="jobTitle2" type="date" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-1 d-flex justify-content-end align-items-center">
                          <div class="delete-btn-wrap form-group d-flex justify-content-center align-items-center m-t-1">
                            <label for="jobTitle1"></label>
                            <button onClick='deleteFun(this)' class="btn btn-danger btn-sm delete-first-degree" type="button"
                              id="${new Date().getTime()}">x</button>
                          </div>
                        </div>`;

  researchExperienceWrap.appendChild(researchExperienceRow);
}

function honorsAwardFunc() {
  let honorsAwardRow = document.createElement("div");
  honorsAwardRow.classList.add("row", "m-t-2");
  honorsAwardRow.innerHTML = `<div class="col-md-6">
                          <div class="form-group">
                            <label for="advisorName1"></label>
                            <input class="form-control" type="text" name="advisor-name" placeholder="Title of Awards" />
                          </div>
                        </div>
                        <div class="col-md-5">
                          <div class="form-group">
                            <label for="advisorName1"></label>
                            <input class="form-control" type="text" name="advisor-name" placeholder="Title of Fellowship" />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="advisorName1"></label>
                            <input class="form-control" type="text" name="advisor-name" placeholder="Title of Grant" />
                          </div>
                        </div>
                        <div class="col-md-5">
                          <small for="videoUrl1">Date:</small>
                          <input class="form-control" name="jobTitle2" type="date" />
                        </div>
                        <div class="col-md-1 d-flex justify-content-end align-items-center">
                          <div class="delete-btn-wrap form-group d-flex justify-content-center align-items-center m-t-1">
                            <label for="jobTitle1"></label>
                            <button onClick='deleteFun(this)' class="btn btn-danger btn-sm delete-first-degree" type="button"
                              id="${new Date().getTime()}">x</button>
                          </div>
                        </div>`;

  honorsAwardWrap.appendChild(honorsAwardRow);
}

function refereeFunc() {
  let refereeRow = document.createElement("div");
  refereeRow.classList.add("row", "m-t-3");
  refereeRow.innerHTML = `
    <div class="col-md-6">
                        <div class="form-group">
                          <label for="inputState"></label>
                          <input class="form-control" type="text" name="advisor-name" placeholder="First Name" />
                        </div>
                      </div>
                      <div class="col-md-5">
                        <div class="form-group">
                          <label for="inputState"></label>
                          <input class="form-control" type="text" name="advisor-name" placeholder="Last Name" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="inputState"></label>
                          <input class="form-control" type="email" name="advisor-name" placeholder="Email" />
                        </div>
                      </div>
                      <div class="col-md-5">
                        <div class="form-group">
                          <label for="inputState"></label>
                          <input class="form-control" type="text" name="advisor-name" placeholder="Phone Number" />
                        </div>
                      </div>
                      <div class="col-md-11">
                        <div class="form-group">
                          <label for="inputState"></label>
                          <label for="exampleFormControlTextarea1">Residential Address</label>
                          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                      </div>
                      <div class="col-md-1 d-flex justify-content-end align-items-center">
                        <div class="delete-btn-wrap form-group d-flex justify-content-center align-items-center m-t-1">
                          <label for="jobTitle1"></label>
                          <button onClick='deleteFun(this)' class="btn btn-danger btn-sm delete-first-degree" type="button"
                                              id="${new Date().getTime()}">x</button>
                        </div>
                      </div>`;

  refereeWrap.appendChild(refereeRow);
}

/* 
  ==================================================================
                          Form Data Collection
  ==================================================================
*/
const surName = document.getElementById("surname");
const firstName = document.getElementById("firstname");
const otherName = document.getElementById("other-name");
const gender = document.getElementById("gender");
const surName2 = document.getElementById("surname2");
const firstName2 = document.getElementById("firstname2");
const otherName2 = document.getElementById("othername2");
const countryOfResidenceValue = document.getElementsByClassName("countryR");
const pAddress = document.getElementById("permanent-address");
const phoneNumber = document.getElementById("phone-number");




  let tempFDegree = [];
 
  
const radioBtn = () => {
  let genderValue;
  if (document.getElementById("gridRadios1").checked) {
    genderValue = document.getElementById("gridRadios1").value;
    return genderValue;
  } else if (document.getElementById("gridRadios2").checked) {
    genderValue = document.getElementById("gridRadios2").value;
    return genderValue;
  } else {
    genderValue = document.getElementById("gridRadios3").value;
    return genderValue;
  }
  // console.log(genderValue);
};

// Submit form
const SubmitFormHandler = () => {
  console.log(countryOfResidenceValue.value);
  const formValues = {
    name1: {
      surName: surName.value,
      firstName: firstName.value,
      otherName: otherName.value,
    },
    gender: radioBtn(),
    name2: {
      surName: surName2.value,
      firstName: firstName2.value,
      otherName: otherName2.value,
    },
    countryOfResidence: countryOfResidenceValue[0].value,
    parmanentAddress: pAddress.value,
    phoneNumber: phoneNumber.value,
    nationalityValues: [],
    firstDegreeValues: [],
    secondDegreeValues: [
      {
        degree: "",
        institute: "",
        startDate: "",
        endDate: "",
      },
    ],
    phdValues: [
      {
        degree: "",
        institute: "",
        startDate: "",
        endDate: "",
      },
    ],
    intrestedCourse: [],
    prefferedIntitution: [],
    certificate: [
      {
        title: "",
        year: "",
      },
    ],
    researchExperience: [
      {
        institution: "",
        advisorName: "",
        startDate: "",
        endDate: "",
      },
    ],
    honorsAward: [
      {
        titleOfAward: "",
        titleOfFellowship: "",
        titleOfGrant: "",
        date: "",
      },
    ],
    currentEmployment: [
      {
        employer: "",
        role: "",
        startDate: "",
        endDate: "",
      },
    ],
    previousEmployment: [
      {
        employer: "",
        role: "",
        startDate: "",
        endDate: "",
      },
    ],
    referee: [
      {
        firstName: "",
        LlastName: "",
        email: "",
        phoneNumber: "",
        address: "",
      },
    ],
    wesAiea: [],
    passport: [],
  };

  // Get Nationality Input Values
  extraField.nationality.map((item) => {
    const values = document.getElementById(item).value;
    return formValues.nationalityValues.push(values);
  });

  // ===================================================
  // let firstDegreeValues = [];
  // for (let index = 0; index < extraField.firstDegree.length; index++) {

  //    extraField.firstDegree[index].map((item) => {
  //      const values = document.getElementById(item).value;
  //     //  return console.log(tempFDegree.push(values));
  //     tempFDegree[extraField.firstDegree[index].indexOf(item)]

  //     console.log(extraField.firstDegree[index].indexOf(item));

  //     switch (index) {
  //       case 0:
  //         // firstDegreeValues[
  //         //   extraField.firstDegree[index].indexOf(item)
  //         // ].degree = values;
  //         firstDegreeValues.push({'degree': values, 'institution': , 'startDate','endDate'})
  //         break;
  //       case 1:
  //          firstDegreeValues[
  //            extraField.firstDegree[index].indexOf(item)
  //          ].degree = values;
  //         break;
  //       case 2:
  //          firstDegreeValues[
  //            extraField.firstDegree[index].indexOf(item)
  //          ].degree = values;
  //         break;
  //       case 3:
  //          firstDegreeValues[
  //            extraField.firstDegree[index].indexOf(item)
  //          ].degree = values;
  //         break;

  //       default:
  //         break;
  //     }

  //     console.log(values, index, item, firstDegreeValues);
  //    });

  // }
  // =======================================================

  // Get First-Degree Input Values
  extraField.firstDegree[0].map((item) => {
    const values = document.getElementById(item).value;

    return console.log(tempFDegree.push(["degree", values]));
  });
  console.log("tempFDegree value oustside: ", tempFDegree);

  extraField.firstDegree[1].map((item) => {
    const values = document.getElementById(item).value;
    return console.log(tempFDegree.push(["institution", values]));
  });

  extraField.firstDegree[2].map((item) => {
    const values = document.getElementById(item).value;
    return console.log(tempFDegree.push(["startDate", values]));
  });

  extraField.firstDegree[3].map((item) => {
    const values = document.getElementById(item).value;
    return console.log(tempFDegree.push(["endDate", values]));
  });

  console.log("Before convert to OBJ: ", tempFDegree);

  const obj = [Object.fromEntries(tempFDegree)];

  console.log("Before push OBJ: ", obj);
  formValues.firstDegreeValues.push(obj);
  // Get First-Degree Input Values

  console.log("After submit : ", formValues);
  console.log("After submit : ", tempFDegree);

  // tempFDegree = [];
};
const Submit = document.getElementById("submit");
Submit.addEventListener("click", SubmitFormHandler);

//  function tempFDegreeFunc () {
//     return {
//       degree: tempFDegree[0],
//       institution: tempFDegree[1],
//     };
//   };
