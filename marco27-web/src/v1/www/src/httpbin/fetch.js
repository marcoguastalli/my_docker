const url = 'https://httpbin.org/anything';

export function httpBinFetch() {
    console.log('fetch url: ' + url);
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => {
          console.log(error);
        });
}