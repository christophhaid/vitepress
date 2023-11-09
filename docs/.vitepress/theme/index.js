import DefaultTheme from "vitepress/theme";
import { h } from 'vue'
import "./custom.css";
import Documate from '@documate/vue'
import '@documate/vue/dist/style.css'

export default {
    ...DefaultTheme,
    Layout: h(DefaultTheme.Layout, null, {
        'nav-bar-content-before': () => h(Documate, {
            endpoint: 'https://v5mquez6tz.us.aircode.run/ask',
        }),
    }),
}
