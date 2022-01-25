
const flipcontent = {
    'card-one': {
        'Coronas': {
            'heading': 'coronas',
            'text': 'text para coronas',
            'img': 'images/1.jpg',
            'video': ''
    
        },
        'Puentes': {
            'heading': 'puentes',
            'text': 'text for puentes',
            'img': 'images/2.jpg',
            'video': ''
    
        },
        'Rellenos': {
            'heading': 'rellenos',
            'text': 'text for rellenos',
            'img': 'images/3.jpg',
            'video': ''
    
        }
    },
    'card-two': {
        'Whitening': {
            'heading': 'whitening',
            'text': 'text para whitening',
            'img': '',
            'video': ''
    
        },
        'cosme2': {
            'heading': 'cosme2',
            'text': 'text for cosme2',
            'img': '',
            'video': ''
    
        },
        'cosme3': {
            'heading': 'cosme3',
            'text': 'text for cosme3',
            'img': '',
            'video': ''
    
        }
    },
    'card-three': {
        'Implantes': {
            'heading': 'implantes',
            'text': 'text para implantes',
            'img': '',
            'video': ''
    
        },
        'Root Canal': {
            'heading': 'root canal',
            'text': 'text for root canal',
            'img': '',
            'video': ''
    
        },
        'Extraccion': {
            'heading': 'extraccion',
            'text': 'text for extraccion',
            'img': '',
            'video': ''
    
        }
    }
    
}
// takes in a card and service. Looks for
// the keys: heading and text value in db, then changes
// the values in html to those db values

function traceInfo(card, idcard, service){
    // captures heading and text from db
    var heading = flipcontent[idcard][service]['heading']
    var text = flipcontent[idcard][service]['text']
    
    // selects back part of inner card
    var back = card.children().children('.flip-card-back')
    back.children('h3').html(heading)
    back.children('p').html(text)

    // if img is true, then add it
    var imgSrc = flipcontent[idcard][service]['img']
    var imgElem = back.children('img')

    imgElem.attr('src', imgSrc)

    



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
