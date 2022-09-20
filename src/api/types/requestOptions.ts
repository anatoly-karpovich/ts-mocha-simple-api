import { Method } from 'axios'
import type { AxiosResponseHeaders } from 'axios'

type Primitives = string | number | boolean

export type RequestOptions<Data = string | object> = {
    method: Method;
    baseURL: string;
    url?: string;
    params?: Record<string,string | readonly string[]>;
    headers?: AxiosResponseHeaders
    data?: Data;
    timeout?: number
}