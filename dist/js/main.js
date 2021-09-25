// import {getNationality} from './data.js'
let countryData;
const getNationality = async () => {
  const res = await fetch("https://countriesnow.space/api/v0.1/countries");
  const resData = await res.json();
  resData.data.forEach((item) => nationOps(item.country));
  
}
getNationality();
function nationOps(countryData) {
  // console.log(countryData);

  extraField.nationality.map(item => {
    const selectElement = document.getElementById(item);
    const optElement = document.createElement("option");
    optElement.setAttribute("value", countryData);
    optElement.innerHTML = countryData;
    return selectElement.appendChild(optElement);
  })

}



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
    ["fEndDate-001a"],
  ],
  secondDegree: [
    ["sDegree-001a"],
    ["sInstitute-001a"],
    ["sStartDate-001a"],
    ["sEndDate-001a"],
  ],
  phdDegree: [
    ["pDegree-001a"],
    ["pInstitute-001a"],
    ["pStartDate-001a"],
    ["pEndDate-001a"],
  ],
  intrestedCourse: ["iCourses-001a"],
  prefferedInstitution: ["pfInstitute-001a"],
  certificate: [["tCertificate-001a"], ["cYear-001a"]],
  researchExperience: [
    ["rInstitute-001a"],
    ["rAdvisor-001a"],
    ["rStartDate-001a"],
    ["rEndDate-001a"],
  ],
  honorsAward: [
    ["hAward-001a"],
    ["hTitle-001a"],
    ["hGrant-001a"],
    ["hDate-001a"],
  ],
  currentEmployment: [
    ["cEmplyr-001a"],
    ["cRole-001a"],
    ["ceStart-001a"],
    ["ceEnd-001a"],
  ],
  previousEmployment: [
    ["pEmplyr-001a"],
    ["pRole-001a"],
    ["peStart-001a"],
    ["peEnd-001a"],
  ],
  refereeAddress: [
    ["rfName-001a"],
    ["rlName-001a"],
    ["rEmail-001a"],
    ["rpNumber-001a"],
    ["rrAddress-001a"],
  ],
  wesAiea: [],
  passport: [],
};


/*
========================================
Start: Delete Functions for Nationality
========================================
*/
function deleteFuncNationality(e) {
  // Delete Button
  const btnId = document.getElementById(e.id);
  btnId.parentElement.parentElement.parentElement.remove();

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
  nationalityArr.splice(index, 1);
}
/*
========================================
End: Delete Functions for Nationality
========================================
*/

/*
========================================
Start: Delete Functions for First Degree
========================================
*/
function deleteFuncFirst(e) {
  // Delete Button
  const btnId = document.getElementById(e.id);
  btnId.parentElement.parentElement.parentElement.remove();

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
  newfIntution.map((item) => {
    finstitutionInput = item.id;
    return finstitutionInput;
  });
  const index2 = finstitutionArr.indexOf(finstitutionInput);

  finstitutionArr.splice(index2, 1);

  // Start Date
  const fStartDateArr = extraField.firstDegree[2];
  let fStartInput;
  newfStartDate.map((item) => {
    fStartInput = item.id;
    return fStartInput;
  });
  const index3 = fStartDateArr.indexOf(fStartInput);
  fStartDateArr.splice(index3, 1);

  // End Date
  const fEndDateArr = extraField.firstDegree[3];
  let fEndDateInput;
  newfEndDate.map((item) => {
    fEndDateInput = item.id;
    return fEndDateInput;
  });
  const index4 = fEndDateArr.indexOf(fEndDateInput);
  fEndDateArr.splice(index4, 1);
}
/*
======================================
End: Delete Functions for First Degree
======================================
*/

/*
==========================================
Start: Delete Functions for Second Degree
==========================================
*/
function delFuncSecondD(e) {
  // Delete Button
  const btnId = document.getElementById(e.id);
  btnId.parentElement.parentElement.parentElement.remove();

  // Degree Input
  const sDegreeArr = extraField.secondDegree[0];
  let sDegreeInput;
  newsDegreeInput.map((item) => {
    sDegreeInput = item.id;
    return sDegreeInput;
  });
  const index1 = sDegreeArr.indexOf(sDegreeInput);
  sDegreeArr.splice(index1, 1);

  // Institution Input
  const sInstitutionArr = extraField.secondDegree[1];

  let sInstitutionInput;
  newsIntution.map((item) => {
    sInstitutionInput = item.id;
    return sInstitutionInput;
  });
  const index2 = sInstitutionArr.indexOf(sInstitutionInput);
  sInstitutionArr.splice(index2, 1);

  // Start Date
  const sStartDateArr = extraField.secondDegree[2];
  let sStartInput;
  newsStartDate.map((item) => {
    sStartInput = item.id;
    return sStartInput;
  });
  const index3 = sStartDateArr.indexOf(sStartInput);
  sStartDateArr.splice(index3, 1);

  // End Date
  const sEndDateArr = extraField.secondDegree[3];
  let sEndDateInput;
  newsEndDate.map((item) => {
    sEndDateInput = item.id;
    return sEndDateInput;
  });
  const index4 = sEndDateArr.indexOf(sEndDateInput);
  sEndDateArr.splice(index4, 1);

  // console.log(extraField.secondDegree);
}
/*
=======================================
End: Delete Functions for Second Degree
=======================================
*/

/*
=======================================
Start: Delete Functions for PhD
=======================================
*/
function deleteFuncPhD(e) {
  // Delete Button
  const btnId = document.getElementById(e.id);
  btnId.parentElement.parentElement.parentElement.remove();

  // Degree Input
  const pDegreeArr = extraField.phdDegree[0];
  let pDegreeInput;
  newpDegreeInput.map((item) => {
    pDegreeInput = item.id;
    return pDegreeInput;
  });
  const index1 = pDegreeArr.indexOf(pDegreeInput);
  pDegreeArr.splice(index1, 1);

  // Institution Input
  const pInstitutionArr = extraField.phdDegree[1];
  let pInstitutionInput;
  newpIntution.map((item) => {
    pInstitutionInput = item.id;
    return pInstitutionInput;
  });
  const index2 = pInstitutionArr.indexOf(pInstitutionInput);
  pInstitutionArr.splice(index2, 1);

  // Start Date
  const pStartDateArr = extraField.phdDegree[2];
  let pStartInput;
  newpStartDate.map((item) => {
    pStartInput = item.id;
    return pStartInput;
  });
  const index3 = pStartDateArr.indexOf(pStartInput);
  pStartDateArr.splice(index3, 1);

  // End Date
  const pEndDateArr = extraField.phdDegree[3];
  let pEndDateInput;
  newpEndDate.map((item) => {
    pEndDateInput = item.id;
    return pEndDateInput;
  });
  const index4 = pEndDateArr.indexOf(pEndDateInput);
  pEndDateArr.splice(index4, 1);

  console.log(extraField.phdDegree);
}
/*
=======================================
End: Delete Functions for PhD
=======================================
*/

/*
=============================================
Start: Delete Functions for Intrested Courses
=============================================
*/
  function deleteIntrestedC(e) {
    const btnId = document.getElementById(e.id);
    btnId.parentElement.parentElement.parentElement.remove();

    // Delete
    const iCoursesArr = extraField.intrestedCourse;
    let iCoursesInput;
    newiCoursesInput.map((item) => {
      iCoursesInput = item.id;
      return pEndDateInput;
    });
    const index = iCoursesArr.indexOf(iCoursesInput);
    iCoursesArr.splice(index, 1);
  }
/*
============================================
End: Delete Functions for Intrested Courses
============================================
*/

/*
=================================================
Start: Delete Functions for Preffered Institution
=================================================
*/
  function deletePFCourse(e) {
    const btnId = document.getElementById(e.id);
    btnId.parentElement.parentElement.parentElement.remove();

    // Remove ID from Arr 
    const pfInstituteArr = extraField.prefferedInstitution;
    let pfInstituteInput;
    newpfInstitute.map((item) => {
      pfInstituteInput = item.id;
      return pfInstituteInput;
    });
    const index = pfInstituteArr.indexOf(pfInstituteInput);
    pfInstituteArr.splice(index, 1);
  }
/*
================================================
End: Delete Functions for Preffered Institution
================================================
*/

/*
================================================
Start: Delete Functions for Certificate 
================================================
*/
function deleteCertificate(e) {
  const btnId = document.getElementById(e.id);
  btnId.parentElement.parentElement.parentElement.remove();

  // Title of Certificate
  const tCertificateArr = extraField.certificate[0];
  let tCertificateInput;
  newtCertificateInput.map((item) => {
    tCertificateInput = item.id;
    return tCertificateInput;
  });
  const index = tCertificateArr.indexOf(tCertificateInput);
  tCertificateArr.splice(index, 1);

  // Year
  const cYeareArr = extraField.certificate[1];
  let cYearInput;
  newcYearInput.map((item) => {
    cYearInput = item.id;
    return tCertificateInput;
  });
  const index2 = cYeareArr.indexOf(cYearInput);
  cYeareArr.splice(index2, 1);
}
/*
================================================
End: Delete Functions for Certificate 
================================================
*/

/*
================================================
Start: Delete Functions for Research Experience 
================================================
*/
function deleteResearchE(e) {
  const btnId = document.getElementById(e.id);
  btnId.parentElement.parentElement.parentElement.remove();

  // Degree Input
  const rInstitutionArr = extraField.researchExperience[0];
  let rInstitutionInput;
  newrInstitutionInput.map((item) => {
    rInstitutionInput = item.id;
    return rInstitutionInput;
  });
  const index1 = rInstitutionArr.indexOf(rInstitutionInput);
  rInstitutionArr.splice(index1, 1);

  // Institution Input
  const rYearArr = extraField.researchExperience[1];
  let rYearInput;
  newrYearInput.map((item) => {
    rYearInput = item.id;
    return rYearInput;
  });
  const index2 = rYearArr.indexOf(rYearInput);
  rYearArr.splice(index2, 1);

  // Start Date
  const rStartDateArr = extraField.researchExperience[2];
  let rStartInput;
  newrStartDateInput.map((item) => {
    rStartInput = item.id;
    return rStartInput;
  });
  const index3 = rStartDateArr.indexOf(rStartInput);
  rStartDateArr.splice(index3, 1);

  // End Date
  const rEndDateArr = extraField.researchExperience[3];
  let rEndDateInput;
  newrEndDateInput.map((item) => {
    rEndDateInput = item.id;
    return rEndDateInput;
  });
  const index4 = rEndDateArr.indexOf(rEndDateInput);
  rEndDateArr.splice(index4, 1);
}
/*
================================================
End: Delete Functions for Research Experience 
================================================
*/

/*
================================================
Start: Delete Functions for Honors & Awards 
================================================
*/
function deleteHA(e) {
  const btnId = document.getElementById(e.id);
  btnId.parentElement.parentElement.parentElement.remove();

  // Degree Input
  const hAwardArr = extraField.honorsAward[0];
  let hAwardInput;
  newhAwardInput.map((item) => {
    hAwardInput = item.id;
    return hAwardInput;
  });
  const index1 = hAwardArr.indexOf(hAwardInput);
  hAwardArr.splice(index1, 1);

  // Institution Input
  const hTitleArr = extraField.honorsAward[1];
  let hTitleInput;
  newhTitleInput.map((item) => {
    hTitleInput = item.id;
    return hTitleInput;
  });
  const index2 = hTitleArr.indexOf(hTitleInput);
  hTitleArr.splice(index2, 1);

  // Start Date
  const hGrantArr = extraField.honorsAward[2];
  let hGrantInput;
  newhGrantInput.map((item) => {
    hGrantInput = item.id;
    return hGrantInput;
  });
  const index3 = hGrantArr.indexOf(hGrantInput);
  hGrantArr.splice(index3, 1);

  // End Date
  const hDateArr = extraField.honorsAward[3];
  let hDateInput;
  newhDateInput.map((item) => {
    hDateInput = item.id;
    return hDateInput;
  });
  const index4 = hDateArr.indexOf(hDateInput);
  hDateArr.splice(index4, 1);
}
/*
================================================
End: Delete Functions for Honors & Awards 
================================================
*/

/*
================================================
Start: Delete Functions for Current Employment 
================================================
*/
function  deleteCEPLY(e) {
  const btnId = document.getElementById(e.id);
  btnId.parentElement.parentElement.parentElement.remove();

  // Employer Input
  const cEmployerArr = extraField.currentEmployment[0];
  let cEmployerInput;
  newcEployerInput.map((item) => {
    cEmployerInput = item.id;
    return cEmployerInput;
  });
  const index1 = cEmployerArr.indexOf(cEmployerInput);
  cEmployerArr.splice(index1, 1);

  // Role Input
  const cRoleArr = extraField.currentEmployment[1];
  let cRoleInput;
  newcRoleInput.map((item) => {
    cRoleInput = item.id;
    return cRoleInput;
  });
  const index2 = cRoleArr.indexOf(cRoleInput);
  cRoleArr.splice(index2, 1);

  // Start Date
  const ceStartArr = extraField.currentEmployment[2];
  let ceStartInput;
  newceStartInput.map((item) => {
    ceStartInput = item.id;
    return ceStartInput;
  });
  const index3 = ceStartArr.indexOf(ceStartInput);
  ceStartArr.splice(index3, 1);

  // End Date
  const ceEndArr = extraField.currentEmployment[3];
  let ceEndInput;
  newceEndInput.map((item) => {
    ceEndInput = item.id;
    return ceEndInput;
  });
  const index4 = ceEndArr.indexOf(ceEndInput);
  ceEndArr.splice(index4, 1);

  console.log(extraField.currentEmployment);

}
/*
================================================
End: Delete Functions for Current Employment
================================================
*/

/*
================================================
Start: Delete Functions for Previous Employment
================================================
*/
function deletePEPLY(e) {
  const btnId = document.getElementById(e.id);
  btnId.parentElement.parentElement.parentElement.remove();

  // Employer Input
  const pEmployerArr = extraField.previousEmployment[0];
  let pEmployerInput;
  newpEployerInput.map((item) => {
    pEmployerInput = item.id;
    return pEmployerInput;
  });
  const index1 = pEmployerArr.indexOf(pEmployerInput);
  pEmployerArr.splice(index1, 1);

  // Role Input
  const pRoleArr = extraField.previousEmployment[1];
  let pRoleInput;
  newpRoleInput.map((item) => {
    pRoleInput = item.id;
    return pRoleInput;
  });
  const index2 = pRoleArr.indexOf(pRoleInput);
  pRoleArr.splice(index2, 1);

  // Start Date
  const peStartArr = extraField.previousEmployment[2];
  let peStartInput;
  newpeStartInput.map((item) => {
    peStartInput = item.id;
    return peStartInput;
  });
  const index3 = peStartArr.indexOf(peStartInput);
  peStartArr.splice(index3, 1);

  // End Date
  const peEndArr = extraField.previousEmployment[3];
  let peEndInput;
  newpeEndInput.map((item) => {
    peEndInput = item.id;
    return peEndInput;
  });
  const index4 = peEndArr.indexOf(peEndInput);
  peEndArr.splice(index4, 1);

  console.log(extraField.previousEmployment);
}
/*
================================================
End: Delete Functions for Previos Employment
================================================
*/

/*
================================================
Start: Delete Functions for Reffrence Info
================================================
*/
function deleteRefFun(e) {
  const btnId = document.getElementById(e.id);
  btnId.parentElement.parentElement.parentElement.remove();


  // First Name Input
  const rfNameArr = extraField.refereeAddress[0];
  let rfNameInput;
  newrfNameInput.map((item) => {
    rfNameInput = item.id;
    return rfNameInput;
  });
  const index1 = rfNameArr.indexOf(rfNameInput);
  rfNameArr.splice(index1, 1);

  // Last Name Input
  const rlNameArr = extraField.refereeAddress[1];
  let rlNameInput;
  newrlNameInput.map((item) => {
    rlNameInput = item.id;
    return rlNameInput;
  });
  const index2 = rlNameArr.indexOf(rlNameInput);
  rlNameArr.splice(index2, 1);

  // Email Input
  const rEmailArr = extraField.refereeAddress[2];
  let rEmailInput;
  newrEmailInput.map((item) => {
    rEmailInput = item.id;
    return rEmailInput;
  });
  const index3 = rEmailArr.indexOf(rEmailInput);
  rEmailArr.splice(index3, 1);

  // Phone Number Input
  const rpNumberArr = extraField.refereeAddress[3];
  let rpNumberInput;
  newrpNumberInput.map((item) => {
    rpNumberInput = item.id;
    return rpNumberInput;
  });
  const index4 = rpNumberArr.indexOf(rpNumberInput);
  rpNumberArr.splice(index4, 1);

  // Resident Address
  const rrAddressArr = extraField.refereeAddress[4];
  let rrAddressInput;
  newrrAddressInput.map((item) => {
    rrAddressInput = item.id;
    return rrAddressInput;
  });
  const index5 = rrAddressArr.indexOf(rrAddressInput);
  rrAddressArr.splice(index5, 1);

  console.log(extraField.refereeAddress);
}
/*
================================================
End: Delete Functions for Reffrence Info
================================================
*/



function nationalityFunc() {
  let counter = `nationality-${new Date().getMilliseconds()}`;
  let nationalityRow = document.createElement("div");
  nationalityRow.classList.add("row", "m-t-2");
  nationalityRow.innerHTML = `<div class="col-md-11">
                        <div class="form-group" id='too'>
                          <label for="inputState">Nationality</label>
                          <select id="${counter}" class="form-control nationality" >
                            <option selected>Select Nationality</option> 
                          </select>
                        </div>
                      </div>
                      <div class="col-md-1 d-flex justify-content-end align-items-center">
                        <div class="delete-btn-wrap form-group d-flex justify-content-center align-items-center m-t-1">
                          <label for="jobTitle1"></label>
                          <button onClick='deleteFuncNationality(this)' class="btn btn-danger btn-sm delete-nationality" type="button"
                            id="${new Date().getTime()}" class="${new Date().getMilliseconds()}">x</button>
                        </div>
                      </div>`;

  nationalityWrap.appendChild(nationalityRow);

  console.log(counter);
  extraField.nationality.push(counter);
  console.log("===========================");
  getNationality();
  console.log("Push id to nationality arr: ", extraField.nationality);

  const deletNationality = document.querySelectorAll(".delete-nationality");
  newDeleteNationality = [...deletNationality]

  ;
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
                          <button onClick='deleteFuncFirst(this)' class="btn btn-danger btn-sm delete-first-degree" type="button" id="${new Date().getTime()}">x</button>
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
  let degreeCounter = `sDegree-${new Date().getMilliseconds()}`;
  let instituteCounter = `sInstitute-${new Date().getMilliseconds()}`;
  let startDateCounter = `sStartDate-${new Date().getMilliseconds()}`;
  let endDateCounter = `sendDate-${new Date().getMilliseconds()}`;

  let secondDegreeRow = document.createElement("div");
  secondDegreeRow.classList.add("row", "m-t-2");
  secondDegreeRow.innerHTML = `
                      <div class="col-md">
                        <div class="form-group">
                          <label for="jobTitle1"></label>
                          <select id="${degreeCounter}" class="form-control sDegree-input">
                            <option selected>Degree</option>
                            <option>...</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md">
                        <div class="form-group">
                          <label for="videoUrl1"></label>
                          <select id="${instituteCounter}" class="form-control sInstitution-input">
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
                              <input class="form-control sStart-date" id="${startDateCounter}" name="jobTitle2" type="date">
                            </div>
                            <div class="col-md">
                              <small for="videoUrl1">End Date:</small>
                              <input class="form-control sEnd-date" id="${endDateCounter}" name="jobTitle2" type="date">
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-1 d-flex justify-content-end align-items-center">
                        <div class="delete-btn-wrap form-group d-flex justify-content-center align-items-center m-t-1">
                          <label for="jobTitle1"></label>
                         <button onClick='delFuncSecondD(this)' class="btn btn-danger btn-sm delete-first-degree" type="button" id="${new Date().getTime()}">x</button>
                        </div>
                      </div>`;

  secondDegreeWrap.appendChild(secondDegreeRow);
  extraField.secondDegree[0].push(degreeCounter);
  extraField.secondDegree[1].push(instituteCounter);
  extraField.secondDegree[2].push(startDateCounter);
  extraField.secondDegree[3].push(endDateCounter);

  console.log(extraField.secondDegree);

  const sDegreeInput = document.querySelectorAll(".sDegree-input");
  newsDegreeInput = [...sDegreeInput];

  const sInstituteInput = document.querySelectorAll(".sInstitution-input");
  newsIntution = [...sInstituteInput];

  const sStartDate = document.querySelectorAll(".sStart-date");
  newsStartDate = [...sStartDate];

  const sEndDate = document.querySelectorAll(".sEnd-date");
  newsEndDate = [...sEndDate];
}
let newsDegreeInput = [];
let newsIntution = [];
let newsStartDate = [];
let newsEndDate = [];

function phdFunc() {
    let degreeCounter = `pDegree-${new Date().getMilliseconds()}`;
    let instituteCounter = `pInstitute-${new Date().getMilliseconds()}`;
    let startDateCounter = `pStartDate-${new Date().getMilliseconds()}`;
    let endDateCounter = `pEndDate-${new Date().getMilliseconds()}`;

  let phdRow = document.createElement("div");
  phdRow.classList.add("row", "m-t-2");
  phdRow.innerHTML = `
                      <div class="col-md">
                        <div class="form-group">
                          <label for="jobTitle1"></label>
                          <select id="${degreeCounter}" class="form-control pDegree-input">
                            <option selected>Degree</option>
                            <option>...</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md">
                        <div class="form-group">
                          <label for="videoUrl1"></label>
                          <select id="${instituteCounter}" class="form-control pInstitution-input">
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
                              <input class="form-control pStart-date" id="${startDateCounter}" name="jobTitle2" type="date">
                            </div>
                            <div class="col-md">
                              <small for="videoUrl1">End Date:</small>
                              <input class="form-control pEnd-date" id="${endDateCounter}" name="jobTitle2" type="date">
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-1 d-flex justify-content-end align-items-center">
                        <div class="delete-btn-wrap form-group d-flex justify-content-center align-items-center m-t-1">
                          <label for="jobTitle1"></label>
                          <button onClick='deleteFuncPhD(this)' class="btn btn-danger btn-sm delete-first-degree" type="button" id="${new Date().getTime()}">x</button>
                        </div>
                      </div>`;

  phdWrap.appendChild(phdRow);
  extraField.phdDegree[0].push(degreeCounter);
  extraField.phdDegree[1].push(instituteCounter);
  extraField.phdDegree[2].push(startDateCounter);
  extraField.phdDegree[3].push(endDateCounter);

  console.log(extraField.phdDegree);

  const pDegreeInput = document.querySelectorAll(".pDegree-input");
  newpDegreeInput = [...pDegreeInput];

  const pInstituteInput = document.querySelectorAll(".pInstitution-input");
  newpIntution = [...pInstituteInput];

  const pStartDate = document.querySelectorAll(".pStart-date");
  newpStartDate = [...pStartDate];

  const pEndDate = document.querySelectorAll(".pEnd-date");
  newpEndDate = [...pEndDate];
}
let newpDegreeInput = [];
let newpIntution = [];
let newpStartDate = [];
let newpEndDate = [];

function IntrestedCourseFunc() {
   let coursesCounter = `iCourses-${new Date().getMilliseconds()}`;

  let IntrestedCourseRow = document.createElement("div");
  IntrestedCourseRow.classList.add("row", "m-t-2");
  IntrestedCourseRow.innerHTML = `<div class="col-md-1">
                        <label for="inputEmail3" class="col-form-label m-t-2">Course Title</label>
                      </div>
                      <div class="col-md">
                        <div class="form-group">
                          <label for="jobTitle1"></label>
                          <select id="${coursesCounter}" class="form-control iCourses">
                            <option selected>Select Course</option>
                            <option value='Agriculture'>Agriculture</option>
<option value='Agricultural Economics'>Agricultural Economics</option>
<option value='Agricultural Extension'>Agricultural Extension</option>
<option value='Agronomy'>Agronomy</option>
<option value='Animal Science'>Animal Science</option>
<option value='Crop Science'>Crop Science</option>
<option value='Food Science and Technology'>Food Science and Technology</option>
<option value='Fisheries'>Fisheries</option>
<option value='Forest Resources Management (Forestry)'>Forest Resources Management (Forestry)</option>
<option value='Home Science, Nutrition and Dietetics'>Home Science, Nutrition and Dietetics</option>
<option value='Soil Science'>Soil Science</option>
<option value='Archeology and Tourism'>Archeology and Tourism</option>
<option value='Arabic and Islamic Studies'>Arabic and Islamic Studies</option>
<option value='Christian Religious Studies'>Christian Religious Studies</option>
<option value='English and Literary Studies'>English and Literary Studies</option>
<option value='Fine and Applied Arts (Creatiuve Arts)'>Fine and Applied Arts (Creatiuve Arts)</option>
<option value='Foreign Languages and Literature'>Foreign Languages and Literature</option>
<option value='History and International Studies'>History and International Studies</option>
<option value='Linguistics and Nigerian Languages'>Linguistics and Nigerian Languages</option>
<option value='Mass Communication (Communication and Language Arts)'>Mass Communication (Communication and Language Arts)</option>
<option value='Music'>Music</option>
<option value='Theatre and Film Studies'>Theatre and Film Studies</option>
<option value='Biochemistry'>Biochemistry</option>
<option value='Botany'>Botany</option>
<option value='Microbiology'>Microbiology</option>
<option value='Marine Biology'>Marine Biology</option>
<option value='Cell Biology & Genetics'>Cell Biology & Genetics</option>
<option value='Zoology'>Zoology</option>
<option value='Accountancy'>Accountancy</option>
<option value='Acturial Science'>Acturial Science</option>
<option value='Business Administration'>Business Administration</option>
<option value='Business Management'>Business Management</option>
<option value='Banking and Finance'>Banking and Finance</option>
<option value='Hospitality and Tourism'>Hospitality and Tourism</option>
<option value='Marketing'>Marketing</option>
<option value='Insurance'>Insurance</option>
<option value='Industrial Relations and Personnel Management'>Industrial Relations and Personnel Management</option>
<option value='Child Dental Health'>Child Dental Health</option>
<option value='Oral and Maxillofacial Surgery'>Oral and Maxillofacial Surgery</option>
<option value='Preventive Dentistry'>Preventive Dentistry</option>
<option value='Restorative Dentistry'>Restorative Dentistry</option>
<option value='Adult Education and Extra-Mural Studies'>Adult Education and Extra-Mural Studies</option>
<option value='Arts Education'>Arts Education</option>
<option value='Education & Accountancy'>Education & Accountancy</option>
<option value='Education & Computer Science'>Education & Computer Science</option>
<option value='Education & Economics'>Education & Economics</option>
<option value='Education & Mathematics'>Education & Mathematics</option>
<option value='Education & Physics'>Education & Physics</option>
<option value='Education & Religious Studies'>Education & Religious Studies</option>
<option value='Education & Social Science'>Education & Social Science</option>
<option value='Education And Biology'>Education And Biology</option>
<option value='Education And Chemistry'>Education And Chemistry</option>
<option value='Education And English Language'>Education And English Language</option>
<option value='Education And French'>Education And French</option>
<option value='Education And Geography/Physics'>Education And Geography/Physics</option>
<option value='Education And Political Science'>Education And Political Science</option>
<option value='Educational Foundations'>Educational Foundations</option>
<option value='Educational / Psychology Guidance And Counselling'>Educational / Psychology Guidance And Counselling</option>
<option value='Health and Physical Education'>Health and Physical Education</option>
<option value='Library and Information Science'>Library and Information Science</option>
<option value='Science Education'>Science Education</option>
<option value='Social Sciences Education'>Social Sciences Education</option>
<option value='Vocational Teacher Education (Technical Education)'>Vocational Teacher Education (Technical Education)</option>
<option value='Religion'>Religion</option>
<option value='Igbo Linguistics'>Igbo Linguistics</option>
<option value='Agricultural and Bioresources Engineering'>Agricultural and Bioresources Engineering</option>
<option value='Civil Engineering'>Civil Engineering</option>
<option value='Chemical Engineering'>Chemical Engineering</option>
<option value='Computer Engineering'>Computer Engineering</option>
<option value='Electrical Engineering'>Electrical Engineering</option>
<option value='Electronic Engineering'>Electronic Engineering</option>
<option value='Marine Engineering'>Marine Engineering</option>
<option value='Mechanical Engineering'>Mechanical Engineering</option>
<option value='Metallurgical and Materials Engineering'>Metallurgical and Materials Engineering</option>
<option value='Petroleum and Gas Engineering'>Petroleum and Gas Engineering</option>
<option value='Systems Engineering'>Systems Engineering</option>
<option value='Structural Engineering'>Structural Engineering</option>
<option value='Production and Industrial Engineering'>Production and Industrial Engineering</option>
<option value='Architecture'>Architecture</option>
<option value='Estate Management'>Estate Management</option>
<option value='Quantity Surveying'>Quantity Surveying</option>
<option value='Building'>Building</option>
<option value='Geoinformatics and Surveying'>Geoinformatics and Surveying</option>
<option value='Urban and Regional Planning'>Urban and Regional Planning</option>
<option value='Health Administration and Management'>Health Administration and Management</option>
<option value='Medical Laboratory Sciences'>Medical Laboratory Sciences</option>
<option value='Medical Radiography and Radiological Sciences'>Medical Radiography and Radiological Sciences</option>
<option value='Medical Rehabilitation'>Medical Rehabilitation</option>
<option value='Nursing Sciences'>Nursing Sciences</option>
<option value='Commercial and Property Law'>Commercial and Property Law</option>
<option value='International and Jurisprudence'>International and Jurisprudence</option>
<option value='Private and Public Law'>Private and Public Law</option>
<option value='Anatomy'>Anatomy</option>
<option value='Anesthesia'>Anesthesia</option>
<option value='Chemical Pathology'>Chemical Pathology</option>
<option value='Community Medicine'>Community Medicine</option>
<option value='Dermatology'>Dermatology</option>
<option value='Hematology and Immunology'>Hematology and Immunology</option>
<option value='Medical Biochemistry'>Medical Biochemistry</option>
<option value='Medical Microbiology'>Medical Microbiology</option>
<option value='Medicine'>Medicine</option>
<option value='Morbid Anatomy'>Morbid Anatomy</option>
<option value='Obstetrics and Gynecology'>Obstetrics and Gynecology</option>
<option value='Ophthalmology'>Ophthalmology</option>
<option value='Otolaryngology'>Otolaryngology</option>
<option value='Pediatrics'>Pediatrics</option>
<option value='Pharmacology and Therapeutics'>Pharmacology and Therapeutics</option>
<option value='Physiology'>Physiology</option>
<option value='Radiation Medicine'>Radiation Medicine</option>
<option value='Surgery'>Surgery</option>
<option value='Psychological Medicine'>Psychological Medicine</option>
<option value='Child Dental Health'>Child Dental Health</option>
<option value='Clinical Pharmacy and Pharmacy Management'>Clinical Pharmacy and Pharmacy Management</option>
<option value='Pharmaceutical Chemistry and Industrial Pharmacy'>Pharmaceutical Chemistry and Industrial Pharmacy</option>
<option value='Pharmaceutical Technology and Industrial Pharmacy'>Pharmaceutical Technology and Industrial Pharmacy</option>
<option value='Pharmaceutics'>Pharmaceutics</option>
<option value='Pharmacognosy'>Pharmacognosy</option>
<option value='Department of Pharmacology and Toxicology'>Department of Pharmacology and Toxicology</option>
<option value='Computer Science'>Computer Science</option>
<option value='Geology'>Geology</option>
<option value='Mathematics'>Mathematics</option>
<option value='Physics and Astronomy'>Physics and Astronomy</option>
<option value='Geophysics'>Geophysics</option>
<option value='Pure and Industrial Chemistry'>Pure and Industrial Chemistry</option>
<option value='Statistics'>Statistics</option>
<option value='Economics'>Economics</option>
<option value='Geography'>Geography</option>
<option value='Philosophy'>Philosophy</option>
<option value='Political Science'>Political Science</option>
<option value='Psychology'>Psychology</option>
<option value='Public Administration and Local Government'>Public Administration and Local Government</option>
<option value='Religion'>Religion</option>
<option value='Social Work'>Social Work</option>
<option value='Sociology/Anthropology'>Sociology/Anthropology</option>
<option value='Veterinary Physiology/Pharmacology'>Veterinary Physiology/Pharmacology</option>
<option value='Veterinary Anatomy'>Veterinary Anatomy</option>
<option value='Animal Health and Production'>Animal Health and Production</option>
<option value='Veterinary Parasitology and Entomology'>Veterinary Parasitology and Entomology</option>
<option value='Veterinary Pathology and Microbiology'>Veterinary Pathology and Microbiology</option>
<option value='Veterinary Public Health and Preventive Medicine'>Veterinary Public Health and Preventive Medicine</option>
<option value='Veterinary Surgery'>Veterinary Surgery</option>
<option value='Veterinary Medicine'>Veterinary Medicine</option>
<option value='Veterinary Obstetrics and Reproductive Diseases'>Veterinary Obstetrics and Reproductive Diseases</option>
<option value='Veterinary Teaching Hospital'>Veterinary Teaching Hospital</option>
<option value='Agriculture'>Agriculture</option>
<option value='Biology'>Biology</option>
<option value='Chemistry'>Chemistry</option>
<option value='Physics'>Physics</option>
<option value='Computer Programming'>Computer Programming</option>
<option value='Criminology'>Criminology</option>
<option value='Film'>Film</option>
<option value='Finance'>Finance</option>
<option value='Fine Art'>Fine Art</option>
<option value='Environmental Science'>Environmental Science</option>
<option value='Dentistry'>Dentistry</option>
<option value='Construction Management'>Construction Management</option>
<option value='Psychology'>Psychology</option>
<option value='Sociology'>Sociology</option>
<option value='Dance'>Dance</option>
<option value='Graphic Design'>Graphic Design</option>
<option value='Forensic Science'>Forensic Science</option>
<option value='Forestry'>Forestry</option>
<option value='Health Technology'>Health Technology</option>
<option value='Horticulture'>Horticulture</option>
<option value='History'>History</option>
<option value='International Relations and Personnel Management'>International Relations and Personnel Management</option>
<option value='Hospitality '>Hospitality </option>
<option value='Insurance'>Insurance</option>
<option value='Interior Design'>Interior Design</option>
<option value='International Business'>International Business</option>
<option value='Investment'>Investment</option>
<option value='Mass Communication '>Mass Communication </option>
<option value='Journalism'>Journalism</option>
<option value='Law'>Law</option>
<option value='Medical Science'>Medical Science</option>
<option value='Physical Education'>Physical Education</option>
<option value='Music'>Music</option>
<option value='Leadership'>Leadership</option>
<option value='Property Management'>Property Management</option>
<option value='Public Health'>Public Health</option>
<option value='Sports Coaching'>Sports Coaching</option>
<option value='Real Estate'>Real Estate</option>
<option value='Sports Management'>Sports Management</option>
<option value='Teaching'>Teaching</option>
<option value='Surveying'>Surveying</option>
<option value='Masters in Business Administration (MBA)'>Masters in Business Administration (MBA)</option>
<option value='Energy Law'>Energy Law</option>
<option value='Oil and Gas Law'>Oil and Gas Law</option>
<option value='French'>French</option>
<option value='Latin'>Latin</option>
<option value='Greek'>Greek</option>
<option value='Plant and Crop Sciences'>Plant and Crop Sciences</option>
<option value='Vertinary Medicine'>Vertinary Medicine</option>
<option value='Life Sciences'>Life Sciences</option>
<option value='Sports Science'>Sports Science</option>
<option value='Materials Sciences'>Materials Sciences</option>
<option value='General Sciences'>General Sciences</option>
<option value='Astronomy'>Astronomy</option>
<option value='Biomedical Sciences'>Biomedical Sciences</option>
<option value='Earth Sciences'>Earth Sciences</option>
<option value='Physical Geography'>Physical Geography</option>
<option value='Physics'>Physics</option>
<option value='Construction'>Construction</option>
<option value='Built Environment'>Built Environment</option>
<option value='Maintenance Services'>Maintenance Services</option>
<option value='Planning'>Planning</option>
<option value='E-Commerce'>E-Commerce</option>
<option value='Business Studies'>Business Studies</option>
<option value='Accounting'>Accounting</option>
<option value='Management'>Management</option>
<option value='Office Administration'>Office Administration</option>
<option value='Retail'>Retail</option>
<option value='Entrepreneurship'>Entrepreneurship</option>
<option value='Human Resource Management'>Human Resource Management</option>
<option value='Quality Management '>Quality Management </option>
<option value='Transportation and Logistics'>Transportation and Logistics</option>
<option value='Information Technology'>Information Technology</option>
<option value='Software Development'>Software Development</option>
<option value='Computing'>Computing</option>
<option value='Multimedia'>Multimedia</option>
<option value='Arts Education'>Arts Education</option>
<option value='Crafts'>Crafts</option>
<option value='fashion and Textile Design'>fashion and Textile Design</option>
<option value='Industrial Design'>Industrial Design</option>
<option value='Theatre and Drama Studies'>Theatre and Drama Studies</option>
<option value='Art Administration'>Art Administration</option>
<option value='Non-industrial Design'>Non-industrial Design</option>
<option value='Career Advice'>Career Advice</option>
<option value='Coaching'>Coaching</option>
<option value='Education Management'>Education Management</option>
<option value='Educational Psychology'>Educational Psychology</option>
<option value='Special Education'>Special Education</option>
<option value='Teacher Training PGCE'>Teacher Training PGCE</option>
<option value='CPD'>CPD</option>
<option value='Chidhood Education'>Chidhood Education</option>
<option value='Education Learning '>Education Learning </option>
<option value='Education Research '>Education Research </option>
<option value='Pedagogy'>Pedagogy</option>
<option value='Specialised Teaching'>Specialised Teaching</option>
<option value='Aerospace Engineering '>Aerospace Engineering </option>
<option value='Chemical and Materials Engineering'>Chemical and Materials Engineering</option>
<option value='Environmental Engineering'>Environmental Engineering</option>
<option value='Biomedical Engineering'>Biomedical Engineering</option>
<option value='Manufacturing and Production'>Manufacturing and Production</option>
<option value='Mining and Oil & Gas Operations'>Mining and Oil & Gas Operations</option>
<option value='Quality Control'>Quality Control</option>
<option value='Telecommunications'>Telecommunications</option>
<option value='General Engineering and Technology'>General Engineering and Technology</option>
<option value='Marine Engineering'>Marine Engineering</option>
<option value='Metallurgy'>Metallurgy</option>
<option value='Power and Energy Engineering '>Power and Energy Engineering </option>
<option value='Structural Engineering'>Structural Engineering</option>
<option value='Vehicle Engineering'>Vehicle Engineering</option>
<option value='Counselling'>Counselling</option>
<option value='Guidance and Cunselling'>Guidance and Cunselling</option>
<option value='Complementary Health'>Complementary Health</option>
<option value='Health and Safety'>Health and Safety</option>
<option value='Midwifery'>Midwifery</option>
<option value='Nutrition and Health'>Nutrition and Health</option>
<option value='Pharmacology'>Pharmacology</option>
<option value='Physiotherapy'>Physiotherapy</option>
<option value='Radiology'>Radiology</option>
<option value='Health Studies'>Health Studies</option>
<option value='Psychology'>Psychology</option>
<option value='Archaeology'>Archaeology</option>
<option value='Cultural Studies'>Cultural Studies</option>
<option value='Genaral Studies'>Genaral Studies</option>
<option value='Languages'>Languages</option>
<option value='Museum Studies'>Museum Studies</option>
<option value='Regional Studies'>Regional Studies</option>
<option value='Classics'>Classics</option>
<option value='Literature'>Literature</option>
<option value='Religious Studies'>Religious Studies</option>
<option value='English Studies'>English Studies</option>
<option value='Civil Law'>Civil Law</option>
<option value='Legal Studies'>Legal Studies</option>
<option value='International Law'>International Law</option>
<option value='Criminl Law'>Criminl Law</option>
<option value='Legal Advice'>Legal Advice</option>
<option value='Public Law'>Public Law</option>
<option value='Aerospace Engineering/Business Administration'>Aerospace Engineering/Business Administration</option>
<option value='Bioengineering'>Bioengineering</option>
<option value='Bioengineering/Business Administration'>Bioengineering/Business Administration</option>
<option value='Beauty Therapy'>Beauty Therapy</option>
<option value='Health and Fitness'>Health and Fitness</option>
<option value='Hairdressing '>Hairdressing </option>
<option value='Therapeutic'>Therapeutic</option>
<option value='Massage'>Massage</option>
<option value='Social Work'>Social Work</option>
<option value='Linguistics '>Linguistics </option>
<option value='Environmental Management'>Environmental Management</option>
<option value='International relations'>International relations</option>
<option value='Film and Television'>Film and Television</option>
<option value='Library Studies'>Library Studies</option>
<option value='Media'>Media</option>
<option value='Politics'>Politics</option>
<option value='Social Sciences Education'>Social Sciences Education</option>
<option value='Writing'>Writing</option>
<option value='Photography'>Photography</option>
<option value='Public Administration '>Public Administration </option>
<option value='International Development'>International Development</option>
<option value='Catering'>Catering</option>
<option value='Aviation'>Aviation</option>
<option value='Food and Drink Production'>Food and Drink Production</option>
<option value='Hotel Management'>Hotel Management</option>
<option value='Hospitality'>Hospitality</option>
<option value='Leisure Management'>Leisure Management</option>
<option value='Biological Sciences'>Biological Sciences</option>
<option value='Art and Design'>Art and Design</option>
<option value='Anthropology'>Anthropology</option>
<option value='Agriculture and Forestry'>Agriculture and Forestry</option>
<option value='Anatomy and Physiology'>Anatomy and Physiology</option>
<option value='Business and Management Studies'>Business and Management Studies</option>
<option value='Building'>Building</option>
<option value='Classica and Ancient History'>Classica and Ancient History</option>
<option value='Communications and Media Studies'>Communications and Media Studies</option>
<option value='Complementary Medicine'>Complementary Medicine</option>
<option value='Creative Writing'>Creative Writing</option>
<option value='Education'>Education</option>
<option value='Drama Dance and Cinematics'>Drama Dance and Cinematics</option>
<option value='Fashion'>Fashion</option>
<option value='Geology'>Geology</option>
<option value='Health and Social Care'>Health and Social Care</option>
<option value='Forensic Science'>Forensic Science</option>
<option value='Film Making'>Film Making</option>
<option value='General Engineering '>General Engineering </option>
<option value='Geography and Environmental Science'>Geography and Environmental Science</option>
<option value='History of Art Architecture and Design'>History of Art Architecture and Design</option>
<option value='Hospitality Leisure Recreation and Tourism'>Hospitality Leisure Recreation and Tourism</option>
<option value='Food Science '>Food Science </option>
<option value='Land and Property Management'>Land and Property Management</option>
<option value='Materials Technology'>Materials Technology</option>
<option value='Medical Technology'>Medical Technology</option>
<option value='Occupational Therapy'>Occupational Therapy</option>
<option value='Pharmacology and Pharmacy'>Pharmacology and Pharmacy</option>
<option value='Robotics'>Robotics</option>
<option value='Nursing '>Nursing </option>
<option value='Youth Work'>Youth Work</option>
<option value='Social  Policy'>Social  Policy</option>
<option value='Bioscience'>Bioscience</option>
<option value='Building and Town and Country Planning'>Building and Town and Country Planning</option>
<option value='Design and Craft'>Design and Craft</option>
<option value='Earth and Marine Science'>Earth and Marine Science</option>
<option value='English Literature'>English Literature</option>
<option value='Event Management'>Event Management</option>
<option value='Liberal Arts'>Liberal Arts</option>
<option value='Life Sciences'>Life Sciences</option>
<option value='Nursing and Midwifery'>Nursing and Midwifery</option>
<option value='Pharmacy'>Pharmacy</option>
<option value='Media Studies'>Media Studies</option>
<option value='Biotechnology'>Biotechnology</option>
<option value='Animation'>Animation</option>
<option value='Aerospace Engineering'>Aerospace Engineering</option>
<option value='Air Transport Management'>Air Transport Management</option>
<option value='American Studies'>American Studies</option>
<option value='Digital Media'>Digital Media</option>
<option value='Development Studies'>Development Studies</option>
<option value='Engineering'>Engineering</option>
<option value='Oil and Gas Engineering'>Oil and Gas Engineering</option>
<option value='Oil and Gas Management'>Oil and Gas Management</option>
<option value='Supply Chain and Logistics'>Supply Chain and Logistics</option>
<option value='TESOL'>TESOL</option>
<option value='Architecture Interior Design'>Architecture Interior Design</option>
<option value='Business Education'>Business Education</option>
<option value='Dredging Technology'>Dredging Technology</option>
<option value='Ancient Indian Culture'>Ancient Indian Culture</option>
<option value='Arabic'>Arabic</option>
<option value='Bengali'>Bengali</option>
<option value='Gujarati'>Gujarati</option>
<option value='Folklore'>Folklore</option>
<option value='Textile Engineering'>Textile Engineering</option>
<option value='Biochemical Engineering'>Biochemical Engineering</option>
<option value='Ceramic Engineering'>Ceramic Engineering</option>
<option value='Instrumentation Engineering '>Instrumentation Engineering </option>
<option value='Mechatronics Engineering'>Mechatronics Engineering</option>
<option value='Telecommunications Engineeering'>Telecommunications Engineeering</option>
<option value='Automobile Engineering'>Automobile Engineering</option>
<option value='Production Engineering'>Production Engineering</option>
<option value='Mining Engineering'>Mining Engineering</option>
<option value='Genetic Engineering'>Genetic Engineering</option>
<option value='Computer Management'>Computer Management</option>
<option value='Visual Communication'>Visual Communication</option>
<option value='Design'>Design</option>
<option value='Financial Markets'>Financial Markets</option>
<option value='Acting and Film-making'>Acting and Film-making</option>
<option value='Electronics'>Electronics</option>
<option value='Physical Education'>Physical Education</option>
<option value='Audiology and Speech Language Pathology'>Audiology and Speech Language Pathology</option>
<option value='Cyber Law'>Cyber Law</option>
<option value='Labour Law'>Labour Law</option>
<option value='Naturopathy and Yogic Sciences'>Naturopathy and Yogic Sciences</option>
<option value='Optomery'>Optomery</option>
<option value='Paramedical Technology'>Paramedical Technology</option>
<option value='Veterinary Science'>Veterinary Science</option>
<option value='Technology Management'>Technology Management</option>
<option value='Natural Resource Management'>Natural Resource Management</option>
<option value='Communication Management'>Communication Management</option>
<option value='Environmental Management'>Environmental Management</option>
<option value='Media Management'>Media Management</option>
<option value='International Business'>International Business</option>
<option value='Systems Management'>Systems Management</option>
<option value='Rural Development Management'>Rural Development Management</option>
<option value='Healthcare and Hospital Management'>Healthcare and Hospital Management</option>
<option value='Retail Management'>Retail Management</option>
<option value='Banking & Insurance'>Banking & Insurance</option>
<option value='Medical Laboratory Technology'>Medical Laboratory Technology</option>
<option value='Management Studies'>Management Studies</option>
<option value='Sales Management'>Sales Management</option>
<option value='Hotel Management & Catering Technology'>Hotel Management & Catering Technology</option>
<option value='Tax Management'>Tax Management</option>
<option value='Elementary Education'>Elementary Education</option>
<option value='Materials Management'>Materials Management</option>
<option value='Operations Management'>Operations Management</option>
<option value='Commerce '>Commerce </option>
<option value='Legislative Law'>Legislative Law</option>
<option value='Multimedia Communication'>Multimedia Communication</option>
<option value='Mass Media'>Mass Media</option>
<option value='Advertising'>Advertising</option>
<option value='Project Management'>Project Management</option>
<option value='Risk Management'>Risk Management</option>
<option value='Sustainable Management'>Sustainable Management</option>
<option value='Textile Designing'>Textile Designing</option>
<option value='Customer Relationship Mangement'>Customer Relationship Mangement</option>
<option value='Oceanography'>Oceanography</option>
<option value='Data Management/Data Analysis'>Data Management/Data Analysis</option>
<option value='Astrology'>Astrology</option>
<option value='Computer Applications'>Computer Applications</option>
<option value='Industrial Management'>Industrial Management</option>
<option value='Power Management'>Power Management</option>
<option value='Business Process Management'>Business Process Management</option>
<option value='Consultancy Management'>Consultancy Management</option>
<option value='Astrophysics'>Astrophysics</option>
<option value='Fisheries Sciences'>Fisheries Sciences</option>
<option value='Fashion Photography '>Fashion Photography </option>
<option value='Design Management'>Design Management</option>
<option value='Dental Surgery'>Dental Surgery</option>
<option value='Radiotherapy'>Radiotherapy</option>
<option value='Fashion Technology'>Fashion Technology</option>
<option value='Aeronautical Engineering'>Aeronautical Engineering</option>
<option value='Aerospace Engineering'>Aerospace Engineering</option>
<option value='Web designing'>Web designing</option>
<option value='Agri Business Management'>Agri Business Management</option>
<option value='Finance Management'>Finance Management</option>
<option value='Fashion and Apparel Design'>Fashion and Apparel Design</option>
<option value='Chartered Financial Analyst'>Chartered Financial Analyst</option>
<option value='Jewllery Designing'>Jewllery Designing</option>
<option value='Cyber Security & Ethical Hacking'>Cyber Security & Ethical Hacking</option>
<option value='Tourism and Management'>Tourism and Management</option>
<option value='Fashion Management'>Fashion Management</option>
<option value='Pilot Training'>Pilot Training</option>
<option value='Investment Management'>Investment Management</option>
<option value='Food Processing Technology'>Food Processing Technology</option>
<option value='Corporate Law'>Corporate Law</option>
<option value='Software Engineering'>Software Engineering</option>
<option value='Petroleum Engineering'>Petroleum Engineering</option>
<option value='Business Economics'>Business Economics</option>
<option value='Finance & Control'>Finance & Control</option>
<option value='Prosthetics & Orthotics'>Prosthetics & Orthotics</option>
<option value='Surgery'>Surgery</option>
<option value='Health/Hospital Administration'>Health/Hospital Administration</option>
<option value='Foreign Trade'>Foreign Trade</option>
<option value='Airline and Airport Management'>Airline and Airport Management</option>
<option value='Business Analytics'>Business Analytics</option>
<option value='Animal Production & Management'>Animal Production & Management</option>
<option value='Human Rights'>Human Rights</option>
<option value='Corporate Social Responsibilty'>Corporate Social Responsibilty</option>
<option value='Disaster Management'>Disaster Management</option>
<option value='Planning'>Planning</option>
<option value='Ayurveda'>Ayurveda</option>
<option value='Energy and Environment'>Energy and Environment</option>
<option value='Cardiac Care Technology'>Cardiac Care Technology</option>
<option value='Botany'>Botany</option>
<option value='Anaesthesiology'>Anaesthesiology</option>
<option value='Ophthalmic Technology'>Ophthalmic Technology</option>
<option value='Visual Arts'>Visual Arts</option>
<option value='Administrative Law'>Administrative Law</option>
<option value='Tourism Management'>Tourism Management</option>
<option value='Tourism and Hotel Management'>Tourism and Hotel Management</option>
<option value='Intellectual Property Law'>Intellectual Property Law</option>
<option value='Tax Law'>Tax Law</option>
<option value='Airport Management'>Airport Management</option>
<option value='Urban and Rural Planning'>Urban and Rural Planning</option>
<option value='Visual Merchandising'>Visual Merchandising</option>
<option value='Respiratory Therapy '>Respiratory Therapy </option>
<option value='Digital Marketing'>Digital Marketing</option>
<option value='Catering Technology & Culinary Arts'>Catering Technology & Culinary Arts</option>
<option value='Ancient History'>Ancient History</option>
<option value='Event Management'>Event Management</option>
<option value='Electronics and Communications Engineering'>Electronics and Communications Engineering</option>
<option value='Data Analytics'>Data Analytics</option>
<option value='Bank Management'>Bank Management</option>
<option value='Plastic Engineering '>Plastic Engineering </option>
<option value='Gemology'>Gemology</option>
<option value='Neurophysiology Technology'>Neurophysiology Technology</option>
<option value='Hospital Management'>Hospital Management</option>
<option value='Electronics'>Electronics</option>
<option value='Gynaecology and Obstetrics'>Gynaecology and Obstetrics</option>
<option value='International Business'>International Business</option>
<option value='Pharmaceutics'>Pharmaceutics</option>
<option value='Game Designing and Development'>Game Designing and Development</option>
<option value='Safety Management'>Safety Management</option>
<option value='Immunology'>Immunology</option>
<option value='Commercial Law'>Commercial Law</option>
<option value='Co-operation'>Co-operation</option>
<option value='Advertising Management'>Advertising Management</option>
<option value='Pharmaceutical Analysis'>Pharmaceutical Analysis</option>
<option value='Infrastructure Management'>Infrastructure Management</option>
<option value='Medical-Surgical Nursing'>Medical-Surgical Nursing</option>
<option value='Child Health Nursing'>Child Health Nursing</option>
<option value='Artificial Intelligence'>Artificial Intelligence</option>
<option value='Paediatric Nursing'>Paediatric Nursing</option>
<option value='Medical Sociology'>Medical Sociology</option>
<option value='Applied Management'>Applied Management</option>
<option value='Information Management'>Information Management</option>
<option value='Apparel Merchandising'>Apparel Merchandising</option>
<option value='Brand Management'>Brand Management</option>
<option value='Media Law'>Media Law</option>
<option value='Telecommunications Management'>Telecommunications Management</option>
<option value='Maritime Law'>Maritime Law</option>
<option value='Environmental Law'>Environmental Law</option>
<option value='Service Management'>Service Management</option>
<option value='Applied Economics'>Applied Economics</option>
<option value='Metallurgical Engineering'>Metallurgical Engineering</option>
<option value='Food Technology'>Food Technology</option>
<option value='Public Policy Management'>Public Policy Management</option>
<option value='Biomechanics'>Biomechanics</option>
<option value='Healthcare Management'>Healthcare Management</option>
<option value='Animal Husbandry'>Animal Husbandry</option>
<option value='Air and Space Law'>Air and Space Law</option>
<option value='Consumer Law'>Consumer Law</option>
<option value='Landscape Design'>Landscape Design</option>

                          </select>
                        </div>
                      </div>
                      <div class="col-md-1 d-flex justify-content-end align-items-center">
                        <div class="delete-btn-wrap form-group d-flex justify-content-center align-items-center m-t-1">
                          <label for="jobTitle1"></label>
                          <button onClick='deleteIntrestedC(this)' class="btn btn-danger btn-sm delete-first-degree" type="button" id="${new Date().getTime()}">x</button>
                        </div>
                      </div>`;

  IntrestedCourseWrap.appendChild(IntrestedCourseRow);

  extraField.intrestedCourse.push(coursesCounter);

  const iCoursesInput = document.querySelectorAll("iCourses");
  newiCoursesInput = [...iCoursesInput];
}
let newiCoursesInput = [];

function prefferedIntitutionFunc() {
  let pfInsitutionCounter = `pfInstitute-${new Date().getMilliseconds()}`;

  let prefferedIntitutionRow = document.createElement("div");
  prefferedIntitutionRow.classList.add("row", "m-t-2");
  prefferedIntitutionRow.innerHTML = ` <div class="col-md-1">
                        <label for="inputEmail3" class="col-form-label m-t-2">Institution</label>
                      </div>
                      <div class="col-md">
                        <div class="form-group">
                          <label for="jobTitle1"></label>
                          <select id="${pfInsitutionCounter}" class="form-control pfInstitution">
                            <option selected>Select Institute</option>
                            <option>...</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-1 d-flex justify-content-end align-items-center">
                        <div class="delete-btn-wrap form-group d-flex justify-content-center align-items-center m-t-1">
                          <label for="jobTitle1"></label>
                          <button onClick='deletePFCourse(this)' class="btn btn-danger btn-sm delete-first-degree" type="button" id="${new Date().getTime()}">x</button>
                        </div>
                      </div>`;

  prefferedIntitutionWrap.appendChild(prefferedIntitutionRow);

  extraField.prefferedInstitution.push(pfInsitutionCounter);

    const pfInstituteInput = document.querySelectorAll(".pfInstitution");
    newpfInstitute = [...pfInstituteInput];
}
let newpfInstitute = [];

function certficationFunc() {
  let tcertificateCounter = `tCertificate-${new Date().getMilliseconds()}`;
  let yearCounter = `cYear-${new Date().getMilliseconds()}`;

  let certficationRow = document.createElement("div");
  certficationRow.classList.add("row", "m-t-2");
  certficationRow.innerHTML = `<div class="col-md">
                        <div class="form-group">
                          <label for="inputState"></label>
                          <select id="${tcertificateCounter}" class="form-control tCertificate-input">
                            <option selected>Title of Certfication</option>
                            <option>...</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md">
                        <div class="form-group">
                          <label for="inputState"></label>
                          <select id="${yearCounter}" class="form-control cYear-input">
                            <option selected>Year</option>
                            <option>...</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-1 d-flex justify-content-end align-items-center">
                        <div class="delete-btn-wrap form-group d-flex justify-content-center align-items-center m-t-1">
                          <label for="jobTitle1"></label>
                          <button onClick='deleteCertificate(this)' class="btn btn-danger btn-sm delete-first-degree" type="button"
                            id="${new Date().getTime()}">x</button>
                        </div>
                      </div>`;

  certficationWrap.appendChild(certficationRow);

  extraField.certificate[0].push(tcertificateCounter);
  extraField.certificate[1].push(yearCounter);

   const tCertificateInput = document.querySelectorAll(".tCertificate-input");
   newtCertificateInput = [...tCertificateInput];

   const yearInput = document.querySelectorAll(".cYear-input");
   newcYearInput = [...yearInput];
}
let newtCertificateInput = [];
let newcYearInput = [];

function researchExperienceFunc() {
   let instituteCounter = `rInstitute-${new Date().getMilliseconds()}`;
   let advisorCounter = `rAdvisor-${new Date().getMilliseconds()}`;
   let startDateCounter = `rStartDate-${new Date().getMilliseconds()}`;
   let endDateCounter = `rEndDate-${new Date().getMilliseconds()}`;

  let researchExperienceRow = document.createElement("div");
  researchExperienceRow.classList.add("row", "m-t-2");
  researchExperienceRow.innerHTML = ` <div class="col-md">
                          <div class="form-group">
                            <label for="inputState"></label>
                            <select id="${instituteCounter}" class="form-control rInstitution">
                              <option selected>Name of Institute</option>
                              <option>...</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-md">
                          <div class="form-group">
                            <label for="advisorName1"></label>
                            <input class="form-control rYear" id="${advisorCounter}" type="text" name="advisor-name" placeholder="Advisor Name" />
                          </div>
                        </div>
                        <div class="col-md">
                          <div class="form-group">
                            <div class="row">
                              <div class="col-md">
                                <small for="videoUrl1">Start Date:</small>
                                <input class="form-control rStartDate" id="${startDateCounter}" name="jobTitle2" type="date" />
                              </div>
                              <div class="col-md">
                                <small for="videoUrl1">End Date:</small>
                                <input class="form-control rEndDate" id="${endDateCounter}" name="jobTitle2" type="date" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-1 d-flex justify-content-end align-items-center">
                          <div class="delete-btn-wrap form-group d-flex justify-content-center align-items-center m-t-1">
                            <label for="jobTitle1"></label>
                            <button onClick='deleteResearchE(this)' class="btn btn-danger btn-sm delete-first-degree" type="button"
                              id="${new Date().getTime()}">x</button>
                          </div>
                        </div>`;

  researchExperienceWrap.appendChild(researchExperienceRow);

  extraField.researchExperience[0].push(instituteCounter);
  extraField.researchExperience[1].push(advisorCounter);
  extraField.researchExperience[2].push(startDateCounter);
  extraField.researchExperience[3].push(endDateCounter);

  const rInstitutionInput = document.querySelectorAll(".rInstitution");
  newrInstitutionInput = [...rInstitutionInput];
  const rYearInput = document.querySelectorAll(".rYear");
  newrYearInput = [...rYearInput];
  const rStartDateInput = document.querySelectorAll(".rStartDate");
  newrStartDateInput = [...rStartDateInput];
  const rEndDateInput = document.querySelectorAll(".rEndDate");
  newrEndDateInput = [...rEndDateInput];
}
let newrInstitutionInput = [];
let newrYearInput = [];
let newrStartDateInput = [];
let newrEndDateInput = []

function honorsAwardFunc() {
  let awardCounter = `hAward-${new Date().getMilliseconds()}`;
  let titleCounter = `hTitle-${new Date().getMilliseconds()}`;
  let grantCounter = `hGrant-${new Date().getMilliseconds()}`;
  let dateCounter = `hDate-${new Date().getMilliseconds()}`;

  let honorsAwardRow = document.createElement("div");
  honorsAwardRow.classList.add("row", "m-t-2");
  honorsAwardRow.innerHTML = `<div class="col-md-6">
                          <div class="form-group">
                            <label for="advisorName1"></label>
                            <input class="form-control hAward" id="${awardCounter}" type="text" name="advisor-name" placeholder="Title of Awards" />
                          </div>
                        </div>
                        <div class="col-md-5">
                          <div class="form-group">
                            <label for="advisorName1 hTitle"></label>
                            <input class="form-control" id="${titleCounter}" type="text" name="advisor-name" placeholder="Title of Fellowship" />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="advisorName1"></label>
                            <input class="form-control hGrant" id="${grantCounter}" type="text" name="advisor-name" placeholder="Title of Grant" />
                          </div>
                        </div>
                        <div class="col-md-5">
                          <small for="videoUrl1">Date:</small>
                          <input class="form-control hDate" id="${dateCounter}" name="jobTitle2" type="date" />
                        </div>
                        <div class="col-md-1 d-flex justify-content-end align-items-center">
                          <div class="delete-btn-wrap form-group d-flex justify-content-center align-items-center m-t-1">
                            <label for="jobTitle1"></label>
                            <button onClick='deleteHA(this)' class="btn btn-danger btn-sm delete-first-degree" type="button"
                              id="${new Date().getTime()}">x</button>
                          </div>
                        </div>`;

  honorsAwardWrap.appendChild(honorsAwardRow);

  extraField.honorsAward[0].push(awardCounter);
  extraField.honorsAward[1].push(titleCounter);
  extraField.honorsAward[2].push(grantCounter);
  extraField.honorsAward[3].push(dateCounter);

  const hAwardInput = document.querySelectorAll(".hAward");
  newhAwardInput = [...hAwardInput];
  const hTitleInput = document.querySelectorAll(".hTitle");
  newhTitleInput = [...hTitleInput];
  const hGrantInput = document.querySelectorAll(".hGrant");
  newhGrantInput = [...hGrantInput];
  const hDateInput = document.querySelectorAll(".hDate");
  newhDateInput = [...hDateInput];
}
let newhAwardInput = [];
let newhTitleInput = [];
let newhGrantInput = [];
let newhDateInput = [];

function currentEmployerFunc() {
let employerCounter = `cEmplyr-${new Date().getMilliseconds()}`;
let roleCounter = `cRole-${new Date().getMilliseconds()}`;
let startCounter = `ceStart-${new Date().getMilliseconds()}`;
let endCounter = `ceEnd-${new Date().getMilliseconds()}`;

  let currentEmployerRow = document.createElement("div");
  currentEmployerRow.classList.add("row", "m-t-2");
  currentEmployerRow.innerHTML = `
                      <div class="col-md">
                        <div class="form-group">
                          <label for="jobTitle1"></label>
                          <input class="form-control cEmployer" id="${employerCounter}" type="text" name="firstname" placeholder="Employer" />
                        </div>
                      </div>
                      <div class="col-md">
                        <div class="form-group">
                          <label for="videoUrl1"></label>
                          <select id="${roleCounter}" class="form-control cRole">
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
                              <input class="form-control ceStart" id="${startCounter}" name="jobTitle2" type="date">
                            </div>
                            <div class="col-md">
                              <small for="videoUrl1">End Date:</small>
                              <input class="form-control ceEnd" id="${endCounter}" name="jobTitle2" type="date">
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-1 d-flex justify-content-end align-items-center">
                        <div class="delete-btn-wrap form-group d-flex justify-content-center align-items-center m-t-1">
                          <label for="jobTitle1"></label>
                          <button onClick='deleteCEPLY(this)' class="btn btn-danger btn-sm delete-first-degree" type="button" id="${new Date().getTime()}">x</button>
                        </div>
                      </div>`;

  currentEmployerWrap.appendChild(currentEmployerRow);

  extraField.currentEmployment[0].push(employerCounter);
  extraField.currentEmployment[1].push(roleCounter);
  extraField.currentEmployment[2].push(startCounter);
  extraField.currentEmployment[3].push(endCounter);

  const cEployerInput = document.querySelectorAll(".cEmployer");
  newcEployerInput = [...cEployerInput];
  const cRoleInput = document.querySelectorAll(".cRole");
  newcRoleInput = [...cRoleInput];
  const ceStartInput = document.querySelectorAll(".ceStart");
  newceStartInput = [...ceStartInput];
  const ceEndInput = document.querySelectorAll(".ceEnd");
  newceEndInput = [...ceEndInput];
}
let newcEployerInput =[];
let newcRoleInput = [];
let newceStartInput = [];
let newceEndInput = [];


function previousEmployerFunc() {
let employerCounter = `pEmplyr-${new Date().getMilliseconds()}`;
let roleCounter = `pRole-${new Date().getMilliseconds()}`;
let startCounter = `peStart-${new Date().getMilliseconds()}`;
let endCounter = `peEnd-${new Date().getMilliseconds()}`;

  let previousEmployerRow = document.createElement("div");
  previousEmployerRow.classList.add("row", "m-t-2");
  previousEmployerRow.innerHTML = `
                      <div class="col-md">
                        <div class="form-group">
                          <label for="current-employer"></label>
                          <input class="form-control" id="${employerCounter}" type="text" name="current-employer" placeholder="Employer" />
                        </div>
                      </div>
                      <div class="col-md">
                        <div class="form-group">
                          <label for="videoUrl1"></label>
                          <select id="${roleCounter}" class="form-control">
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
                              <input class="form-control" id="${startCounter}" name="jobTitle2" type="date">
                            </div>
                            <div class="col-md">
                              <small for="videoUrl1">End Date:</small>
                              <input class="form-control" id="${endCounter}" name="jobTitle2" type="date">
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-1 d-flex justify-content-end align-items-center">
                        <div class="delete-btn-wrap form-group d-flex justify-content-center align-items-center m-t-1">
                          <label for="jobTitle1"></label>
                         <button onClick='deletePEPLY(this)' class="btn btn-danger btn-sm delete-first-degree" type="button" id="${new Date().getTime()}">x</button>
                        </div>
                      </div>`;

  previousEmployerWrap.appendChild(previousEmployerRow);

  extraField.previousEmployment[0].push(employerCounter);
  extraField.previousEmployment[1].push(roleCounter);
  extraField.previousEmployment[2].push(startCounter);
  extraField.previousEmployment[3].push(endCounter);

  const pEployerInput = document.querySelectorAll(".cEmployer");
  newpEployerInput = [...pEployerInput];
  const pRoleInput = document.querySelectorAll(".cRole");
  newpRoleInput = [...pRoleInput];
  const peStartInput = document.querySelectorAll(".ceStart");
  newpeStartInput = [...peStartInput];
  const peEndInput = document.querySelectorAll(".ceEnd");
  newpeEndInput = [...peEndInput];
}
let newpEployerInput = [];
let newpRoleInput = [];
let newpeStartInput = [];
let newpeEndInput = [];


function refereeFunc() {
let rfNameCounter = `rfName-${new Date().getMilliseconds()}`;
let rlNameCounter = `rlName-${new Date().getMilliseconds()}`;
let rpNumberCounter = `rpNumber-${new Date().getMilliseconds()}`;
let rEmailCounter = `rEmail-${new Date().getMilliseconds()}`;
let rrAddressCounter = `rrAddress-${new Date().getMilliseconds()}`;

  let refereeRow = document.createElement("div");
  refereeRow.classList.add("row", "m-t-3");
  refereeRow.innerHTML = `
    <div class="col-md-6">
                        <div class="form-group">
                          <label for="inputState"></label>
                          <input class="form-control rFirst-Name" type="text" id="${rfNameCounter}" name="advisor-name" placeholder="First Name" />
                        </div>
                      </div>
                      <div class="col-md-5">
                        <div class="form-group">
                          <label for="inputState"></label>
                          <input class="form-control rLast-Name" type="text" id="${rlNameCounter}" name="advisor-name" placeholder="Last Name" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="inputState"></label>
                          <input class="form-control rfEmail-Address" type="email" id="${rEmailCounter}" name="advisor-name" placeholder="Email" />
                        </div>
                      </div>
                      <div class="col-md-5">
                        <div class="form-group">
                          <label for="inputState"></label>
                          <input class="form-control rfPhone-Number" type="text" id="${rpNumberCounter}" name="advisor-name" placeholder="Phone Number" />
                        </div>
                      </div>
                      <div class="col-md-11">
                        <div class="form-group">
                          <label for="inputState"></label>
                          <label for="exampleFormControlTextarea1">Residential Address</label>
                          <textarea class="form-control rrfAddress" id="${rrAddressCounter}" rows="3"></textarea>
                        </div>
                      </div>
                      <div class="col-md-1 d-flex justify-content-end align-items-center">
                        <div class="delete-btn-wrap form-group d-flex justify-content-center align-items-center m-t-1">
                          <label for="jobTitle1"></label>
                          <button onClick='deleteRefFun(this)' class="btn btn-danger btn-sm delete-first-degree" type="button"
                                              id="${new Date().getTime()}">x</button>
                        </div>
                      </div>`;

  refereeWrap.appendChild(refereeRow);

  extraField.refereeAddress[0].push(rfNameCounter);
  extraField.refereeAddress[1].push(rlNameCounter);
  extraField.refereeAddress[2].push(rEmailCounter);
  extraField.refereeAddress[3].push(rpNumberCounter);
  extraField.refereeAddress[4].push(rrAddressCounter);

  const rfNameInput = document.querySelectorAll(".rFirst-Name");
  newrfNameInput = [...rfNameInput];
  const rlNameInput = document.querySelectorAll(".rLast-Name");
  newrlNameInput = [...rlNameInput];
  const rEmailInput = document.querySelectorAll(".rfEmail-Address");
  newrEmailInput = [...rEmailInput];
  const rpNumberInput = document.querySelectorAll(".rfPhone-Number");
  newrpNumberInput = [...rpNumberInput];
  const rrAddressInput = document.querySelectorAll(".rrfAddress");
  newrrAddressInput = [...rrAddressInput];
}
let newrfNameInput = [];
let newrlNameInput = [];
let newrEmailInput = [];
let newrpNumberInput = [];
let newrrAddressInput = [];


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




  let tempFDegree = [[],[],[],[]];
  let tempFDegree2 = []
  let tempSDegree = [[],[],[],[]];
  let tempSDegree2 = []
  let tempPDegree = [[],[],[],[]];
  let tempPDegree2 = []
  let tempCertificate = [[],[]];
  let tempCertificate2 = []
  let tempResearchE = [[],[],[],[]];
  let tempResearchE2 = [];
  let tempHA = [[],[],[],[]];
  let tempHA2 = [];
  let tempCEM = [[], [], [], []];
  let tempCEM2 = [];
  let tempPEM = [[], [], [], []];
  let tempPEM2 = [];
  let tempRFINFO = [[], [], [], [], []];
  let tempRFINFO2 = [];
 
  // Gender selection function
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
    secondDegreeValues: [],
    phdValues: [],
    intrestedCourse: [],
    prefferedIntitution: [],
    certificate: [],
    researchExperience: [],
    honorsAward: [],
    currentEmployment: [],
    previousEmployment: [],
    referee: [],
    wesAiea: [],
    passport: [],
  };

  /*
  ===========================================
  Start: Get Nationality Input Values
  ===========================================
  */
  extraField.nationality.map((item) => {
    const values = document.getElementById(item).value;
    return formValues.nationalityValues.push(values);
  });
  /*
  ===========================================
  End: Get Nationality Input Values
  ===========================================
  */

  /* 
  ====================================
  Start: Get First-Degree Input Values
  ====================================
  */
  extraField.firstDegree[0].map((item) => {
    const values = document.getElementById(item).value;
    return console.log(tempFDegree[0].push(["degree", values]));
  });

  extraField.firstDegree[1].map((item) => {
    const values = document.getElementById(item).value;
    return console.log(tempFDegree[1].push(["institution", values]));
  });

  extraField.firstDegree[2].map((item) => {
    const values = document.getElementById(item).value;
    return console.log(tempFDegree[2].push(["startDate", values]));
  });

  extraField.firstDegree[3].map((item) => {
    const values = document.getElementById(item).value;
    return console.log(tempFDegree[3].push(["endDate", values]));
  });

  for (let i = 0; i < tempFDegree[0].length; i++) {
    tempFDegree.forEach((arr) => {
      tempFDegree2.push(arr[i]);
    });
  }
  const testF = _.chunk(tempFDegree2, 4);
  testF.map((item) => {
    let obj = Object.fromEntries(item);
    return formValues.firstDegreeValues.push(obj);
  });
  /* 
  ====================================
  End: Get First-Degree Input Values
  ====================================
  */

  /* 
  ====================================
  Start: Get Second-Degree Input Values
  ====================================
  */
  extraField.secondDegree[0].map((item) => {
    const values = document.getElementById(item).value;
    return console.log(tempSDegree[0].push(["degree", values]));
  });

  extraField.secondDegree[1].map((item) => {
    const values = document.getElementById(item).value;
    return console.log(tempSDegree[1].push(["institution", values]));
  });

  extraField.secondDegree[2].map((item) => {
    const values = document.getElementById(item).value;
    return console.log(tempSDegree[2].push(["startDate", values]));
  });

  extraField.secondDegree[3].map((item) => {
    const values = document.getElementById(item).value;
    return console.log(tempSDegree[3].push(["endDate", values]));
  });

  for (let i = 0; i < tempSDegree[0].length; i++) {
    tempSDegree.forEach((arr) => {
      tempSDegree2.push(arr[i]);
    });
  }
  const testS = _.chunk(tempSDegree2, 4);
  testS.map((item) => {
    let obj = Object.fromEntries(item);
    return formValues.secondDegreeValues.push(obj);
  });
  /* 
  ====================================
  End: Get Second-Degree Input Values
  ====================================
  */

  /* 
  ====================================
  Start: Get PhD-Degree Input Values
  ====================================
  */
  extraField.phdDegree[0].map((item) => {
    const values = document.getElementById(item).value;
    return console.log(tempPDegree[0].push(["degree", values]));
  });

  extraField.phdDegree[1].map((item) => {
    const values = document.getElementById(item).value;
    return console.log(tempPDegree[1].push(["institution", values]));
  });

  extraField.phdDegree[2].map((item) => {
    const values = document.getElementById(item).value;
    return console.log(tempPDegree[2].push(["startDate", values]));
  });

  extraField.phdDegree[3].map((item) => {
    const values = document.getElementById(item).value;
    return console.log(tempPDegree[3].push(["endDate", values]));
  });

  for (let i = 0; i < tempPDegree[0].length; i++) {
    tempPDegree.forEach((arr) => {
      tempPDegree2.push(arr[i]);
    });
  }
  const testP = _.chunk(tempPDegree2, 4);
  testP.map((item) => {
    let obj = Object.fromEntries(item);
    return formValues.phdValues.push(obj);
  });
  /* 
  ====================================
  End: Get PhD-Degree Input Values
  ====================================
  */

  /* 
  ========================================
  Start: Get Intrested Course Input Values
  ========================================
  */
  extraField.intrestedCourse.forEach((item) => {
    const values = document.getElementById(item).value;
    return formValues.intrestedCourse.push(values);
  });
  /* 
  =======================================
  End: Get Intrested Course Input Values
  =======================================
  */

  /* 
  =======================================
  Start: Get Preffered Institution Input Values
  =======================================
  */
  extraField.prefferedInstitution.forEach((item) => {
    const values = document.getElementById(item).value;
    return formValues.prefferedIntitution.push(values);
  });
  /* 
  =======================================
  End: Get Preffered Institution Input Values
  =======================================
  */

  /* 
  =======================================
  Start: Get Certificate Input Values
  =======================================
  */
  // Title
  extraField.certificate[0].map((item) => {
    const values = document.getElementById(item).value;
    return console.log(tempCertificate[0].push(["Title", values]));
  });

  // Year
  extraField.certificate[1].map((item) => {
    const values = document.getElementById(item).value;
    return console.log(tempCertificate[1].push(["Year", values]));
  });

  for (let i = 0; i < tempCertificate[0].length; i++) {
    tempCertificate.forEach((arr) => {
      tempCertificate2.push(arr[i]);
    });
  }
  const testCert = _.chunk(tempCertificate2, 2);
  testCert.map((item) => {
    let obj = Object.fromEntries(item);
    return formValues.certificate.push(obj);
  });
  /* 
  =======================================
  End: Get Certificate Input Values
  =======================================
  */

  /* 
  =======================================
  Start: Get RESEARCH EXPERIENCE Input Values
  =======================================
  */
  extraField.researchExperience[0].map((item) => {
    const values = document.getElementById(item).value;
    return console.log(tempResearchE[0].push(["institution", values]));
  });

  extraField.researchExperience[1].map((item) => {
    const values = document.getElementById(item).value;
    return console.log(tempResearchE[1].push(["advisor", values]));
  });

  extraField.researchExperience[2].map((item) => {
    const values = document.getElementById(item).value;
    return console.log(tempResearchE[2].push(["startDate", values]));
  });

  extraField.researchExperience[3].map((item) => {
    const values = document.getElementById(item).value;
    return console.log(tempResearchE[3].push(["endDate", values]));
  });

  for (let i = 0; i < tempResearchE[0].length; i++) {
    tempResearchE.forEach((arr) => {
      tempResearchE2.push(arr[i]);
    });
  }
  const testRE = _.chunk(tempResearchE2, 4);
  testRE.map((item) => {
    let obj = Object.fromEntries(item);
    return formValues.researchExperience.push(obj);
  });
  /* 
  =======================================
  End: Get RESEARCH EXPERIENCE Input Values
  =======================================
  */

  /* 
  =======================================
  Start: Get Honors & Awards Input Values
  =======================================
  */
  extraField.honorsAward[0].map((item) => {
    const values = document.getElementById(item).value;
    return console.log(tempHA[0].push(["award", values]));
  });

  extraField.honorsAward[1].map((item) => {
    const values = document.getElementById(item).value;
    return console.log(tempHA[1].push(["title", values]));
  });

  extraField.honorsAward[2].map((item) => {
    const values = document.getElementById(item).value;
    return console.log(tempHA[2].push(["grant", values]));
  });

  extraField.honorsAward[3].map((item) => {
    const values = document.getElementById(item).value;
    return console.log(tempHA[3].push(["date", values]));
  });

  for (let i = 0; i < tempHA[0].length; i++) {
    tempHA.forEach((arr) => {
      tempHA2.push(arr[i]);
    });
  }
  const testHA = _.chunk(tempHA2, 4);
  testHA.map((item) => {
    let obj = Object.fromEntries(item);
    return formValues.honorsAward.push(obj);
  });
  /* 
  =======================================
  End: Get Honors & Awards Input Values
  =======================================
  */

  /* 
  =======================================
  Start: Get Current Employment Input Values
  =======================================
  */
  extraField.currentEmployment[0].map((item) => {
    const values = document.getElementById(item).value;
    return console.log(tempCEM[0].push(["employer", values]));
  });

  extraField.currentEmployment[1].map((item) => {
    const values = document.getElementById(item).value;
    return console.log(tempCEM[1].push(["role", values]));
  });

  extraField.currentEmployment[2].map((item) => {
    const values = document.getElementById(item).value;
    return console.log(tempCEM[2].push(["startDate", values]));
  });

  extraField.currentEmployment[3].map((item) => {
    const values = document.getElementById(item).value;
    return console.log(tempCEM[3].push(["endDate", values]));
  });

  for (let i = 0; i < tempCEM[0].length; i++) {
    tempCEM.forEach((arr) => {
      tempCEM2.push(arr[i]);
    });
  }
  const testCEM = _.chunk(tempCEM2, 4);
  testCEM.map((item) => {
    let obj = Object.fromEntries(item);
    return formValues.currentEmployment.push(obj);
  });
  /* 
  =======================================
  End: Get Current Employment Input Values
  =======================================
  */

  /* 
  =======================================
  End: Get Previous Employment Input Values
  =======================================
  */
  extraField.previousEmployment[0].map((item) => {
    const values = document.getElementById(item).value;
    return console.log(tempPEM[0].push(["employer", values]));
  });

  extraField.previousEmployment[1].map((item) => {
    const values = document.getElementById(item).value;
    return console.log(tempPEM[1].push(["role", values]));
  });

  extraField.previousEmployment[2].map((item) => {
    const values = document.getElementById(item).value;
    return console.log(tempPEM[2].push(["startDate", values]));
  });

  extraField.previousEmployment[3].map((item) => {
    const values = document.getElementById(item).value;
    return console.log(tempPEM[3].push(["endDate", values]));
  });

  for (let i = 0; i < tempPEM[0].length; i++) {
    tempPEM.forEach((arr) => {
      tempPEM2.push(arr[i]);
    });
  }
  const testPEM = _.chunk(tempPEM2, 4);
  testPEM.map((item) => {
    let obj = Object.fromEntries(item);
    return formValues.previousEmployment.push(obj);
  });
  /* 
  =======================================
  End: Get Previous Employment Input Values
  =======================================
  */

  /* 
  =======================================
  Start: Get Reffrence Info Input Values
  =======================================
  */
  extraField.refereeAddress[0].map((item) => {
    const values = document.getElementById(item).value;
    return console.log(tempRFINFO[0].push(["firstName", values]));
  });

  extraField.refereeAddress[1].map((item) => {
    const values = document.getElementById(item).value;
    return console.log(tempRFINFO[1].push(["lastName", values]));
  });

  extraField.refereeAddress[2].map((item) => {
    const values = document.getElementById(item).value;
    return console.log(tempRFINFO[2].push(["email", values]));
  });

  extraField.refereeAddress[3].map((item) => {
    const values = document.getElementById(item).value;
    return console.log(tempRFINFO[3].push(["phoneNumber", values]));
  });
  extraField.refereeAddress[4].map((item) => {
    const values = document.getElementById(item).value;
    return console.log(tempRFINFO[4].push(["address", values]));
  });

  for (let i = 0; i < tempRFINFO[0].length; i++) {
    tempRFINFO.forEach((arr) => {
      tempRFINFO2.push(arr[i]);
    });
  }
  const testRFINFO = _.chunk(tempRFINFO2, 5);
  testRFINFO.map((item) => {
    let obj = Object.fromEntries(item);
    return formValues.referee.push(obj);
  });
  /* 
  =======================================
  End: Get Reffrence Info Input Values
  =======================================
  */

  console.log("After submit : ", formValues);
};
const Submit = document.getElementById("submit");
Submit.addEventListener("click", SubmitFormHandler);

