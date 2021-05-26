# User-Instagram
![npm](https://img.shields.io/npm/dt/user-instagram) ![David](https://img.shields.io/david/EdouardCourty/user-instagram)
<br>
[![NPM](https://nodei.co/npm/user-instagram.png)](https://nodei.co/npm/user-instagram)  

## Introduction
The aim of this module is to provide an easy way to retrieve a user's or a post data on Instagram.  
This module is available on NPM.
```
npm install user-instagram
```

## Usage

I tried to make this module user-friendly as much as I could. Just provide a username or a profile link.
  
```js
const userInstagram = require("user-instagram");

// Gets informations about a user
userInstagram('edouard_courty') // Same as getUserData()
  .then(console.log)
  .catch(console.error);

// Gets information about a post
userInstagram.getPostData('CD9EMe5sHP5')
  .then(console.log)
  .catch(console.error)
```

## Data Structure

The getUserData's JSON output will look like this:
```json
{
  "id": "<userId>",
  "profileLink": "https://www.instagram.com/edouard_courty",
  "biography": "<Biography>",
  "subscribersCount": 444,
  "subscribtions": 362,
  "postsCount": 27,
  "fullName": "Edouard Courty",
  "username": "edouard_courty",
  "isPrivate": false,
  "isVerified": false,
  "profilePic": "<ProfilePicThumbnailLink>",
  "profilePicHD": "<HDProfilePicLink>",
  "posts": []
}
```

The getPostData's JSON output will look like that:
```json
{
  "id": "<postId>",
  "shortcode": "<postShortCode>",
  "dimensions": {
    "height": 1080,
    "width": 1920
  },
  "caption": "<thePicturesCaption>",
  "likesCount": 125,
  "commentsCount": 26,
  "comments": [
    {
      "id": "<commentId>",
      "text": "<commentText>",
      "author": {}
    } 
  ],
  "location": {
    "id": "<locationId>",
    "name": "<locationName>",
    "slug": "<locationSlug>"
  },
  "childrenPictures": [],
  "owner": {
    "username": "<ownerUsername>",
    "full_name": "<ownerFullName",
    "isPrivate" : true,
    "isVerified": false
  }
}
```
This module uses ES6 Promises.

© 2020 - Edouard Courty
