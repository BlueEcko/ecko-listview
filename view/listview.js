//THIS SHIT DOESNT WORK!
'use strict';

$(function () {
    nodecg.declareSyncedVar({
        variableName: 'listView',
        initialValue:['blueecko','theonlyrealchase']
    });

   function updateList (data) {
       var update = nodecg.variables.listView;
       nodecg.listenFor('follower', 'ecko-followlistener', function(data) {
            update.unshift(data.name)
       }
   }
    $('#listview').html(data.name);
});
