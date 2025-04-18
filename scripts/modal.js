// Dados dos Projetos

const dataProjects = [
  {
    title: "Exemplo",
    date: "24 Não tem projetos 2025",
    description: `Não tem projetos ainda <br><br>

        Não tem projetos ainda <br><br>
        
        Exemplo <br>`,
    videoSrc: "https://streamable.com/4gqkqs",
    linkedin:"https://www.linkedin.com/feed/update/urn:li:activity:7299974437158744064/",
    repository: "https://github.com/GabrielSantos777/OpiniON",
  },
  {
    title: "Exemplo",
    date: "24 Não tem projetos 2025",
    description: `Não tem projetos ainda <br><br>

        Exemplo <br>`,
    videoSrc: "https://streamable.com/4gqkqs",
    linkedin:"https://www.linkedin.com/feed/update/urn:li:activity:7299974437158744064/",
    repository: "https://github.com/GabrielSantos777/OpiniON",
  },
];

// Open Modal

const openModal = () => {
  const closeModal = document.querySelector(".modal .ri-close-line");
  const modal = document.querySelector(".modal");
  const box = document.querySelectorAll(".cards-projects .box");
  const modalTitle = modal.querySelector(".title h2");
  const modalDescription = modal.querySelector(".info p");
  const modalDate = modal.querySelector("span");
  const modalLinkRepository = modal.querySelector(".links a.link-repository");
  const modalLinkLinkedin = modal.querySelector(".links a.link-linkedin");
  const iframe = modal.querySelector(".video iframe");

  box.forEach((item, index) => {
    const addData = () => {
      if (index != 5) {
        modal.classList.remove("hidden");
        document.body.style.overflow = "hidden";
        document.body.classList.add("transparent");
      }

      modalTitle.innerHTML = dataProjects[index].title;
      modalDescription.innerHTML = dataProjects[index].description;
      modalDate.innerHTML = dataProjects[index].date;
      modalLinkRepository.setAttribute("href", dataProjects[index].repository);
      modalLinkLinkedin.setAttribute("href", dataProjects[index].linkedin);
      iframe.setAttribute(
        "src",
        dataProjects[index].videoSrc + "?autoplay=1&amp;loop=0"
      );
    };

    item.addEventListener("click", addData);
  });

  const closingModal = () => {
    modal.classList.add("hidden");
    document.body.style.overflow = "visible";
    document.body.classList.remove("transparent");
    iframe.setAttribute("src", "");
  };

  closeModal.addEventListener("click", closingModal);

  document.addEventListener("keydown", (event) =>
    event.key === "Escape" ? closingModal() : ""
  );
};

openModal();
