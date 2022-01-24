
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
    
    // selects back part of inner card
    var back = $(card).children().children('.flip-card-back')
    back.children('h3').html(heading)
    back.children('p').html(text)


}
/**
 *  JQueary
 */
$(document).ready(function(){

    let currService, card, idcard, exit

    $(".service-box").click(function() {
        // text inside the sub boxes
        currService = $(this).children('p').html()
        // the whole card
        card = $(this).parent().parent().parent()
        // the card's id e.g card-two
        idcard = card.attr('id')

        traceInfo(card, idcard, currService)

        // flips the inner card on click
        card.children('div').addClass('fliping')

        // shadow to the right
        card.children().css({
            "box-shadow" : "-10px 10px 5px 0px rgba(173,216,230,0.75)",
            "-webkit-box-shadow": "-10px 10px 5px 0px rgba(173,216,230,0.75)",
            "-moz-box-shadow": "-10px 10px 5px 0px rgba(173,216,230,0.75)"
        });
    });

    // handles unflip
    $(".flip-card-back").children('i').click().click(function() {
        // unflips on back
        $(this).parent().parent().removeClass('fliping');
        // shadow to the left
        card.children().css({
            "box-shadow" : "10px 10px 5px 0px rgba(173,216,230,0.75)",
            "-webkit-box-shadow": "10px 10px 5px 0px rgba(173,216,230,0.75)",
            "-moz-box-shadow": "10px 10px 5px 0px rgba(173,216,230,0.75)"
        });
    });
    
    // loops through the dots spans and gives them a position
    $('.dots').children('span').each(function () {
       
        // to gerate a randome rounded number between 1 to 10;
        var x = Math.floor(Math.random() * 100) + 1;
        var y = Math.floor(Math.random() * 50) + 1;
        var s = Math.floor(Math.random() * 5) + 5;

        $(this).css({
            "top": y,
            "left": x,
            "height": s,
            "width": s,

        });
    });

});
