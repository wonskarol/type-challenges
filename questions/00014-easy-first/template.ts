type First<T extends any[]> = T['length'] extends 0 ? never : T[0]
// type First<T extends any[]> = T extends [infer F, ...infer R] ? F : never
