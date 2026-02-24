const interviewCount = document.getElementById("interview-count");
const interviewBtn = document.getElementById("interview-btn");
const interviewBtnCard = document.getElementById("interview-btn2");
const cardBody = document.getElementById("card-Body");
const notAppliedBtn = document.getElementById("notAppbtn");
const rejectedCount = document.getElementById("rejected-count");
const rejectedBtn = document.getElementById("rejected-btn");
const rejectedBtnCard = document.getElementById("rejected-btn2");
const totalCountEle = document.getElementById("totalCount");
const interviewCountEle = document.getElementById("interview-count");
const rejectedCountEle = document.getElementById("rejected-count");
const allJobsCountEle = document.getElementById("allJobsCount");
const allTabBtn = document.getElementById("all-btn");
const interviewTabBtn = document.getElementById("interview-btn");
const rejectedTabBtn = document.getElementById("rejected-btn");
const deleteBtn = document.getElementById("delete-btn")
const allCardsSection = document.getElementById('allCards');


const filterSection = document.getElementById('filtered-section')


let interviewNumber = 0;
let rejectedNumber = 0;


interviewBtnCard.addEventListener("click", function(){
    interviewNumber++
    interviewCount.innerText = interviewNumber

    notAppliedBtn.innerHTML = "INTERVIEW";
    notAppliedBtn.classList.remove("bg-gray-300");
    notAppliedBtn.classList.add("bg-green-400", "text-white");
    
interviewBtn.addEventListener("click", function(){
    cardBody.style.display = "flex";
    

})
})

rejectedBtnCard.addEventListener("click", function () {

   
    rejectedNumber++;
    rejectedCount.innerText = rejectedNumber;

    
    notAppliedBtn.innerText = "REJECTED";
    notAppliedBtn.classList.remove("bg-gray-300");
    notAppliedBtn.classList.add("bg-red-400", "text-white");

    
    rejectedBtn.addEventListener("click", function () {
        cardBody.style.display = "flex";

    });

});



function toggleStyle(id){
//    remove all btn bg
    allTabBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    interviewTabBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    rejectedTabBtn.classList.remove('bg-[#3B82F6]', 'text-white');
 // adding gray all bg 
    allTabBtn.classList.add('bg-white', 'text-black');
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


