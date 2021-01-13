//script from a user on BGG that is working and used with Greasemonkey.


// ==UserScript==
// @name          BGG Geeklists reader
// @description   Switch from one element of a geeklist to other using the keys alt-j and alt-k. Jump between subs with alt-n
// @include       https://boardgamegeek.com/geeklist/*
// @include       https://www.boardgamegeek.com/geeklist/*
// @exclude       https://boardgamegeek.com/geeklist/favorites
// @exclude       https://www.boardgamegeek.com/geeklist/favorites
// @grant         none
// ==/UserScript==
//
// Changelog
// v1: Initial release
// v2: Included domain www.boardgamegeek.com
// v3: Highlights current item
// v4: Updates by rayr to fix for BGG updates/redesigns

var url = window.location.href;
var geeklist = getGeekList();
var itemList = getItemList();
var subList = null;
var index = -1;
var previousItem = -1;
var sub_index = 0;

function getSubList() {
    var subs = []
    var sub_iter = document.evaluate('//div[contains(@class, "subbed")]', document, null, XPathResult.ANY_TYPE, null)
    
    var sub
    while (sub = sub_iter.iterateNext()) {
        console.log(sub)
        subs.push(sub);
    }
    console.log("Found entries: ", subs.length);
    return subs;
}

function getItemList() {
    var allElements
    var thisElement;
    var k = 0;
    var itemNumber;
    var retVal = new Array();

    allElements = document.getElementsByTagName("a");
    for (var i = 0; i < allElements.length; i++) {
        thisElement = allElements[i];
            if (thisElement.name.lastIndexOf('item', 0) === 0) {
            // For each item
            itemNumber = '';
            for (j = 4; j < thisElement.name.length; j++) {
                if (thisElement.name[j] >= '0' && thisElement.name[j] <= '9') {
                    itemNumber += thisElement.name[j];
                }
            }
            retVal[k] = itemNumber;
            k++;
        }
    }
    return retVal;
}

functi>= 0)) {
        sub_index += offset;
    } else if (sub_index + offset >= subList.length) {
        sub_index = 0;
    } else if (sub_index + offset < 0) {
        sub_index = subList.length - 1;
    }

    var item = subList[sub_index];
    //is_item = item.hasAttribute("data-objecttype");
    is_item = item.parentElement.hasAttribute("id");
    window.locati> 0) {
            index--;
            jump();
        }
    } else if (code == 110) {
        // User pressed alt-n
        // broken: I no longer see this code. Not sure what's wrong.
        goto_sub(+1);
    } else if (code == 78) {
        // User pressed alt-n
        // BROKEN: This should be -1 but something broke
        goto_sub(+1);
    }
}

document.addEventListener("keydown",keypress,false);

// End of script
