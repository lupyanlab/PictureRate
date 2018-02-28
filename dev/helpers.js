function makeid() {
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split('');
    return _.shuffle(possible).slice(0, 5).join('');
};

function condition() {
    // randomly chooses between intuitive and explicit
    return ['intuitive', 'explicit'][_.random(0, 1)];
};


function condition_instructions() {
    if (condition_string == 'explicit') {
        return "<p>You will then be asked to type in your descriptions, one for each side.</p>";
    } else {
        return "";
    }
};

function waitForElement(elementPath, callBack) {
    window.setTimeout(function () {
        if ($(elementPath).length) {
            callBack(elementPath, $(elementPath));
        } else {
            waitForElement(elementPath, callBack);
        }
    }, 100)
}


// For parsing url params
$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
        return null;
    }
    else{
        return decodeURI(results[1]) || 0;
    }
}
