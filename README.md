oc-auth-ldap
======================

Plugin for OC to add LDAP authentication for publishing

[![Build Status](https://travis-ci.org/andyroyle/oc-auth-ldap.png?branch=master)](https://travis-ci.org/andyroyle/oc-auth-ldap) [![NPM version](https://badge.fury.io/js/oc-auth-ldap.png)](http://badge.fury.io/js/oc-auth-ldap) ![Dependencies](https://david-dm.org/andyroyle/oc-auth-ldap.png)

__Usage__

```
npm install --save oc-auth-ldap
```

in your oc-conf:

```
{
  "publishAuth": {
    "type": "ldap",
    "url": "ldap://my-dc.domain.com",
    "baseDN": "DC=domain.com,DC=com"
  }
}
```

Ta-Da!

__Running tests__
```
npm install
npm test
```
