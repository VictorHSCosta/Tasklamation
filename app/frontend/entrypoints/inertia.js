// frontend/entrypoints/inertia.js
import { createInertiaApp } from '@inertiajs/react'
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from '../components/Layout'

createInertiaApp({
  resolve: (name) => {
    const pages = import.meta.glob('../pages/**/*.jsx', { eager: true })
    let page = pages[`../pages/${name}.jsx`]

    // Se a página NÃO tiver um layout próprio, aplica o Layout padrão
    page.default.layout = page.default.layout || (() => createElement(Layout, { children: page }))

    return page
  },
  setup({ el, App, props }) {
    const root = createRoot(el)
    root.render(createElement(App, props))
  },
})
