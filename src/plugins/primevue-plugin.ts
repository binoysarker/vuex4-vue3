import {App,} from 'vue'
import PrimeVue from 'primevue/config'
import Button from "primevue/button";
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
export default {
    install: (app: App, options: any) => {
        app.use(PrimeVue, {ripple: true})
        app.component('Button', Button)
    }
}
