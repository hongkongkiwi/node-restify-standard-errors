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

errors.ConditionNotMetError = function (message) {
  restify.RestError.call(this, {
    restCode: 'ConditionNotMet',
    statusCode: 304,
    message: message,
    description: "The condition specified in the conditional header(s) was not met for a read operation.",
    constructorOpt: ConditionNotMet
  });
  this.name = 'ConditionNotMetError';
};
util.inherits(errors.ConditionNotMet, restify.RestError);

errors.MissingRequiredHeaderError = function (message) {
  restify.RestError.call(this, {
    restCode: 'MissingRequiredHeader',
    statusCode: 400,
    message: message,
    description: "A required HTTP header was not specified.",
    constructorOpt: MissingRequiredHeader
  });
  this.name = 'MissingRequiredHeaderError';
};
util.inherits(errors.MissingRequiredHeader, restify.RestError);

errors.MissingRequiredXmlNodeError = function (message) {
  restify.RestError.call(this, {
    restCode: 'MissingRequiredXmlNode',
    statusCode: 400,
    message: message,
    description: "A required XML node was not specified in the request body.",
    constructorOpt: MissingRequiredXmlNode
  });
  this.name = 'MissingRequiredXmlNodeError';
};
util.inherits(errors.MissingRequiredXmlNode, restify.RestError);

errors.UnsupportedHeaderError = function (message) {
  restify.RestError.call(this, {
    restCode: 'UnsupportedHeader',
    statusCode: 400,
    message: message,
    description: "One of the HTTP headers specified in the request is not supported.",
    constructorOpt: UnsupportedHeader
  });
  this.name = 'UnsupportedHeaderError';
};
util.inherits(errors.UnsupportedHeader, restify.RestError);

errors.UnsupportedXmlNodeError = function (message) {
  restify.RestError.call(this, {
    restCode: 'UnsupportedXmlNode',
    statusCode: 400,
    message: message,
    description: "One of the XML nodes specified in the request body is not supported.",
    constructorOpt: UnsupportedXmlNode
  });
  this.name = 'UnsupportedXmlNodeError';
};
util.inherits(errors.UnsupportedXmlNode, restify.RestError);

errors.InvalidHeaderValueError = function (message) {
  restify.RestError.call(this, {
    restCode: 'InvalidHeaderValue',
    statusCode: 400,
    message: message,
    description: "The value provided for one of the HTTP headers was not in the correct format.",
    constructorOpt: InvalidHeaderValue
  });
  this.name = 'InvalidHeaderValueError';
};
util.inherits(errors.InvalidHeaderValue, restify.RestError);

errors.InvalidXmlNodeValueError = function (message) {
  restify.RestError.call(this, {
    restCode: 'InvalidXmlNodeValue',
    statusCode: 400,
    message: message,
    description: "	The value provided for one of the XML nodes in the request body was not in the correct format.",
    constructorOpt: InvalidXmlNodeValue
  });
  this.name = 'InvalidXmlNodeValueError';
};
util.inherits(errors.InvalidXmlNodeValue, restify.RestError);

errors.MissingRequiredQueryParameterError = function (message) {
  restify.RestError.call(this, {
    restCode: 'MissingRequiredQueryParameter',
    statusCode: 400,
    message: message,
    description: "A required query parameter was not specified for this request.",
    constructorOpt: MissingRequiredQueryParameter
  });
  this.name = 'MissingRequiredQueryParameterError';
};
util.inherits(errors.InvalidXmlNodeValue, restify.RestError);

errors.UnsupportedQueryParameterError = function (message) {
  restify.RestError.call(this, {
    restCode: 'UnsupportedQueryParameter',
    statusCode: 400,
    message: message,
    description: "One of the query parameters specified in the request URI is not supported.",
    constructorOpt: UnsupportedQueryParameter
  });
  this.name = 'UnsupportedQueryParameterError';
};
util.inherits(errors.UnsupportedQueryParameter, restify.RestError);

errors.InvalidQueryParameterValueError = function (message) {
  restify.RestError.call(this, {
    restCode: 'InvalidQueryParameterValue',
    statusCode: 400,
    message: message,
    description: "An invalid value was specified for one of the query parameters in the request URI.",
    constructorOpt: InvalidQueryParameterValue
  });
  this.name = 'InvalidQueryParameterValueError';
};
util.inherits(errors.InvalidQueryParameterValue, restify.RestError);

errors.OutOfRangeQueryParameterValueError = function (message) {
  restify.RestError.call(this, {
    restCode: 'OutOfRangeQueryParameterValue',
    statusCode: 400,
    message: message,
    description: "A query parameter specified in the request URI is outside the permissible range.",
    constructorOpt: OutOfRangeQueryParameterValue
  });
  this.name = 'OutOfRangeQueryParameterValueError';
};
util.inherits(errors.OutOfRangeQueryParameterValue, restify.RestError);

errors.RequestUrlFailedToParseError = function (message) {
  restify.RestError.call(this, {
    restCode: 'RequestUrlFailedToParse',
    statusCode: 400,
    message: message,
    description: "The url in the request could not be parsed.",
    constructorOpt: RequestUrlFailedToParse
  });
  this.name = 'RequestUrlFailedToParseError';
};
util.inherits(errors.RequestUrlFailedToParse, restify.RestError);

errors.InvalidUriError = function (message) {
  restify.RestError.call(this, {
    restCode: 'InvalidUri',
    statusCode: 400,
    message: message,
    description: "The requested URI does not represent any resource on the server.",
    constructorOpt: InvalidUri
  });
  this.name = 'InvalidUriError';
};
util.inherits(errors.InvalidUri, restify.RestError);

errors.InvalidHttpVerbError = function (message) {
  restify.RestError.call(this, {
    restCode: 'InvalidHttpVerb',
    statusCode: 400,
    message: message,
    description: "The HTTP verb specified was not recognized by the server.",
    constructorOpt: InvalidHttpVerb
  });
  this.name = 'InvalidHttpVerbError';
};
util.inherits(errors.InvalidHttpVerb, restify.RestError);


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

errors.ConditionHeadersNotSupportedError = function (message) {
  restify.RestError.call(this, {
    restCode: 'ConditionHeadersNotSupported',
    statusCode: 400,
    message: message,
    description: "Condition headers are not supported.",
    constructorOpt: ConditionHeadersNotSupported
  });
  this.name = 'ConditionHeadersNotSupportedError';
};
util.inherits(errors.ConditionHeadersNotSupported, restify.RestError);

errors.MultipleConditionHeadersNotSupportedError = function (message) {
  restify.RestError.call(this, {
    restCode: 'MultipleConditionHeadersNotSupported',
    statusCode: 400,
    message: message,
    description: "Multiple condition headers are not supported.",
    constructorOpt: MultipleConditionHeadersNotSupported
  });
  this.name = 'MultipleConditionHeadersNotSupportedError';
};
util.inherits(errors.MultipleConditionHeadersNotSupported, restify.RestError);

errors.AuthenticationFailedError = function (message) {
  restify.RestError.call(this, {
    restCode: 'AuthenticationFailed',
    statusCode: 403,
    message: message,
    description: "Server failed to authenticate the request. Make sure the value of the Authorization header is formed correctly including the signature.",
    constructorOpt: AuthenticationFailed
  });
  this.name = 'AuthenticationFailedError';
};
util.inherits(errors.AuthenticationFailed, restify.RestError);

errors.ResourceNotFoundError = function (message) {
  restify.RestError.call(this, {
    restCode: 'ResourceNotFound',
    statusCode: 404,
    message: message,
    description: "The specified resource does not exist.",
    constructorOpt: ResourceNotFound
  });
  this.name = 'ResourceNotFoundError';
};
util.inherits(errors.ResourceNotFound, restify.RestError);

errors.AccountIsDisabledError = function (message) {
  restify.RestError.call(this, {
    restCode: 'AccountIsDisabled',
    statusCode: 403,
    message: message,
    description: "The specified account is disabled.",
    constructorOpt: AccountIsDisabled
  });
  this.name = 'AccountIsDisabledError';
};
util.inherits(errors.AccountIsDisabled, restify.RestError);

errors.InsufficientAccountPermissionsError = function (message) {
  restify.RestError.call(this, {
    restCode: 'InsufficientAccountPermissions',
    statusCode: 403,
    message: message,
    description: "The account being accessed does not have sufficient permissions to execute this operation.",
    constructorOpt: InsufficientAccountPermissions
  });
  this.name = 'InsufficientAccountPermissionsError';
};
util.inherits(errors.InsufficientAccountPermissions, restify.RestError);

errors.InsufficientAccountPermissionsError = function (message) {
  restify.RestError.call(this, {
    restCode: 'InsufficientAccountPermissions',
    statusCode: 405,
    message: message,
    description: "The account being accessed does not have sufficient permissions to execute this operation.",
    constructorOpt: InsufficientAccountPermissions
  });
  this.name = 'InsufficientAccountPermissionsError';
};
util.inherits(errors.AccountIsDisabled, restify.RestError);

errors.UnsupportedHttpVerbError = function (message) {
  restify.RestError.call(this, {
    restCode: 'UnsupportedHttpVerb',
    statusCode: 405,
    message: message,
    description: "The resource doesn't support the specified HTTP verb.",
    constructorOpt: UnsupportedHttpVerb
  });
  this.name = 'UnsupportedHttpVerbError';
};
util.inherits(errors.UnsupportedHttpVerb, restify.RestError);

errors.AccountAlreadyExistsError = function (message) {
  restify.RestError.call(this, {
    restCode: 'AccountAlreadyExists',
    statusCode: 409,
    message: message,
    description: "The specified account already exists.",
    constructorOpt: AccountAlreadyExists
  });
  this.name = 'AccountAlreadyExistsError';
};
util.inherits(errors.AccountAlreadyExists, restify.RestError);

errors.AccountBeingCreatedError = function (message) {
  restify.RestError.call(this, {
    restCode: 'AccountBeingCreated',
    statusCode: 409,
    message: message,
    description: "The specified account is in the process of being created.",
    constructorOpt: AccountBeingCreated
  });
  this.name = 'AccountBeingCreatedError';
};
util.inherits(errors.AccountBeingCreated, restify.RestError);

errors.ResourceAlreadyExistsError = function (message) {
  restify.RestError.call(this, {
    restCode: 'ResourceAlreadyExists',
    statusCode: 409,
    message: message,
    description: "The specified resource already exists.",
    constructorOpt: ResourceAlreadyExists
  });
  this.name = 'ResourceAlreadyExistsError';
};
util.inherits(errors.ResourceAlreadyExists, restify.RestError);

errors.ResourceTypeMismatchError = function (message) {
  restify.RestError.call(this, {
    restCode: 'ResourceTypeMismatch',
    statusCode: 409,
    message: message,
    description: "The specified resource type does not match the type of the existing resource.",
    constructorOpt: ResourceTypeMismatch
  });
  this.name = 'ResourceTypeMismatchError';
};
util.inherits(errors.ResourceTypeMismatch, restify.RestError);

errors.MissingContentLengthHeaderError = function (message) {
  restify.RestError.call(this, {
    restCode: 'MissingContentLengthHeader',
    statusCode: 411,
    message: message,
    description: "The Content-Length header was not specified.",
    constructorOpt: MissingContentLengthHeader
  });
  this.name = 'MissingContentLengthHeaderError';
};
util.inherits(errors.MissingContentLengthHeader, restify.RestError);

errors.ConditionNotMetError = function (message) {
  restify.RestError.call(this, {
    restCode: 'ConditionNotMet',
    statusCode: 412,
    message: message,
    description: "The condition specified in the conditional header(s) was not met for a write operation.",
    constructorOpt: ConditionNotMet
  });
  this.name = 'ConditionNotMetError';
};
util.inherits(errors.ConditionNotMet, restify.RestError);

errors.RequestBodyTooLargeError = function (message) {
  restify.RestError.call(this, {
    restCode: 'RequestBodyTooLarge',
    statusCode: 413,
    message: message,
    description: "The size of the request body exceeds the maximum size permitted.",
    constructorOpt: RequestBodyTooLarge
  });
  this.name = 'RequestBodyTooLargeError';
};
util.inherits(errors.RequestBodyTooLarge, restify.RestError);

errors.InvalidRangeError = function (message) {
  restify.RestError.call(this, {
    restCode: 'InvalidRange',
    statusCode: 416,
    message: message,
    description: "The range specified is invalid for the current size of the resource.",
    constructorOpt: InvalidRange
  });
  this.name = 'InvalidRangeError';
};
util.inherits(errors.InvalidRange, restify.RestError);

errors.InternalErrorError = function (message) {
  restify.RestError.call(this, {
    restCode: 'InternalError',
    statusCode: 500,
    message: message,
    description: "The server encountered an internal error. Please retry the request.",
    constructorOpt: InternalError
  });
  this.name = 'InternalErrorError';
};
util.inherits(errors.InternalError, restify.RestError);

errors.OperationTimedOutError = function (message) {
  restify.RestError.call(this, {
    restCode: 'OperationTimedOut',
    statusCode: 500,
    message: message,
    description: "The operation could not be completed within the permitted time.",
    constructorOpt: OperationTimedOut
  });
  this.name = 'OperationTimedOutError';
};
util.inherits(errors.OperationTimedOut, restify.RestError);

errors.ServerBusyError = function (message) {
  restify.RestError.call(this, {
    restCode: 'ServerBusy',
    statusCode: 500,
    message: message,
    description: "The server is currently unable to receive requests. Please retry your request.",
    constructorOpt: ServerBusy
  });
  this.name = 'ServerBusyError';
};
util.inherits(errors.ServerBusy, restify.RestError);

// Make them available outside the module
module.exports.errors = errors;
module.exports.formatter = formatter;
