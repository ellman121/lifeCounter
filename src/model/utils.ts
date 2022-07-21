import R from 'ramda'

export function shiftArray<T = any>(list: T[], n: T, length: number = 5) {
  return R.prepend(n, R.take(length - 1, list))
}
