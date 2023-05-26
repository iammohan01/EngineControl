function changeBreadCrumb(list = []){
    $('.bread-crumb-nav-bar').empty();
    let container = []
    for(let i =0 ; i < list.length ; i++){
        let span = document.createElement('span');
        span.innerText = list[i];
        $('.bread-crumb-nav-bar').append(span);
        if(i+1 < list.length){
            $('.bread-crumb-nav-bar').append(`<span class="bread-crumb-arrow"> > </span>`)
        }
    }
}