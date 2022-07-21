import R from 'ramda'

export function shiftArray<T = any>(list: T[], n: T, length: number = 5) {
  return R.append(n, R.takeLast(4, list))
}
