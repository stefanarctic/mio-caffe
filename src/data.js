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
]

export const MENU = [
  {
    key: 'calde',
    name: 'Băuturi Calde',
    items: [
      { name: 'Espresso', vol: '30 ml', price: '10 lei' },
      { name: 'Cappuccino', vol: '200 ml', price: '18 lei' },
      { name: 'Flat White', vol: '200 ml', price: '20 lei' },
      { name: 'Latte', vol: '300 ml', price: '20 lei' },
      { name: 'Matcha Latte', vol: '300 ml', price: '24 lei', tag: 'FAVORIT' },
      { name: 'Ceai artizanal', vol: '400 ml', price: '16 lei' },
      { name: 'Ciocolată caldă', vol: '250 ml', price: '19 lei' },
    ],
  },
  {
    key: 'reci',
    name: 'Băuturi Reci',
    items: [
      { name: 'Iced Latte', vol: '400 ml', price: '22 lei' },
      { name: 'Cold Brew', vol: '300 ml', price: '21 lei' },
      { name: 'Iced Matcha', vol: '400 ml', price: '25 lei' },
      { name: 'Limonadă de casă', vol: '400 ml', price: '18 lei' },
      { name: 'Frappé', vol: '400 ml', price: '22 lei' },
    ],
  },
  {
    key: 'brunch',
    name: 'Brunch',
    items: [
      {
        name: 'Ouă Turcești',
        price: '37 lei',
        tag: 'SIGNATURE',
        desc: 'iaurt grecesc, unt topit, lămâie, boia afumată, focaccia caldă',
      },
      {
        name: 'Avocado Toast',
        price: '34 lei',
        desc: 'avocado, somon afumat, ou poșat, semințe, pâine cu maia',
      },
      {
        name: 'Scrambled Eggs',
        price: '28 lei',
        desc: 'ouă cremoase, unt, arpagic proaspăt, focaccia',
      },
      {
        name: 'Ouă Benedict',
        price: '35 lei',
        desc: '2 ouă poșate, bacon, sos olandez, lămâie, focaccia',
      },
      {
        name: 'Focaccia Caprese',
        price: '30 lei',
        tag: 'V',
        desc: 'mozzarella, roșii cherry, pesto, busuioc proaspăt',
      },
    ],
  },
  {
    key: 'sweets',
    name: 'Sweets',
    items: [
      {
        name: 'Pancakes',
        price: '29 lei',
        tag: 'FAVORIT',
        desc: 'pufoși, fructe de sezon, sirop de arțar, unt',
      },
      {
        name: 'Cheesecake',
        price: '24 lei',
        desc: 'baza crocantă, coulis de fructe de pădure',
      },
      {
        name: 'Tiramisu',
        price: '26 lei',
        desc: 'mascarpone, espresso, cacao — rețeta casei',
      },
      {
        name: 'Croissant cu unt',
        price: '12 lei',
        desc: 'proaspăt, copt zilnic',
      },
    ],
  },
]

export const FILTERS = [
  { key: 'toate', label: 'Toate' },
  { key: 'calde', label: 'Calde' },
  { key: 'reci', label: 'Reci' },
  { key: 'brunch', label: 'Brunch' },
  { key: 'sweets', label: 'Sweets' },
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
    vol: '200 ml',
    price: '18 lei',
    desc: 'espresso, lapte texturat, artă latte',
    src: cappuccino,
  },
  {
    name: 'Ouă Turcești',
    category: 'Brunch',
    price: '37 lei',
    tag: 'SIGNATURE',
    desc: 'iaurt grecesc, unt topit, lămâie, boia afumată, focaccia caldă',
    src: ouaTurcesti,
  },
  {
    name: 'Pancakes',
    category: 'Sweets',
    price: '29 lei',
    tag: 'FAVORIT',
    desc: 'pufoși, fructe de sezon, sirop de arțar, unt',
    src: pancakes,
  },
]
