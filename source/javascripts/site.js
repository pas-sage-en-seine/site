document.addEventListener('DOMContentLoaded', () => {
  const modalBackground = document.querySelector("#modal-background")
  // const close = modalBackground.querySelector(".close")
  modalBackground.addEventListener("click", () => {
    const modals = document.querySelectorAll("[data-modal].show")
    modals.forEach((m) => {
      m.classList.remove("show")
      m.classList.add("hide")
    })
    modalBackground.classList.remove("show")
  })

  document.querySelectorAll("[data-modal-target]").forEach((e) => {
    const target = e.dataset.modalTarget
    const modal = document.querySelector(`[data-modal="${target}"]`)
    modalBackground.appendChild(modal)

    e.addEventListener("click", () => {
      modalBackground.classList.add("show")

      modal.classList.remove("hide")
      modal.classList.add("show")
    })
  })
})
