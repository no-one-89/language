// action types
export const INCREMENT_NUMS = 'INCREMENT_NUMS';

export function increment(index) {
  return { type: INCREMENT_NUMS, index }
}
