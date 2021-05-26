# safe-browse-url-lookup

## What is this?
This is a simplified wrapper for NodeJS for Google's Safe Browsing API v4 to check whether a URL is malicious or not. Refer to the [official documentation](https://developers.google.com/safe-browsing/v4/) for more information.

Currently this library only implements lookup functionality for URLs, where all types of threats are being requested. 

## How to use
First, you need to get an API key from the [Google Cloud Developer Console](https://console.cloud.google.com/apis/api/safebrowsing.googleapis.com/credentials). 

### Check single URL for safety
You can test the library with Google's test URL (see example below) or a domain listed at [OpenFish](https://openphish.com/).

```javascript
const lookup = require('safe-browse-url-lookup')({ apiKey: '<YOU GOOGLE API KEY HERE>' });

lookup.checkSingle('http://testsafebrowsing.appspot.com/apiv4/ANY_PLATFORM/MALWARE/URL/')
    .then(isMalicious => {
        console.log(isMalicious ? 'Hands off! This URL is evil!' : 'Everything\'s safe.');
    })
    .catch(err => {
        console.log('Something went wrong.');
        console.log(err);
    });
```

### Check multiple URLs at once
```javascript
const lookup = require('safe-browse-url-lookup')({ apiKey: '<YOU GOOGLE API KEY HERE>' });

lookup.checkMulti(['https://muetsch.io', 'https://kit.edu'])
    .then(urlMap => {
        for (let url in urlMap) {
            console.log(urlMap[url] ? `${url} is evil!` : `${url} is safe.`);
        }
    })
    .catch(err => {
        console.log('Something went wrong.');
        console.log(err);
    });
```

The promise returns a map from URLs to boolean values, where `true` means a match (= a malicious URL).
```json
{
    "https://muetsch.io": false,
    "https://kit.edu": false
}
```

### Options
To initialize the library, you call its exported function with an options object that can have the following properties.

* `apiKey` - It's mandatory to pass your API key you got from the Google Developer's Console
* `clientId` _[optional]_ - A client ID that (hopefully) uniquely identifies the client implementation of the Safe Browsing API. ([Reference](https://developers.google.com/safe-browsing/v4/reference/rest/v4/ClientInfo)). If not specified, a default value is used.
* `clientVersion` _[optional]_ - The version of the client implementation. If not specified, a default value is used.

## Other Implementations
* [google/safebrowsing](https://github.com/google/safebrowsing) (`Go`)
* [junv/safebrowsing](https://github.com/junv/safebrowsing) (`Python`)

## Contribute
Feel free to implement the remaining API features and make a PR! 

## License
MIT @ [Ferdinand Mütsch](https://muetsch.io)