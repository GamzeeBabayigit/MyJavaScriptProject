var models = [
    {
        name : 'Computer',
        image : 'img/computer.jpg',
        link : '#'
    },
    {
        name : 'Nasa',
        image : 'img/nasa.jpg',
        link : '#'
    },
    {
        name : 'Mark',
        image : 'img/mark.jpg',
        link : '#'
    },
    {
        name : 'Ramon',
        image : 'img/ramon.jpg',
        link : '#'
    }
];

var index = 0 ;
var slaytCount = models.length;
var interval;
var settings = {
    duration : '2000',
    random : false
};

init(settings);
showSlide(index);

document.querySelector('.fa-arrow-left').addEventListener('click',function(){
index --;
showSlide(index); 

});

document.querySelector('.fa-arrow-right').addEventListener('click',function(){

index ++;
showSlide(index); 

});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
});

function init(settings){ 
    //setTimeout  belli bir süre sonra çalışır ve durur
    //setInterval ise clearInterval ile durdurulmadığı sürece devam eder
    var prev;
    interval = setInterval(function(){
        if(settings.random){
            //random index
            do{
                index = Math.floor( Math.random() * slaytCount);
            }while(index == prev)
            prev = index;
        }else{
            //artan index
            if(slaytCount == index+1){
                index = -1;
            }
            showSlide(index);
            index++ ;
        }
        showSlide(index);
    },settings.duration)
}


function showSlide(i){
    index = i;

    if(i<0){
        index = slaytCount - 1;
    }
    if (i >= slaytCount){
        index = 0;
    }

    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-img-top').setAttribute('src',models[index].image);
    document.querySelector('.card-link').setAttribute('link',models[index].link);

}