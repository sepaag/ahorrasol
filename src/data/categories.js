export const blocks = [
  {
    key: 'A',
    name: 'Placas solares y autoconsumo',
    desc: 'Costes, rentabilidad, trámites y baterías.',
    url: '/ahorrasol/categoria/placas-solares',
    icon: '☀️',
    slug: 'placas-solares'
  },
  {
    key: 'B',
    name: 'Ayudas y deducciones',
    desc: 'Subvenciones, IRPF, IBI e ICIO.',
    url: '/ahorrasol/categoria/ayudas',
    icon: '€',
    slug: 'ayudas'
  },
  {
    key: 'C',
    name: 'Ahorro en la factura y en casa',
    desc: 'Potencia, consumo, tarifas y hábitos.',
    url: '/ahorrasol/categoria/ahorro',
    icon: '💡',
    slug: 'ahorro'
  },
  {
    key: 'D',
    name: 'Climatización y aislamiento',
    desc: 'Aerotermia, bomba de calor y aislamiento.',
    url: '/ahorrasol/categoria/climatizacion',
    icon: '🏠',
    slug: 'climatizacion'
  },
  {
    key: 'E',
    name: 'Extras',
    desc: 'Coche eléctrico, balcón y certificado energético.',
    url: '/ahorrasol/categoria/extras',
    icon: '⚡',
    slug: 'extras'
  }
];

export function getBlockForCategory(category) {
  return blocks.find(block =>
    category === block.name ||
    (block.key === 'C' && category.startsWith('Ahorro en la factura'))
  );
}