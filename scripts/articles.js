Vue.component('story', {
    props:[
        'title',
        'body'
    ],
    template:`
        <article class="story" v-show="canSee"  >
            <div class="storyHeader">
                {{title}}
                <span class="destroy" @click="canSee = false">O</span>
            </div>
            <div class="storyText">
                {{body}}
            </div>
        
        </article>
    `,
    data(){
        return{
            canSee : true
        }
    },
    methods:{
        hideStory(){
            this.canSee = false;
        }
    }
})

var articleLost = new Vue({
    el:"#articles",
    data:{},
})