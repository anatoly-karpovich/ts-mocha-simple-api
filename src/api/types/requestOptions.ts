import {Method} from 'axios'

type Primitives = string | number | boolean
type Header = {
    [key: string]: string
}

export type RequestOptions<Data = string | object> = {
    method: Method;
    baseURL: string;
    url?: string;
    params?: Record<string,string | readonly string[]>;
    // headers?: Record<string, Primitives>;
    headers?: Header
    data?: Data;
    timeout?: number
}