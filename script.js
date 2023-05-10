

class OptionCity {
    constructor (value,data,parent,className) {
        this.value = value;
        this.data = data;
        this.parent = document.querySelector(parent);
        this.className = className;
    }
    render(){
        const element = document.createElement("option");
        element.classList.add(this.className);
        element.innerHTML=`<option value=${this.value}>${this.data}</option>`;
        this.parent.append(element);
    }
}

const getData = async (url) => {
    const result = await fetch(url);

    if (!result.ok) {
        throw new Error(`Не удалось получить данные ${url}, статус:${result.status}`);
    }

    return await result.json();
}

getData("db.json")
    .then(data => {
        data.forEach(({value,data}) => {
            new OptionCity(value,data,".depart_place","fromListNode").render();
            new OptionCity(value,data,".arrival_place","toListNode").render();
        })
    })
    setTimeout(() => {
        const bar = document.querySelector(".searchbar"),
        fromSelect = bar.querySelector(".depart_place"),
        toSelect = bar.querySelector(".arrival_place"),
        fromOptions = fromSelect.querySelectorAll(".fromListNode"),
        toOptions = toSelect.querySelectorAll(".toListNode"),
        departDate = bar.querySelector("#depart"),
        returnDate = bar.querySelector("#return");
    console.log(fromOptions);

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
    },1000)

// const bar = document.querySelector(".searchbar"),
//       fromSelect = bar.querySelector(".depart_place"),
//       toSelect = bar.querySelector(".arrival_place"),
//       fromOptions = fromSelect.querySelectorAll(".fromListNode"),
//       toOptions = toSelect.querySelectorAll(".toListNode"),
//       departDate = bar.querySelector("#depart"),
//       returnDate = bar.querySelector("#return");
// console.log(fromOptions);

// function toListCheck (slcValue) {
//     toOptions.forEach(item => {
//         item.disabled=null;
//         if (item.value == slcValue) {
//             item.disabled="true";
//         }
//     })
// }

// function fromListCheck (slcValue) {
//     fromOptions.forEach(item => {
//         item.disabled=null;
//         if (item.value == slcValue) {
//             item.disabled="true";
//         }
//     })
// }

// function DateCheck() {
//     if (departDate.value > returnDate.value) {
//         returnDate.value=null;
//     }
// }

// fromSelect.addEventListener("change",e => {
//     toListCheck(e.target.value);

// })

// toSelect.addEventListener("change",e => {
//     fromListCheck(e.target.value);    
// })

// departDate.addEventListener("change",() => {DateCheck();});

// returnDate.addEventListener("change",() => {DateCheck();});


