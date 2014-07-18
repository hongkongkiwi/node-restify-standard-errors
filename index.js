/*
* A set of standard restify errors based on the microsoft API defintions: http://msdn.microsoft.com/en-us/library/azure/dd179357.aspx
*/
var restify = require('restify');
var util = require('util');

module.exports.ConditionNotMet = function (message) {
    restify.RestError.call(this, {
      restCode: 'ConditionNotMet',
      statusCode: 304,
      message: message,
      description: "The condition specified in the conditional header(s) was not met for a read operation.",
      constructorOpt: ConditionNotMet
    });
    this.name = 'ConditionNotMet';
  };
  util.inherits(ConditionNotMet, restify.RestError);

module.exports.MissingRequiredHeader = function (message) {
    restify.RestError.call(this, {
      restCode: 'MissingRequiredHeader',
      statusCode: 400,
      message: message,
      description: "A required HTTP header was not specified.",
      constructorOpt: MissingRequiredHeader
    });
    this.name = 'MissingRequiredHeader';
  };
  util.inherits(MissingRequiredHeader, restify.RestError);

module.exports.MissingRequiredXmlNode = function (message) {
    restify.RestError.call(this, {
      restCode: 'MissingRequiredXmlNode',
      statusCode: 400,
      message: message,
      description: "A required XML node was not specified in the request body.",
      constructorOpt: MissingRequiredXmlNode
    });
    this.name = 'MissingRequiredXmlNode';
  };
  util.inherits(MissingRequiredXmlNode, restify.RestError);

module.exports.UnsupportedHeader = function (message) {
    restify.RestError.call(this, {
      restCode: 'UnsupportedHeader',
      statusCode: 400,
      message: message,
      description: "One of the HTTP headers specified in the request is not supported.",
      constructorOpt: UnsupportedHeader
    });
    this.name = 'UnsupportedHeader';
  };
  util.inherits(UnsupportedHeader, restify.RestError);

module.exports.UnsupportedXmlNode = function (message) {
    restify.RestError.call(this, {
      restCode: 'UnsupportedXmlNode',
      statusCode: 400,
      message: message,
      description: "One of the XML nodes specified in the request body is not supported.",
      constructorOpt: UnsupportedXmlNode
    });
    this.name = 'UnsupportedXmlNode';
  };
  util.inherits(UnsupportedXmlNode, restify.RestError);

module.exports.InvalidHeaderValue = function (message) {
    restify.RestError.call(this, {
      restCode: 'InvalidHeaderValue',
      statusCode: 400,
      message: message,
      description: "The value provided for one of the HTTP headers was not in the correct format.",
      constructorOpt: InvalidHeaderValue
    });
    this.name = 'InvalidHeaderValue';
  };
  util.inherits(InvalidHeaderValue, restify.RestError);

module.exports.InvalidXmlNodeValue = function (message) {
    restify.RestError.call(this, {
      restCode: 'InvalidXmlNodeValue',
      statusCode: 400,
      message: message,
      description: "	The value provided for one of the XML nodes in the request body was not in the correct format.",
      constructorOpt: InvalidXmlNodeValue
    });
    this.name = 'InvalidXmlNodeValue';
  };
  util.inherits(InvalidXmlNodeValue, restify.RestError);

module.exports.MissingRequiredQueryParameter = function (message) {
    restify.RestError.call(this, {
      restCode: 'MissingRequiredQueryParameter',
      statusCode: 400,
      message: message,
      description: "A required query parameter was not specified for this request.",
      constructorOpt: MissingRequiredQueryParameter
    });
    this.name = 'MissingRequiredQueryParameter';
  };
  util.inherits(InvalidXmlNodeValue, restify.RestError);

module.exports.UnsupportedQueryParameter = function (message) {
    restify.RestError.call(this, {
      restCode: 'UnsupportedQueryParameter',
      statusCode: 400,
      message: message,
      description: "One of the query parameters specified in the request URI is not supported.",
      constructorOpt: UnsupportedQueryParameter
    });
    this.name = 'UnsupportedQueryParameter';
  };
  util.inherits(UnsupportedQueryParameter, restify.RestError);

module.exports.InvalidQueryParameterValue = function (message) {
    restify.RestError.call(this, {
      restCode: 'InvalidQueryParameterValue',
      statusCode: 400,
      message: message,
      description: "An invalid value was specified for one of the query parameters in the request URI.",
      constructorOpt: InvalidQueryParameterValue
    });
    this.name = 'InvalidQueryParameterValue';
  };
  util.inherits(InvalidQueryParameterValue, restify.RestError);

module.exports.OutOfRangeQueryParameterValue = function (message) {
    restify.RestError.call(this, {
      restCode: 'OutOfRangeQueryParameterValue',
      statusCode: 400,
      message: message,
      description: "A query parameter specified in the request URI is outside the permissible range.",
      constructorOpt: OutOfRangeQueryParameterValue
    });
    this.name = 'OutOfRangeQueryParameterValue';
  };
  util.inherits(OutOfRangeQueryParameterValue, restify.RestError);

module.exports.RequestUrlFailedToParse = function (message) {
    restify.RestError.call(this, {
      restCode: 'RequestUrlFailedToParse',
      statusCode: 400,
      message: message,
      description: "The url in the request could not be parsed.",
      constructorOpt: RequestUrlFailedToParse
    });
    this.name = 'RequestUrlFailedToParse';
  };
  util.inherits(RequestUrlFailedToParse, restify.RestError);

module.exports.InvalidUri = function (message) {
    restify.RestError.call(this, {
      restCode: 'InvalidUri',
      statusCode: 400,
      message: message,
      description: "The requested URI does not represent any resource on the server.",
      constructorOpt: InvalidUri
    });
    this.name = 'InvalidUri';
  };
  util.inherits(InvalidUri, restify.RestError);

module.exports.InvalidHttpVerb = function (message) {
    restify.RestError.call(this, {
      restCode: 'InvalidHttpVerb',
      statusCode: 400,
      message: message,
      description: "The HTTP verb specified was not recognized by the server.",
      constructorOpt: InvalidHttpVerb
    });
    this.name = 'InvalidHttpVerb';
  };
  util.inherits(InvalidHttpVerb, restify.RestError);


  // EmptyMetadataKey	Bad Request (400)	The key for one of the metadata key-value pairs is empty.
  // InvalidXmlDocument	Bad Request (400)	The specified XML is not syntactically valid.
  // Md5Mismatch	Bad Request (400)	The MD5 value specified in the request did not match the MD5 value calculated by the server.
  // InvalidMd5	Bad Request (400)	The MD5 value specified in the request is invalid. The MD5 value must be 128 bits and Base64-encoded.
  //
  // OutOfRangeInput	Bad Request (400)	One of the request inputs is out of range.
  // InvalidAuthenticationInfo	Bad Request (400)	The authentication information was not provided in the correct format. Verify the value of Authorization header.
  // InvalidInput	Bad Request (400)	One of the request inputs is not valid.
  // InvalidMetadata	Bad Request (400)	The specified metadata is invalid. It includes characters that are not permitted.
  // InvalidResourceName	Bad Request (400)	The specifed resource name contains invalid characters.
  // MetadataTooLarge	Bad Request (400)	The size of the specified metadata exceeds the maximum size permitted.

module.exports.ConditionHeadersNotSupported = function (message) {
    restify.RestError.call(this, {
      restCode: 'ConditionHeadersNotSupported',
      statusCode: 400,
      message: message,
      description: "Condition headers are not supported.",
      constructorOpt: ConditionHeadersNotSupported
    });
    this.name = 'ConditionHeadersNotSupported';
  };
  util.inherits(ConditionHeadersNotSupported, restify.RestError);

module.exports.MultipleConditionHeadersNotSupported = function (message) {
    restify.RestError.call(this, {
      restCode: 'MultipleConditionHeadersNotSupported',
      statusCode: 400,
      message: message,
      description: "Multiple condition headers are not supported.",
      constructorOpt: MultipleConditionHeadersNotSupported
    });
    this.name = 'MultipleConditionHeadersNotSupported';
  };
  util.inherits(MultipleConditionHeadersNotSupported, restify.RestError);

module.exports.AuthenticationFailed = function (message) {
    restify.RestError.call(this, {
      restCode: 'AuthenticationFailed',
      statusCode: 403,
      message: message,
      description: "Server failed to authenticate the request. Make sure the value of the Authorization header is formed correctly including the signature.",
      constructorOpt: AuthenticationFailed
    });
    this.name = 'AuthenticationFailed';
  };
  util.inherits(AuthenticationFailed, restify.RestError);

module.exports.ResourceNotFound = function (message) {
    restify.RestError.call(this, {
      restCode: 'ResourceNotFound',
      statusCode: 404,
      message: message,
      description: "The specified resource does not exist.",
      constructorOpt: ResourceNotFound
    });
    this.name = 'ResourceNotFound';
  };
  util.inherits(ResourceNotFound, restify.RestError);

module.exports.AccountIsDisabled = function (message) {
    restify.RestError.call(this, {
      restCode: 'AccountIsDisabled',
      statusCode: 403,
      message: message,
      description: "The specified account is disabled.",
      constructorOpt: AccountIsDisabled
    });
    this.name = 'AccountIsDisabled';
  };
  util.inherits(AccountIsDisabled, restify.RestError);

module.exports.InsufficientAccountPermissions = function (message) {
    restify.RestError.call(this, {
      restCode: 'InsufficientAccountPermissions',
      statusCode: 403,
      message: message,
      description: "The account being accessed does not have sufficient permissions to execute this operation.",
      constructorOpt: InsufficientAccountPermissions
    });
    this.name = 'InsufficientAccountPermissions';
  };
  util.inherits(InsufficientAccountPermissions, restify.RestError);

module.exports.InsufficientAccountPermissions = function (message) {
    restify.RestError.call(this, {
      restCode: 'InsufficientAccountPermissions',
      statusCode: 405,
      message: message,
      description: "The account being accessed does not have sufficient permissions to execute this operation.",
      constructorOpt: InsufficientAccountPermissions
    });
    this.name = 'InsufficientAccountPermissions';
  };
  util.inherits(AccountIsDisabled, restify.RestError);

module.exports.UnsupportedHttpVerb = function (message) {
    restify.RestError.call(this, {
      restCode: 'UnsupportedHttpVerb',
      statusCode: 405,
      message: message,
      description: "The resource doesn't support the specified HTTP verb.",
      constructorOpt: UnsupportedHttpVerb
    });
    this.name = 'UnsupportedHttpVerb';
  };
  util.inherits(UnsupportedHttpVerb, restify.RestError);

module.exports.AccountAlreadyExists = function (message) {
    restify.RestError.call(this, {
      restCode: 'AccountAlreadyExists',
      statusCode: 409,
      message: message,
      description: "The specified account already exists.",
      constructorOpt: AccountAlreadyExists
    });
    this.name = 'AccountAlreadyExists';
  };
  util.inherits(AccountAlreadyExists, restify.RestError);

module.exports.AccountBeingCreated = function (message) {
    restify.RestError.call(this, {
      restCode: 'AccountBeingCreated',
      statusCode: 409,
      message: message,
      description: "The specified account is in the process of being created.",
      constructorOpt: AccountBeingCreated
    });
    this.name = 'AccountBeingCreated';
  };
  util.inherits(AccountBeingCreated, restify.RestError);

module.exports.ResourceAlreadyExists = function (message) {
    restify.RestError.call(this, {
      restCode: 'ResourceAlreadyExists',
      statusCode: 409,
      message: message,
      description: "The specified resource already exists.",
      constructorOpt: ResourceAlreadyExists
    });
    this.name = 'ResourceAlreadyExists';
  };
  util.inherits(ResourceAlreadyExists, restify.RestError);

module.exports.ResourceTypeMismatch = function (message) {
    restify.RestError.call(this, {
      restCode: 'ResourceTypeMismatch',
      statusCode: 409,
      message: message,
      description: "The specified resource type does not match the type of the existing resource.",
      constructorOpt: ResourceTypeMismatch
    });
    this.name = 'ResourceTypeMismatch';
  };
  util.inherits(ResourceTypeMismatch, restify.RestError);

module.exports.MissingContentLengthHeader = function (message) {
    restify.RestError.call(this, {
      restCode: 'MissingContentLengthHeader',
      statusCode: 411,
      message: message,
      description: "The Content-Length header was not specified.",
      constructorOpt: MissingContentLengthHeader
    });
    this.name = 'MissingContentLengthHeader';
  };
  util.inherits(MissingContentLengthHeader, restify.RestError);

module.exports.ConditionNotMet = function (message) {
    restify.RestError.call(this, {
      restCode: 'ConditionNotMet',
      statusCode: 412,
      message: message,
      description: "The condition specified in the conditional header(s) was not met for a write operation.",
      constructorOpt: ConditionNotMet
    });
    this.name = 'ConditionNotMet';
  };
  util.inherits(ConditionNotMet, restify.RestError);

module.exports.RequestBodyTooLarge = function (message) {
    restify.RestError.call(this, {
      restCode: 'RequestBodyTooLarge',
      statusCode: 413,
      message: message,
      description: "The size of the request body exceeds the maximum size permitted.",
      constructorOpt: RequestBodyTooLarge
    });
    this.name = 'RequestBodyTooLarge';
  };
  util.inherits(RequestBodyTooLarge, restify.RestError);

module.exports.InvalidRange = function (message) {
    restify.RestError.call(this, {
      restCode: 'InvalidRange',
      statusCode: 416,
      message: message,
      description: "The range specified is invalid for the current size of the resource.",
      constructorOpt: InvalidRange
    });
    this.name = 'InvalidRange';
  };
  util.inherits(InvalidRange, restify.RestError);

module.exports.InternalError = function (message) {
    restify.RestError.call(this, {
      restCode: 'InternalError',
      statusCode: 500,
      message: message,
      description: "The server encountered an internal error. Please retry the request.",
      constructorOpt: InternalError
    });
    this.name = 'InternalError';
  };
  util.inherits(InternalError, restify.RestError);

module.exports.OperationTimedOut = function (message) {
    restify.RestError.call(this, {
      restCode: 'OperationTimedOut',
      statusCode: 500,
      message: message,
      description: "The operation could not be completed within the permitted time.",
      constructorOpt: OperationTimedOut
    });
    this.name = 'OperationTimedOut';
  };
  util.inherits(OperationTimedOut, restify.RestError);

module.exports.ServerBusy = function (message) {
    restify.RestError.call(this, {
      restCode: 'ServerBusy',
      statusCode: 500,
      message: message,
      description: "The server is currently unable to receive requests. Please retry your request.",
      constructorOpt: ServerBusy
    });
    this.name = 'ServerBusy';
  };
  util.inherits(ServerBusy, restify.RestError);

  return restify;
}
