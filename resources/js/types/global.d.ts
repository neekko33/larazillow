import { PageProps as InertiaPageProps } from '@inertiajs/core'
import { PageProps } from './index'

declare module '@inertiajs/vue3' {
  export { router, Link, Head, usePage, useForm } from '@inertiajs/vue3'

  export function createInertiaApp(options: {
    resolve: (name: string) => any
    setup: (params: {
      el: Element
      App: any
      props: any
      plugin: any
    }) => void
  }): void

  export type InertiaForm<TForm = Record<string, any>> = TForm & {
    isDirty: boolean
    errors: Record<keyof TForm, string>
    hasErrors: boolean
    processing: boolean
    progress: any
    wasSuccessful: boolean
    recentlySuccessful: boolean
    data(): TForm
    transform(callback: (data: TForm) => TForm): InertiaForm<TForm>
    reset(...fields: (keyof TForm)[]): InertiaForm<TForm>
    clearErrors(...fields: (keyof TForm)[]): InertiaForm<TForm>
    setError(field: keyof TForm, value: string): InertiaForm<TForm>
    setError(errors: Record<keyof TForm, string>): InertiaForm<TForm>
    submit(method: string, url: string, options?: any): void
    get(url: string, options?: any): void
    post(url: string, options?: any): void
    put(url: string, options?: any): void
    patch(url: string, options?: any): void
    delete(url: string, options?: any): void
    cancel(): void
  }

  export function usePage<T = PageProps>(): {
    component: string
    props: T & InertiaPageProps
    rememberedState: unknown
    scrollRegions: unknown[]
    url: string
    version: string | null
  }
}

declare module 'ziggy-js' {
  export interface RouteParams {
    [key: string]: string | number | (string | number)[]
  }

  export function route(name?: string, params?: RouteParams, absolute?: boolean): string
  export const ZiggyVue: {
    install(app: any): void
  }
}

declare global {
  const route: (name?: string, params?: any, absolute?: boolean) => string
}

declare module 'vue' {
  interface ComponentCustomProperties {
    route: (name?: string, params?: any, absolute?: boolean) => string
  }
}

export {}
