
    const abreModal = document.getElementById("abreModal");
    const fechaModal = document.getElementById("fechaModal");
    const modal = document.getElementById("myModal");

    // Abre modal
    abreModal.onclick = () => {
      modal.style.display = "flex";
    }

    // Fecha modal ao clicar no X
    fechaModal.onclick = () => {
      modal.style.display = "none";
    }

    // Fecha modal ao clicar fora
    window.onclick = (e) => {
      if (e.target == modal) {
        modal.style.display = "none";
      }
    }
