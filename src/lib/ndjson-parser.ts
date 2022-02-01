class NdjsonParser {
  static parse(body: any) {
    return body.trim().split(/\n/).map(JSON.parse)
  }
}

export { NdjsonParser }
