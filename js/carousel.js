let currentCompanyIndex = 1;
const totalCompanies = 5;

// Show initial shadow images
updateShadows(currentCompanyIndex);

function showCompany(index) {
  const companies = document.querySelectorAll(".company");
  companies.forEach((company, i) => {
    company.classList.remove("active");
    if (i + 1 === index) {
      company.classList.add("active");
    }
  });

  // Update shadow images
  updateShadows(index);
}

function nextCompany() {
  currentCompanyIndex++;
  if (currentCompanyIndex > totalCompanies) {
    currentCompanyIndex = 1;
  }
  showCompany(currentCompanyIndex);
}

function previousCompany() {
  currentCompanyIndex--;
  if (currentCompanyIndex < 1) {
    currentCompanyIndex = totalCompanies;
  }
  showCompany(currentCompanyIndex);
}

function updateShadows(index) {
  const companies = document.querySelectorAll(".company");
  const prevIndex = index === 1 ? totalCompanies : index - 1;
  const nextIndex = index === totalCompanies ? 1 : index + 1;

  // Get the src of the previous and next company's images
  const prevImageSrc = companies[prevIndex - 1].querySelector("img").src;
  const nextImageSrc = companies[nextIndex - 1].querySelector("img").src;

  // Update the shadow images
  document.getElementById("prev-shadow").src = prevImageSrc;
  document.getElementById("next-shadow").src = nextImageSrc;
}
