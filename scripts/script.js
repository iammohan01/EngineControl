//create a engine dom and append into engine wrapper
function generateEngine(engineName,engineId){
    let engineElement = document.createElement('div');
    engineElement.className = 'engine';
    engineElement.innerText = engineName;
    engineElement.addEventListener('click',()=>{
        //change title
        $('.user-control-panel-title-wrapper > h1').text('Manage Engine')
        //bread crumb
        $('.bread-crumb-nav-bar')
        //hide engine list
        $('.engine-view').hide()
        //load manage engine template and render it
        $('.manage-engine').load('templates/manageengine.html',()=>{
            manageEngine(engineName,engineId)
        })
        changeBreadCrumb([engine.user,engineName])
    })
    $('.engine-view').prepend(engineElement);

}
//new engine create dom 
function addNewEngineView(){
    //make id dom , don't use it as inner html then only you can handle click events
    // $('.engine-view').prepend(`<div class="engine add-engine"><div>+</div><div>new engine</div></div>`)


    let addEngineDOM = document.createElement('div');
    addEngineDOM.className = 'engine add-engine';
    addEngineDOM.innerHTML= `<div>+</div><div>new engine</div>`;
    addEngineDOM.addEventListener('click',addNewEngine)
    $('.engine-view').prepend(addEngineDOM)

}
//creating a new engine
function addNewEngine() {  
    let engineInputObject = { 
        name : 'Add Engine' ,
        inputs : [
            {
                'field-name' : 'Engine Name',
                'input-type' : 'text',
                'manditory':true,
                'regex' : '/w+/g',
                'min' : 0 , //when type is number or date
                'max' : 100 
            },
            {
                'field-name' : 'Domain url',
                'input-type' : 'text',
                 'manditory':true,
                 'regex' : '/w+/g',
                'min' : 0 , //when type is number or date
                'max' : 100 
            }
        ]
    }
    let inputKeys = engineInputObject.inputs.map((data)=> data["field-name"])
    let inputValues = generatePopup(engineInputObject);
    $('#popup-submit').bind('click',()=>{
        console.log(inputKeys);
        console.log(inputValues);
        for(let i of inputKeys){
            if(inputValues[i].match(/w+/)){
                window.alert("Invalid Inputs")
                return
            }
        }
        let engineId = Math.floor(Math.random()*100);
        engine.engines.push({
            'engine-name':inputValues['Engine Name'],
            'engine-id':engineId
        })
        generateEngine(inputValues['Engine Name'],engineId);
        hidePopup()
    })
}
//load a defined engines when app starts
function loadEngines(){
     //remove old engines
     $('.engine-view').empty();
     changeBreadCrumb([engine.user])
     addNewEngineView();
    let enginesList = engine.engines
    for(let i of enginesList){
        generateEngine(i['engine-name'],i['engine-id']);
        
    }
}
loadEngines()

$(document).ready(()=>{
    
})


function getScript(filename){
var fileref=document.createElement('script')
  fileref.setAttribute("type","text/javascript")
  fileref.setAttribute("src", filename)
  return fileref
}