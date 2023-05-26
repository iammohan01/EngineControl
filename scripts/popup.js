
// box title
// input box name 
// input type
// if number min and max
/*
{ 
    name : 'Add Engine'
    inputs : [
        {
            'field-name' : 'Engine 08',
            'input-type' : 'text',
            'manditory':true,
            'regex' : '/w+/g'
            'min' : 0 , //when type is number or date
            'max' : 100 
        },
        {
            'field-name' : 'Domain',
            'input-type' : 'text',
             'manditory':true,
             'regex' : '/w+/g'
            'min' : 0 , //when type is number or date
            'max' : 100 
        }
    ]
}
 */

function generatePopup(inputFields = {}) {
    //show popup-wrapper
    $('.input-popup-wrapper').css({
        display: 'flex'
    })

    //make backgroud blur
    $('.user-control-panel').css({
        filter: `blur(10px)`
    })

    //change popup title
    $('.popup-title > h2').text(inputFields['name'] || 'Enter values');

    //remove existing input fields
    let inputWrapper = $('.input-wrapper').empty();
    let inputContainer = {}
    //add input fields
    for (let i of inputFields['inputs']) {

        //gen random strong to hold input values 
        let key =  i['field-name'];
        inputContainer[key] = '';
        //get sample div
        let {span,lable,input,div} = getPopupInputDiv();
        //add span :
        span.innerText = ':'
        //change lable name
        lable.innerText = i['field-name'];
        //add input name 
        input.name = i['field-name'];
        //add input class
        input.classList.add('pop-up-input')
        //add input type
        input.type = i[ 'input-type'] || 'text'
        //set required or not
        input.required = i['manditory'] || false
        //add regex if available 
        input.pattern = i['regex'] || ''
        //add min and max if its a numeric value
        if(i['input-type'] && i['input-type'].toLowerCase() === 'number'){
            i['min'] && (input.min = i['min'])
            i['max'] && (input.max = i['max'])
        }
        //add value change listener for inputs 
        input.addEventListener('input',(input)=>{
            //store those values in container
            inputContainer[key] = input.target.value;
        })
        //pack all things 
        div.appendChild(lable)
        div.appendChild(span)
        div.appendChild(input)
        inputWrapper.append(div);
        //append into inputWrapper
        console.log(inputContainer);
    }
    $('.popup-submit > button').unbind('click');
    $('#popup-cancel').bind('click',()=>{
        inputContainer = {};
        hidePopup()
    })
   
    return inputContainer;

}
function hidePopup() {
    $('.input-popup-wrapper').hide()
    $('.user-control-panel').css({
        filter: `none`
    })
}
function getPopupInputDiv() {
    let div = document.createElement('div');
    let lable = document.createElement('label')
    let input = document.createElement('input');
    let span = document.createElement('span');
    return { 
        div: div, 
        lable: lable, 
        input: input, 
        span: span 
    }
}