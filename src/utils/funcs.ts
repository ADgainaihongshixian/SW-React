import { LANGUAGE_KEY } from './const';

// localStorage 工具函数
export const getLocalStorage = (key: string) => window.localStorage.getItem(key);
export const setLocalStorage = (key: string, val: string) => window.localStorage.setItem(key, val);

// 语言环境
export const getLocalLang = () => getLocalStorage(LANGUAGE_KEY);
export const setLocalLang = (val:string) => setLocalStorage(LANGUAGE_KEY,val);

// className拼接
export const jointCn = (m:string,n:string,s?:string)=>!s?`${m}-${n}`:`${m}-${s} ${m}-${n}`;