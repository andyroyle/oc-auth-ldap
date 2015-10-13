var should = require('should');
var auth = require('../index')

describe('ldap-auth', function(){
  describe('validate', function(){
    it('should return an error when baseDN is missing', function(){
      var res = auth.validate({
          url: 'ldap://127.0.0.1'
      });

      res.isValid.should.be.false;
      res.message.should.eql('oc-auth-ldap misconfiguration: url and baseDN are required');
    });

    it('should return an error when url is missing', function(){
      var res = auth.validate({
          baseDN: 'dc=domain.com,dc=com'
      });

      res.isValid.should.be.false;
      res.message.should.eql('oc-auth-ldap misconfiguration: url and baseDN are required');
    });

    it('should return valid when config is correct', function(){
      var res = auth.validate({
          baseDN: 'dc=domain.com,dc=com',
          url: 'ldap://127.0.0.1'
      });

      res.isValid.should.be.true;
    });
  });
});
