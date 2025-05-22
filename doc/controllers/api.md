# API

```ts
const apiController = new ApiController(client);
```

## Class Name

`ApiController`

## Methods

* [Getusers](../../doc/controllers/api.md#getusers)
* [Createanewuser](../../doc/controllers/api.md#createanewuser)


# Getusers

Returns a list of users, optionally filtered by search.

```ts
async getusers(
  search?: string,
  limit?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UsersResponse[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `search` | `string \| undefined` | Query, Optional | Filter users by search term |
| `limit` | `number \| undefined` | Query, Optional | Limit the number of users returned |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [UsersResponse[]](../../doc/models/users-response.md).

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await apiController.getusers();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Createanewuser

Creates a user with default values if not provided.

```ts
async createanewuser(
  body: UsersRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UsersResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UsersRequest`](../../doc/models/users-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [UsersResponse1](../../doc/models/users-response-1.md).

## Example Usage

```ts
const body: UsersRequest = {
  age: 2,
  signupDate: '2016-03-13T12:52:32.123Z',
};

try {
  const { result, ...httpResponse } = await apiController.createanewuser(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

