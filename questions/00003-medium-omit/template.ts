// https://mariusschulz.com/blog/the-omit-helper-type-in-typescript

type MyOmit<T, K extends keyof T> = MyPick<T, MyExclude<keyof T, K>>
