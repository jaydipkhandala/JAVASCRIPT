$(document).ready(function () {
    // get card width dynamically
    cardWidth = $(".slide-card").width();
    // next-arrow
    $('#next-arrow').click(function () {
        var firstChildAppend = $(".slide-card:first-child()");
        $(".slide-card").animate({ left: -cardWidth }, function () {
            $('.slider-wrap').append(firstChildAppend);
            $(".slide-card").css({
                left: 0,
            })
        })
    });
    // previous-arrow
    $('#previous-arrow').click(function () {
        var lastChildPrepend = $(".slide-card:last-child()");
        $(".slide-card").animate({ left: cardWidth }, function () {
            $('.slider-wrap').prepend(lastChildPrepend);
            $(".slide-card").css({
                left: 0,
            })
        })
    });
});

let tr = "";

let slider= [
    {
        id:1,
        title:"Sky",
        discroption:"Lorem ipsum dolor sit amet consec isicing elit. Praesentium",
        img:"https://i.postimg.cc/wv0j2bCB/slide-1.jpg",
        date : "18 Nov, 2023"
    },
    {
        id:2,
        title:"Home",
        discroption:"Lorem ipsum dolor sit amet consec isicing elit. Praesentium",
        img:"https://i.postimg.cc/Y00qsz7z/slide-2.jpg",
        date : "27 june, 2022"
    },
    {
        id:3,
        title:"River",
        discroption:"Lorem ipsum dolor sit amet consec isicing elit. Praesentium",
        img:"https://i.postimg.cc/PJ7rsvrs/slide-3.jpg",
        date : "1 march, 2023"
    },
    {
        id:4,
        title:"Trees",
        discroption:"Lorem ipsum dolor sit amet consec isicing elit. Praesentium",
        img:"https://i.postimg.cc/jdWS6cZs/slide-4.jpg",
        date : "20 july, 2023"
    },

];

slider.forEach((i, index) => {
    tr += `<div class="slide-card position-relative bg-white overflow-hidden shadow-sm mx-2"  >
            <a href="#" class="text-decoration-none">
            <img src="${i.img} alt="slide" width="100%">
            <div class="p-3">
            <p class="text-dark my-2 fs-5 fw-semibold">${i.id} - ${i.title}</p>
            <p class="text-dark">${i.discroption}</p>
            <p class="text-muted mb-0 mt-3">${i.date}</p>
            </div>
            </a>
        </div>`
});

document.getElementById("slider-1").innerHTML=tr;