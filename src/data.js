import ouaTurcesti from './assets/oua-turcesti.jpg'
import pancakes from './assets/pancakes.jpg'
import avocadoToast from './assets/avocado-toast.jpg'
import scrambledEggs from './assets/scrambled-eggs.jpg'
import menuDrinks from './assets/menu-drinks.jpg'
import menuBrunch from './assets/menu-brunch.jpg'
import cappuccino from './assets/cappuccino.jpg'

export const PHOTOS = [
  { src: ouaTurcesti, caption: 'Ouă Turcești' },
  { src: pancakes, caption: 'Pancakes' },
  { src: avocadoToast, caption: 'Avocado Toast' },
  { src: menuDrinks, caption: 'Băuturi de specialitate' },
  { src: scrambledEggs, caption: 'Scrambled Eggs' },
  { src: menuBrunch, caption: 'Masa de brunch' },
  { src: cappuccino, caption: 'Cappuccino' },
]

export const MENU = [
  {
    key: 'calde',
    group: 'calde',
    name: 'Cafea caldă',
    items: [
      { name: 'Espresso', vol: '20 ml', price: '9 lei' },
      { name: 'Espresso dublu', vol: '40 ml', price: '12 lei' },
      { name: 'Espresso Macchiato', vol: '50 ml', price: '10 lei' },
      { name: 'Americano', vol: '140 ml', price: '9 lei' },
      { name: 'Long Black', vol: '160 ml', price: '12 lei' },
      { name: 'Cortado', vol: '120 ml', price: '14 lei' },
      { name: 'Cappuccino', vol: '160 ml', price: '13 lei' },
      { name: 'Mocha', vol: '160 ml', price: '13 lei' },
      { name: 'Flat White', vol: '160 ml', price: '14 lei' },
      { name: 'Latte Macchiato', vol: '250 ml', price: '17 lei' },
      { name: 'Matcha Latte', vol: '160 ml', price: '15 lei' },
      { name: 'Caffè Latte', vol: '220 ml', price: '16 lei' },
      { name: 'Ciocolată caldă', vol: '160 ml', price: '14 lei' },
      { name: 'Ceai', vol: '400 ml', price: '12 lei', desc: 'mentă, hibiscus, mușețel, ghimbir' },
    ],
  },
  {
    key: 'reci',
    group: 'reci',
    name: 'Cafea rece',
    items: [
      { name: 'Espresso Tonic', vol: '300 ml', price: '17 lei' },
      { name: 'Iced Latte', vol: '250 ml', price: '16 lei' },
      { name: 'Mocha Iced Latte', vol: '250 ml', price: '16 lei' },
      { name: 'Iced Matcha Latte', vol: '250 ml', price: '18 lei' },
      { name: 'Iced Americano', vol: '250 ml', price: '9 lei' },
      { name: 'Iced Long Black', vol: '250 ml', price: '12 lei' },
      { name: 'Frappe', vol: '200 ml', price: '16 lei' },
      { name: 'Limonadă simplă', vol: '300 ml', price: '15 lei' },
      { name: 'Limonadă cu zmeură', vol: '300 ml', price: '17 lei' },
      { name: 'Limonadă cu afine', vol: '300 ml', price: '17 lei' },
      { name: 'Limonadă cu fructul pasiunii', vol: '300 ml', price: '17 lei' },
      { name: 'Fresh de portocale', vol: '300 ml', price: '20 lei' },
      { name: 'Fresh mixt', vol: '300 ml', price: '20 lei' },
    ],
  },
  {
    key: 'brunch',
    group: 'brunch',
    name: 'Mic dejun',
    items: [
      {
        name: 'Ouă Turcești',
        vol: '400 g',
        price: '37 lei',
        desc: '2 ouă poșate, iaurt grecesc, unt, lămâie, mix de semințe, boia afumată, usturoi, focaccia',
      },
      {
        name: 'Ouă Benedict',
        vol: '380 g',
        price: '37 lei',
        desc: '2 ouă poșate, bacon, unt, sos olandez, lămâie, focaccia',
      },
      {
        name: 'Ouă Florentine',
        vol: '380 g',
        price: '35 lei',
        desc: '2 ouă poșate, spanac, sos olandez, unt, usturoi, nucșoară, focaccia',
      },
      {
        name: 'Scrambled Eggs',
        vol: '380 g',
        price: '35 lei',
        desc: '3 ouă, bacon, unt, roșii cherry, piure de mazăre, focaccia',
      },
      {
        name: 'Avocado Toast cu Somon',
        vol: '580 g',
        price: '39 lei',
        desc: '2 ouă poșate, guacamole, somon afumat, roșii, ceapă, lămâie, ardei iute, mix de semințe, focaccia',
      },
      {
        name: 'Avocado Toast Simplu',
        vol: '480 g',
        price: '32 lei',
        desc: '2 ouă poșate, guacamole, roșii, ceapă, lămâie, ardei iute, mix de semințe, focaccia',
      },
      {
        name: 'Tigaie cu ochiuri și bacon',
        vol: '450 g',
        price: '45 lei',
        desc: '2 ouă ochiuri, bacon crocant, brânză feta, cartofi prăjiți',
      },
    ],
  },
  {
    key: 'panini',
    group: 'panini',
    name: 'Panini',
    items: [
      {
        name: 'Ventriciana',
        vol: '340 g',
        price: '35 lei',
        desc: 'salam ventricina, provola, cremă de brânză, ulei picant, rucola, oțet balsamic',
      },
      {
        name: 'Porchetta',
        vol: '390 g',
        price: '39 lei',
        desc: 'porchetta, cremă de trufe, cremă de brânză, rucola, parmezan, ulei de trufe, reducție de balsamic',
      },
      {
        name: 'Somon Afumat',
        vol: '400 g',
        price: '37 lei',
        desc: 'somon afumat, cremă de brânză, rucola, lămâie, reducție de balsamic',
      },
      {
        name: 'Cotto',
        vol: '400 g',
        price: '35 lei',
        desc: 'prosciutto cotto, provola, cremă de brânză, parmezan, rucola, pesto, reducție de balsamic',
      },
      {
        name: 'Mortadella',
        vol: '370 g',
        price: '35 lei',
        desc: 'mortadella, cremă de brânză, rucola, roșii uscate, pesto, reducție de balsamic',
      },
      {
        name: 'Prosciutto Crudo',
        vol: '430 g',
        price: '37 lei',
        desc: 'prosciutto crudo, mozzarella, roșii, rucola, ulei de măsline, reducție de balsamic',
      },
      {
        name: 'Caprese',
        vol: '370 g',
        price: '29 lei',
        desc: 'roșii, mozzarella, ulei de măsline, rucola, pesto, reducție de balsamic',
      },
    ],
  },
  {
    key: 'sides',
    group: 'brunch',
    name: 'Salate & garnituri',
    items: [
      {
        name: 'Salată grecească',
        vol: '500 g',
        price: '39 lei',
        desc: 'roșii, castraveți, ardei, ceapă roșie, măsline, brânză feta, oregano, ulei de măsline',
      },
      {
        name: 'Cartofi prăjiți',
        vol: '200 g',
        price: '12 lei',
        desc: 'cartofi prăjiți, sare de mare',
      },
    ],
  },
  {
    key: 'sweets',
    group: 'sweets',
    name: 'Dulce',
    items: [
      {
        name: 'Pancakes cu ciocolată',
        vol: '280 g',
        price: '18 lei',
        desc: '2 pancakes pufoși, ciocolată, fructe proaspete, sirop de arțar',
      },
      {
        name: 'Pancakes Family Pack',
        vol: '480 g',
        price: '34 lei',
        desc: '4 pancakes pufoși, ciocolată, fructe proaspete, sirop de arțar',
      },
    ],
  },
  {
    key: 'sauces',
    group: 'brunch',
    name: 'Sosuri',
    items: [
      { name: 'Ketchup · Maioneză · Sos aioli', vol: '50 g', price: '3 lei' },
    ],
  },
  {
    key: 'racoritoare',
    group: 'bar',
    name: 'Răcoritoare',
    items: [
      { name: 'Coca-Cola / Sprite / Fanta', vol: '250 ml', price: '10 lei' },
      { name: 'Schweppes Tonic', vol: '250 ml', price: '10 lei' },
      { name: 'Schweppes lămâie și zmeură', vol: '250 ml', price: '10 lei' },
      { name: 'Schweppes Mandarin', vol: '250 ml', price: '10 lei' },
      { name: 'Cappy portocale / piersică', vol: '250 ml', price: '10 lei' },
      { name: 'Fuzetea lămâie / piersică', vol: '250 ml', price: '10 lei' },
      { name: 'Burn Energy Drink', vol: '250 ml', price: '10 lei' },
      { name: 'Apă minerală / plată', vol: '330 ml', price: '10 lei' },
      { name: 'Apă minerală / plată', vol: '750 ml', price: '13 lei' },
    ],
  },
  {
    key: 'bere',
    group: 'bar',
    name: 'Bere',
    items: [
      { name: 'Amstel', vol: '330 / 500 ml', price: '10 / 11 lei' },
      { name: 'Birra Moretti', vol: '330 / 500 ml', price: '10 / 11 lei' },
      { name: 'Heineken', vol: '330 / 400 ml', price: '12 / 13 lei' },
      { name: 'Heineken Zero', vol: '330 ml', price: '12 lei' },
    ],
  },
  {
    key: 'vinuri',
    group: 'bar',
    name: 'Vinuri',
    items: [
      { name: 'Castel Huniade Sauv. Blanc / Rosé', vol: '187 / 750 ml', price: '15 / 55 lei' },
      { name: 'Sole Chardonnay, alb sec', vol: '750 ml', price: '130 lei' },
    ],
  },
]

export const FILTERS = [
  { key: 'toate', label: 'Toate' },
  { key: 'calde', label: 'Cafea' },
  { key: 'reci', label: 'Reci' },
  { key: 'brunch', label: 'Brunch' },
  { key: 'panini', label: 'Panini' },
  { key: 'sweets', label: 'Dulce' },
  { key: 'bar', label: 'Bar' },
]

export const ALLERGENS = [
  { n: 1, label: 'Gluten' },
  { n: 2, label: 'Ouă' },
  { n: 3, label: 'Lapte / Lactoză' },
  { n: 4, label: 'Pește' },
  { n: 5, label: 'Nuci' },
  { n: 6, label: 'Arahide' },
  { n: 7, label: 'Susan' },
  { n: 8, label: 'Soia' },
  { n: 9, label: 'Muștar' },
  { n: 10, label: 'Sulfiți' },
]

export const HOURS = [
  { i: 1, day: 'Luni', time: '08:00 – 20:00' },
  { i: 2, day: 'Marți', time: '08:00 – 20:00' },
  { i: 3, day: 'Miercuri', time: '08:00 – 20:00' },
  { i: 4, day: 'Joi', time: '08:00 – 20:00' },
  { i: 5, day: 'Vineri', time: '08:00 – 20:00' },
  { i: 6, day: 'Sâmbătă', time: '09:00 – 20:00' },
  { i: 0, day: 'Duminică', time: '09:00 – 20:00' },
]

export const REVIEWS = [
  {
    text: 'Ouăle turcești sunt demențiale. Cafeaua de specialitate foarte bună, iar meniul de brunch e fix ce trebuie.',
    name: 'Sandu Sararu',
    initial: 'S',
  },
  {
    text: 'Un loc în care o să revin cu drag! Cafea excelentă, mâncare gustoasă și o atmosferă relaxantă!',
    name: 'Cosmyna Cosmy',
    initial: 'C',
  },
  {
    text: 'Cel mai drăguț loc pentru brunch din oraș! Totul este proaspăt, estetic și extrem de savuros.',
    name: 'Andreea Ștefania',
    initial: 'A',
  },
  {
    text: 'Atmosfera perfectă, cafeaua senzațională, mâncarea trebuie să o gustați, ireal de bună!',
    name: 'Auras',
    initial: 'A',
  },
  {
    text: 'Locația foarte frumoasă și răcoroasă, amplasată lângă râul Olănești. Mâncarea și servirea impecabilă!',
    name: 'Mimo Days',
    initial: 'M',
  },
  {
    text: 'Cel mai bun avocado toast cu somon. Simply the best.',
    name: 'Tiberiu Badea',
    initial: 'T',
  },
]

export const NAV_LINKS = [
  { id: 'acasa', label: 'Acasă', to: '/' },
  { id: 'meniu', label: 'Meniu', to: '/meniu' },
  { id: 'despre', label: 'Despre', to: '/#despre' },
  { id: 'galerie', label: 'Galerie', to: '/#galerie' },
]

export const FEATURED = [
  {
    name: 'Cappuccino',
    category: 'Caffè',
    vol: '160 ml',
    price: '13 lei',
    desc: 'espresso, lapte texturat, artă latte',
    src: cappuccino,
  },
  {
    name: 'Ouă Turcești',
    category: 'Brunch',
    price: '37 lei',
    desc: '2 ouă poșate, iaurt grecesc, unt, lămâie, mix de semințe, boia afumată, usturoi, focaccia',
    src: ouaTurcesti,
  },
  {
    name: 'Pancakes cu ciocolată',
    category: 'Sweets',
    price: '18 lei',
    desc: '2 pancakes pufoși, ciocolată, fructe proaspete, sirop de arțar',
    src: pancakes,
  },
]
