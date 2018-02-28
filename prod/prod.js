const PORT = 7082;
const FULLSCREEN = true;
$(document).ready(function(){

    
    $(window).on('beforeunload', function(){
        return 'Are you sure you want to leave?';
    });

    

        //////////////////////////////////////////
        // DEFINE workerId, hitId, assignmentId HERE
        //////////////////////////////////////////
        let subjCode = $.urlParam('workerId') || 'unknown';
        let workerId = 'workerId';
        let assignmentId = 'assignmentId';
        let hitId = 'hitId';

        $("#loading").html('<h2 style="text-align:center;">Loading trials... please wait.</h2> </br> <div  class="col-md-2 col-md-offset-5"><img src="../dev/img/preloader.gif"></div>')
        
        $.ajax({
            url: 'http://'+document.domain+':'+PORT+'/trials',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({subjCode}),
            success: function (data) {
                console.log(data);
                
                $('#loading').remove();
                // jsPsych.pluginAPI.preloadImages(images, function(){}); 
                runExperiment(data.trials, subjCode, data.questions, workerId, assignmentId, hitId);
    
            }
        })    

});