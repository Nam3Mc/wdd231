import renderSections from "./renderSections.mjs";

export default function changeEnrollment (sections, sectionNumber, add = true) {
    const sectionIndex = sections.findIndex(
      (section) => section.sectionNumber == sectionNumber
    );
    if (sectionIndex >= 0) {
      if (add) {
        sections[sectionIndex].enrolled++;
        console.log(sections[sectionIndex])
      } else {
        sections[sectionIndex].enrolled--;
         console.log(sections[sectionIndex])
      }
      renderSections(sections);
    }
  }