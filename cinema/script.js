const container = document.querySelector('.container');
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');

getFromLocalStorage();
calculateTotal();

container.addEventListener('click',function(e){
    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')){
        e.target.classList.toggle('selected');
        calculateTotal();
}
});

select.addEventListener('change',function(e){
calculateTotal();
});

function calculateTotal(){
    const selectedSeats = container.querySelectorAll('.seat.selected'); 
    
    const selectedSeatsArr = [];
    const seatsArr = [];

    selectedSeats.forEach(function(seat){
        selectedSeatsArr.push(seat);
    });
    //spread

    seatsArr.forEach(function(seat){
        seatsArr.push(seat);
    });

    let selectedSeatIndex = selectedSeatsArr.map(function(seat){
        return seatsArr.indexOf(seat); 
    });

    let  selectedSeatCont = container.querySelectorAll('.seat.selected').length;
    let price = select.value;
    count.innerText = selectedSeatCont;
    amount.innerText = selectedSeatCont * price;  

    saveToLocalStorage(selectedSeatIndex);
}

function getFromLocalStorage(){
    const selectedSeats = JSON.parse(localStorage.getItem('SelectedSeats'));

    if(selectedSeats != null  &&  selectedSeats.lengt > 0){
        seats.forEach(function(seat,index){
            if(selectedSeats.indexOf(index) > -1 ){
                seat.classList.add('selected');
            }
        });
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if(selectedMovieIndex != null){
        select.selectedIndex = selectedMovieIndex;
    }
}

function saveToLocalStorage(indexs){
    localStorage.setItem('selectedSeats',JSON.stringify(indexs));
    localStorage.setItem('selectedMovieIndex',select.selectedSeatIndex);
}