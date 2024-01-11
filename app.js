const commonActivities1=[
    {from:'08:30:00',to: '10:30:00', name:'Divine Liturgy'},
    {from:'10:30:00',to: '10:45:00', name:'Registration'},
    {from:'10:45:00',to: '11:15:00', name:'Breakfast'},
    {from:'11:15:00',to: '12:00:00', name:'Greeting and spritual Topic'}
]
const lunch={
    from:'14:00:00',to: '14:30:00', name:'Lunch'  
}
const closing={
    from:'16:00:00',to: '16:30:00', name:'Closing and Group photo'
}
const grpAct={
    smallKids:[
        ...commonActivities1,
        {from:'12:00:00',to: '14:00:00', name:'Entertainment',list:['Jumping Castle','Face Painting','Craft Art']},
        lunch,
        closing
     ],
     midKids:[
        ...commonActivities1,
        {from:'12:00:00',to: '14:00:00', name:'Entertainment',list:['Jumping Castle','Soccer','Face Painting']},
        lunch,
        closing
     ],highschool:[
        ...commonActivities1,
        {from:'12:00:00',to: '14:00:00', name:'Entertainment',list:['Soccer','Tennis Table','Basket Ball']},
        lunch,
        closing
     ]
}
const app = {
    data() {
        return {
         grpAct,
         group:''
        }
    },
    mounted(){
        const urlParams = new URLSearchParams(window.location.search);
        this.group= urlParams.get('group');
        
    },
    computed: {

    },
    methods: {
 
    }

}
Vue.createApp(app).mount('#app')
