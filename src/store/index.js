import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		loadedMeetups: [
			{ 
				imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg', 
				id: 'aasdasd', 
				title: 'Meetup in New York', 
				date: '2018-01-10'
			},
			{ 
				imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Visuel-carrousel-dossier-Ou-sortir-le-soir-a-Paris-%D9%86%D9%85%D8%A7740x380-C-DR.jpg', 
				id: 'adfdfsa', 
				title: 'Meetup in Paris', 
				date: '2018-01-13'
			}
		],
		user: {
			id: 'adsafdafsff',
			registeredMeetups: ['adfdfsa']			
		}
	},
	mutations: {},
	actions: {},
	getters: {
		loadedMeetups: state => {
			return state.loadedMeetups.sort((MeetupA, MeetupB) => {
				return MeetupA.date > MeetupB.date
			})
		},
		featuredMeetups(state, getters) {
			return getters.loadedMeetups.slice(0, 5)
		},
		loadedMeetup(state) {
			return (meetupId) => {
				return state.loadedMeetups.find((meetup) => {
					return meetup.id === meetupId
				})
			}
		}
	}
})