new Vue({
    el:"#myCounter",
    data(){
        return{
            counterVal:0,
            x:0
        }
    },
    methods:{
        upOne(){
            this.counterVal ++;
        },
        downOne(){
            this.counterVal --;
        },
        xCoord(e){
            this.x = e.clientX;
        }
    }
})