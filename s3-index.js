'use strict';

exports.handler = (event) => {
  console.log('event details', event);

  return 'S3 bucket trigger this event';
};
