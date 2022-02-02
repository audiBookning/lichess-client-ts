import fetch, { Response } from 'node-fetch'

/* class NdjsonParser {
  static parse(body: any) {
    return body.trim().split(/\n/).map(JSON.parse)
  }

  //
} */

function parse2(stream: Promise<Response>) {
  // TODO: just log for test
  return stream.then(readStream(onMessage)).then(onComplete)
}

export { parse2 }
export { readStream }

// REF: https://gist.github.com/ornicar/a097406810939cf7be1df8ea30e94f3e
const readStream = (processLine: (j: any) => any) => (response: Response) => {
  const matcher = /\r?\n/
  const decoder = new TextDecoder()
  let buf = ''
  return new Promise<string>((resolve, fail) => {
    if (response != null && response.body) {
      response.body.on('data', v => {
        const chunk = decoder.decode(v, { stream: true })
        buf += chunk

        const parts = buf.split(matcher)
        if (parts.length > 0) {
          buf = parts.pop() as string
        }
        for (const i of parts.filter(p => p)) processLine(JSON.parse(i))
      })
      response.body.on('end', () => {
        if (buf.length > 0) processLine(JSON.parse(buf))
        resolve(buf)
      })
      response.body.on('error', fail)
    }
  })
}

const stream = fetch('https://lichess.org/api/tv/feed')
// or any other ND-JSON endpoint such as:
// const stream = fetch('https://lichess.org/api/games/user/neio',{headers:{Accept:'application/x-ndjson'}});

const onMessage = (obj: any) => {
  /* console.log('onMessage', obj) */
}
const onComplete = (buf: string) => {
  console.log('The stream has completed')
  return buf
}

stream.then(readStream(onMessage)).then(onComplete)
