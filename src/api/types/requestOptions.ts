import {Method} from 'axios'

type Primitives = string | number | boolean

export type RequestOptions<Data = string | object> = {
    method: Method;
    url: string;
    params?: Record<string,string | readonly string[]>;
    headers?: Record<string, Primitives>;
    data?: Data;
    timeout?: number
}