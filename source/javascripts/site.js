document.addEventListener('DOMContentLoaded', () => {
  window.modals = {
    init: function () {
      this.modalBackground = document.querySelector("#modal-background")
      this.closeButton = this.modalBackground.querySelector(".close")

      this.modalBackground.addEventListener("click", () => {
        const modals = document.querySelectorAll("[data-modal].show")
        modals.forEach(m => this.close(m))
        this.modalBackground.classList.remove("show")
      })

      document.querySelectorAll("[data-modal-target]").forEach(e => {
        const target = e.dataset.modalTarget
        const modal = this.get(target)
        this.modalBackground.appendChild(modal)
        e.addEventListener("click", () => this.open(modal))
      })

      const target = window.location.hash.substr(1)
      const modal = this.get(target)
      if (modal) this.open(modal)
    },

    get: function (name) {
      return document.querySelector(`[data-modal="${name}"]`)
    },

    open: function (modal) {
      modal.appendChild(this.closeButton)
      this.modalBackground.classList.add("show")
      modal.classList.remove("hide")
      modal.classList.add("show")
    },

    close: function (modal) {
      console.log("close", this)
      modal.classList.remove("show")
      modal.classList.add("hide")
      this.modalBackground.appendChild(this.closeButton)
    }
  }

  window.modals.init()
})
