// articles-data.js
// Единый список статей сайта.
// Как добавить новую статью:
// 1) Создайте HTML-файл статьи в папке /articles/.
// 2) Скопируйте новый объект в начало массива ARTICLES.
// 3) Заполните title, description, url, date, category, readingTime, keywords.
// Главная страница автоматически покажет последние статьи, а articles.html покажет весь каталог.
window.ARTICLES = [
  { title: "Ja pāris nolēmis šķirties: kā psiholoģe palīdz saglabāt cieņu",
    description: "Kā psiholoģe palīdz izprast attiecību nākotni, apgūt saudzīgu saziņu un vienoties par robežām arī šķiršanās laikā.",
    url: "/articles/esli-para-reshaet-rasstatsya.html", date: "2026-11-06", category: "Attiecību krīze",
    readingTime: "6 min", featured: true,
    keywords: [] },

  {
    title: "Ģimenes psiholoģe vai ģimenes terapeits: kad attiecībām vajadzīgs atbalsts?",
    description: "Kad vērts konsultēties ar ģimenes psiholoģi: ne tikai krīzē, bet arī attiecību stiprināšanai. Gotmena metode un cieņpilns atbalsts.",
    url: "/articles/semejnyj-psiholog-ili-terapevt.html",
    date: "2026-07-03",
    category: "Ģimenes konsultācijas",
    readingTime: "7 min",
    featured: true,
    keywords: []
  },
  {
    title: "Psiholoģe pāriem Rīgā: kāpēc vērsties pēc palīdzības, ja joprojām mīlat viens otru?",
    description: "Kā saprast, ka attiecībām vajadzīgs atbalsts, pat ja mīlestība joprojām ir? Konflikti, distance un saziņas prasmes.",
    url: "/articles/psiholog-dlya-par-riga.html",
    date: "2026-07-03",
    category: "Psiholoģe pāriem",
    readingTime: "8 min",
    featured: true,
    keywords: []
  },
  {
    title: "Gotmena metode: kā veidot attiecības, kuras nesagrauj konflikti",
    description: "Gotmena metode saprotami: kā veidot uzticēšanos, pārvaldīt konfliktus un stiprināt tuvību pārī.",
    url: "/articles/metod-gottmana-dlya-otnoshenij.html",
    date: "2026-07-03",
    category: "Gotmena metode",
    readingTime: "8 min",
    featured: true,
    keywords: []
  },
  {
    title: "Emocionāla distance pārī: kāpēc esat blakus, bet ne kopā",
    description: "Kāpēc partneri atsvešinās, kā atjaunot saikni un kad noder ģimenes psiholoģes palīdzība.",
    url: "/articles/emocionalnaya-distanciya-v-pare.html",
    date: "2026-07-03",
    category: "Attiecības",
    readingTime: "7 min",
    featured: true,
    keywords: []
  },
  {
    title: "Kā izlīgt pēc strīda: 5 soļi pēc Gotmena metodes",
    description: "Praktiski ieteikumi sarunai pēc strīda, abu partneru skatījuma atzīšanai un nākamā soļa saskaņošanai.",
    url: "/articles/kak-pomiritsya-posle-ssory.html",
    date: "2026-07-01",
    category: "Konflikti",
    readingTime: "8 min",
    featured: true,
    keywords: []
  },
  {
    title: "Partneris nevēlas iet pie psiholoģes: ko darīt?",
    description: "Kā bez spiediena pārrunāt konsultāciju iespējas un sākt ar savām vajadzībām un drošāku saziņu pārī.",
    url: "/articles/partner-ne-hochet-k-psihologu.html",
    date: "2026-06-30",
    category: "Pāru konsultācijas",
    readingTime: "7 min",
    featured: true,
    keywords: []
  },
  {
    title: "5 kļūdas attiecībās, kas nemanāmi grauj uzticēšanos",
    description: "Piecas izplatītas kļūdas, kas pakāpeniski mazina uzticēšanos: jūtu noniecināšana, klusēšana, mājieni un citi ieradumi.",
    url: "/articles/5_sohibok.html",
    date: "2026-06-29",
    category: "Uzticēšanās",
    readingTime: "7 min",
    featured: true,
    keywords: []
  },
  {
    title: "Gotmena metode — vienkāršiem vārdiem",
    description: "Kā pētniecībā balstīta pieeja palīdz izprast atkārtotus konfliktus un atjaunot tuvību.",
    url: "/articles/metod_gotmana.html",
    date: "2026-06-28",
    category: "Gotmena metode",
    readingTime: "8 min",
    featured: false,
    keywords: []
  },
  {
    title: "Viņš mani nedzird!",
    description: "Kāpēc partneri pārstāj uzklausīt viens otru un kā atgriezt mierīgu sarunu.",
    url: "/articles/on-ne-slyshit.html",
    date: "2026-06-27",
    category: "Saziņa",
    readingTime: "6 min",
    featured: false,
    keywords: []
  },
  {
    title: "«Murkšķa diena» attiecībās",
    description: "Kāpēc pāris atkal un atkal nonāk vienā un tajā pašā strīdu scenārijā un kā to pamanīt.",
    url: "/articles/den-surka",
    date: "2026-06-26",
    category: "Krīze pārī",
    readingTime: "6 min",
    featured: false,
    keywords: []
  }
];
