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
        title:"one",
        discroption:"Lorem ipsum dolor sit amet consec isicing elit. Praesentium",
        img:"https://avatars.mds.yandex.net/i?id=031107b79ba5e97b5cbd7b9a96560afa4b813cd0-9625733-images-thumbs&n=13",
        date : "1 jan, 2023"
    },
    {
        id:2,
        title:"two",
        discroption:"Lorem ipsum dolor sit amet consec isicing elit. Praesentium",
        img:"https://avatars.mds.yandex.net/i?id=9dcf605b13bf6e74cd7da854308a542a-4299556-images-thumbs&n=13",
        date : "2 june, 2022"
    },
    {
        id:3,
        title:"three",
        discroption:"Lorem ipsum dolor sit amet consec isicing elit. Praesentium",
        img:"https://avatars.mds.yandex.net/i?id=e0b64f7accd22d1ccff25c5eee5d09e23a9fdff0-10906089-images-thumbs&n=13",
        date : "1 may, 2023"
    },
    {
        id:4,
        title:"four",
        discroption:"Lorem ipsum dolor sit amet consec isicing elit. Praesentium",
        img:"https://avatars.mds.yandex.net/i?id=e0263522aaaa4f7900ad865764859daff41a7687-10933522-images-thumbs&n=13",
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