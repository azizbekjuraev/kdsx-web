(function (w, d, s, o, f, js, fjs) {
  w[o] =
    w[o] ||
    function () {
      (w[o].q = w[o].q || []).push(arguments);
    };
  (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
  js.id = o;
  js.src = f;
  js.async = 1;
  fjs.parentNode.insertBefore(js, fjs);
})(window, document, "script", "nw", "https://chat.norby.io/widget");
nw("init", {
  apiKey: "c3bb2931-e2c5-4393-819d-5eaef668b7ee",
  serviceBaseUrl: "https://api.norby.io",
  lang: "ru",
  languageList: ["EN", "RU"],
  mainColor: "#2563eb",
  popupBotAvatarColor: "#3E247E",
  multichat: true,
  botName: "KDSX Bot",
  imageTransferEnabled: true,
  side: "left",
  marginSideDesktop: 80,
  marginBottomDesktop: 48,
  marginSideMobile: 16,
  marginBottomMobile: 16,
});

let openModalBtn = document.getElementById("openModalBtn");
let openModal = document.getElementById("openModal");
let overlay = document.getElementById("overlay");
let closeModalBtn = document.getElementById("closeModalBtn");
let iFrame = document.getElementById("iFrame");

openModalBtn?.addEventListener("click", () => {
  overlay.style.display = "block";
  openModal?.classList.toggle("hidden");
});

closeModalBtn?.addEventListener("click", () => {
  overlay.style.display = "none";
  openModal?.classList.add("hidden");
  iFrame.src = iFrame.src;
});

window.addEventListener("click", (event) => {
  if (event.target === overlay) {
    overlay.style.display = "none";
    openModal.classList.add("hidden");
    iFrame.src = iFrame.src;
  }
});
