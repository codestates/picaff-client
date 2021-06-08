export function convertArray<T, K extends keyof T>(data: T[], key: K) {
  return data.map((el) => el[key])
}

export const test = [
  {
    title: '달콤한 음식을 좋아한다',
    score: null,
  },
  {
    title: '레몬,귤,오렌지 같은 과일을 좋아한다',
    score: null,
  },
  {
    title: '커피를 진하게 마시는것을 좋아한다',
    score: null,
  },
  {
    title: '겨울에도 차가운음료를 마시는것이 좋다',
    score: null,
  },
  {
    title: '음식을 먹을때 가격보다 음식의 맛과 질이 더 중요하다',
    score: null,
  },
  {
    title: '새로운 음식을 먹는것에 대한 두려움이 많다',
    score: null,
  },
  {
    title: '취미에 많은 시간을 소비한다',
    score: null,
  },
  {
    title: '커피를 자주 마신다',
    score: null,
  },
  {
    title: '식사후 바로 설거지를 하는 편이다',
    score: null,
  },
  {
    title: '음식을 주문할때 즉흥적으로 메뉴를 정하는 편이다',
    score: null,
  },
  {
    title: '맛있는 음식을 먹는데 아낌없이 투자한다',
    score: null,
  },
]
