
const flipcontent = {
    'card-one': {
        'Coronas': {
            'heading': 'coronas',
            'text': 'text para coronas',
            'img': [false, ''],
            'video': [false, '']
    
        },
        'Puentes': {
            'heading': 'puentes',
            'text': 'text for puentes',
            'img': [false, ''],
            'video': [false, '']
    
        },
        'Rellenos': {
            'heading': 'rellenos',
            'text': 'text for rellenos',
            'img': [false, ''],
            'video': [false, '']
    
        }
    },
    'card-two': {
        'Whitening': {
            'heading': 'whitening',
            'text': 'text para whitening',
            'img': [false, ''],
            'video': [false, '']
    
        },
        'cosme2': {
            'heading': 'cosme2',
            'text': 'text for cosme2',
            'img': [false, ''],
            'video': [false, '']
    
        },
        'cosme3': {
            'heading': 'cosme3',
            'text': 'text for cosme3',
            'img': [false, ''],
            'video': [false, '']
    
        }
    },
    'card-three': {
        'Implantes': {
            'heading': 'implantes',
            'text': 'text para implantes',
            'img': [false, ''],
            'video': [false, '']
    
        },
        'Root Canal': {
            'heading': 'root canal',
            'text': 'text for root canal',
            'img': [false, ''],
            'video': [false, '']
    
        },
        'Extraccion': {
            'heading': 'extraccion',
            'text': 'text for extraccion',
            'img': [false, ''],
            'video': [false, '']
    
        }
    }
    
}
// takes in a card and service. Looks for
// the keys: heading and text value in db, then changes
// the values in html to those db values
function traceInfo(card, idcard, service){
    // captures info from db
    var heading = flipcontent[idcard][service]['heading']
    var text = flipcontent[idcard][service]['text']
    console.log(heading)
    console.log(text)
    // selects back part of inner card
    var back = $(card).children().children('.flip-card-back')
    back.children('h3').html(heading)
    back.children('p').html(text)


}
$(document).ready(function(){

    $(".service-box").click(function() {
        // text inside the sub boxes
        var currService = $(this).children('p').html()
        console.log('currService:' + currService)
        // the whole card
        var card = $(this).parent().parent().parent()
        console.log('card:' + card)
        // the card's id e.g card-two
        var idcard = card.attr('id')
        console.log('idcard: ' + idcard)

        traceInfo(card, idcard, currService)

        // flips the inner card on click
        card.children('div').addClass('fliping')

        // shadow to the right
        card.children().css({
            "box-shadow" : "-10px 10px 5px 0px rgba(173,216,230,0.75)",
            "-webkit-box-shadow": "-10px 10px 5px 0px rgba(173,216,230,0.75)",
            "-moz-box-shadow": "-10px 10px 5px 0px rgba(173,216,230,0.75)"
        });

        var exit = $(card).children().children(".flip-card-back").children('h1');
        exit.click(function() {
            // unflips on back
            card.children().removeClass('fliping');
            // shadow to the left
            card.children().css({
                "box-shadow" : "10px 10px 5px 0px rgba(173,216,230,0.75)",
                "-webkit-box-shadow": "10px 10px 5px 0px rgba(173,216,230,0.75)",
                "-moz-box-shadow": "10px 10px 5px 0px rgba(173,216,230,0.75)"
            });
        });

    });

});