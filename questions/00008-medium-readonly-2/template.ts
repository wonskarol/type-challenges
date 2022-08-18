type MyReadonly2<T, K extends keyof T = keyof T> = {
  [P in MyExclude<keyof T, K>]: T[P]
} & {
  readonly [P in keyof MyPick<T, K>]: T[P]
}
