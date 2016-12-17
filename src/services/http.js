import 'whatwg-fetch';

export default class Http {
    static get(url) {
        return fetch(`https://ghobo.indec.gov.ar/mobile/${url}`).then(
            response => response.json()
        );
    }

    static post(url, body) {
        return fetch(`https://ghobo.indec.gov.ar/mobile/${url}`, {
            method: 'post',
            headers: {
                'Authorization': 'Basic ' + btoa('demo:ijH4TyJiQQram9jBbO+Tnbe3zltvrVbzSWljuZLOmf0='),
            },
            body: JSON.stringify(body)
        }).then(
            response => response.json()
        );
    }
}
