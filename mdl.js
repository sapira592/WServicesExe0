'use strict';


var myEmtr  = require('events');
var eventsConfig = require('./config');

module.exports  = class HotelStars extends myEmtr{
    constructor(name){
        super();
        this.name = name;
        this.rank = 0;
    }
    addStar(starsNum){
        this.rank += starsNum;
        this.emit(eventsConfig.update);
        
    }
    reduceStar(starsNum){
        if((this.rank -= starsNum) < 0)
            this.rank = 0;
        this.emit(eventsConfig.update);
    }

}


/*var Hotel = function(){
    this.data={
        name:null,
        rank:null
    };

    this.set = function(name){
        this.data[0] = name;
        this.data[0] = 0;
    }

     this.getName = function(name){
        return this.data[0];
    }

     this.getRank = function(name){
        return this.data[1];
    }

    this.addStar = function(starsNum){
       this.data[rank] += starsNum;
       this.emit(eventsConfig.UPDATE); 
    }

    this.reduceStar = function(starsNum){
       this.data[rank] -= starsNum;
       this.emit(eventsConfig.UPDATE); 
    }
};

module.exports = function(name){
    var myHotel = new Hotel();
    myHotel.set(name);
    return myHotel;
}
*/

