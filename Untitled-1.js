var arr = [ 1,2,3,4,5,6,7,8,9]
var event = require('events')
var em = newevents.EventEmitter();

em.on('my event', function(data){
    count=0;
    data.forEach( i => {
        count = count+i ;
    });
    console.log(count);
});