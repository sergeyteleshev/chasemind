export function getCookie(name) {

    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));

    return matches ? decodeURIComponent(matches[1]) : undefined
}

export function setCookie(name, value, props) {

    //todo чёто при npm run prod ругается на browser.
    props = props || {};

    let exp = props.expires;

    if (typeof exp == "number" && exp) {

        let d = new Date();

        d.setTime(d.getTime() + exp*1000);

        exp = props.expires = d

    }

    if(exp && exp.toUTCString) { props.expires = exp.toUTCString() }

    value = encodeURIComponent(value);

    let updatedCookie = name + "=" + value;

    for(let propName in props){

        updatedCookie += "; " + propName;

        let propValue = props[propName];

        if(propValue !== true){ updatedCookie += "=" + propValue }
    }

    document.cookie = updatedCookie
}

export function deleteCookie(name)
{
    document.cookie = name+'=; Max-Age=-99999999;';
}