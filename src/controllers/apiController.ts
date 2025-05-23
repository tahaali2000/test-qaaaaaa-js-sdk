/**
 * Test APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { UsersRequest, usersRequestSchema } from '../models/usersRequest';
import { UsersResponse, usersResponseSchema } from '../models/usersResponse';
import { UsersResponse1, usersResponse1Schema } from '../models/usersResponse1';
import { array, number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class ApiController extends BaseController {
  /**
   * Returns a list of users, optionally filtered by search.
   *
   * @param search Filter users by search term
   * @param limit  Limit the number of users returned
   * @return Response from the API call
   */
  async getusers(
    search?: string,
    limit?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UsersResponse[]>> {
    const req = this.createRequest('GET', '/users');
    const mapped = req.prepareArgs({
      search: [search, optional(string())],
      limit: [limit, optional(number())],
    });
    req.query('search', mapped.search);
    req.query('limit', mapped.limit);
    return req.callAsJson(array(usersResponseSchema), requestOptions);
  }

  /**
   * Creates a user with default values if not provided.
   *
   * @param body
   * @return Response from the API call
   */
  async createanewuser(
    body: UsersRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UsersResponse1>> {
    const req = this.createRequest('POST', '/users');
    const mapped = req.prepareArgs({ body: [body, usersRequestSchema] });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(usersResponse1Schema, requestOptions);
  }
}
