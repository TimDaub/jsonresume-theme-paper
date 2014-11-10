# JSON-Resume-Paper

This is a theme for [JSON Resume](http://jsonresume.org/).
It is available via npm:

```
npm install jsonresume-theme-paper
```

## PDF / Printing

Since the printing functionality of `resume-cli` is a utter catastrophy where your `.html` file gets
posted to a webservice for converted to `.pdf` this theme will not support this process.

**BUT**

I've implemented another `.css` file that gets included with a attribute `print`: `media="print"`.

So if you're trying to convert your resume from `.html` to `.pdf` just use Google Chrome and 
then PDF Print!

In my opinion this does the best job in formating and layouting.


## Demo
You can check out a static demo of the resume on codepen.io: http://codepen.io/TimDaub/pen/bfCLz


The folks over at jsonschema.org did an awesome job promoting my theme, so you can check it out here as well: http://themes.jsonresume.org/theme/paper

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
