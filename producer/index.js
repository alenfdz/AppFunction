module.exports = function (context, req, outputQueueItems) { 

 context.log('Drive Gear Temperature Service triggered'); 

 var items = []; 

 var item = {}; 

 if (req.body && req.body.readings) { 

 req.body.readings.forEach(function(reading) { 

 if(reading.temperature<=25) { 

 reading.status = 'OK'; }  else if (reading.temperature<=50) { 

 reading.status = 'CAUTION'; 

 } else { 

 reading.status = 'DANGER'; 

 } 

 context.log('Reading is ' + reading.status); 

 item = { 

 timestamp: reading.timestamp, 

 gearId: reading.driveGearId, 

 temperature: reading.temperature, 

 reading: reading.status 

 } 

 /* context.bindings.outputQueueItem = 'Reading is ' + reading.status; */ 

 items.push(item); 

 }); 

 context.bindings.outputQueueItems = items; 

 context.res = { 

 /* status: 200, Defaults to 200 */ 

 body: { 

 'readings': req.body.readings  

} 

 }; 

 } else { 

 context.res = { 

 status: 400, 

 body: 'Please send an array of readings in the request body' 

 }; 

 } context.done(); 

 };