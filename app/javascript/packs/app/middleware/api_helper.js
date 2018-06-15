export function get(url) {
    console.log(`getting... ${url}`)
    return fetch(url).then(response => {
        return response.json();
    }).catch(error => {
        return error;
    });
}

export function post(url, dataObject) {
    console.log("api.js_helper")
    const request = new Request(url, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(dataObject)
    });

    return fetch(request).then(response => {
        return response.json();
    }).catch(error => {
        return error;
    });
}

export function put(url, dataObject) {
    const request = new Request(url, {
        method: 'PUT',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(dataObject)
    });

    return fetch(request).then(response => {
        return response.json();
    }).catch(error => {
        return error;
    });
}

export function destroy(url) {
    const request = new Request(url, {
        method: 'DELETE'
    });

    return fetch(request).then(response => {
        return response.json();
    }).catch(error => {
        return error;
    });
}
