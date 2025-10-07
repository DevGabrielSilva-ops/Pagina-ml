const modais = [
  { abre: "abreGDM", fecha: "fechaGDM", modal: "myModalGDM" },
  { abre: "abreGLI", fecha: "fechaGLI", modal: "myModalGLI" },
  { abre: "abreSKIN", fecha: "fechaSKIN", modal: "myModalSKIN" },
  { abre: "abreSLIM", fecha: "fechaSLIM", modal: "myModalSLIM" },
  { abre: "abreBHC", fecha: "fechaBHC", modal: "myModalBHC" },
];

modais.forEach(({ abre, fecha, modal }) => {
  const btnAbre = document.getElementById(abre);
  const btnFecha = document.getElementById(fecha);
  const modalEl = document.getElementById(modal);

  if (btnAbre && btnFecha && modalEl) {
    btnAbre.onclick = () => (modalEl.style.display = "flex");
    btnFecha.onclick = () => (modalEl.style.display = "none");
  }
});

window.onclick = (e) => {
  modais.forEach(({ modal }) => {
    const modalEl = document.getElementById(modal);
    if (e.target === modalEl) modalEl.style.display = "none";
  });
};

const form = document.getElementById('contatoForm');

form.addEventListener('submit', function(e) {
   
    setTimeout(() => {
        form.reset(); 
    }, 100); 
});