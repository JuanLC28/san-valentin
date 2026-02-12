const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const gif = document.getElementById("gif");
const text = document.getElementById("text");
const vid = document.querySelector("video");

const steps = [
  {
    gif: "recursos/rusure.gif",
    text: "¿Estás segura? Podría sorprenderte... 🌹",
    yesStyle: { height: "65%", width: "60%" },
    noStyle: { width: "30%" }
  },
  {
    gif: "recursos/3shocked-1.gif",
    text: "Las mejores historias comienzan con un sí ✨",
    yesStyle: { height: "70%", width: "70%" },
    noStyle: { width: "20%" }
  },
  {
    gif: "recursos/4.crying.gif",
    text: "No todos los días se recibe una invitación así 💌",
    yesStyle: { height: "80%", width: "80%" },
    noStyle: { width: "10%", fontSize: "4vh" }
  },
  {
    gif: "recursos/5.crying.gif",
    text: "Última oportunidad... ¿aceptas? 🌹",
    yesStyle: { height: "90%", width: "96%" },
    noStyle: { display: "none" }
  }
];


let stepIndex = 0;

const allGifs = steps.map(step => step.gif).concat(["recursos/idc.gif"]);
allGifs.forEach(src => {
  const img = new Image();
  img.src = src;
})

noBtn.addEventListener("click", () => {
  if (stepIndex < steps.length) {
    const currentStep = steps[stepIndex];
    gif.src = currentStep.gif;
    text.innerHTML = currentStep.text;

    Object.assign(yesBtn.style, currentStep.yesStyle);
    Object.assign(noBtn.style, currentStep.noStyle);
    stepIndex++;
  }
});

yesBtn.addEventListener("click", () => {
  gif.src = "recursos/idc.gif";
  
  text.innerHTML = `
  Gracias por aceptar... 🌹  
  Que este San Valentín sea el inicio de algo especial ✨
  `;

  document.querySelector(".yes-no").style.display = "none";

  if(vid) {
    vid.style.display = "block";
    vid.play().catch(e => console.log("Autoplay bloqueado"));
    
    setTimeout(() => {
      vid.style.display = "none";
    }, 9000);
  }
});