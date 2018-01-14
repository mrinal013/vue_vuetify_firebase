<template>
	<v-container class="my-0">
		<v-layout row wrap v-for="meetup in meetups" :key="meetup.id" class="mb-2">
			<v-flex xs12>
				<v-card class="info" >
					<v-container>
						<v-layout>
							<v-flex xs5 sm4 md3>
								<v-card-media :src="meetup.imageUrl" height="100%"></v-card-media>
							</v-flex>
							<v-flex xs7 sm8 md9>
								<v-card-title primary-title>
									<div>
										<h3 class="white--text mb-0">{{ meetup.title }}</h3>
						          		<p>{{ meetup.date }}</p>
									</div>
						        </v-card-title>
						        <v-card-actions>
						        	<v-btn flat large dark :to="'/meetup/' + meetup.id">
						        	<v-icon left>arrow_forward</v-icon>
						        	Explore More</v-btn>
						        </v-card-actions>
							</v-flex>
						</v-layout>
					</v-container>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	export default {
		computed: {
			meetups() {
				return this.$store.getters.loadedMeetups
			}
		}
	}
</script>