
const bar = document.querySelector(".searchbar"),
      fromSelect = bar.querySelector(".depart_place"),
      toSelect = bar.querySelector(".arrival_place"),
      fromOptions = fromSelect.querySelectorAll("option"),
      toOptions = toSelect.querySelectorAll("option"),
      departDate = bar.querySelector("#depart"),
      returnDate = bar.querySelector("#return");


function toListCheck (slcValue) {
    toOptions.forEach(item => {
        item.disabled=null;
        if (item.value == slcValue) {
            item.disabled="true";
        }
    })
}

function fromListCheck (slcValue) {
    fromOptions.forEach(item => {
        item.disabled=null;
        if (item.value == slcValue) {
            item.disabled="true";
        }
    })
}

function DateCheck() {
    if (departDate.value > returnDate.value) {
        returnDate.value=null;
    }
}

fromSelect.addEventListener("change",e => {
    toListCheck(e.target.value);    
})

toSelect.addEventListener("change",e => {
    fromListCheck(e.target.value);    
})

departDate.addEventListener("change",() => {DateCheck();});

returnDate.addEventListener("change",() => {DateCheck();});
