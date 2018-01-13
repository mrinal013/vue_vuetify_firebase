<template>
	<v-content>
		<v-container>
			<v-layout row wrap class="mb-2">
				<v-flex xs12 sm6 class="text-xs-center text-sm-right">
					<v-btn large router to="/meetups" color="red darken-2" dark>Explore Meetups</v-btn>
				</v-flex>
				<v-flex xs12 sm6 class="text-xs-center text-sm-left">
					<v-btn large router to="/meetup/new" color="red darken-2" dark>Organize Meetup</v-btn>
				</v-flex>
			</v-layout>
			<v-layout row wrap>
				<v-flex xs12>
					<v-carousel style="cursor: pointer">
					    <v-carousel-item 
					    v-for="meetup in meetups" 
					    :src="meetup.imageUrl" 
					    :key="meetup.id" 
					    @click="onLoadMeetup(meetup.id)">
					    	<div class="title">
					    		{{ meetup.title }}
					    	</div>
					    </v-carousel-item>
					  </v-carousel>
				</v-flex>
			</v-layout>
			<v-layout row wrap class="mt-2">
				<v-flex xs12 class="text-xs-center">
					<p>Join our awesome meetup</p>
				</v-flex>
			</v-layout>
		</v-container>
	</v-content>
</template>

<script>
	export default {
		data() {
			return {
				meetups: [
					{ imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg', id: 'aasdasd', title: 'Meetup in New York' },
					{ imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Visuel-carrousel-dossier-Ou-sortir-le-soir-a-Paris-%D9%86%D9%85%D8%A7740x380-C-DR.jpg', id: 'adfdfsa', title: 'Meetup in Paris'}
				]
			}
		},
		methods: {
			onLoadMeetup(id){
				this.$router.push('/meetup/'+id)
			}
		}
	}
</script>

<style scoped>
	.title {
		position: absolute;
		bottom: 50px;
		padding: 20px;
		background-color: rgba(0,0,0,0.5);
		color: #fff;
	}
	
</style>