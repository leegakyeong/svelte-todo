import { writable } from 'svelte/store';

export const todos = writable([
  {
    id: 1,
    done: true,
    content: '첫 번째 투두',
  },
  {
    id: 2,
    done: false,
    content: '두 번째 투두',
  },
  {
    id: 3,
    done: false,
    content: '세 번째 투두',
  },
  {
    id: 4,
    done: false,
    content: '네 번째 투두',
  },
  {
    id: 5,
    done: false,
    content: '다섯 번째 투두',
  },
]);
