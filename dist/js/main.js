// import {getNationality} from './data.js'
let countryData;
const getNationality = async () => {
  const res = await fetch("https://countriesnow.space/api/v0.1/countries");
  const resData = await res.json();
  resData.data.forEach((item) => nationOps(item.country));
};
getNationality();
function nationOps(countryData) {
  // console.log(countryData);

  extraField.nationality.map((item) => {
    const selectElement = document.getElementById(item);
    const optElement = document.createElement("option");
    optElement.setAttribute("value", countryData);
    optElement.innerHTML = countryData;
    return selectElement.appendChild(optElement);
  });
}

// Selecting buttons that add more input fields
const firstDegreeBtn = document.querySelector("#first-degree-add-more");
const secondDegreeBtn = document.querySelector("#second-degree-add-more");
const phdBtn = document.querySelector("#phd-add-more");
const currentEmployerBtn = document.querySelector("#add-current-employment");
const previousEmployerBtn = document.querySelector("#add-previous-employment");
const courseNdIntitutionBtn = document.querySelector("#course-institute-btn");
// const IntrestedCourseBtn = document.querySelector("#intrested-course-btn");
// const prefferedIntitutionBtn = document.querySelector(
//   "#preffered-intitution-btn"
// );
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
let courseNdIntitutionWrap = document.querySelector(".course-institute-wrap");
// let IntrestedCourseWrap = document.querySelector(".intrested-course-wrap");
// let prefferedIntitutionWrap = document.querySelector(
//   ".preffered-intitution-wrap"
// );
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
courseNdIntitutionBtn.addEventListener("click", courseNdIntitutionFunc);
// IntrestedCourseBtn.addEventListener("click", IntrestedCourseFunc);
// prefferedIntitutionBtn.addEventListener("click", prefferedIntitutionFunc);
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
  courseNdInstitute: [["icourse-001a"], ["pinstitute-001a"]],
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
=========================================================
Start: Delete Functions for Course & Institution to Teach
=========================================================
*/
function deleteCOINFunc(e) {
  const btnId = document.getElementById(e.id);
  btnId.parentElement.parentElement.parentElement.remove();

  // Interested Course to Teach
  const iCourseArr = extraField.courseNdInstitute[0];
  let iCourseInput;
  newIcourseInput.map((item) => {
    iCourseInput = item.id;
    return iCourseInput;
  });
  const index = iCourseArr.indexOf(iCourseInput);
  iCourseArr.splice(index, 1);

  // Preffered Institute
  const pInstituteArr = extraField.courseNdInstitute[1];
  let pInstituteInput;
  newPIntitutionInput.map((item) => {
    pInstituteInput = item.id;
    return pInstituteInput;
  });
  const index2 = pInstituteArr.indexOf(pInstituteInput);
  pInstituteArr.splice(index2, 1);

  console.log(extraField.courseNdInstitute);
}
/*
=========================================================
End: Delete Functions for Course & Institution to Teach
=========================================================
*/

/*
=============================================
Start: Delete Functions for Intrested Courses
=============================================
*/
// function deleteIntrestedC(e) {
//   const btnId = document.getElementById(e.id);
//   btnId.parentElement.parentElement.parentElement.remove();

//   // Delete
//   const iCoursesArr = extraField.intrestedCourse;
//   let iCoursesInput;
//   newiCoursesInput.map((item) => {
//     iCoursesInput = item.id;
//     return pEndDateInput;
//   });
//   const index = iCoursesArr.indexOf(iCoursesInput);
//   iCoursesArr.splice(index, 1);
// }
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
// function deletePFCourse(e) {
//   const btnId = document.getElementById(e.id);
//   btnId.parentElement.parentElement.parentElement.remove();

//   // Remove ID from Arr
//   const pfInstituteArr = extraField.prefferedInstitution;
//   let pfInstituteInput;
//   newpfInstitute.map((item) => {
//     pfInstituteInput = item.id;
//     return pfInstituteInput;
//   });
//   const index = pfInstituteArr.indexOf(pfInstituteInput);
//   pfInstituteArr.splice(index, 1);
// }
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
function deleteCEPLY(e) {
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

/*
================================================
Start: Delete Functions for WesAieaInput
================================================
*/
function deleteWesAiea(e) {
  const btnId = document.getElementById(e.id);
  btnId.parentElement.parentElement.parentElement.remove();

  //
  const wesAieaArr = extraField.wesAiea;
  let wesAieaInput;
  newWesAieaInput.map((item) => {
    wesAieaInput = item.id;
    return wesAieaInput;
  });
  const index = wesAieaArr.indexOf(wesAieaInput);
  wesAieaArr.splice(index, 1);

  console.log(extraField.wesAiea);
}
/*
================================================
End: Delete Functions for WesAieaInput
================================================
*/

/*
================================================
Start: Delete Functions for Passport Input
================================================
*/
function deletePassPort(e) {
  const btnId = document.getElementById(e.id);
  btnId.parentElement.parentElement.parentElement.remove();

  //
  const passportArr = extraField.passport;
  let passportInput;
  newPassportInput.map((item) => {
    passportInput = item.id;
    return passportInput;
  });
  const index = passportArr.indexOf(passportInput);
  passportArr.splice(index, 1);

  console.log(extraField.passport);
}
/*
================================================
End: Delete Functions for Passport Input
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
  newDeleteNationality = [...deletNationality];
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
                          <input type="text" id="${degreeCounter}" class="form-control fdegree-input" placeholder="BSc - Computer Engineering">
                        </div>
                      </div>
                      <div class="col-md">
                        <div class="form-group">
                          <label for="videoUrl1"></label>
                           <input type="text" id="${instituteCounter}" class="form-control finstitution-input" placeholder="Name Of Institution">
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
  newfIntution = [...fInstituteInput];

  const fStartDate = document.querySelectorAll(".fstart-date");
  newfStartDate = [...fStartDate];

  const fEndDate = document.querySelectorAll(".fend-date");
  newfEndDate = [...fEndDate];
}

let newDeleteFD = [];
let newfDegreeInput = [];
let newfIntution = [];
let newfStartDate = [];
let newfEndDate = [];

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
                          <input type="text" id="${degreeCounter}" class="form-control sDegree-input" placeholder="MSc - Computer Science">
                        </div>
                      </div>
                      <div class="col-md">
                        <div class="form-group">
                          <label for="videoUrl1"></label>
                          <input type="text" id="${instituteCounter}" class="form-control sInstitution-input" placeholder="Name Of Institution">
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
                          <input type="text" id="${degreeCounter}" class="form-control pDegree-input" placeholder="PhD - Mathematics">
                        </div>
                      </div>
                      <div class="col-md">
                        <div class="form-group">
                          <label for="videoUrl1"></label>
                          <input type="text" id="${instituteCounter}" class="form-control pInstitution-input" placeholder="Name Of Institution">
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

function courseNdIntitutionFunc() {
  let icourseCounter = `icourse-${new Date().getMilliseconds()}`;
  let pinstituteCounter = `pinstitute-${new Date().getMilliseconds()}`;

  let courseNdIntitutionRow = document.createElement("div");
  courseNdIntitutionRow.classList.add("row", "m-t-2");
  courseNdIntitutionRow.innerHTML = `
                   
                          <div class="col-md">
                            <div class="form-group">
                              <label for="inputState"></label>
                              <input type="text" id="${icourseCounter}" class="form-control icourse-to-teach" placeholder="Course to Teach">
                            </div>
                          </div>
                          <div class="col-md">
                            <div class="form-group">
                              <label for="inputState"></label>
                              <input type="text" id="${pinstituteCounter}" placeholder="Preffered Intitution" class="form-control pinstitute-to-teach">
                            </div>
                          </div>
                           <div class="col-md-1 d-flex justify-content-end align-items-center">
                        <div class="delete-btn-wrap form-group d-flex justify-content-center align-items-center m-t-1">
                          <label for="jobTitle1"></label>
                          <button onClick='deleteCOINFunc(this)' class="btn btn-danger btn-sm delete-first-degree" type="button" id="${new Date().getTime()}">x</button>
                        </div>
                      </div>
                    `;

  courseNdIntitutionWrap.appendChild(courseNdIntitutionRow);
  extraField.courseNdInstitute[0].push(icourseCounter);
  extraField.courseNdInstitute[1].push(pinstituteCounter);

  const icourseInput = document.querySelectorAll("icourse-to-teach");
  newIcourseInput = [...icourseInput];
  const pIntitutionInput = document.querySelectorAll("pinstitute-to-teach");
  newPIntitutionInput = [...pIntitutionInput];
}
let newIcourseInput = [];
let newPIntitutionInput = [];

function certficationFunc() {
  let tcertificateCounter = `tCertificate-${new Date().getMilliseconds()}`;
  let yearCounter = `cYear-${new Date().getMilliseconds()}`;

  let certficationRow = document.createElement("div");
  certficationRow.classList.add("row", "m-t-2");
  certficationRow.innerHTML = `<div class="col-md">
                        <div class="form-group">
                          <label for="inputState"></label>
                           <input type="text" id="${tcertificateCounter}" class="form-control tCertificate-input" placeholder="Title of Certfication">
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
                            <input type="text" id="${instituteCounter}" class="form-control rInstitution" placeholder="Name of Institute">
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
let newrEndDateInput = [];

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
                           <input type="text" id="${roleCounter}" class="form-control cRole" placeholder="Role / Position">
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
let newcEployerInput = [];
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
                          <input class="form-control pEmployer" id="${employerCounter}" type="text" name="current-employer" placeholder="Employer" />
                        </div>
                      </div>
                      <div class="col-md">
                        <div class="form-group">
                          <label for="videoUrl1"></label>
                          <input type="text" id="${roleCounter}" class="form-control pRole" placeholder="Role / Position">
                        </div>
                      </div>
                      <div class="col-md">
                        <div class="form-group">
                          <div class="row">
                            <div class="col-md">
                              <small for="videoUrl1">Start Date:</small>
                              <input class="form-control peStart" id="${startCounter}" name="jobTitle2" type="date">
                            </div>
                            <div class="col-md">
                              <small for="videoUrl1">End Date:</small>
                              <input class="form-control peEnd" id="${endCounter}" name="jobTitle2" type="date">
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

  const pEployerInput = document.querySelectorAll(".pEmployer");
  newpEployerInput = [...pEployerInput];
  const pRoleInput = document.querySelectorAll(".pRole");
  newpRoleInput = [...pRoleInput];
  const peStartInput = document.querySelectorAll(".peStart");
  newpeStartInput = [...peStartInput];
  const peEndInput = document.querySelectorAll(".peEnd");
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
  let wesAieaCounter = `wesAiea-${new Date().getMilliseconds()}`;

  let wesAieaRow = document.createElement("div");
  wesAieaRow.classList.add("row", "m-t-2");
  wesAieaRow.innerHTML = `  <div class="col-md">
                        <div class="form-group">
                          <div class="custom-file">
                            <input type="file" class="custom-file-input form-control wesAieaInput" id="${wesAieaCounter}">
                            <label class="custom-file-label" for="inputGroupFile02">Document Upload</label>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-1 d-flex justify-content-end align-items-center">
                        <div class="delete-btn-wrap form-group d-flex justify-content-center align-items-center m-t-1">
                          <label for="jobTitle1"></label>
                          <button onClick='deleteWesAiea(this)' class="btn btn-danger btn-sm delete-first-degree" type="button" id="${new Date().getTime()}">x</button>
                        </div>
                      </div>`;

  wesAieaWrap.appendChild(wesAieaRow);

  extraField.wesAiea.push(wesAieaCounter);

  const wesAieaInput = document.querySelectorAll("wesAieaInput");
  newWesAieaInput = [...wesAieaInput];

  extraField.wesAiea.forEach((item) => {
    console.log("wesAiea: ", item);
    $(`#${item}`).on("change", function () {
      //get the file name
      var fileName = $(this).val();
      //replace the "Choose a file" label
      $(this).next(".custom-file-label").html(fileName);
    });
  });

  extraField.wesAiea.forEach((item) => {
    console.log(item);

    const input = document.querySelector(`#${item}`);
    input.addEventListener("change", (e) => {
      var file = e.target.files[0];
      let reader = new FileReader();
      reader.onload = (e) => {
        let image = e.target.result;
        // console.log(image);
        tempWESAIEA.push(image);
      };
      reader.readAsDataURL(file);
    });

    return console.log(tempWESAIEA);
  });
}
let newWesAieaInput = [];

function passportFunc() {
  let passportCounter = `passport-${new Date().getMilliseconds()}`;

  let passportRow = document.createElement("div");
  passportRow.classList.add("row", "m-t-2");
  passportRow.innerHTML = `  <div class="col-md">
                        <div class="form-group">
                          <div class="custom-file">
                            <input type="file" class="custom-file-input form-control passportInput" id="${passportCounter}">
                            <label class="custom-file-label" for="inputGroupFile02">Image Upload</label>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-1 d-flex justify-content-end align-items-center">
                        <div class="delete-btn-wrap form-group d-flex justify-content-center align-items-center m-t-1">
                          <label for="jobTitle1"></label>
                          <button onClick='deletePassPort(this)' class="btn btn-danger btn-sm delete-first-degree" type="button" id="${new Date().getTime()}">x</button>
                        </div>
                      </div>`;

  passportWrap.appendChild(passportRow);

  extraField.passport.push(passportCounter);

  const passportInput = document.querySelectorAll("passportInput");
  newPassportInput = [...passportInput];

  //  extraField.passport.forEach((item) => {
  //    console.log("passport: ", item);
  //    $(`#${item}`).on("change", function () {
  //      //get the file name
  //      var fileName = $(this).val();
  //      //replace the "Choose a file" label
  //      $(this).next(".custom-file-label").html(fileName);
  //    });
  //  });

  // extraField.passport.forEach((item) => {
  //   console.log(item);

  //   const input = document.querySelector(`#${item}`);
  //   input.addEventListener("change", (e) => {
  //     var file = e.target.files[0];
  //     let reader = new FileReader();
  //     reader.onload = (e) => {
  //       let image = e.target.result;
  //       // console.log(image);
  //       tempPASS.push(image);
  //     };
  //     reader.readAsDataURL(file);
  //   });

  //   return console.log(tempPASS);
  //
  // });
}
let newPassportInput = [];

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

let tempFDegree = [[], [], [], []];
let tempFDegree2 = [];
let tempSDegree = [[], [], [], []];
let tempSDegree2 = [];
let tempPDegree = [[], [], [], []];
let tempPDegree2 = [];
let tempCertificate = [[], []];
let tempCertificate2 = [];
let tempCOIN = [[], []];
let tempCOIN2 = [];
let tempResearchE = [[], [], [], []];
let tempResearchE2 = [];
let tempHA = [[], [], [], []];
let tempHA2 = [];
let tempCEM = [[], [], [], []];
let tempCEM2 = [];
let tempPEM = [[], [], [], []];
let tempPEM2 = [];
let tempRFINFO = [[], [], [], [], []];
let tempRFINFO2 = [];
let tempWESAIEA = [];
let tempPASS = [];

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
    courseNdIntitution: [],
    certificate: [],
    researchExperience: [],
    honorsAward: [],
    currentEmployment: [],
    previousEmployment: [],
    referee: [],
    wesAiea: [...tempWESAIEA],
    passport: [...tempPASS],
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
  ================================================================
  Start: Get Interested Course & Preffered Instution Input Values
  ================================================================
  */
  extraField.courseNdInstitute[0].map((item) => {
    const values = document.getElementById(item).value;
    return console.log(tempCOIN[0].push(["course", values]));
  });

  // Year
  extraField.courseNdInstitute[1].map((item) => {
    const values = document.getElementById(item).value;
    return console.log(tempCOIN[1].push(["Institution", values]));
  });

  for (let i = 0; i < tempCOIN[0].length; i++) {
    tempCOIN.forEach((arr) => {
      tempCOIN2.push(arr[i]);
    });
  }
  const testCOIN = _.chunk(tempCOIN2, 2);
  testCOIN.map((item) => {
    let obj = Object.fromEntries(item);
    return formValues.courseNdIntitution.push(obj);
  });
  /* 
  ================================================================
  End: Get Interested Course & Preffered Instution Input Values
  ================================================================
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

// Selecting the first wesAiea input
$(`#wesAiea-001a`).on("change", function () {
  //get the file name
  var fileName = $(this).val();
  //replace the "Choose a file" label
  $(this).next(".custom-file-label").html(fileName);
});

// Converting WesAiea to Array of byte
const input = document.querySelector(`#wesAiea-001a`);
input.addEventListener("change", (e) => {
  var file = e.target.files[0];
  let reader = new FileReader();
  reader.onload = (e) => {
    let image = e.target.result;
    // console.log(image);
    tempWESAIEA.push(image);
  };
  reader.readAsDataURL(file);
});

// Selecting the first passport input
$(`#passport-001a`).on("change", function () {
  //get the file name
  var fileName = $(this).val();
  //replace the "Choose a file" label
  $(this).next(".custom-file-label").html(fileName);
});

// Converting Passport to Array of byte
const passInput = document.querySelector(`#passport-001a`);
passInput.addEventListener("change", (e) => {
  let file = e.target.files[0];
  let reader = new FileReader();
  reader.onload = (e) => {
    let image = e.target.result;
    // console.log(image);
    tempPASS.push(image);
  };
  reader.readAsDataURL(file);
});
