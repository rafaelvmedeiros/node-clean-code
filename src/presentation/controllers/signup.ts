import { HttpResponse, HttpRequest } from "../protocols/http";
import { MissingParamError } from "../errors/missing-param-error";
import { badRequest } from "../helpers/http-helper";


export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'password_confirmation']

    for (const field of requiredFields) {
      if(!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      } 
   } 

    return {
      statusCode: 200,
      body: ""
    }
  }
}
