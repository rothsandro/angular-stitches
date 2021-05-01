import { Observable, isObservable } from 'rxjs';
import { map } from 'rxjs/operators';

type ObservableOrValue<T> = T | Observable<T>;
type StyledExprOrRule = { className: string };
type StyleMap = Record<string, ObservableOrValue<StyledExprOrRule>>;
type ClassNameMap<T extends StyleMap> = {
  [K in keyof T]: T[K] extends Observable<unknown>
    ? Observable<string>
    : string;
};

function classNames<T extends StyleMap>(obj: T): ClassNameMap<T> {
  const mapped = Object.entries(obj).map(([key, value]) => [
    key,
    isObservable(value)
      ? value.pipe(map((value) => value.className))
      : value.className,
  ]);
  return Object.fromEntries(mapped);
}

export default classNames;
