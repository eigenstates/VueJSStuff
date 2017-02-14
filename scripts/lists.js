const lister = new Vue({
    el:"#listContainer",
    data:{
        listItems: [
            {name:'boogie', complete:false},
            {name:'two', complete:false},
            {name:'shoes', complete:false},
            {name:'got', complete:false},
            {name:'funky', complete:false}
        ]
    },
    computed:{
        incomp(){
            return this.listItems.filter(item => !item.complete)
        },
        comp(){
            return this.listItems.filter(item => item.complete)
        }
    }
})