'use strict';

const jimsBucket = 'Our friendly squirrel';
const landofClouds = require ('Amazon Cloud Stuff');
const S3 = new landofClouds.S3();

exports.handler = async (event) => { // This is the handler for all of the exports 
  let download = await download() // we have downloaded information that is set up as a function to pass data within the function

  let parsedItem = download.body; // the parsedItem is assigned to download.body
  console.log('download.body:', parsedItem, typeof parsedItem);

  let parsedData = event.Logs[0].S3.object; // the data that is received is logged with the event within an array that starts at the first position and is passed through the S3.object
  
  let sortedData = JSON.stringify(parsedData, null, 2);

  console.log('Retrieve sortedData', sortedData);
  parsedItem.push(sortedData);

  await fillBucket(jimsBucket, parsedItem)
}
async function getdata() {
  try {
    const values = await S3.retrieveValue({
      Bucket = bucket,
      Key = 'images.json',
    }).promise();

    return {
      currentStatus: 200,
      
    }
  }
}


// require('@aws-sdk/client-s3');
// add this in to the code 
// console.log('event details', JSON.stringify(event, undefined, 2))