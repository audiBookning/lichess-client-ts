export class NdjsonParser {
  static parse(body) {
    return body.trim().split(/\n/).map(JSON.parse)
  }
}
