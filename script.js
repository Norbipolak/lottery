class Lottery {
    numbersDiv;
    userNumbers;
    randNumbers;
    playBtn;
    hits; 
    results;


    constructor() {
        this.numbersDiv = document.querySelector("numbers");
        // itt kell meghívni, hogy lefusson példányosításkor
        this.playBtn = document.querySelector("play");
        this.results = document.querySelector("#results");
        this.showNumbers();
        this.userNumbers = [];
        this.randNumbers = [];
        this.hits = 0;
    }

    showNumbers() {
        for(let i = 0; i <= 90; i++) {
            const number = document.createElement("div");
            number.classList.add("number");

            /*
            Hogy megjelenítsük, hogy melyik szám van beleírva 
            */
           number.innerText = i;
           this.numbersDiv.appendChild(number);

           number.addEventListener("click", ()=> {
            const index = this.userNumbers.indexOf(i);

            if(this.userNumbers.length === 5 && index === -1)
                return;

            number.classList.toggle("selected");

            if(index !== -1)
                this.userNumbers.splice(index, 1);
            else 
            this.userNumbers.push(i); 
           });
        }
    }

    generateRandomNumbers() {
        while(this.randNumbers.length < 5) {
            const rand = Math.floor(Math.random() * 90) + 1; 

            if(!this.randNumbers.includes(rand)) {
                this.randNumbers.push(rand);
            }
        }
    }

    countHits() {
        for(const number of this.userNumbers) {
            if(this.randNumbers.contains(number))
            this.hits++;
 
        }
    }

    display() {
        hitsSpan = document.querySelector("#hits");
        hitsSpan.innerText = this.hits;
        randNumbersSpan = document.querySelector("#rand-numbers");
        randNumbersSpan.innerText = this.randNumbers.join(", ");
    }

    play() {
        this.playBtn.addEventListener("click", ()=> {
            if(this.userNumbers.length !== 5)
                return;

            this.hits = 0;
            this.generateRandomNumbers();
            this.countHits();
            this.display();
        })
    }
}

new Lottery();