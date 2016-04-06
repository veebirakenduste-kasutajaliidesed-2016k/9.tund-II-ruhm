(function(){
    "use strict";

    var MapsApp = function(){

        if(MapsApp.instance){
            return MapsApp.instance;
        }
        MapsApp.instance = this;
        
        this.container = null;
		this.map = null;

        this.init();
    };

    window.MapsApp = MapsApp; 
    
    MapsApp.prototype = {

        init: function(){

            console.log('MapsApp started');
            
            this.container = document.querySelector('#map-container');
			
			var options = {
				center: {
					lat: 59.439252, 
					lng: 24.7721997
				},
				zoom: 6
				
			};
			
			this.map = new google.maps.Map(this.container, options);

        },
    }; 

    window.onload = function(){
        var app = new MapsApp();
    };

})();