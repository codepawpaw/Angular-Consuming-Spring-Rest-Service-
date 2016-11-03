'use strict';

/* Services */



meetsup.service("SetupLink", [function(){
    this.set = function(text, sref) {
      this.text = text;
      this.sref = sref;
    };
    return this;
  }]);
  
