import {get} from "./baseApiServices";

export function users() {
  return get("/users");
}
