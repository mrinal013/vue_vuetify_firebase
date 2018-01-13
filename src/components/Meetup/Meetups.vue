<template>
	<v-container class="my-0">
		<v-layout row wrap>
			<v-flex xs12>
				<v-card class="info">
					<v-container>
						<v-layout>
							<v-flex xs5 sm4 md3>
								<v-card-media src="https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg" height="100%"></v-card-media>
							</v-flex>
							<v-flex xs7 sm8 md9>
								<v-card-title primary-title>
									<div>
										<h3 class="white--text mb-0">My awesome meetup</h3>
						          		<p>13 Jan 2018</p>
									</div>
						        </v-card-title>
						        <v-card-actions>
						        	<v-btn flat large dark to="/meetup/1">
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