export const blocks = [
  {
    key: 'A',
    name: 'Placas solares y autoconsumo',
    desc: 'Costes, rentabilidad, trámites y baterías.',
    url: '/eficasa/categoria/placas-solares',
    icon: '☀️',
    slug: 'placas-solares'
  },
  {
    key: 'B',
    name: 'Ayudas y deducciones',
    desc: 'Subvenciones, IRPF, IBI e ICIO.',
    url: '/eficasa/categoria/ayudas',
    icon: '€',
    slug: 'ayudas'
  },
  {
    key: 'C',
    name: 'Ahorro en la factura y en casa',
    desc: 'Potencia, consumo, tarifas y hábitos.',
    url: '/eficasa/categoria/ahorro',
    icon: '💡',
    slug: 'ahorro'
  },
  {
    key: 'D',
    name: 'Climatización y aislamiento',
    desc: 'Aerotermia, bomba de calor y aislamiento.',
    url: '/eficasa/categoria/climatizacion',
    icon: '🏠',
    slug: 'climatizacion'
  },
  {
    key: 'E',
    name: 'Extras',
    desc: 'Coche eléctrico, balcón y certificado energético.',
    url: '/eficasa/categoria/extras',
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