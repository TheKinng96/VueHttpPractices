import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'

Vue.use(VueResource);
Vue.http.options.root = 'https://vuehttppractice-1e595.firebaseio.com/';
Vue.http.interceptors.push((request, next) => {
    console.log(request)
    if (request.method == 'POST') {
        request.method = 'PUT';
    }
    next(res => {
        res.json = () => {
            return {message: res.body}
        }
    });
})

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
