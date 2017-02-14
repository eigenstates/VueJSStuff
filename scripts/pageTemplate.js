
Vue.component('task-list', {
    template:'<div><task v-for ="task in items">{{task.name}}</task></div>',
    data(){
        return {
            items: [
                {name:'boogie', complete:false},
                {name:'two', complete:false},
                {name:'shoes', complete:false},
                {name:'got', complete:false},
                {name:'funky', complete:false}
            ]
        }
    }
})
Vue.component('task', {
    template:"<li><slot></slot></li>"
})

new Vue({
    el:"#templateHolder"   
})