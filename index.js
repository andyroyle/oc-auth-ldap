'use strict';

var ActiveDirectory = require('activedirectory');
var basicAuth = require('basic-auth-connect');
var ad;

module.exports.validate = function(publishAuth){
  if(!publishAuth.url || !publishAuth.baseDN){
    return {
      isValid: false,
      message: 'oc-auth-ldap misconfiguration: url and baseDN are required'
    };
  }

  ad = new ActiveDirectory(publishAuth);
  return {
    isValid: true
  };
};

module.exports.middleware = function(authConfig){
  return basicAuth(function(username, password, callback){
    return ad.authenticate(username, password, callback);
  });
};
