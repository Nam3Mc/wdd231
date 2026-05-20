import setTitle from "./setTitle.mjs";
import setSectionSelection from "./setSectionSelection.mjs";
import renderSections from "./renderSections.mjs";
import changeEnrollment from "./changeEnrollment.mjs";

await fetch('./scripts/byuiCourse.json')
.then( response => response.json())
.then(data => {
  
  const byuiCourse = {...data}

  document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = Number(document.querySelector("#sectionNumber").value);
    changeEnrollment(byuiCourse.sections, sectionNum);
  });

  document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = Number(document.querySelector("#sectionNumber").value);
    changeEnrollment(byuiCourse.sections, sectionNum, false);
  });

  setSectionSelection(byuiCourse.sections);
  renderSections(byuiCourse.sections);
  console.log(byuiCourse.sections)
  setTitle(byuiCourse);
  changeEnrollment(byuiCourse.sections)

})



