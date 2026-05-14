import { I18nType } from '@/i18n/I18nType';
import useLanguageStore from '@/stores/languageStore';

export type PathImpl<T, Key extends keyof T> =
    Key extends string
    ? T[Key] extends Record<string, unknown>
    ? `${Key}` | `${Key}.${PathImpl<T[Key], Exclude<keyof T[Key], keyof unknown[]>>}`
    : `${Key}`
    : never;

export type Path<T> = PathImpl<T, keyof T>;

export type PathValue<T, P extends string> =
    P extends `${infer K}.${infer Rest}`
    ? K extends keyof T
    ? T[K] extends object
    ? PathValue<T[K], Rest>
    : never
    : never
    : P extends keyof T
    ? T[P]
    : never;

function getValueByPath<T, P extends string>(obj: T, path: P): unknown {
    return path.split('.').reduce((o, key) => {
        if (o && typeof o === 'object' && key in o) {
            return (o as Record<string, unknown>)[key];
        }
        return undefined;
    }, obj as unknown);
}

export function useI18n(): I18nType | null;
export function useI18n<P extends Path<I18nType>>(path: P): PathValue<I18nType, P>;
export function useI18n<P extends Path<I18nType>>(path?: P) {
    const { i18n } = useLanguageStore();

    if (!path) return i18n;

    return getValueByPath(i18n, path) as PathValue<I18nType, P>;
}
