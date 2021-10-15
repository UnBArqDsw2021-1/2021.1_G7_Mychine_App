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
      'https://cdn.pixabay.com/photo/2017/11/11/17/08/solar-system-2939560_960_720.jpg',
  },
  {
    categoryId: 1,
    name: 'Placa solar - Pequena',
    description: 'Placa solar Pequena capaz de suprir energia para pequenos aparelhos como celulares, etc.',
    price: 600.99,
    status: status.Available,
    image:
      'https://cdn.pixabay.com/photo/2017/09/12/13/21/photovoltaic-system-2742302_960_720.jpg',
  },
  {
    categoryId: 1,
    name: 'Placa solar - Grande',
    description:
      'Capaz de gerar energia em quantidade suficiente para casas inteiras.',
    price: 50.99,
    status: status.Available,
    image:
      'https://cdn.pixabay.com/photo/2017/03/13/07/34/photovoltaic-2138992_960_720.jpg',
  },
  {
    categoryId: 1,
    name: 'Catavento - Gerador eólico',
    description: 'Gerador de grande porte para localidades com grandes fluxos de ventos',
    price: 450.99,
    status: status.Available,
    image:
      'https://cdn.pixabay.com/photo/2018/10/23/13/36/wind-power-3767886_960_720.jpg',
  },
  {
    categoryId: 1,
    name: 'Gerador hidraulico',
    description:
      'Gerador hidraulico muito bom para gerar energia com base em água',
    price: 300.99,
    status: status.Available,
    image:
      'https://cdn.pixabay.com/photo/2014/01/10/02/16/mcnary-oregon-241459_960_720.jpg',
  },
  {
    categoryId: 1,
    name: 'Gerador a disel',
    description: 'Gera energia com base em disel',
    price: 1000.0,
    status: status.Available,
    image:
      'https://cdn.pixabay.com/photo/2016/10/04/20/52/machine-1715424_960_720.jpg',
  },
  {
    categoryId: 1,
    name: 'Gerador a Gasolina',
    description: 'Gera energia com base em disel',
    price: 1000.99,
    status: status.Unavailable,
    image:
      'https://cdn.pixabay.com/photo/2020/08/10/00/02/generator-5476642_960_720.jpg',
  },
  {
    categoryId: 1,
    name: 'Gerador a uranio',
    description: 'Gera energia com base Energia nuclear',
    price: 1000.99,
    status: status.Maintenance,
    image:
      'https://cdn.pixabay.com/photo/2017/06/17/11/39/power-plant-2411932_960_720.jpg',
  },
  {
    categoryId: 2,
    name: 'Andaime',
    description: 'Andaime para uso geral',
    price: 1000.99,
    status: status.Available,
    image:
      'https://cdn.pixabay.com/photo/2012/02/17/14/55/scaffold-14253_960_720.jpg',
  },
  {
    categoryId: 2,
    name: 'Andaime eletrico - medio',
    description: 'Andaimer medio para uso geral, movido a energia',
    price: 800.99,
    status: status.Available,
    image:
      'https://cdn.pixabay.com/photo/2020/04/04/06/19/elevator-5001019_960_720.jpg',
  },
  {
    categoryId: 2,
    name: 'Andaime com rodinhas',
    description: 'Andaime para uso geral',
    price: 500.99,
    status: status.Available,
    image:
      'https://cdn.pixabay.com/photo/2017/08/24/09/39/scaffold-2676008_960_720.png',
  },
  {
    categoryId: 2,
    name: 'Andaime eletrico',
    description: 'Andaimer tamnho normal  para uso geral, movido a energia',
    price: 200.99,
    status: status.Available,
    image:
      'https://cdn.pixabay.com/photo/2020/02/11/11/32/transportation-4839274_960_720.jpg',
  },
  {
    categoryId: 3,
    name: 'Betoneira',
    description: 'Betoneira para mexer o concreto',
    price: 1000.99,
    status: status.Available,
    image:
      'https://cdn.pixabay.com/photo/2019/10/15/09/00/concrete-mixer-4551108_960_720.jpg',
  },
  {
    categoryId: 3,
    name: 'Caminhao de mexer concreto',
    description: 'Caminhao todo rosinha para mexer seu concretinho',
    price: 500.99,
    status: status.Available,
    image: 'https://cdn.pixabay.com/photo/2020/06/16/20/36/oversize-load-5307208_960_720.jpg',
  },
  {
    categoryId: 4,
    name: 'Caminhao de carga',
    description: 'Caminhao  para carregar produtos pesados',
    price: 1000.99,
    status: status.Available,
    image:
      'https://cdn.pixabay.com/photo/2018/01/13/14/20/dump-truck-3080177_960_720.jpg',
  },
  {
    categoryId: 4,
    name: 'Compactador de concreto',
    description: 'O melhor compactador de concreto do mercado',
    price: 400.99,
    status: status.Available,
    image:
      'https://cdn.pixabay.com/photo/2021/08/22/07/17/road-roller-6564386_960_720.jpg',
  },
  {
    categoryId: 4,
    name: 'Trator compactador ',
    description: 'Trator para compactação',
    price: 1000.99,
    status: status.Available,
    image:
      'https://cdn.pixabay.com/photo/2020/02/06/18/41/tracked-dumper-4825167_960_720.jpg',
  },
  {
    categoryId: 4,
    name: 'Compactador de concreto de grande porte',
    description: 'O compactador ideal para grande obras',
    price: 500.99,
    status: status.Available,
    image:
      'https://cdn.pixabay.com/photo/2016/09/27/13/52/roll-1698364_960_720.jpg',
  },
  {
    categoryId: 5,
    name: 'Trator pesado - laranja',
    description: 'Trator para realização de serviços de demolição e escavação - coloração laranja',
    price: 1000.99,
    status: status.Available,
    image:
      'https://cdn.pixabay.com/photo/2014/09/10/11/08/mining-440743_960_720.jpg',
  },
  {
    categoryId: 5,
    name: 'Maquina com pinça',
    description: 'Ideal se você precisar demolir com movimentos de pinça',
    price: 800.99,
    status: status.Available,
    image:
      'https://cdn.pixabay.com/photo/2015/12/08/12/10/crash-1082857_960_720.jpg',
  },
  {
    categoryId: 5,
    name: 'Trator leve',
    description: 'Trator para serviços leves que não exijem demais do equipamento',
    price: 400.99,
    status: status.Available,
    image:
      'https://cdn.pixabay.com/photo/2017/04/02/09/08/bulldozer-2195329__340.jpg',
  },
  {
    categoryId: 5,
    name: 'Bola de demolir',
    description: 'Demolir sua obra esta mais facil e barato que nunca',
    price: 300.99,
    status: status.Available,
    image:
      'https://cdn.pixabay.com/photo/2018/08/10/21/52/wrecking-ball-3597678_960_720.jpg',
  },
  {
    categoryId: 6,
    name: 'Container',
    description: 'Armazene tudo o que você precisar nesses belos containers ',
    price: 1000.99,
    status: status.Available,
    image:
      'https://cdn.pixabay.com/photo/2016/11/21/13/20/port-1845350_960_720.jpg',
  },
  {
    categoryId: 6,
    name: 'Caixote de madeira',
    description: 'Guarde seus produtos com simplicidade',
    price: 500.99,
    status: status.Available,
    image:
      'https://cdn.pixabay.com/photo/2017/08/05/18/12/box-2584940_960_720.png',
  },
  {
    categoryId: 6,
    name: 'Caixote de papelão',
    description: 'Guarde seus produtos em nossas caixas!',
    price: 1.99,
    status: status.Available,
    image:
      'https://cdn.pixabay.com/photo/2016/09/12/19/08/pallet-1665471_960_720.jpg',
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
