const storyElement = document.getElementById("story");
const optionsElement = document.getElementById("options");
let currentScene = 0;

const scenes = [
  {
    text: "Vitaj! Som Tvoja virtuálna dietologička a som tu teraz pre Teba. Verím, že spolu to zvládneme. Ako sa cítíš?",
    options: [
      { text: "Som naštvaná", nextScene: 1 },
      { text: "Som smutná", nextScene: 2 },
    ],
  },
  {
    text: "Jedlo, hlavne to chrumkavé a slané, je pre mnohých ľudí velkým uvolnením a potešením. Je prirodzené, že na neho máš teraz veľkú chuť. Skús sa najprv upokojiť jedným z týchto spôsobov. Sú láskavejšie k Tvojmu telu. Som tu s Tebou a držím Ti palce.",
    options: [
      {
        text: "Búchaj 2 minúty silno do vankúša. Predstav si, že je to človek, ktorý Ťa naštval.",
        nextScene: 3,
      },
      {
        text: "Zavri se v aute alebo v izbe a vykrič všetky dôvody, prečo si naštvaná.",
        nextScene: 4,
      },
    ],
  },
  {
    text: "Jedlo, hlavne sladké a lahodné, vníma veľa ľudí ako potešenie a odmenu. Keď sme v detstve spadli, dostali sme lízatko. Tak nás naučili, že sladkosti sú náplasť na boľavú dušu. Teraz však už vieme, že to tak nemusí byť. Skús sa najprv utešiť jedným z týchto spôsobov. Sú láskavejšie k Tvojmu telu. Som tu s Tebou a myslím na Teba.",
    options: [
      {
        text: "Obleč si svoju obľúbenú mikinu a vyraz na svižnú prechádzku do parku.",
        nextScene: 5,
      },
      {
        text: "Napíš 10 vecí, za ktoré si vo svojom živote vďačná.",
        nextScene: 6,
      },
    ],
  },
  {
    text: "Niekedy hnev vyprchá rýchlo, inokedy to chvíľu trvá. Čo by Ti teraz prinieslo úľavu?",
    options: [
      {
        text: "Napísať naštvaný list človeku, ktorý ma naštval. Potom list roztrhať a spáliť.",
        nextScene: 7,
      },
      { text: "Neviem, so stále naštvaná.", nextScene: 1 },
    ],
  },
  {
    text: "Najlepšie je emócie prijať a potom ich vypustiť. Zmenšila o trochu sa tvoja túžba prejesť sa? Väčšinou to chvíľu trvá. Čo by Ti teraz prinieslo úľavu?",
    options: [
      { text: "Daj si teplú sprchu a zabaľ sa do teplej deky.", nextScene: 8 },
      { text: "Neviem, som stále naštvaná.", nextScene: 1 },
    ],
  },
  {
    text: "Príroda a pohyb nám vždy zlepšia náladu. Ďalšia činnosť, ktorá poteší našu dušu je tvorivosť.",
    options: [
      {
        text: "Nakresli svoj smútok a skús ho farbičkami rozveseliť.",
        nextScene: 9,
      },
      {
        text: "Napíš list svojmu 16ročnému ja s názvom 10 vecí, ktoré sú v živote oveľa menej dôležité, ako si myslíš",
        nextScene: 6,
      },
    ],
  },
  {
    text: "Radosť sa skrýva v malých každodenných zázrakoch. Dúfam, že sa cítiš už o kúsok lepšie. Som tu pre Teba aj naživo.",
    options: [{ text: "Objednaj sa na konzultáciu.", nextScene: 10 }],
  },
  {
    text: "Kľúčom ku slobode je odpustenie. Dúfam, že sa cítiš už o kúsok lepšie. Som tu pre Teba aj naživo - Objednaj sa na konzultáciu.",
    options: [],
  },
  {
    text: "Odpočiň si a nechaj čas plynúť. Každý okamih je nová príležitosť. Dúfam, že sa cítiš už o kúsok lepšie. Som tu pre Teba aj naživo - Objednaj sa na konzultáciu.",
    options: [],
  },
  {
    text: "Radosť sa skrýva v malých každodenných zázrakoch. Dúfam, že sa cítiš už o kúsok lepšie. Som tu pre Teba aj naživo.",
    options: [{ text: "Objednaj sa na konzultáciu.", nextScene: 10 }],
  },
];

function displayScene(sceneIndex) {
  const scene = scenes[sceneIndex];
  storyElement.textContent = scene.text;
  optionsElement.innerHTML = "";
  scene.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option.text;
    button.onclick = () => goToScene(option.nextScene);
    optionsElement.appendChild(button);
  });
}

function goToScene(sceneIndex) {
  currentScene = sceneIndex;
  displayScene(currentScene);
}

// Načtení první scény
displayScene(currentScene);
