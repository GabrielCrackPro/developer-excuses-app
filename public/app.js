const excuseContainer = document.querySelector(".excuse-container");

let jsonFile = "./excuses.json";
const data = await fetch(jsonFile).then((response) => response.json());

const getRandomExcuse = () => {
  let randomIndex = Math.floor(Math.random() * data.excuses.length);
  let excuse = data.excuses[randomIndex];
  excuseContainer.innerHTML = `
  <p class="fw-bold fs-2 text-capitalize white">${
    randomIndex + 1
  } - ${excuse}</p>
  <div class="flex-row">
  <button class="btn btn-secondary mb-2 fw-bold refresh-button"><i class="fas fa-sync-alt"></i> New Excuse</button>
  <button class="btn btn-secondary mb-2 fw-bold view-all-button"><i class="fas fa-file-code"></i> View All</button>
  </div>
  `;
  const refreshButton = document.querySelector(".refresh-button");
  const viewAllButton = document.querySelector(".view-all-button");

  refreshButton.addEventListener("click", () => location.reload());
  viewAllButton.addEventListener("click", () => window.open(jsonFile));

  return excuse;
};
getRandomExcuse();
