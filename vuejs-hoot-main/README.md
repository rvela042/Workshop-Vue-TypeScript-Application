<!--- STARTEXCLUDE --->
# Build an App with VueJS and Typescript 📒
*15 minutes, Beginner*

This is an example VueJS application using a [DataStax Astra](https://astra.new/astra-10-20) free tier database.
<!--- ENDEXCLUDE --->


## 🎯 Objectives
* Learn the basics of building Vue Components and composing a **VueJS** app
* Learn how to implement **serverless functions** and connect the front-end to the back-end
* Learn how to connect a live **NoSQL** database using a **Document API**
* Leverage **Netlify** and **DataStax Astra DB**

## ℹ️ Frequently asked questions ℹ️ 

- *Can I run the workshop on my computer?*

> There is nothing preventing you from running the workshop on your own machine.
> If you do so, you will need
> * git installed on your local system
> * [node 15 and npm 7 or later](https://www.whitesourcesoftware.com/free-developer-tools/blog/update-node-js/)
>
> You will have to adapt commands and paths based on your environment and install the dependencies by yourself. **We won't provide support** to keep on track with schedule. However, we will do our best to give you the info you need to be successful.

- *What other prerequisites are there?*
> * You will need a github account
> * You will also need an Astra DB account, but we'll work through that in the exercises
> * Use **Chrome** or **Firefox** for the best experience. Other browsers are great, but don't work well with the GitPod integration we use a bit later.

- *Do I need to pay for anything for this workshop?*
> * **No.** All tools and services we provide here are FREE.

- *Will I get a certificate if I attend this workshop?*

> Attending the session is not enough. You need to complete the homework detailed below and you will get a nice badge.

## Materials for the Session

``` diff
- Upload slides.pdf
```

It doesn't matter if you join our workshop live or you prefer to do at your own pace, we have you covered. In this repository, you'll find everything you need for this workshop:

- [Slide deck](./slides.pdf)
- [Discord chat](https://dtsx.io/workshop)
- [Questions and Answers](https://community.datastax.com/)

## Homework

``` diff
- Edit Homework section
```

<img src="https://user-images.githubusercontent.com/23346205/124651231-a7e99400-de68-11eb-9f3f-ab6b88da0cdf.png?raw=true" width="200" align="right" />

Don't forget to complete your upgrade and get your verified skill badge! Finish and submit your homework!

1. Complete the practice steps from this repository as described below.
2. Create a **React** app from scratch using NPX. Follow [these](https://github.com/datastaxdevs/react-basics) instructions. **Take a screenshot of your final working app**.
3. Launch the TODO starter app, connect it to the database, and display your changes from the database. **Take a screenshot of your TODO app with your unique entries**.
4. Submit your homework [here](https://github.com/datastaxdevs/appdev-week1-todolist/issues/new?assignees=HadesArchitect%2C+SonicDMG%2C+RyanWelford&labels=homework%2C+wait+for+review&template=homework-assignment.md&title=%5BHW%5D+%3CNAME%3E). Note:
_never share your Astra DB tokens!_

That's it, you are done! Expect an email next week!
  
# Let's start

## Table of contents

1. [Login or Register to AstraDB and create database](#1-login-or-register-to-astradb-and-create-database)
2. [Create a security token](#2-create-a-security-token)
3. [Launch GitPod IDE](#3-launch-gitpod-ide)
4. [Project Overview](#4-project-overview)
5. [Create a Vue Component](#5-create-a-vue-component)
6. [Database Connection Setup](#6-database-connection-setup)
7. [Create a Serverless Function](#7-create-a-serverless-function)
8. [Calling Serverless Functions from the Front-End](#8-calling-serverless-functions-from-the-front-end)
9. [Launching the App](#9-launching-the-app)


### Demo
- [App Demo](www.hootcards.io)

## 1. Login or Register to AstraDB and create database
**`ASTRADB`** is the simplest way to run Cassandra with zero operations at all - just push the button and get your cluster. No credit card required, $25.00 USD credit every month, roughly 5M writes, 30M reads, 40GB storage monthly - sufficient to run small production workloads.  

### ✅ Step 1a: Click the button to login or register with Datastax. You can use your `Github`, `Google` accounts or register with an `email`.

_Make sure to chose a password with minimum 8 characters, containing upper and lowercase letters, at least one number and special character_

<a href="https://dtsx.io/appdev-7-7"><img src="https://github.com/datastaxdevs/workshop-graphql-netflix/blob/main/img/create_astra_db.png?raw=true" /></a>
- <details><summary>Show me!</summary>
    <img src="https://github.com/datastaxdevs/workshop-spring-stargate/raw/main/images/tutorials/astra-create-db.gif?raw=true" />
</details>

**Use the following values when creating the database**
|Field| Value|
|---|---|
|**database name**| `vue_workshop_db` |
|**keypace**| `vue_keyspace` |
|**Cloud Provider**| *Use the one you like, click a cloud provider logo,  pick an Area in the list and finally pick a region.* |

_You can technically use whatever you want and update the code to reflect the keyspace. This is really to get you on a happy path for the first run._

You will see your new database `pending` in the Dashboard.

![image](https://github.com/datastaxdevs/workshop-graphql-netflix/blob/main/tutorial/images/db-pending.png?raw=true)

The status will change to `Active` when the database is ready, this will only take 2-3 minutes. You will also receive an email when it is ready.

[🏠 Back to Table of Contents](#table-of-contents)

## 2. Create a security token

✅  **Step 2a:**  [Create a token for your app](https://docs.datastax.com/en/astra/docs/manage-application-tokens.html) to use in the settings screen. Use "Database Administrator" permission.

✅  **Step 2b:**  Copy the token value (eg `AstraCS:KDfdKeNREyWQvDpDrBqwBsUB:ec80667c....`) in your clipboard and save the CSV, this value would not be provided afterward.

**👁️ Expected output**
- <details><summary>Show me!</summary>
    <img src="https://github.com/datastaxdevs/workshop-graphql-netflix/blob/main/tutorial/images/astra-create-token.gif?raw=true" />
</details>

[🏠 Back to Table of Contents](#table-of-contents)

## 3. Launch GitPod IDE
- Click the button to launch the GitPod IDE.

``` diff
- FIX LINK
```

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/RyanWelford/vuejs-hoot/)

[🏠 Back to Table of Contents](#table-of-contents)

## 4. Project Overview
Let's start by taking a look at the current structure of our app.

### **Nuxt**
This app was built using [Nuxt](https://nuxtjs.org/), a framework for Vue that helps get a new app up and running quickly. We won't get into too much detail of what Nuxt does, just know that it does a lot of things under the hood so we don't have to worry about them. We can just focus on designing our app experience.

### **Pages**
Take a look at `pages/index.vue`. This is the primary page served by our app. You'll notice it's broken up into 3 main sections. `<template>...</template>`, `<script>...</script>`, and `<style>...</style>`. This is the standard structure of a VueJS 3 component. 
- The `<template>` section contains our `HTML` layout
- The `<script>` section contains the `Javascript` for logic and data management 
- The `<style>` section contains our `CSS` styles which can be scoped to the current component only if desired.

> *Note that the `lang="ts"`* flag in the `<script>` section signifies that we are using Typescript. VueJS 3 has built in Typescript support and this flag also enables type-checking.

You'll notice also, in the `<script>` section we have some hardcoded data:

##### *`pages/index.vue`*
``` javascript
data() {
    return {
      cards: [
        {
          "rarityOrder": 0,
          "rarity": "common",
          "imgURL": "https://i.imgur.com/Ppl525s.png"
        },
        {
          "rarityOrder": 0,
          "rarity": "common",
          "imgURL": "https://i.imgur.com/lFmgnFj.png"
        },
        {
          "rarityOrder": 1,
          "rarity": "uncommon",
          "imgURL": "https://i.imgur.com/Xl5borx.png"
        },
        {
          "rarityOrder": 2,
          "rarity": "rare",
          "imgURL": "https://i.imgur.com/nfXbo4I.png"
        },
        {
          "rarityOrder": 3,
          "rarity": "ultra-rare",
          "imgURL": "https://i.imgur.com/CIV2Yhq.png"
        }
      ],
    }
  }
```

Right now, this is our array of card objects. It's currently hardcoded for development purposes, but we will be retrieving this data from the database in the end.

You also might notice some interesting tags in the `<template>` section. `<van-row>` is an element from the ui library that we selected while setting up the Nuxt project, called Vant. A UI library provides some out-of-the-box elements we can use to help us with layout and look/feel. Nuxt provides many other selections as well.

`<CardFlip :card="card" />` references another component that is being used on this page. Let's go take a look at that component.

You'll see the familiar 3-section layout but now the `<style>` section is `scoped` to keep any specific styles to this component. There's also a new structure in our `<script>` section.

##### *`components/CardFlip.vue`*
``` javascript
props: {
    card: {
        type: Object,
        default () {
            return {
                rarity: 'none',
                igmURL: ''
            }
        }
    }
}
```

This section defines the `props` or properties that can be passed into this component. In this case, we are defining a `prop` called `card` that expects an `Object`. If you remember, our reference to this component looked like this: `<CardFlip :card="card" />`. Here, we are passing in an object (also called `card`) into that `prop`.

If we take a look at the template section, we see a placeholder for another component. The front side of the card.

Let's make that component.


## 5. Create a Vue Component

### ✅  **Step 5a:** 
First, let's start by creating a new file in the components folder called `HootCard.vue`. Then fill in the standard sections; `<template>`, `<script>`, and `<style>`.

The `<template>` is going to be very simple. All we want is to display an image, similar to the back side of the card that we saw in the `CardFlip.vue` component.

##### *`components/HootCard.vue - <template>`*
``` html
<template>
    <div class="card" :class="rarity">
        <img class="owl" :src="imgURL" />
    </div>
</template>
```

Notice that we are utilizing a few custom css classes. We'll define those in the `<style>` section. We also have some data references: `:class="rarity"` and `:src="imgURL"`. This is so that we can dynamically change the elements based on the type of card.

Let's get some of that data set up.
In the `<script>` section:

##### *`components/HootCard.vue - <script>`*
``` html
<script>
import Vue from 'vue';

export default Vue.extend({

})
</script>
```

We know that we are going to pass in a prop for the card data, so let's set that up. We know what the data structure for the pack is, based on our hard-coded example. 

##### *`Array of 5 Cards - Reference`*
``` javascript
[
    {
        "rarityOrder": 0,
        "rarity": "common",
        "imgURL": "https://i.imgur.com/Ppl525s.png"
    },
    {
        "rarityOrder": 0,
        "rarity": "common",
        "imgURL": "https://i.imgur.com/lFmgnFj.png"
    },
    {
        "rarityOrder": 1,
        "rarity": "uncommon",
        "imgURL": "https://i.imgur.com/Xl5borx.png"
    },
    {
        "rarityOrder": 2,
        "rarity": "rare",
        "imgURL": "https://i.imgur.com/nfXbo4I.png"
    },
    {
        "rarityOrder": 3,
        "rarity": "ultra-rare",
        "imgURL": "https://i.imgur.com/CIV2Yhq.png"
    }
]
```

We are dealing primarily with the `rarity` and `imgURL` properties. So, in our `props` we need to specify an object with those two properties.

##### *`components/HootCard.vue - <script>`*
``` javascript
import Vue from 'vue';

export default Vue.extend({
    props: {
        card: {
            type: Object,
            default () {
                return {
                    rarity: 'none',
                    imgURL: ''
                }
            }
        }
    }
})
```

Now we need to return those `props` as `data` values so our template can use them.

##### *`components/HootCard.vue - <script>`*
``` javascript
import Vue from 'vue';

export default Vue.extend({
    props: {
        card: {
            type: Object,
            default () {
                return {
                    rarity: 'none',
                    imgURL: ''
                }
            }
        }
    },
    data() {
        return {
            rarity: this.card.rarity,
            imgURL: this.card.imgURL
        }
    }
})
```

And that's it for our logic! Now, the card image will be dynamic based on the card that's passed in, as well as the style. Speaking of which let's get that custom css in here.

##### *`components/HootCard.vue - <style>`*
``` html
<style scoped>
.card {
    width: 100%;
    border-radius: 12px;
    position: relative;
    padding-top: 140%
}

.card.ultra-rare {
    background: #f1ba24;
    box-shadow: 0px 0px 20px #f1ba24;
}
.card.rare {
    background: #72286d;
    box-shadow: 0px 0px 20px #72286d;
}
.card.uncommon {
    background: #b12659;
}
.card.common {
    background: #7f949b; /*84d4d4*/
}

.owl {
    width: 50%;
    left: 50%;
    top: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
}
</style>
```

And that's it! We've just created a custom Vue component to dynamically display our cards! Let's test it out! 

First we need to add the component to `CardFlip.vue`

``` javascript
<HootCard :card="card" />   
```

In the terminal, run:

##### *`Terminal - Run`*
``` bash
npm run dev
```

A browser window should open automatically.

``` diff
- Add Image
```

Now we have an interactive experience opening a pack of cards. The cards are always the same though, we'll need to connect our app to our database and get serverless functions up and running to make it more dynamic.

##### *`Terminal`*
`CTRL-C` to kill the running service

## 6. Database Connection Setup

Ok, we have a few things to set up before we can implement our serverless functions.

- Run `astra-setup`
- Install `@astrajs/collections`
- Create `astraClient.js`
- Install `netlify-cli`

### ✅  **Step 6a:**
First lets run a tool called `astra-setup`. You will need the authentication token you generated in [step 2](#2-create-a-security-token).

##### *`Terminal - Run`*
``` bash
npm exec astra-setup vue_workshop_db vue_keyspace
```

This tool will create ***environment variables*** for you in a new file: `.env`. These variables are used for authenticating and connecting to your Astra DB. This includes your authentication token, so these variables are only stored locally and should never be stored in a public facing repository.

It should look something like this.

##### *`.env`*
```
ASTRA_DB_ADMIN_TOKEN="<TOKEN>"
ASTRA_DB_APPLICATION_TOKEN="<TOKEN>"
ASTRA_DB_ID="<ID>"
ASTRA_DB_REGION="us-east1"
ASTRA_DB_KEYSPACE="vue_keyspace"
ASTRA_GRAPHQL_ENDPOINT="<URL>"
```

### ✅  **Step 6b:**
Now let's install the library for connecting to our Astra DB.

##### *`Terminal - Run`*
``` bash
npm install @astrajs/collections
```

We will be using the ***Document API*** to store and retrieve `JSON` Documents to the database. First though, we need to create a utility to create the client that our serverless functions will use.

### ✅  **Step 6c:**
Create a new file in `functions/utils/` called `astraClient.js`.

##### *`functions/utils/astraClient.js`*
``` javascript
const { createClient } = require("@astrajs/collections");

let astraClient = null;

const getAstraClient = async () => {
    if (astraClient === null) {
        astraClient = await createClient(
            {
                astraDatabaseId: process.env.ASTRA_DB_ID,
                astraDatabaseRegion: process.env.ASTRA_DB_REGION,
                applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
            },
            30000
        );
    }
    return astraClient;
};

const getCollection = async () => {
    const documentClient = await getAstraClient();
    return documentClient
        .namespace(process.env.ASTRA_DB_KEYSPACE)
        .collection("cards");
};

module.exports = { getAstraClient, getCollection };
```

Okay, this is simpler than it looks. There are two functions here to talk about. The first is `getAstraClient`. This function initializes the connection to the database using the evironment variables we imported previously (`process.env.ASTRA_...`).

The second function get the reference to the document collection we want. It first intitializes the client using the previous function: 
``` javascript
const documentClient = await getAstraClient();
``` 

Then returns the specified collection `"cards"`, from the given keyspace: 
``` javascript
return documentClient.namespace(process.env.ASTRA_DB_KEYSPACE).collection("cards");
```

This function can now be used anywhere to get a reference to this collection.

> *If you want to have a more flexible function, you can replace the `"cards"` name with a parameter that gets passed in, allowing this one function to reference any specified collection.

### ✅  **Step 6d:**
Alright, one last thing before we can get to our serverless functions is to install `netlify-cli`. Netlify is a Global CDN that provides hosting solutions to web-apps and also provides a back-end infrastructure to serve up our serverless functions. Our function implementation is not restricted to Netlify, but we have found it to be a very robust and easy-to-use solution. The CLI tool we are installing here will allow us to run a local evironment that emulates the production environment and give us access to the serverless functions.

##### *`Terminal - Run`*
``` bash
npm install -g netlify-cli
```

And that's it! On to our first serverless function!


## 7. Create a Serverless Function

The serverless functions are pretty easy to implement, but there's a few things to note. First is that you want to separate each function into a separate file. This is because Netlify will generate endpoints to your functions based on the files in the `functions` folder. So, one function, one file, one endpoint.

Example: we already have a serverless function ready in the functions folder called `uploadCards.js`. This is for writing all of our cards to the database to make life easier, it isn't needed for the main app. Netlify will generate an endpoint for this function at `/.netlify/functions/uploadCards`. This will be the pattern for any function we make. *(We'll use this path later in the front-end)*.

Let's start our new serverless function.

##### *`functions/getCards.js`*
``` javascript
exports.handler = async function () {
    return {
        statusCode: 200,
        body: '',
        headers: {
            'Content-type': 'application/json',
        },
    };
};
```

This is our simple boiler-plate serverless function. The bare-bones needed for everything to work. Currently though, we are just returning a status 200 (success) and and empty body, so not very helpful. 

Here's what we want to do in our serverless function.
- Retrieve all the cards from the database.
- Randomly select 5 cards
- Send the newly created "pack" back to the front end for display

Luckily for us, (and for time), we have some pre-made functions for randomly selecting the 5 cards in `functions/utils/packBuilder.js`. Let's import that into our serverless function so we can use it. We also are going to need our `getCollection` function from `astraClient.js` so we can retrieve our cards, so we'll import that as well.

``` javascript
const { getCollection } = require("./utils/astraClient");
const { packBuilder } = require("./utils/packBuilder");
```

<details>
<summary>Show me in context</summary>

##### *`functions/getCards.js`*
``` javascript
const { getCollection } = require("./utils/astraClient");
const { packBuilder } = require("./utils/packBuilder");

exports.handler = async function () {
    return {
        statusCode: 200,
        body: '',
        headers: {
            'Content-type': 'application/json',
        },
    };
};
```

</details>

<br>

So in the function itself, let's start by creating a reference to our collection:

``` javascript
const collection = await getCollection();
```
<details>
<summary>Show me in context</summary>

##### *`functions/getCards.js`*
``` javascript
const { getCollection } = require("./utils/astraClient");
const { packBuilder } = require("./utils/packBuilder");

exports.handler = async function () {
    const collection = await getCollection();

    return {
        statusCode: 200,
        body: '',
        headers: {
            'Content-type': 'application/json',
        },
    };
};
```

</details>

<br>

Now we can use `collection` as our reference and use the ***Document API*** to retrieve data. First though, we need to implement a `try` block to catch any errors that might occur. Here's what it should look like so far.

##### *`functions/getCards.js`*
``` javascript
const { getCollection } = require("./utils/astraClient");
const { packBuilder } = require("./utils/packBuilder");

exports.handler = async function () {
    const collection = await getCollection();

    try {
        return {
            statusCode: 200,
            body: '',
            headers: {
                'Content-type': 'application/json',
            },
        };
    } catch (e) {
        console.error(e);
        return {
            statusCode: 500,
            body: JSON.stringify(e),
        };
    }
};
```

So now, within the `try` block we can retrieve our data, create the pack, and send the response. Any error will be caught and logged.

### Document API
There are several methods built into the ***Document API*** and are included in the `@astrajs/collections` library.

- `create` - For inserting documents into the collection
- `update` - For updating/editing a document in the collection
- `find` - For retrieving documents from the collection

In this serverless function, we just want to retrieve all the cards we have available, so we'll use `find`.

``` javascript
const res = await collection.find({});
```
> *Note that the empty braces - `{}` - signify that we want **all** the documents from the collection.

Then we can use our `packBuilder` function to randomly select 5 cards, and create a pack - an array of 5 cards.

``` javascript
let pack = packBuilder(Object.keys(res).map((key) => res[key]));
```

Whoa. Stop. What is `Object.keys(res).map((key) => res[key])`??

Ok. So when we retrieve the documents using `collection.find({})`, it will return each document with it's auto-generated 'document id'. This is useful if we were looking for a specific document, but we don't care about it in this case. What we need is all the cards in an array. So this crazy line uses the built in methods for Arrays (`.map`) and Objects (`.keys`) and creates an array of the documents, while throwing out the document ids that we don't need.

Now we need to return the resulting `pack` to the front-end. Let's change our successful return to this:

``` javascript
return {
    statusCode: 200,
    body: JSON.stringify(pack),
    headers: {
        'Content-type': 'application/json',
    },
};
```

And that's it! This serverless function is done! Here's what it should look like in the end.

##### *`functions/getCards.js`*
``` javascript
const { getCollection } = require("./utils/astraClient");
const { packBuilder } = require("./utils/packBuilder");

exports.handler = async function () {
    const collection = await getCollection();

    try {
        const res = await collection.find({});
        let pack = packBuilder(Object.keys(res).map((key) => res[key]));
        
        return {
            statusCode: 200,
            body: JSON.stringify(pack),
            headers: {
                'Content-type': 'application/json',
            },
        };
    } catch (e) {
        console.error(e);
        return {
            statusCode: 500,
            body: JSON.stringify(e),
        };
    }
};
```


## 8. Calling Serverless Functions from the Front-End

Alright! Let's use our new serverless function by calling it from the front-end!

We'll need to make some changes to `index.vue`. Namely, getting rid of the hardcoded card array and adding a new fetch method to retrieve our server-generated pack.

First let's get rid of the hard-coded card array, and replace it with an empty array. This will simply initialize our `cards` variable.

Next, let's import a library called `axios` that will help us with our fetch method.
> *Note: Javascript does have built in fetch capabilities, so this library is technically optional. Axios is a good library though, and provides many other tools as well*

``` javascript
import axios from 'axios';
```

Now we'll implement a fetch method in our component.

``` javascript
async fetch() {
    this.cards = await axios.get('/.netlify/functions/getCards').then(res => res.data);
},
```

Notice the path to the endpoint - `'/.netlify/functions/getCards'`. Same as mentioned before, this is the standard path that Netlify will generate for each of our serverless functions.

So here's what `index.vue` should look like now. (`<script>` section)

##### *`pages/index.vue`*
``` javascript
<script lang="ts">
import Vue from 'vue';
import axios from 'axios';


export default Vue.extend({
  data() {
    return {
      cards: [],
    }
  },
  async fetch() {
    this.cards = await axios.get('/.netlify/functions/getCards').then(res => res.data);
  },
  methods: {
    reloadPage() {
      window.location.reload();
    }
  }
})
</script>
```


## 9. Launching the App
Let's launch our site now, using the Netlify CLI to provide our new serverless functions.

##### *`Terminal - Run`*
``` bash
netlify dev
```

You may not be getting any cards yet. That's because we haven't uploaded any to the database! Remember the other function though? We can manually run that function by going to `'<YOUR_URL>/.netlify/functions/uploadCards'` in your browser, then come back to the homepage!


