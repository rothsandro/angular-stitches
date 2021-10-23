import { Observable, isObservable } from 'rxjs';
import { map } from 'rxjs/operators';

export type ObservableOrValue<T> = T | Observable<T>;
export type StyledExprOrRule = { className: string };
export type StyleMap = Record<string, ObservableOrValue<StyledExprOrRule>>;
export type ClassNameMap<T extends StyleMap> = {
  [K in keyof T]: T[K] extends Observable<unknown>
    ? Observable<string>
    : string;
};

export function classNames<T extends StyleMap>(obj: T): ClassNameMap<T> {
  const mapped = Object.entries(obj).map(([key, value]) => [
    key,
    isObservable(value)
      ? value.pipe(map((value) => value.className))
      : value.className,
  ]);
  return Object.fromEntries(mapped);
}
