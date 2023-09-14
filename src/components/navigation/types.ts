export type Navigation = {
  title: string,
  url: string
}[]

export type WithClassName<T> = { className?: string } & T