const interviewCountEl = document.getElementById("interview-count");
const rejectedCountEl = document.getElementById("rejected-count");
const totalCountEl = document.getElementById("totalCount");
const allJobsCountEl = document.getElementById("allJobsCount");

const allBtn = document.getElementById("all-btn");
const interviewTabBtn = document.getElementById("interview-btn");
const rejectedTabBtn = document.getElementById("rejected-btn");

const cardsContainer = document.getElementById("allCards");



let interviewCount = 0;
let rejectedCount = 0;

function toggleStyle(id){
//    remove all btn bg
    allBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    interviewTabBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    rejectedTabBtn.classList.remove('bg-[#3B82F6]', 'text-white');
 // adding gray all bg 
    allBtn.classList.add('bg-white', 'text-black');
    interviewTabBtn.classList.add('bg-white', 'text-black');
    rejectedTabBtn.classList.add('bg-white', 'text-black');

    const selected = document.getElementById(id);

    // add in black bg for current button
    selected.classList.remove('bg-white', 'text-black');
    selected.classList.add('bg-[#3B82F6]', 'text-white');




    if (id == 'interview-btn') {
        allCardsSection.classList.add('hidden');
        filterSection.classList.remove('hidden')
        renderThriving()
    } else if (id == 'all-btn') {
        allCardsSection.classList.remove('hidden');
        filterSection.classList.add('hidden')
    } else if (id == 'rejected-btn') {
       allCardsSection.classList.add('hidden');
        filterSection.classList.remove('hidden')
        renderStruggling()
    }

    
}
updateCounts();

// Interview Button
document.addEventListener("click", function(e) {

    // Interview Click
    if (e.target.id === "interview-btn2") {
        const card = e.target.closest(".card");
        const statusBtn = card.querySelector("#notAppbtn");

        if (card.dataset.status === "rejected") {
            rejectedCount--;
        }

        if (card.dataset.status !== "interview") {
            interviewCount++;
        }

        card.dataset.status = "interview";
        statusBtn.innerText = "INTERVIEW";
        statusBtn.className = "bg-green-400 px-6 py-3 text-white";

        updateCounts();
    }

    // Rejected Click
    if (e.target.id === "rejected-btn2") {
        const card = e.target.closest(".card");
        const statusBtn = card.querySelector("#notAppbtn");

        if (card.dataset.status === "interview") {
            interviewCount--;
        }

        if (card.dataset.status !== "rejected") {
            rejectedCount++;
        }

        card.dataset.status = "rejected";
        statusBtn.innerText = "REJECTED";
        statusBtn.className = "bg-red-400 px-6 py-3 text-white";

        updateCounts();
    }

    // Delete Button
    if (e.target.closest("#delete-btn")) {
        const card = e.target.closest(".card");

        if (card.dataset.status === "interview") {
            interviewCount--;
        }

        if (card.dataset.status === "rejected") {
            rejectedCount--;
        }

        card.remove();
        updateCounts();
    }
});

// Tab Filter
allBtn.addEventListener("click", () => filterCards("all"));
interviewTabBtn.addEventListener("click", () => filterCards("interview"));
rejectedTabBtn.addEventListener("click", () => filterCards("rejected"));

function filterCards(type) {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        if (type === "all") {
            card.style.display = "flex";
        } else {
            if (card.dataset.status === type) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        }
    });

    updateTabCount(type);
}

function updateCounts() {
    interviewCountEl.innerText = interviewCount;
    rejectedCountEl.innerText = rejectedCount;

    const totalCards = document.querySelectorAll(".card").length;
    totalCountEl.innerText = totalCards;
    allJobsCountEl.innerHTML = `<p>${totalCards} jobs</p>`;
}

function updateTabCount(type) {
    let count = 0;
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        if (type === "all") {
            count++;
        } else if (card.dataset.status === type) {
            count++;
        }
    });

    allJobsCountEl.innerHTML = `<p>${count} jobs</p>`;
}


