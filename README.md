## Running Locally

You must have nodjs installed: https://nodejs.org. Make sure Python 2 is installed.

```
git clone https://github.com/kmui2/Easy-To-Adapt
cd Easy-To-Adapt
sudo npm install -g nodemon
npm install
npm start
```

When making changes, the html and javascript is in the dev/ directory. To make sure the prod/ (production) directory is
updated while editing the dev/ directory, install gulp taskrunner globally and run the gulp watch command. 

```
sudo npm install -g gulp
gulp watch
```

If you just need to build prod/ , then just call either of these commands:

```
gulp prod
```

```
npm prod
```

Then, go to http://localhost:7071


## Switching from CSV to JSON and Vice Versa

Open `fileformat.js` and switch which file format you want the data and demographics in. You **must restart** the node api server (pm2) after making these changes.


## Running on Sapir (PM2)

To run this on Sapir, use [PM2](http://pm2.keymetrics.io/) which is a production process manager for Node.js. PM2 is already installed on Sapir. Currently, only sudo has access.

### Starting Up the Server

```
pm2 start index.js --name PictureRate
```

### Deleting a Running Server

```
pm2 delete PictureRate
```

### Checking on All Servers

```
pm2 status
```

When renaming the folder (especially index.js), make sure to delete the old running Node.js instance before starting it again in the new directory. See the on how to delete and start it.
