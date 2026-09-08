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
    key: 'cafea',
    group: 'cafea',
    name: 'Cafea',
    sections: [
      {
        name: 'Caldă',
        items: [
          { name: 'Espresso', vol: '20 ml', price: '9 lei' },
          { name: 'Espresso dublu', vol: '40 ml', price: '12 lei' },
          { name: 'Espresso Macchiato', vol: '50 ml', price: '10 lei', allergens: [3] },
          { name: 'Americano', vol: '140 ml', price: '9 lei' },
          { name: 'Long Black', vol: '160 ml', price: '12 lei' },
          { name: 'Cortado', vol: '120 ml', price: '14 lei', allergens: [3] },
          { name: 'Cappuccino', vol: '160 ml', price: '13 lei', allergens: [3] },
          { name: 'Mocha', vol: '160 ml', price: '13 lei', allergens: [3, 8] },
          { name: 'Flat White', vol: '160 ml', price: '14 lei', allergens: [3] },
          { name: 'Latte Macchiato', vol: '250 ml', price: '17 lei', allergens: [3] },
          { name: 'Matcha Latte', vol: '160 ml', price: '15 lei', allergens: [3] },
          { name: 'Caffè Latte', vol: '220 ml', price: '16 lei', allergens: [3] },
          { name: 'Ciocolată caldă', vol: '160 ml', price: '14 lei', allergens: [3, 8] },
          { name: 'Ceai', vol: '400 ml', price: '12 lei', desc: 'mentă, hibiscus, mușețel, ghimbir' },
        ],
      },
      {
        name: 'Rece',
        items: [
          { name: 'Espresso Tonic', vol: '300 ml', price: '17 lei' },
          { name: 'Iced Latte', vol: '250 ml', price: '16 lei', allergens: [3] },
          { name: 'Mocha Iced Latte', vol: '250 ml', price: '16 lei', allergens: [3, 8] },
          { name: 'Iced Matcha Latte', vol: '250 ml', price: '18 lei', allergens: [3] },
          { name: 'Iced Americano', vol: '250 ml', price: '9 lei' },
          { name: 'Iced Long Black', vol: '250 ml', price: '12 lei' },
          { name: 'Frappe', vol: '200 ml', price: '16 lei', allergens: [3] },
        ],
      },
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
        frozen: true,
        allergens: [1, 2, 3, 7],
        desc: '2 ouă poșate, iaurt grecesc, unt, lămâie, mix de semințe, boia afumată, usturoi, focaccia',
      },
      {
        name: 'Ouă Benedict',
        vol: '380 g',
        price: '37 lei',
        frozen: true,
        allergens: [1, 2, 3],
        desc: '2 ouă poșate, bacon, unt, sos olandez, lămâie, focaccia',
      },
      {
        name: 'Ouă Florentine',
        vol: '380 g',
        price: '35 lei',
        frozen: true,
        allergens: [1, 2, 3],
        desc: '2 ouă poșate, spanac, sos olandez, unt, usturoi, nucșoară, focaccia',
      },
      {
        name: 'Scrambled Eggs',
        vol: '380 g',
        price: '35 lei',
        allergens: [1, 2, 3],
        desc: '3 ouă, bacon, unt, roșii cherry, piure de mazăre, focaccia',
      },
      {
        name: 'Avocado Toast cu Somon',
        vol: '580 g',
        price: '39 lei',
        frozen: true,
        allergens: [1, 2, 4, 7],
        desc: '2 ouă poșate, guacamole, somon afumat, roșii, ceapă, lămâie, ardei iute, mix de semințe, focaccia',
      },
      {
        name: 'Avocado Toast Simplu',
        vol: '480 g',
        price: '32 lei',
        frozen: true,
        allergens: [1, 2, 7],
        desc: '2 ouă poșate, guacamole, roșii, ceapă, lămâie, ardei iute, mix de semințe, focaccia',
      },
      {
        name: 'Tigaie cu ochiuri și bacon',
        vol: '450 g',
        price: '45 lei',
        allergens: [2, 3],
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
        allergens: [1, 3, 10],
        desc: 'salam ventricina, provola, cremă de brânză, ulei picant, rucola, oțet balsamic',
      },
      {
        name: 'Porchetta',
        vol: '390 g',
        price: '39 lei',
        allergens: [1, 3, 10],
        desc: 'porchetta, cremă de trufe, cremă de brânză, rucola, parmezan, ulei de trufe, reducție de balsamic',
      },
      {
        name: 'Somon Afumat',
        vol: '400 g',
        price: '37 lei',
        allergens: [1, 3, 4, 10],
        desc: 'somon afumat, cremă de brânză, rucola, lămâie, reducție de balsamic',
      },
      {
        name: 'Cotto',
        vol: '400 g',
        price: '35 lei',
        allergens: [1, 3, 5, 10],
        desc: 'prosciutto cotto, provola, cremă de brânză, parmezan, rucola, pesto, reducție de balsamic',
      },
      {
        name: 'Mortadella',
        vol: '370 g',
        price: '35 lei',
        allergens: [1, 3, 5, 10],
        desc: 'mortadella, cremă de brânză, rucola, roșii uscate, pesto, reducție de balsamic',
      },
      {
        name: 'Prosciutto Crudo',
        vol: '430 g',
        price: '37 lei',
        allergens: [1, 3, 10],
        desc: 'prosciutto crudo, mozzarella, roșii, rucola, ulei de măsline, reducție de balsamic',
      },
      {
        name: 'Caprese',
        vol: '370 g',
        price: '29 lei',
        allergens: [1, 3, 5, 10],
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
        allergens: [3],
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
        allergens: [1, 2, 3, 8],
        desc: '2 pancakes pufoși, ciocolată, fructe proaspete, sirop de arțar',
      },
      {
        name: 'Pancakes Family Pack',
        vol: '480 g',
        price: '34 lei',
        allergens: [1, 2, 3, 8],
        desc: '4 pancakes pufoși, ciocolată, fructe proaspete, sirop de arțar',
      },
    ],
  },
  {
    key: 'sauces',
    group: 'brunch',
    name: 'Sosuri',
    items: [
      { name: 'Ketchup · Maioneză · Sos aioli', vol: '50 g', price: '3 lei', allergens: [2, 9] },
    ],
  },
  {
    key: 'racoritoare',
    group: 'racoritoare',
    name: 'Răcoritoare',
    items: [
      { name: 'Limonadă simplă', vol: '300 ml', price: '15 lei' },
      { name: 'Limonadă cu zmeură', vol: '300 ml', price: '17 lei' },
      { name: 'Limonadă cu afine', vol: '300 ml', price: '17 lei' },
      { name: 'Limonadă cu fructul pasiunii', vol: '300 ml', price: '17 lei' },
      { name: 'Fresh de portocale', vol: '300 ml', price: '20 lei' },
      { name: 'Fresh mixt', vol: '300 ml', price: '20 lei' },
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
    key: 'alcoolice',
    group: 'alcoolice',
    name: 'Alcoolice',
    items: [
      { name: 'Amstel', vol: '330 / 500 ml', price: '10 / 11 lei', allergens: [1] },
      { name: 'Birra Moretti', vol: '330 / 500 ml', price: '10 / 11 lei', allergens: [1] },
      { name: 'Heineken', vol: '330 / 400 ml', price: '12 / 13 lei', allergens: [1] },
      { name: 'Heineken Zero', vol: '330 ml', price: '12 lei', allergens: [1] },
      { name: 'Castel Huniade Sauv. Blanc / Rosé', vol: '187 / 750 ml', price: '15 / 55 lei', allergens: [10] },
      { name: 'Sole Chardonnay, alb sec', vol: '750 ml', price: '130 lei', allergens: [10] },
    ],
  },
]

export const FILTERS = [
  { key: 'toate', label: 'Toate' },
  { key: 'cafea', label: 'Cafea', kind: 'drink' },
  { key: 'racoritoare', label: 'Răcoritoare', kind: 'drink' },
  { key: 'brunch', label: 'Brunch', kind: 'food' },
  { key: 'panini', label: 'Panini', kind: 'food' },
  { key: 'sweets', label: 'Dulce', kind: 'food' },
  { key: 'alcoolice', label: 'Alcoolice', kind: 'drink' },
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

export function menuItemKey(categoryKey, item) {
  const raw = `${categoryKey}__${item.name}__${item.vol || ''}`
  return raw
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase()
}

export function flattenMenuItems() {
  const rows = []
  for (const cat of MENU) {
    const sections = cat.sections ?? [{ items: cat.items }]
    for (const sec of sections) {
      for (const item of sec.items) {
        rows.push({
          key: menuItemKey(cat.key, item),
          categoryKey: cat.key,
          categoryName: cat.name,
          sectionName: sec.name || '',
          item,
        })
      }
    }
  }
  return rows
}

export function matchMenuPhoto(item, photos) {
  const galleryOnly = new Set(['Băuturi de specialitate', 'Masa de brunch'])
  return (
    photos.find((im) => {
      if (galleryOnly.has(im.caption)) return false
      const cap = im.caption.toLowerCase()
      const name = item.name.toLowerCase()
      return name === cap || name.includes(cap)
    }) || null
  )
}

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
