import topics from './topics';

export const inProgress = [
  ...new Array(10).fill(0).map((_, index) => ({
    id: index,
    item: {
      id: 1,
      title: 'Pizza de frango G',
      topic: topics[0],
      image:
        'https://img.itdg.com.br/tdg/images/recipes/000/093/498/323883/323883_original.jpg?mode=crop&width=710&height=400',
    },
    estimatedTime: 40,
    formattedEstimatedTime: '40 minutos',
    createdAt: '2020-05-06T02:25:41.550Z',
    formattedRequestedTime: '32 min atrás',
  })),
];

export const finished = [
  ...new Array(10).fill(0).map((_, index) => ({
    id: index,
    item: {
      id: 1,
      title: 'Pizza de frango G',
      topic: topics[0],
      image:
        'https://img.itdg.com.br/tdg/images/recipes/000/093/498/323883/323883_original.jpg?mode=crop&width=710&height=400',
    },
    finishedAt: '2020-05-06T02:25:41.550Z',
    formattedFinishedAt: '32 min atrás',
  })),
];
