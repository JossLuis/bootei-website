// Función para convertir "Alitas Nivel 1" → "alitasNivel1"
function toCamelCase(str) {
  return str
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .replace(/\s(.)/g, (match, group1) => group1.toUpperCase())
    .replace(/\s/g, '')
    .replace(/^(.)/, (match, group1) => group1.toLowerCase());
}

// Función para cargar imagen desde /assets
function getImage(name) {
  const camel = toCamelCase(name);
  try {
    return new URL(`./assets/${camel}.png`, import.meta.url).href;
  } catch {
    return new URL(`./assets/alitasNivel3.png`, import.meta.url).href; // fallback
  }
}

export const salsas = ['BBQ', 'Teriyaki', 'Buffalo'];

export const alitas = [
  {
    id: 1,
    name: 'Alitas Nivel 1',
    portions: '6 piezas',
    price: 80,
    image: getImage('Alitas Nivel 1')
  },
  {
    id: 2,
    name: 'Alitas Nivel 2',
    portions: '12 piezas',
    price: 150,
    image: getImage('Alitas Nivel 2')
  },
  {
    id: 3,
    name: 'Alitas Nivel 3',
    portions: '24 piezas',
    price: 275,
    image: getImage('Alitas Nivel 3')
  }
]

export const tenders = [
  {
    id: 11,
    name: 'Tenders Nivel 1',
    portions: '4-5 tiras',
    price: 85,
    image: getImage('Tenders Nivel 1')
  },
  {
    id: 12,
    name: 'Tenders Nivel 2',
    portions: '8-9 tiras',
    price: 160,
    image: getImage('Tenders Nivel 2')
  },
  {
    id: 13,
    name: 'Tenders Nivel 3',
    portions: '14-16 tiras',
    price: 280,
    image: getImage('Tenders Nivel 3')
  }
]

export const boneless = [
  {
    id: 21,
    name: 'Boneless Nivel 1',
    portions: '6-7 piezas',
    price: 85,
    image: getImage('Boneless Nivel 1')
  },
  {
    id: 22,
    name: 'Boneless Nivel 2',
    portions: '12-14 piezas',
    price: 160,
    image: getImage('Boneless Nivel 2')
  },
  {
    id: 23,
    name: 'Boneless Nivel 3',
    portions: '30 piezas',
    price: 280,
    image: getImage('Boneless Nivel 3')
  }
]

export const papas = [
  {
    id: 31,
    name: 'Papas Medianas',
    portions: '1 porción',
    price: 40,
    image: getImage('Papas Medianas')
  },
  {
    id: 32,
    name: 'Papas Grandes',
    portions: '2 porciones',
    price: 60,
    image: getImage('Papas Grandes')
  }
]

export const combos = [
  {
    id: 41,
    name: 'Combo Pareja',
    description: '12 alitas (2 salsas), 8 boneless (1 salsa), Papas medianas',
    price: 250,
    image: getImage('Combo Pareja')
  },
  {
    id: 42,
    name: 'Paquete Amigos',
    description: '24 alitas (2 salsas), 16 boneless (2 salsas), 8 tenders (2 salsas), Papas grandes',
    price: 580,
    image: getImage('Paquete Amigos')
  },
  {
    id: 43,
    name: 'Promo Alone',
    description: '6 alitas (1 salsa), 4 boneless (1 salsa), Papas chicas',
    price: 130,
    image: getImage('Promo Alone')
  }
]