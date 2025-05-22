
# Users Request

## Structure

`UsersRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `username` | `string \| undefined` | Optional | User's username |
| `age` | `number` | Required | User's age |
| `isActive` | `boolean \| undefined` | Optional | Whether the user is active |
| `rating` | `number \| undefined` | Optional | User's rating |
| `signupDate` | `string` | Required | Signup date |

## Example (as JSON)

```json
{
  "username": "username4",
  "age": 140,
  "isActive": false,
  "rating": 194.34,
  "signupDate": "2016-03-13T12:52:32.123Z"
}
```

