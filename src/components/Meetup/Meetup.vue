<template>
	<v-container class="my-0">
		<v-layout row wrap>
			<v-flex xs12>
				<v-card>
					<v-card-title>
						<h3 class="red--text">{{ meetup.title }}</h3>
					</v-card-title>
					<v-card-media :src="meetup.imageUrl" height="500px"></v-card-media>
					<v-card-text>
						<p class="primary--text">{{ meetup.date }}</p>
						<p>Illo lobortis integer exercitationem commodi optio iaculis sapien accumsan semper eiusmod tempor optio nihil et, tristique. Vestibulum turpis? Exercitationem potenti condimentum do voluptatem? Dui sit corrupti ratione parturient, suscipit rem cum fuga integer quos maxime maecenas, commodi libero odio vitae natus ab, nostra nostrud</p>
					</v-card-text>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn class="primary">Register</v-btn>
					</v-card-actions>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	export default {
		props: ['id'],
		computed: {
			meetup() {
				return this.$store.getters.loadedMeetup(this.id)
			}
		}
	}
</script>