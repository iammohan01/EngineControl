function manageEngine(engineName,engineId){
    $('.engine-domain').on('click', function () {
        $('.manage-engine').hide();
        $('.domains-view').show().load('templates/domainsView.html',function () { 
            console.log(engine);
         })
   });
}