/*
* A set of standard restify errors based on the microsoft API defintions: http://msdn.microsoft.com/en-us/library/azure/dd179357.aspx
*/
var restify = require('restify');
var util = require('util');

// Here we define a formatter to properly read our errors
var formatter = function( req, res, body ) {
  if (body instanceof Error) {
    // snoop for RestError or HttpError, but don't rely on
    // instanceof
    res.statusCode = body.statusCode || 500;

    if (body.body) {
      body = body.body;
    } else {
      body = {
        message: body.message
      };
    }
  } else if (Buffer.isBuffer(body)) {
    body = body.toString('base64');
  }

  var data = JSON.stringify(body);
  res.setHeader('Content-Length', Buffer.byteLength(data));

  return (data);
}

var errors = {};

errors.ConditionNotMet = function ConditionNotMet(message) {
  restify.RestError.call(this, {
    restCode: 'ConditionNotMet',
    statusCode: 304,
    message: message,
    description: "The condition specified in the conditional header(s) was not met for a read operation.",
    constructorOpt: ConditionNotMet
  });
  this.name = 'ConditionNotMet';
};
util.inherits(errors.ConditionNotMet, restify.RestError);

errors.MissingRequiredHeader = function MissingRequiredHeader(message) {
  restify.RestError.call(this, {
    restCode: 'MissingRequiredHeader',
    statusCode: 400,
    message: message,
    description: "A required HTTP header was not specified.",
    constructorOpt: MissingRequiredHeader
  });
  this.name = 'MissingRequiredHeader';
};
util.inherits(errors.MissingRequiredHeader, restify.RestError);

errors.MissingRequiredXmlNode = function MissingRequiredXmlNode(message) {
  restify.RestError.call(this, {
    restCode: 'MissingRequiredXmlNode',
    statusCode: 400,
    message: message,
    description: "A required XML node was not specified in the request body.",
    constructorOpt: MissingRequiredXmlNode
  });
  this.name = 'MissingRequiredXmlNode';
};
util.inherits(errors.MissingRequiredXmlNode, restify.RestError);

errors.UnsupportedHeader = function UnsupportedHeader(message) {
  restify.RestError.call(this, {
    restCode: 'UnsupportedHeader',
    statusCode: 400,
    message: message,
    description: "One of the HTTP headers specified in the request is not supported.",
    constructorOpt: UnsupportedHeader
  });
  this.name = 'UnsupportedHeader';
};
util.inherits(errors.UnsupportedHeader, restify.RestError);

errors.UnsupportedXmlNode = function UnsupportedXmlNode(message) {
  restify.RestError.call(this, {
    restCode: 'UnsupportedXmlNode',
    statusCode: 400,
    message: message,
    description: "One of the XML nodes specified in the request body is not supported.",
    constructorOpt: UnsupportedXmlNode
  });
  this.name = 'UnsupportedXmlNode';
};
util.inherits(errors.UnsupportedXmlNode, restify.RestError);

errors.InvalidHeaderValue = function InvalidHeaderValue(message) {
  restify.RestError.call(this, {
    restCode: 'InvalidHeaderValue',
    statusCode: 400,
    message: message,
    description: "The value provided for one of the HTTP headers was not in the correct format.",
    constructorOpt: InvalidHeaderValue
  });
  this.name = 'InvalidHeaderValue';
};
util.inherits(errors.InvalidHeaderValue, restify.RestError);

errors.InvalidXmlNodeValue = function InvalidXmlNodeValue(message) {
  restify.RestError.call(this, {
    restCode: 'InvalidXmlNodeValue',
    statusCode: 400,
    message: message,
    description: "	The value provided for one of the XML nodes in the request body was not in the correct format.",
    constructorOpt: InvalidXmlNodeValue
  });
  this.name = 'InvalidXmlNodeValue';
};
util.inherits(errors.InvalidXmlNodeValue, restify.RestError);

errors.MissingRequiredQueryParameter = function MissingRequiredQueryParameter(message) {
  restify.RestError.call(this, {
    restCode: 'MissingRequiredQueryParameter',
    statusCode: 400,
    message: message,
    description: "A required query parameter was not specified for this request.",
    constructorOpt: MissingRequiredQueryParameter
  });
  this.name = 'MissingRequiredQueryParameter';
};
util.inherits(errors.MissingRequiredQueryParameter, restify.RestError);

errors.UnsupportedQueryParameter = function UnsupportedQueryParameter(message) {
  restify.RestError.call(this, {
    restCode: 'UnsupportedQueryParameter',
    statusCode: 400,
    message: message,
    description: "One of the query parameters specified in the request URI is not supported.",
    constructorOpt: UnsupportedQueryParameter
  });
  this.name = 'UnsupportedQueryParameter';
};
util.inherits(errors.UnsupportedQueryParameter, restify.RestError);

errors.InvalidQueryParameterValue = function InvalidQueryParameterValue(message) {
  restify.RestError.call(this, {
    restCode: 'InvalidQueryParameterValue',
    statusCode: 400,
    message: message,
    description: "An invalid value was specified for one of the query parameters in the request URI.",
    constructorOpt: InvalidQueryParameterValue
  });
  this.name = 'InvalidQueryParameterValue';
};
util.inherits(errors.InvalidQueryParameterValue, restify.RestError);

errors.OutOfRangeQueryParameterValue = function OutOfRangeQueryParameterValue(message) {
  restify.RestError.call(this, {
    restCode: 'OutOfRangeQueryParameterValue',
    statusCode: 400,
    message: message,
    description: "A query parameter specified in the request URI is outside the permissible range.",
    constructorOpt: OutOfRangeQueryParameterValue
  });
  this.name = 'OutOfRangeQueryParameterValue';
};
util.inherits(errors.OutOfRangeQueryParameterValue, restify.RestError);

errors.RequestUrlFailedToParse = function RequestUrlFailedToParse(message) {
  restify.RestError.call(this, {
    restCode: 'RequestUrlFailedToParse',
    statusCode: 400,
    message: message,
    description: "The url in the request could not be parsed.",
    constructorOpt: RequestUrlFailedToParse
  });
  this.name = 'RequestUrlFailedToParse';
};
util.inherits(errors.RequestUrlFailedToParse, restify.RestError);

errors.InvalidUri = function InvalidUri(message) {
  restify.RestError.call(this, {
    restCode: 'InvalidUri',
    statusCode: 400,
    message: message,
    description: "The requested URI does not represent any resource on the server.",
    constructorOpt: InvalidUri
  });
  this.name = 'InvalidUri';
};
util.inherits(errors.InvalidUri, restify.RestError);

errors.InvalidHttpVerb = function InvalidHttpVerb(message) {
  restify.RestError.call(this, {
    restCode: 'InvalidHttpVerb',
    statusCode: 400,
    message: message,
    description: "The HTTP verb specified was not recognized by the server.",
    constructorOpt: InvalidHttpVerb
  });
  this.name = 'InvalidHttpVerb';
};
util.inherits(errors.InvalidHttpVerb, restify.RestError);


// EmptyMetadataKey	Bad Request (400)	The key for one of the metadata key-value pairs is empty.
// InvalidXmlDocument	Bad Request (400)	The specified XML is not syntactically valid.
// Md5Mismatch	Bad Request (400)	The MD5 value specified in the request did not match the MD5 value calculated by the server.
// InvalidMd5	Bad Request (400)	The MD5 value specified in the request is invalid. The MD5 value must be 128 bits and Base64-encoded.
//
// OutOfRangeInput	Bad Request (400)	One of the request inputs is out of range.

errors.InvalidAuthenticationInfo = function InvalidAuthenticationInfo(message) {
  restify.RestError.call(this, {
    restCode: 'InvalidAuthenticationInfo',
    statusCode: 400,
    message: message,
    description: "The authentication information was not provided in the correct format. Verify the value of Authorization header.",
    constructorOpt: InvalidAuthenticationInfo
  });
  this.name = 'InvalidAuthenticationInfo';
};
util.inherits(errors.InvalidAuthenticationInfo, restify.RestError);

// InvalidInput	Bad Request (400)	One of the request inputs is not valid.
// InvalidMetadata	Bad Request (400)	The specified metadata is invalid. It includes characters that are not permitted.
// InvalidResourceName	Bad Request (400)	The specifed resource name contains invalid characters.
// MetadataTooLarge	Bad Request (400)	The size of the specified metadata exceeds the maximum size permitted.


errors.ConditionHeadersNotSupported = function ConditionHeadersNotSupported(message) {
  restify.RestError.call(this, {
    restCode: 'ConditionHeadersNotSupported',
    statusCode: 400,
    message: message,
    description: "Condition headers are not supported.",
    constructorOpt: ConditionHeadersNotSupported
  });
  this.name = 'ConditionHeadersNotSupported';
};
util.inherits(errors.ConditionHeadersNotSupported, restify.RestError);

errors.MultipleConditionHeadersNotSupported = function MultipleConditionHeadersNotSupported(message) {
  restify.RestError.call(this, {
    restCode: 'MultipleConditionHeadersNotSupported',
    statusCode: 400,
    message: message,
    description: "Multiple condition headers are not supported.",
    constructorOpt: MultipleConditionHeadersNotSupported
  });
  this.name = 'MultipleConditionHeadersNotSupported';
};
util.inherits(errors.MultipleConditionHeadersNotSupported, restify.RestError);

errors.AuthenticationFailed = function AuthenticationFailed(message) {
  restify.RestError.call(this, {
    restCode: 'AuthenticationFailed',
    statusCode: 403,
    message: message,
    description: "Server failed to authenticate the request. Make sure the value of the Authorization header is formed correctly including the signature.",
    constructorOpt: AuthenticationFailed
  });
  this.name = 'AuthenticationFailed';
};
util.inherits(errors.AuthenticationFailed, restify.RestError);

errors.ResourceNotFound = function ResourceNotFound(message) {
  restify.RestError.call(this, {
    restCode: 'ResourceNotFound',
    statusCode: 404,
    message: message,
    description: "The specified resource does not exist.",
    constructorOpt: ResourceNotFound
  });
  this.name = 'ResourceNotFound';
};
util.inherits(errors.ResourceNotFound, restify.RestError);

errors.AccountIsDisabled = function AccountIsDisabled(message) {
  restify.RestError.call(this, {
    restCode: 'AccountIsDisabled',
    statusCode: 403,
    message: message,
    description: "The specified account is disabled.",
    constructorOpt: AccountIsDisabled
  });
  this.name = 'AccountIsDisabled';
};
util.inherits(errors.AccountIsDisabled, restify.RestError);

errors.InsufficientAccountPermissions = function InsufficientAccountPermissions(message) {
  restify.RestError.call(this, {
    restCode: 'InsufficientAccountPermissions',
    statusCode: 403,
    message: message,
    description: "The account being accessed does not have sufficient permissions to execute this operation.",
    constructorOpt: InsufficientAccountPermissions
  });
  this.name = 'InsufficientAccountPermissions';
};
util.inherits(errors.InsufficientAccountPermissions, restify.RestError);

errors.InsufficientAccountPermissions = function InsufficientAccountPermissions(message) {
  restify.RestError.call(this, {
    restCode: 'InsufficientAccountPermissions',
    statusCode: 405,
    message: message,
    description: "The account being accessed does not have sufficient permissions to execute this operation.",
    constructorOpt: InsufficientAccountPermissions
  });
  this.name = 'InsufficientAccountPermissions';
};
util.inherits(errors.AccountIsDisabled, restify.RestError);

errors.UnsupportedHttpVerb = function UnsupportedHttpVerb(message) {
  restify.RestError.call(this, {
    restCode: 'UnsupportedHttpVerb',
    statusCode: 405,
    message: message,
    description: "The resource doesn't support the specified HTTP verb.",
    constructorOpt: UnsupportedHttpVerb
  });
  this.name = 'UnsupportedHttpVerb';
};
util.inherits(errors.UnsupportedHttpVerb, restify.RestError);

errors.AccountAlreadyExists = function AccountAlreadyExists (message) {
  restify.RestError.call(this, {
    restCode: 'AccountAlreadyExists',
    statusCode: 409,
    message: message,
    description: "The specified account already exists.",
    constructorOpt: AccountAlreadyExists
  });
  this.name = 'AccountAlreadyExists';
};
util.inherits(errors.AccountAlreadyExists, restify.RestError);

errors.AccountDoesNotExists = function AccountDoesNotExists (message) {
  restify.RestError.call(this, {
    restCode: 'AccountDoesNotExists',
    statusCode: 409,
    message: message,
    description: "The specified account does not exists.",
    constructorOpt: AccountDoesNotExists
  });
  this.name = 'AccountDoesNotExists';
};
util.inherits(errors.AccountDoesNotExists, restify.RestError);

errors.AccountBeingCreated = function AccountBeingCreated(message) {
  restify.RestError.call(this, {
    restCode: 'AccountBeingCreated',
    statusCode: 409,
    message: message,
    description: "The specified account is in the process of being created.",
    constructorOpt: AccountBeingCreated
  });
  this.name = 'AccountBeingCreated';
};
util.inherits(errors.AccountBeingCreated, restify.RestError);

errors.ResourceAlreadyExists = function ResourceAlreadyExists(message) {
  restify.RestError.call(this, {
    restCode: 'ResourceAlreadyExists',
    statusCode: 409,
    message: message,
    description: "The specified resource already exists.",
    constructorOpt: ResourceAlreadyExists
  });
  this.name = 'ResourceAlreadyExists';
};
util.inherits(errors.ResourceAlreadyExists, restify.RestError);

errors.ResourceTypeMismatch = function ResourceTypeMismatch(message) {
  restify.RestError.call(this, {
    restCode: 'ResourceTypeMismatch',
    statusCode: 409,
    message: message,
    description: "The specified resource type does not match the type of the existing resource.",
    constructorOpt: ResourceTypeMismatch
  });
  this.name = 'ResourceTypeMismatch';
};
util.inherits(errors.ResourceTypeMismatch, restify.RestError);

errors.MissingContentLengthHeader = function MissingContentLengthHeader(message) {
  restify.RestError.call(this, {
    restCode: 'MissingContentLengthHeader',
    statusCode: 411,
    message: message,
    description: "The Content-Length header was not specified.",
    constructorOpt: MissingContentLengthHeader
  });
  this.name = 'MissingContentLengthHeader';
};
util.inherits(errors.MissingContentLengthHeader, restify.RestError);

errors.ConditionNotMet = function ConditionNotMet(message) {
  restify.RestError.call(this, {
    restCode: 'ConditionNotMet',
    statusCode: 412,
    message: message,
    description: "The condition specified in the conditional header(s) was not met for a write operation.",
    constructorOpt: ConditionNotMet
  });
  this.name = 'ConditionNotMet';
};
util.inherits(errors.ConditionNotMet, restify.RestError);

errors.RequestBodyTooLarge = function RequestBodyTooLarge(message) {
  restify.RestError.call(this, {
    restCode: 'RequestBodyTooLarge',
    statusCode: 413,
    message: message,
    description: "The size of the request body exceeds the maximum size permitted.",
    constructorOpt: RequestBodyTooLarge
  });
  this.name = 'RequestBodyTooLarge';
};
util.inherits(errors.RequestBodyTooLarge, restify.RestError);

errors.InvalidRange = function InvalidRange(message) {
  restify.RestError.call(this, {
    restCode: 'InvalidRange',
    statusCode: 416,
    message: message,
    description: "The range specified is invalid for the current size of the resource.",
    constructorOpt: InvalidRange
  });
  this.name = 'InvalidRange';
};
util.inherits(errors.InvalidRange, restify.RestError);

errors.InternalError = function InternalError(message) {
  restify.RestError.call(this, {
    restCode: 'InternalError',
    statusCode: 500,
    message: message,
    description: "The server encountered an internal error. Please retry the request.",
    constructorOpt: InternalError
  });
  this.name = 'InternalError';
};
util.inherits(errors.InternalError, restify.RestError);

errors.OperationTimedOut = function OperationTimedOut(message) {
  restify.RestError.call(this, {
    restCode: 'OperationTimedOut',
    statusCode: 500,
    message: message,
    description: "The operation could not be completed within the permitted time.",
    constructorOpt: OperationTimedOut
  });
  this.name = 'OperationTimedOut';
};
util.inherits(errors.OperationTimedOut, restify.RestError);

errors.ServerBusy = function ServerBusy(message) {
  restify.RestError.call(this, {
    restCode: 'ServerBusy',
    statusCode: 500,
    message: message,
    description: "The server is currently unable to receive requests. Please retry your request.",
    constructorOpt: ServerBusy
  });
  this.name = 'ServerBusy';
};
util.inherits(errors.ServerBusy, restify.RestError);

/* custom error message for get handler */
errors.CustomError = function CustomError(code, message, body) {
  restify.RestError.call(this, {
    restCode: code,
    statusCode: code,
    constructorOpt: CustomError,
    message: message,
    body: body
  });

  this.name = 'CustomError';
};

util.inherits(errors.CustomError, restify.RestError);

// Make them available outside the module
module.exports.errors = errors;
module.exports.formatter = formatter;
