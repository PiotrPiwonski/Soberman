const $doc = $(document);
const $header = $("main");
const $main = $(".wrapper");

$doc.on("scroll", function () {
    // aktualna wartość skrola
    const scrollPos = $doc.scrollTop();

    // gdzie (ile pixeli)jest dany element od początku strony
    const sectionOffset = $main.offset().top;

    // jaka jest wysokość elementu
    const headerHeight = $header.outerHeight();

    // zmiana przezroczystości i na czarno biały
    if (scrollPos < sectionOffset) {
        $header.css({
            opacity: 1 - scrollPos / headerHeight,
            filter: "grayscale(" + (2 * scrollPos) / headerHeight + ")"
        });
    }
});


// Obsłuba Wrapper
const span1 = document.querySelector(".klik");

function switchInfo() {
    var info = document.getElementById('info')
    var span = document.getElementById('span')
    info.style.display = (info.style.display == 'none') ? '' : 'none';
    if (span.textContent === "Czytaj") span.textContent = "Schowaj";
    else span.textContent = "Czytaj";
}

span1.addEventListener("click", switchInfo);

// OBSŁUGA SEKCJI

$(document).on('scroll', function () {
    const windowHeight = $(window).height();
    const scrollValue = $(this).scrollTop();
    console.log(scrollValue);

    // Pierwsza sekcja
    const $art1 = $('.art1');
    const art1FromTop = $art1.offset().top;
    const art1Height = $art1.outerHeight();

    const $art2 = $('.art2');
    const art2FromTop = $art2.offset().top;
    // console.log(art1FromTop);
    const art2Height = $art2.outerHeight();
    // console.log(art2Height);

    const $art3 = $('.art3');
    const art3FromTop = $art3.offset().top;
    const art3Height = $art3.outerHeight();

    const $art4 = $('.art4');
    const art4FromTop = $art4.offset().top;
    const art4Height = $art4.outerHeight();

    if (scrollValue > (art1FromTop + art1Height) / 1.1 - windowHeight) {
        console.log("jestem art 1 wyświetlony w całości");
        $art1.addClass('active');
    }

    if (scrollValue > (art2FromTop + art2Height) / 1.1 - windowHeight) {
        // console.log("jestem art 2 wyświetlony w całości");
        $art2.addClass('active');
    }

    if (scrollValue > (art3FromTop + art3Height) / 1.1 - windowHeight) {
        $art3.addClass('active');
    }
    if (scrollValue > (art4FromTop + art4Height) / 1.1 - windowHeight) {
        $art4.addClass('active');
    }


    // Czyściciel
    if (scrollValue < 100) {
        $('article').removeClass('active');
    }
})