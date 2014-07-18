Restify Standard Errors
============================

![Funny Picture](http://editorial.designtaxi.com/news-httpstatuscats1612/1.jpg)

Adds a standard set of API errors [Restify framework](https://github.com/mcavage/node-restify) based on [Microsoft MSDN API Error Standards](http://msdn.microsoft.com/en-us/library/azure/dd179357.aspx).

## Installation

`$ npm install restify-standard-errors`

In your code put

`var errors = require('restify-standard-errors')`

## Usage

```javascript
server.get('/register', function(req, res, next) {
  return next(new errors.AccountAlreadyExistsError());
});
```

## Complete List of Errors

| Error Name                           | HTTP status code                      | Description                                                                                                                             |
|--------------------------------------|---------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| ConditionNotMet                      | Not Modified (304)                    | The condition specified in the conditional header(s) was not met for a read operation.                                                  |
| MissingRequiredHeader                | Bad Request (400)                     | A required HTTP header was not specified.                                                                                               |
| MissingRequiredXmlNode               | Bad Request (400)                     | A required XML node was not specified in the request body.                                                                              |
| UnsupportedHeader                    | Bad Request (400)                     | One of the HTTP headers specified in the request is not supported.                                                                      |
| UnsupportedXmlNode                   | Bad Request (400)                     | One of the XML nodes specified in the request body is not supported.                                                                    |
| InvalidHeaderValue                   | Bad Request (400)                     | The value provided for one of the HTTP headers was not in the correct format.                                                           |
| InvalidXmlNodeValue                  | Bad Request (400)                     | The value provided for one of the XML nodes in the request body was not in the correct format.                                          |
| MissingRequiredQueryParameter        | Bad Request (400)                     | A required query parameter was not specified for this request.                                                                          |
| UnsupportedQueryParameter            | Bad Request (400)                     | One of the query parameters specified in the request URI is not supported.                                                              |
| InvalidQueryParameterValue           | Bad Request (400)                     | An invalid value was specified for one of the query parameters in the request URI.                                                      |
| OutOfRangeQueryParameterValue        | Bad Request (400)                     | A query parameter specified in the request URI is outside the permissible range.                                                        |
| RequestUrlFailedToParse              | Bad Request (400)                     | The url in the request could not be parsed.                                                                                             |
| InvalidUri                           | Bad Request (400)                     | The requested URI does not represent any resource on the server.                                                                        |
| InvalidHttpVerb                      | Bad Request (400)                     | The HTTP verb specified was not recognized by the server.                                                                               |
| EmptyMetadataKey                     | Bad Request (400)                     | The key for one of the metadata key-value pairs is empty.                                                                               |
| InvalidXmlDocument                   | Bad Request (400)                     | The specified XML is not syntactically valid.                                                                                           |
| Md5Mismatch                          | Bad Request (400)                     | The MD5 value specified in the request did not match the MD5 value calculated by the server.                                            |
| InvalidMd5                           | Bad Request (400)                     | The MD5 value specified in the request is invalid. The MD5 value must be 128 bits and Base64-encoded.                                   |
| OutOfRangeInput                      | Bad Request (400)                     | One of the request inputs is out of range.                                                                                              |
| InvalidAuthenticationInfo            | Bad Request (400)                     | The authentication information was not provided in the correct format. Verify the value of Authorization header.                        |
| InvalidInput                         | Bad Request (400)                     | One of the request inputs is not valid.                                                                                                 |
| InvalidMetadata                      | Bad Request (400)                     | The specified metadata is invalid. It includes characters that are not permitted.                                                       |
| InvalidResourceName                  | Bad Request (400)                     | The specifed resource name contains invalid characters.                                                                                 |
| MetadataTooLarge                     | Bad Request (400)                     | The size of the specified metadata exceeds the maximum size permitted.                                                                  |
| ConditionHeadersNotSupported         | BadRequest (400)                      | Condition headers are not supported.                                                                                                    |
| MultipleConditionHeadersNotSupported | Bad Request (400)                     | Multiple condition headers are not supported.                                                                                           |
| AuthenticationFailed                 | Forbidden (403)                       | Server failed to authenticate the request. Make sure the value of the Authorization header is formed correctly including the signature. |                                                                |
| ResourceNotFound                     | Not Found (404)                       | The specified resource does not exist.                                                                                                  |
| AccountIsDisabled                    | Forbidden (403)                       | The specified account is disabled.                                                                                                      |
| InsufficientAccountPermissions       | Forbidden (403)                       | The account being accessed does not have sufficient permissions to execute this operation.                                              |
| UnsupportedHttpVerb                  | Method Not Allowed (405)              | The resource doesn't support the specified HTTP verb.                                                                                   |
| AccountAlreadyExists                 | Conflict (409)                        | The specified account already exists.                                                                                                   |
| AccountBeingCreated                  | Conflict (409)                        | The specified account is in the process of being created.                                                                               |
| ResourceAlreadyExists                | Conflict (409)                        | The specified resource already exists.                                                                                                  |
| ResourceTypeMismatch                 | Conflict (409)                        | The specified resource type does not match the type of the existing resource.                                                           |
| MissingContentLengthHeader           | Length Required (411)                 | The Content-Length header was not specified.                                                                                            |
| ConditionNotMet                      | Precondition Failed (412)             | The condition specified in the conditional header(s) was not met for a write operation.                                                 |
| RequestBodyTooLarge                  | Request Entity Too Large (413)        | The size of the request body exceeds the maximum size permitted.                                                                        |
| InvalidRange                         | Requested Range Not Satisfiable (416) | The range specified is invalid for the current size of the resource.                                                                    |
| InternalError                        | Internal Server Error (500)           | The server encountered an internal error. Please retry the request.                                                                     |
| OperationTimedOut                    | Internal Server Error (500)           | The operation could not be completed within the permitted time.                                                                         |
| ServerBusy                           | Service Unavailable (503)             | The server is currently unable to receive requests. Please retry your request.                                                          |

## The Future?

I want to make it so that if you don't supply a 'message' then it automatically passes the description as a message

## License

This work is Unlicensed! That means you can do with it whatever you want, although I hope you send me pull requests.
