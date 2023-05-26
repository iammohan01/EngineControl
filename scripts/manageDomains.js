function showDomains(engineName, engineId) {
    let domainList = engine.engines.filter((engine) => engine["engine-name"] === engineName && engine["engine-id"] === engineId)
    domainList = domainList[0].domains
    console.log(domainList);
    addNewDomainView(engineName,engineId)
}


function addNewDomainView(engineName,engineId) {
    //make id dom , don't use it as inner html then only you can handle click events
    // $('.engine-view').prepend(`<div class="engine add-engine"><div>+</div><div>new engine</div></div>`)
    let addDomainDom = document.createElement('div');
    addDomainDom.className = 'engine-domain';
    addDomainDom.innerHTML = `<div>+</div><div>new Domain</div>`;
    addDomainDom.addEventListener('click', ()=>{addNewDomain(engineName,engineId)})
    $('.domains-list-wrapper').prepend(addDomainDom)

}

function addNewDomain(engineName,engineId) {
    const domainInputObject = {
        name: 'Add Domain',
        inputs: [
            {
                'field-name': 'Domain address',
                'input-type': 'text',
                'manditory': true,
                'regex': '/w+/g',
                'min': 0, //when type is number or date
                'max': 100
            }
        ]
    }
    let inputKeys = domainInputObject.inputs.map((data) => data["field-name"])
    let inputValues = generatePopup(domainInputObject)
    $('#popup-submit').bind('click', () => {
        for (let i of inputKeys) {
            console.log(inputValues)
            if (inputValues[i] === '') {
                window.alert("Invalid Inputs")
                return
            }
        }
        hidePopup();
        let newDomain = {
            'url': inputValues['Domain address'], ...getPageInfo()
        }
        console.log(newDomain);
        let currentEngine = engine.engines.find((value)=>{
            return value['engine-name'] === engineName && value['engine-id'] === engineId
        })
        console.log(currentEngine);
        currentEngine.domains.push(newDomain)
        console.log(currentEngine);
        console.log(engine);
    })

}
function getPageInfo(url) {
    //as of now i'm generating random values
    let total_pages = Math.floor(Math.random() * 100000);
    let indexed_pages = Math.floor(Math.random() * total_pages);
    let lastIndexed = Date.now();
    let failedPages = 10;

    return {
        'total-pages': total_pages,
        'indexed-pages': indexed_pages,
        'failed-pages': failedPages,
        'last-indexed': lastIndexed,
        'rules': { ...domain_rules }
    }
}