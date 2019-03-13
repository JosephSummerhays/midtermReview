var app = new Vue({
	el: '#app',
	data: {
		mustacheSyntax: "this was generated using mustache syntax",
		showBool: true,
		ifBool: true,
		classBool: false,
		words: [ "nitwit", "Blubber", "Oddment", "Tweek" ],
		newWord: '',
	},
	methods: {
		flipShowBool: function() { this.showBool = !this.showBool; },
		flipIfBool: function() { this.ifBool = !this.ifBool; },
		flipClassBool: function() { 
			this.classBool = !this.classBool; 
			console.log("BAH");
		},
		addWord: function() {
			console.log("is it working?");
			Vue.set(this.words, this.words.length, this.newWord);
			this.newWord = '';
		},
	},

});
