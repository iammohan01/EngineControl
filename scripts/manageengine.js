function manageEngine(engineName,engineId){
    $('.engine-domain').on('click', function () {
        $('.manage-engine').hide();
        $('.domains-list-wrapper').show().load('templates/domainsView.html',function () {
            changeBreadCrumb([engine.user,engineName,'Domains'])
            showDomains(engineName,engineId)
         })
   });
}