module.exports = function (context, myQueueItem) { 

 context.log('JavaScript queue trigger function processed work item', myQueueItem); 

 context.bindings.outputDocument = JSON.stringify({ 

 id: context.bindings.myQueueItem.gearId + '-' + context.bindings.myQueueItem.timestamp, 

 gearId: context.bindings.myQueueItem.gearId, 

 temperature: context.bindings.myQueueItem.temperature, 

 reading: context.bindings.myQueueItem.reading }); 

 context.log('Item written to the database'); 

 context.done(); 

 };