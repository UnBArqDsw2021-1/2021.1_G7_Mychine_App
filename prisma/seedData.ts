import { status } from '@prisma/client';

export const users = [
  {
    email: 'ceilandia@mail.com',
    password: '12345',
    name: 'Pedro H',
    phone: '556127351235123',
    isAdm: true,
  },
  {
    email: 'gor@mail.com',
    password: '12345',
    name: 'Igor Queiroz',
    phone: '556127351235123',
  },
  {
    email: 'crocs@mail.com',
    password: '12345',
    name: 'Eduardo Nunes',
    phone: '556127351235123',
  },
  {
    email: 'bigode@mail.com',
    password: '12345',
    name: 'Matheus Gabriel',
    phone: '556127351235123',
    isAdm: true,
  },
  {
    email: 'albedo@mail.com',
    password: '12345',
    name: 'Samuel Nogueira',
    phone: '556127351235123',
  },
  {
    email: 'rodolpho@mail.com',
    password: '12345',
    name: 'Roberto Nobrega',
    phone: '556127351235123',
  },
  {
    email: 'pedregal@mail.com',
    password: '12345',
    name: 'Kess Jhones',
    phone: '556127351235123',
  },
  {
    email: 'giovanna@mail.com',
    password: '12345',
    name: 'Giovanna Bottino',
    phone: '556127351235123',
  },
  {
    email: 'jonga@mail.com',
    password: '12345',
    name: 'Joao Gabriel',
    phone: '556127351235123',
  },
];

export const category = [
  {
    name: 'Geradores',
    description: 'Equipamentos para produção de energia elétrica.',
  },
  {
    name: 'Elevação',
    description: 'Equipamentos para elevação em contruções altas.',
  },
  {
    name: 'Concretagem',
    description: 'Equipamentos para produção de concreto.',
  },
  {
    name: 'Compactação',
    description: 'Equipamentos para compactação de terrenos.',
  },
  {
    name: 'Demolição',
    description: 'Máquinas para demolição de construções.',
  },
  {
    name: 'Containers',
    description: 'Containers para usos diversos.',
  },
];

export const products = [
  {
    categoryId: 1,
    name: 'Placa solar - Média',
    description: 'Placa solar de tamanho médio capaz de gerar energia para quartos, salas, etc',
    price: 500.99,
    status: status.Available,
    image:
      'https://e7.pngegg.com/pngimages/233/103/png-clipart-solar-energy-solar-power-solar-panels-renewable-energy-solar-inverter-energy-solar-cell-panel-thumbnail.png',
  },
  {
    categoryId: 1,
    name: 'Placa solar - Pequena',
    description: 'Placa solar Pequena capaz de suprir energia para pequenos aparelhos como celulares, etc.',
    price: 600.99,
    status: status.Available,
    image:
      'https://e7.pngegg.com/pngimages/241/235/png-clipart-submersible-pump-solar-energy-solar-power-solar-panel-green-energy-solar-renewable-energy-green-vector-thumbnail.png',
  },
  {
    categoryId: 1,
    name: 'Placa solar - Grande',
    description:
      'Capaz de gerar energia em quantidade suficiente para casas inteiras.',
    price: 50.99,
    status: status.Available,
    image:
      'https://e7.pngegg.com/pngimages/970/553/png-clipart-solar-panels-solar-power-solar-energy-voltaic-system-voltaics-energy-renewable-energy-solar-cell-thumbnail.png',
  },
  {
    categoryId: 1,
    name: 'Catavento - Gerador eólico',
    description: 'Gerador de grande porte para localidades com grandes fluxos de ventos',
    price: 450.99,
    status: status.Available,
    image:
      'https://e7.pngegg.com/pngimages/998/906/png-clipart-white-wind-turbine-wind-farm-wind-turbine-energy-machine-wind-energy-angle-farm-thumbnail.png',
  },
  {
    categoryId: 1,
    name: 'Gerador hidraulico',
    description:
      'Gerador hidraulico muito bom para gerar energia com base em água',
    price: 300.99,
    status: status.Available,
    image:
      'https://e7.pngegg.com/pngimages/772/7/png-clipart-electronics-accessory-heat-pump-berogailu-hidros-srl-oleotec-oleos-tecnicos-lda-electronics-electronic-device-thumbnail.png',
  },
  {
    categoryId: 1,
    name: 'Gerador a disel',
    description: 'Gera energia com base em disel',
    price: 1000.0,
    status: status.Available,
    image:
      'https://e7.pngegg.com/pngimages/137/259/png-clipart-hidro-melhoras-lda-water-system-quality-water-service-quality-thumbnail.png',
  },
  {
    categoryId: 1,
    name: 'Gerador a Gasolina',
    description: 'Gera energia com base em disel',
    price: 1000.99,
    status: status.Unavailable,
    image:
      'https://e7.pngegg.com/pngimages/202/773/png-clipart-electric-motor-induction-motor-ac-motor-three-phase-electric-power-electricity-engine-business-transport-thumbnail.png',
  },
  {
    categoryId: 1,
    name: 'Gerador a uranio',
    description: 'Gera energia com base Energia nuclear',
    price: 1000.99,
    status: status.Maintenance,
    image:
      'https://e7.pngegg.com/pngimages/316/916/png-clipart-skull-human-skeleton-skull-face-head-thumbnail.png',
  },
  {
    categoryId: 2,
    name: 'Andaime',
    description: 'Andaime para uso geral',
    price: 1000.99,
    status: status.Available,
    image:
      'https://e7.pngegg.com/pngimages/853/836/png-clipart-steel-facade-ladder-angle-shelf-andaime-glass-angle-thumbnail.png',
  },
  {
    categoryId: 2,
    name: 'Andaime eletrico - medio',
    description: 'Andaimer medio para uso geral, movido a energia',
    price: 800.99,
    status: status.Available,
    image:
      'https://e7.pngegg.com/pngimages/736/84/png-clipart-black-and-yellow-fork-lift-forklift-alarm-device-heavy-equipment-vehicle-machine-forklift-products-in-kind-to-avoid-the-material-car-warehouse-thumbnail.png',
  },
  {
    categoryId: 2,
    name: 'Andaime com rodinhas',
    description: 'Andaime para uso geral',
    price: 500.99,
    status: status.Available,
    image:
      'https://e7.pngegg.com/pngimages/411/886/png-clipart-wheel-scaffolding-engine-machine-crane-andaime-angle-auto-part-thumbnail.png',
  },
  {
    categoryId: 2,
    name: 'Andaime eletrico',
    description: 'Andaimer tamnho normal  para uso geral, movido a energia',
    price: 200.99,
    status: status.Available,
    image:
      'https://e7.pngegg.com/pngimages/849/908/png-clipart-toyota-material-handling-u-s-a-inc-pallet-jack-forklift-truck-heavy-equipment-truck-forklift-thumbnail.png',
  },
  {
    categoryId: 3,
    name: 'Betoneira',
    description: 'Betoneira para mexer o concreto',
    price: 1000.99,
    status: status.Available,
    image:
      'https://e7.pngegg.com/pngimages/831/464/png-clipart-concrete-mixer-cement-illustration-concrete-car-car-accident-building-thumbnail.png',
  },
  {
    categoryId: 3,
    name: 'Caminhao de mexer concreto',
    description: 'Caminhao todo rosinha para mexer seu concretinho',
    price: 500.99,
    status: status.Available,
    image: 'https://e7.pngegg.com/pngimages/38/626/png-clipart-concrete-mixer-ready-mix-concrete-truck-heavy-equipment-realistic-mix-of-sand-machine-freight-transport-realistic-thumbnail.png',
  },
  {
    categoryId: 3,
    name: 'Betoneira com rodinhas',
    description: 'Betoneira para mexer o concreto',
    price: 600.99,
    status: status.Unavailable,
    image:
      'https://d365e82sgxmduv.cloudfront.net/Custom/Content/Products/21/07/2107045_betoneira-profissional-trifasica-400-litros-com-painel-2cv-220-volts-71000729-csm_m2_637486474279502387.jpg',
  },
  {
    categoryId: 3,
    name: 'Caminhao velho',
    description: 'Caminhao todo rosinha para mexer seu concretinho',
    price: 200.99,
    status: status.Unavailable,
    image: 'https://abcp.org.br/wp-content/uploads/2019/10/01ciplan.jpg',
  },
  {
    categoryId: 4,
    name: 'Caminhao compactador',
    description: 'Caminhao  para compactar seu lixo',
    price: 1000.99,
    status: status.Available,
    image:
      'https://e7.pngegg.com/pngimages/822/642/png-clipart-bulldozer-heavy-machinery-volvo-construction-equipment-construction-equipment-mode-of-transport-vehicle-thumbnail.png',
  },
  {
    categoryId: 4,
    name: 'Compactador de concreto',
    description: 'O melhor compactador de concreto do mercado',
    price: 400.99,
    status: status.Available,
    image:
      'https://e7.pngegg.com/pngimages/553/380/png-clipart-tire-car-road-roller-heavy-machinery-architectural-engineering-maquinaria-truck-car-thumbnail.png',
  },
  {
    categoryId: 4,
    name: 'Trator compactador ',
    description: 'Trator para compactação',
    price: 1000.99,
    status: status.Available,
    image:
      'https://e7.pngegg.com/pngimages/380/385/png-clipart-john-deere-caterpillar-inc-bulldozer-industrial-alternator-starter-backhoe-jd-vehicle-backhoe-loader-thumbnail.png',
  },
  {
    categoryId: 4,
    name: 'Compactador de concreto de grande porte',
    description: 'O compactador ideal para grande obras',
    price: 500.99,
    status: status.Available,
    image:
      'https://e7.pngegg.com/pngimages/553/380/png-clipart-tire-car-road-roller-heavy-machinery-architectural-engineering-maquinaria-truck-car-thumbnail.png',
  },
  {
    categoryId: 5,
    name: 'Trator pesado - laranja',
    description: 'Trator para realização de serviços de demolição e escavação - coloração laranja',
    price: 1000.99,
    status: status.Available,
    image:
      'https://e7.pngegg.com/pngimages/393/78/png-clipart-john-deere-skid-steer-loader-heavy-machinery-front-end-loader-backhoe-vehicle-agricultural-machinery-thumbnail.png',
  },
  {
    categoryId: 5,
    name: 'Maquina com pinça',
    description: 'Ideal se você precisar demolir com movimentos de pinça',
    price: 800.99,
    status: status.Available,
    image:
      'https://e7.pngegg.com/pngimages/742/235/png-clipart-heavy-machinery-kobelco-training-services-excavator-kobe-steel-demolition-excavator-building-technic-thumbnail.png',
  },
  {
    categoryId: 5,
    name: 'Trator leve',
    description: 'Trator para serviços leves que não exijem demais do equipamento',
    price: 400.99,
    status: status.Available,
    image:
      'https://e7.pngegg.com/pngimages/118/995/png-clipart-caterpillar-inc-caterpillar-d9-bulldozer-komatsu-limited-caterpillar-d6-bulldozer-vehicle-transport-thumbnail.png',
  },
  {
    categoryId: 5,
    name: 'Bola de demolir',
    description: 'Demolir sua obra esta mais facil e barato que nunca',
    price: 300.99,
    status: status.Available,
    image:
      'https://e7.pngegg.com/pngimages/245/729/png-clipart-crane-architectural-engineering-building-business-project-crane-building-technic-thumbnail.png',
  },
  {
    categoryId: 6,
    name: 'Container',
    description: 'Armazene tudo o que você precisar nesses belos containers ',
    price: 1000.99,
    status: status.Available,
    image:
      'https://e7.pngegg.com/pngimages/666/373/png-clipart-cassone-truck-equipment-sales-standby-generator-business-electric-generator-heavy-machinery-solar-inverter-building-service-thumbnail.png',
  },
  {
    categoryId: 6,
    name: 'Caixote de madeira',
    description: 'Guarde seus produtos com simplicidade',
    price: 500.99,
    status: status.Available,
    image:
      'https://e7.pngegg.com/pngimages/264/107/png-clipart-three-brown-wooden-boxes-wooden-box-wooden-box-combination-angle-furniture-thumbnail.png',
  },
  {
    categoryId: 6,
    name: 'Caixote de papelão',
    description: 'Guarde seus produtos em nossas caixas!',
    price: 1.99,
    status: status.Available,
    image:
      'https://e7.pngegg.com/pngimages/342/975/png-clipart-pallet-cargo-cardboard-box-graphy-boxes-miscellaneous-freight-transport-thumbnail.png',
  },
];

export const address = [
  {
    userId: 1,
    cep: '72250-000',
    city: 'Ceilondres',
    state: 'Brasília - DF',
    number: 32,
  },
  {
    userId: 2,
    cep: '72316-231',
    city: 'Luzicity',
    state: 'Goías',
    number: 108,
  },
  {
    userId: 3,
    cep: '72316-100',
    city: 'Crocolandia',
    state: 'Amendland',
    number: 24,
  },
  {
    userId: 4,
    cep: '72250-069',
    city: 'Querozene',
    state: 'Brasília - DF',
    number: 24,
  },
  {
    userId: 5,
    cep: '72240-256',
    city: 'Gama',
    state: 'Brasília - DF',
    number: 24,
  },
  {
    userId: 6,
    cep: '72350-256',
    city: 'Valparadize',
    state: 'Goiás - GO',
    number: 24,
  },
  {
    userId: 7,
    cep: '74750-253',
    city: 'Pedregal',
    state: 'Brasília - DF',
    number: 24,
  },
  {
    userId: 8,
    cep: '74580-253',
    city: 'Lago sul',
    state: 'Brasília - DF',
    number: 24,
  },
  {
    userId: 9,
    cep: '74580-253',
    city: 'Lago norte',
    state: 'Brasília - DF',
    number: 24,
  },
];
