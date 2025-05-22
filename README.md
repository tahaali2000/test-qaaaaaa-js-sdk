
# Getting Started with Test API

## Install the Package

Run the following command from your project directory to install the package from npm:

```bash
npm install test-qaaaaaa-sdk@1.2.3
```

For additional package details, see the [Npm page for the test-qaaaaaa-sdk@1.2.3 npm](https://www.npmjs.com/package/test-qaaaaaa-sdk/v/1.2.3).

## Test the SDK

To validate the functionality of this SDK, you can execute all tests located in the `test` directory. This SDK utilizes `Jest` as both the testing framework and test runner.

To run the tests, navigate to the root directory of the SDK and execute the following command:

```bash
npm run test
```

Or you can also run tests with coverage report:

```bash
npm run test:coverage
```

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](https://www.github.com/tahaali2000/test-qaaaaaa-js-sdk/tree/1.2.3/doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| defaultHost | `string` | *Default*: `'www.example.com'` |
| environment | `Environment` | The API environment. <br> **Default: `Environment.Production`** |
| timeout | `number` | Timeout for API calls.<br>*Default*: `0` |
| httpClientOptions | [`Partial<HttpClientOptions>`](https://www.github.com/tahaali2000/test-qaaaaaa-js-sdk/tree/1.2.3/doc/http-client-options.md) | Stable configurable http client options. |
| unstableHttpClientOptions | `any` | Unstable configurable http client options. |

The API client can be initialized as follows:

```ts
const client = new Client({
  timeout: 0,
  environment: Environment.Production,
  defaultHost: 'www.example.com',
});
```

## List of APIs

* [API](https://www.github.com/tahaali2000/test-qaaaaaa-js-sdk/tree/1.2.3/doc/controllers/api.md)

## SDK Infrastructure

### Configuration

* [HttpClientOptions](https://www.github.com/tahaali2000/test-qaaaaaa-js-sdk/tree/1.2.3/doc/http-client-options.md)
* [RetryConfiguration](https://www.github.com/tahaali2000/test-qaaaaaa-js-sdk/tree/1.2.3/doc/retry-configuration.md)

### HTTP

* [HttpRequest](https://www.github.com/tahaali2000/test-qaaaaaa-js-sdk/tree/1.2.3/doc/http-request.md)

### Utilities

* [ApiResponse](https://www.github.com/tahaali2000/test-qaaaaaa-js-sdk/tree/1.2.3/doc/api-response.md)
* [ApiError](https://www.github.com/tahaali2000/test-qaaaaaa-js-sdk/tree/1.2.3/doc/api-error.md)

