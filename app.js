const commonActivities1 = [
    { from: '08:30:00', to: '10:30:00', name: 'Divine Liturgy' },
    { from: '10:30:00', to: '10:45:00', name: 'Registration' },
    { from: '10:45:00', to: '11:15:00', name: 'Breakfast' },
    { from: '11:15:00', to: '12:00:00', name: 'Greeting and spritual Topic', venue: 'St. Athanasious Church' }
]
const lunch = {
    from: '14:00:00', to: '14:30:00', name: 'Lunch'
}
const closing = {
    from: '16:00:00', to: '16:30:00', name: 'Closing and Group photo'
}
const grpAct = {
    smallKids: [
        ...commonActivities1,
        { from: '12:00:00', to: '14:00:00', name: 'Entertainment', list: ['Jumping Castle', 'Face Painting', 'Craft Art'] },
        lunch,
        { from: '14:30:00', to: '14:50:00', name: 'Spititual activity', venue: 'Pope Shenouda III-Auditorium' },
        { from: '14:50:00', to: '16:00:00', name: 'Entertainment', list: ['Jumping Castle', 'Face Painting', 'Craft Art'] },
        closing
    ],
    midKids: [
        ...commonActivities1,
        { from: '12:00:00', to: '14:00:00', name: 'Entertainment', list: ['Jumping Castle', 'Soccer', 'Face Painting'] },
        lunch,
        { from: '14:30:00', to: '14:50:00', name: 'Spititual activity', venue: 'St. Athanasious Coptic Theological College' },
        { from: '14:50:00', to: '16:00:00', name: 'Entertainment', list: ['Jumping Castle', 'Soccer', 'Face Painting'] },
        closing
    ], highschool: [
        ...commonActivities1,
        { from: '12:00:00', to: '14:00:00', name: 'Entertainment', list: ['Soccer', 'Tennis Table', 'Basket Ball'] },
        lunch,
        { from: '14:30:00', to: '14:50:00', name: 'The Eleventh hour Prayer', venue: 'St. Athanasious Church' },
        { from: '14:50:00', to: '16:00:00', name: 'Entertainment', list: ['Soccer', 'Tennis Table', 'Basket Ball'] },
        closing
    ]
}

const app = {
    data() {
        return {
            grpAct,
            group: ''
        }
    },
    mounted() {
        const urlParams = new URLSearchParams(window.location.search);
        this.group = urlParams.get('group');

    },
    computed: {
        activePeriodIndex() {
            const timeNow = new Intl.DateTimeFormat('en', { hourCycle: 'h24', hour: "numeric", minute: "numeric", second: "numeric", timeZone: "Australia/Sydney" }).format(new Date()).toString();
            return this.grpAct.smallKids.findIndex(act => {
                // console.log(act.from, timeNow,act.from< timeNow,act.to,act.to> timeNow);
                return act.from < timeNow && act.to > timeNow
            })

        }
    },
    methods: {
        getClass(index) {
            if (index < this.activePeriodIndex) return 'bg-red';
            if (index === this.activePeriodIndex) return 'bg-green';
            return 'bg-yellow'
        }
    }

}
Vue.createApp(app).mount('#app')
