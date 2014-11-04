# Tim's resume template

This is a theme for [JSON Resume](http://jsonresume.org/).

## Todo

* Include Merriweather correctly into project
* Integrate recommendations and publications in resume
* Make resume independent from web


## PDF / Printing

Since the printing functionality of `resume-cli` is a utter catastrophy where your `.html` file gets
posted to a webservice where it's getting converted to `.pdf` this theme will not support this process.

**BUT**

You can just out-comment the `var print` variable in `index.js` and save your `.html` file via chrome.
In my opinion this does the best job in formating and layouting.


## Demo
You can check out a static demo of the resume on codepen.io: http://codepen.io/TimDaub/pen/bfCLz

## Getting started

To get started with theme development, this is what you'll need:

- [node.js](http://howtonode.org/how-to-install-nodejs)
- [npm](http://howtonode.org/introduction-to-npm)

If you're on Linux, you can simply run:

```
sudo apt-get install nodejs-legacy npm
```

Or if you're on OSX and got [Homebrew](http://brew.sh/) installed:
```
brew install node
```

### Install the command line

We're going to use the official [resume-cli](https://github.com/jsonresume/resume-cli) to run our development server.

Go ahead and install it:

```
sudo npm install -g resume-cli
```

### Install npm packages

We need to install the dependencies. `cd` into the theme folder we just downloaded and run:

```bash
sudo npm install
bower install
```

This will read the local `package.json` and install the packages listed under `dependencies`.

### Serve theme

While inside the theme folder, simply run:

```
resume serve
```

You should now see this message:

```
Preview: http://localhost:4000
Press ctrl-c to stop
```

Congratulations, you've made it!

__The theme development can now begin.__


## License

Available under [the MIT license](http://mths.be/mit).
