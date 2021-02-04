const imagenes = [1, 2, 3, 4, 5, 6];
const galeria = document.querySelector('#galeriaCont');

$(function () {
    $(document).scroll(function () {
        var $nav = $('#principalNavbar');
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    })
})

simplyCountdown('#contador', {
    year: 2021, // required
    month: 6, // required
    day: 26, // required
    hours: 16, // Default is 0 [0-23] integer
    minutes: 0, // Default is 0 [0-59] integer
    seconds: 0, // Default is 0 [0-59] integer
    words: { //words displayed into the countdown
        days: {
            singular: 'día',
            plural: 'días'
        },
        hours: {
            singular: 'hora',
            plural: 'horas'
        },
        minutes: {
            singular: 'minuto',
            plural: 'minutos'
        },
        seconds: {
            singular: 'segundo',
            plural: 'segundos'
        }
    },
    plural: true, //use plurals
    inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
    inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
    // in case of inline set to false
    enableUtc: false, //Use UTC or not - default : false
    onEnd: function () {
        return;
    }, //Callback on countdown end, put your own function here
    refresh: 1000, // default refresh every 1s
    sectionClass: 'simply-section', //section css class
    amountClass: 'simply-amount', // amount css class
    wordClass: 'simply-word', // word css class
    zeroPad: true,
    countUp: false
});

for (let imagen of imagenes) {
    console.log(imagen);
    galeria.innerHTML += `
                <div class="card">
                    <a href="#" data-toggle="modal" data-target="#id${imagen}">
                        <img src="img/${imagen}.jpg" alt="imagen de galeria" class="card-img-top">
                    </a>
                </div>

                <!-- Modal -->
                <div class="modal fade" id="id${imagen}" tabindex="-1" role="dialog"
                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <img src="img/${imagen}.jpg" alt="imagen de galeria" class="img-fluid rounded">
                    </div>
                </div>
    `;
}