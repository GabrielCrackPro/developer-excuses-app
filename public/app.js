const excuseContainer = document.querySelector(".excuse-container");

let jsonFile = "./excuses.json";
const data = await fetch(jsonFile).then((response) => response.json());

const getRandomExcuse = () => {
  let randomIndex = Math.floor(Math.random() * data.excuses.length);
  let excuse = data.excuses[randomIndex];
  excuseContainer.innerHTML = `
  <p class="fw-bold fs-2 white">${randomIndex} - ${excuse}</p>
  <div class="flex-row">
  <button class="btn btn-light mb-2 me-2 refresh-button"><i class="fas fa-sync-alt"></i> New Excuse</button>
  <button class="btn btn-light mb-2 copy-button"><i class="fas fa-copy"></i> Copy Excuse</button>
  </div>
  `;
  return excuse;
};
const copyButton = document.querySelector(".copy-button");
const refreshButton = document.querySelector(".refresh-button");

const copyExcuse = (excuse) => {
  excuse.select();
  document.execCommand("copy");
};
getRandomExcuse();
