var app = new Vue({
	el: '#app',
	data: {
		watcherOutput:"",
		dependent1: "d1",
		dependent2: "d2",
		dependent3: "d3",
		numTimesChanged: 0,
		inp1: "",
		inp2: "",
		inp3: "",
	},
	computed: {
		computeThis() {
			var toReturn = "";
			var randomNumber = 10;
			for (var i = 0; i < randomNumber; i++) { // This function is intentionally arbitrary
				if (this.numTimesChanged % (randomNumber % i) === 0) {
					toReturn += this.dependent1;
				}
				if (this.numTimesChanged % i === 0) {
					toReturn += this.dependent2;
				}
				if (randomNumber % this.numTimesChanged === i) {
					toReturn += this.dependent3;
				}
			}
			return toReturn;
		}
	},
	watch: {
		dependent1: function(newVal, oldVal) {
			this.watcherOutput = newVal;
		},
	},
	methods: {
		changeDependents: function() {
			this.dependent1 = this.inp1;
			this.dependent2 = this.inp2;
			this.dependent3 = this.inp3;
			this.numTimesChanged++;
		},
	},

});
