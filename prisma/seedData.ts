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
    name: 'Placa solar',
    description: 'Placa solar que funciona com o sol',
    price: 500.99,
    status: status.Avaliable,
    image:
      'https://cdn.awsli.com.br/1000x1000/816/816887/produto/53511512/4d93112285.jpg',
  },
  {
    categoryId: 1,
    name: 'Placa solar - Rosa',
    description: 'Placa solar que funciona com o sol dá cor rosa choque',
    price: 600.99,
    status: status.Avaliable,
    image:
      'https://cdn.awsli.com.br/1000x1000/816/816887/produto/53511512/4d93112285.jpg',
  },
  {
    categoryId: 1,
    name: 'Gerador de energia movido a energia',
    description: 'Gere energia consumindo sua propria energia de maneira perpetua',
    price: 50.99,
    status: status.Avaliable,
    image:
      'https://cdn.awsli.com.br/1000x1000/816/816887/produto/53511512/4d93112285.jpg',
  },
  {
    categoryId: 1,
    name: 'Catavento',
    description: 'Cate seu vento com nosso catavento',
    price: 450.99,
    status: status.Avaliable,
    image:
      'https://cdn.awsli.com.br/1000x1000/816/816887/produto/53511512/4d93112285.jpg',
  },
  {
    categoryId: 1,
    name: 'Gerador hidraulico',
    description: 'Gerador hidraulico muito bom para gerar energia com base em água',
    price: 300.99,
    status: status.Avaliable,
    image:
      'https://cdn.awsli.com.br/1000x1000/816/816887/produto/53511512/4d93112285.jpg',
  },
  {
    categoryId: 1,
    name: 'Gerador a disel',
    description: 'Gera energia com base em disel',
    price: 1000.00,
    status: status.Avaliable,
    image:
      'https://www.taqi.com.br/ccstore/v1/images/?source=/file/v5349520148770145571/products/089446.00-gerador-de-luz-motomil-gasolina-3kva-motor-4-tempos-65hp-monofasico-mg3000cl.jpg&height=1000&width=1000&quality=0.9',
  },
  {
    categoryId: 1,
    name: 'Gerador a Gasolina',
    description: 'Gera energia com base em disel',
    price: 1000.99,
    status: status.Unavaliable,
    image:
      'https://www.taqi.com.br/ccstore/v1/images/?source=/file/v5349520148770145571/products/089446.00-gerador-de-luz-motomil-gasolina-3kva-motor-4-tempos-65hp-monofasico-mg3000cl.jpg&height=1000&width=1000&quality=0.9',
  },
  {
    categoryId: 1,
    name: 'Gerador a uranio',
    description: 'Gera energia com base Energia nuclear',
    price: 1000.99,
    status: status.Maintenance,
    image:
      'https://img.olhardigital.com.br/wp-content/uploads/2021/05/shutterstock_1387140884.jpg',
  },
  {
    categoryId: 2,
    name: 'Andaime',
    description: 'Andaime para uso geral',
    price: 1000.99,
    status: status.Avaliable,
    image:
      'https://www.locacoesmartins.com.br/wp-content/uploads/2020/07/andaime-torre.jpg',
  },
  {
    categoryId: 2,
    name: 'Andaime eletrico',
    description: 'Andaimer para uso geral, movido a energia',
    price: 800.99,
    status: status.Avaliable,
    image:
      'https://ae01.alicdn.com/kf/Ha993c13e604e49369c001a6ade3d346f8/Andaime-hidr-ulico-da-tesoura-do-andaime-com-ce.jpg_Q90.jpg_.webp',
  },
  {
    categoryId: 2,
    name: 'Andaime com rodinhas',
    description: 'Andaime para uso geral',
    price: 500.99,
    status: status.Avaliable,
    image:
      'https://www.locacoesmartins.com.br/wp-content/uploads/2020/07/andaime-torre.jpg',
  },
  {
    categoryId: 2,
    name: 'Andaime eletrico',
    description: 'Andaimer para uso geral, movido a energia',
    price: 200.99,
    status: status.Avaliable,
    image:
      'https://ae01.alicdn.com/kf/Ha993c13e604e49369c001a6ade3d346f8/Andaime-hidr-ulico-da-tesoura-do-andaime-com-ce.jpg_Q90.jpg_.webp',
  },
  {
    categoryId: 3,
    name: 'Betoneira',
    description: 'Betoneira para mexer o concreto',
    price: 1000.99,
    status: status.Avaliable,
    image:
      'https://d365e82sgxmduv.cloudfront.net/Custom/Content/Products/21/07/2107045_betoneira-profissional-trifasica-400-litros-com-painel-2cv-220-volts-71000729-csm_m2_637486474279502387.jpg',
  },
  {
    categoryId: 3,
    name: 'Caminhao de mexer concreto',
    description: 'Caminhao todo rosinha para mexer seu concretinho',
    price: 500.99,
    status: status.Avaliable,
    image: 'https://abcp.org.br/wp-content/uploads/2019/10/01ciplan.jpg',
  },
  {
    categoryId: 3,
    name: 'Betoneira com rodinhas',
    description: 'Betoneira para mexer o concreto',
    price: 600.99,
    status: status.Avaliable,
    image:
      'https://d365e82sgxmduv.cloudfront.net/Custom/Content/Products/21/07/2107045_betoneira-profissional-trifasica-400-litros-com-painel-2cv-220-volts-71000729-csm_m2_637486474279502387.jpg',
  },
  {
    categoryId: 3,
    name: 'Caminhao velho',
    description: 'Caminhao todo rosinha para mexer seu concretinho',
    price: 200.99,
    status: status.Unavaliable,
    image: 'https://abcp.org.br/wp-content/uploads/2019/10/01ciplan.jpg',
  },
  {
    categoryId: 4,
    name: 'Caminhao compactador - Rosa',
    description: 'Caminhao todo rosinha para compactar seu lixo',
    price: 1000.99,
    status: status.Avaliable,
    image:
      'https://img.r7.com/images/2016/10/12/nkxtqrdl3_6qr77l5nqf_file?dimensions=460x305',
  },
  {
    categoryId: 4,
    name: 'Compactador de concreto',
    description: 'O melhor compactador do mercado',
    price: 400.99,
    status: status.Avaliable,
    image:
      'https://a-static.mlcdn.com.br/1500x1500/compactador-de-solo-tipo-sapo-a-gasolina-6-5-hp-motor-loncin-motor-de-4-tempos-ncslon-nagano/agrotama2/mgl-101014894/226cc03e0b382610bfce2186e7bf91b1.jpg',
  },
  {
    categoryId: 4,
    name: 'Caminhao compactador velho',
    description: 'Caminhao todo rosinha para compactar seu lixo',
    price: 1000.99,
    status: status.Unavaliable,
    image:
      'https://img.r7.com/images/2016/10/12/nkxtqrdl3_6qr77l5nqf_file?dimensions=460x305',
  },
  {
    categoryId: 4,
    name: 'Compactador de concreto',
    description: 'O melhor compactador do mercado',
    price: 500.99,
    status: status.Avaliable,
    image:
      'https://a-static.mlcdn.com.br/1500x1500/compactador-de-solo-tipo-sapo-a-gasolina-6-5-hp-motor-loncin-motor-de-4-tempos-ncslon-nagano/agrotama2/mgl-101014894/226cc03e0b382610bfce2186e7bf91b1.jpg',
  },
  {
    categoryId: 5,
    name: 'Trator pesado - rosa',
    description: 'Demolir sua obra nunca foi tao estiloso',
    price: 1000.99,
    status: status.Avaliable,
    image:
      'https://magazineagrofest.com.br/wp-content/uploads/2019/10/MG_0530.jpg',
  },
  {
    categoryId: 5,
    name: 'Bola de demolir',
    description: 'Demolir sua obra esta mais facil que nunca',
    price: 800.99,
    status: status.Avaliable,
    image:
      'https://http2.mlstatic.com/D_NQ_NP_885425-MLB25424673311_032017-O.jpg',
  },
  {
    categoryId: 5,
    name: 'Trator leve - rosa',
    description: 'Demolir sua obra nunca foi tao estiloso e leve',
    price: 400.99,
    status: status.Avaliable,
    image:
      'https://magazineagrofest.com.br/wp-content/uploads/2019/10/MG_0530.jpg',
  },
  {
    categoryId: 5,
    name: 'Bola de demolir com caveira',
    description: 'Demolir sua obra esta mais facil e radical que nunca',
    price: 300.99,
    status: status.Avaliable,
    image:
      'https://http2.mlstatic.com/D_NQ_NP_885425-MLB25424673311_032017-O.jpg',
  },
  {
    categoryId: 6,
    name: 'Container - Rosa',
    description: 'Armazene com estilo',
    price: 1000.99,
    status: status.Avaliable,
    image:
      'https://www.logweb.com.br/wp-content/uploads/2018/10/CONTAINER-ROSA.jpg',
  },
  {
    categoryId: 6,
    name: 'Caixote de madeira',
    description: 'Guarde seus produtos com simplicidade',
    price: 500.99,
    status: status.Avaliable,
    image:
      'https://www.logweb.com.br/wp-content/uploads/2018/10/CONTAINER-ROSA.jpg',
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
