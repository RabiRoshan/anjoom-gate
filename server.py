from http.server import BaseHTTPRequestHandler, HTTPServer
import logging


class S(BaseHTTPRequestHandler):
    def _set_response(self, code, message):
        self.send_response(code, message=message)
        self.send_header('Content-type', 'text/html')
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()

    # HANDLE GET METHOD:
    def do_GET(self):
        if self.path == "/open":
            print("open")
            # DO YOUR CODE FOR OPEN
            #
            #
            #
            # SEND SUCCESS MESSAGE IF ALL OK!
            self._set_response(200, "Successfull")

        elif self.path == '/close':
            print("close")
            # DO YOUR CODE FOR CLOSE
            #
            #
            #
            # SEND SUCCESS MESSAGE IF ALL OK!
            self._set_response(200, "Successfull")

        else:
            print("error")
            # SEND FAILED RESPONSE
            self._set_response(500, "Unsuccessfull")

        # UNCOMMENT THE BELOW CODE TO PRINT THE COMPLETE REQUEST DATA
        # logging.info("GET request,\nPath: %s\nHeaders:\n%s\n",
        #              str(self.path), str(self.headers))

        # self.wfile.write("GET request for {}".format(
        #     self.path).encode('utf-8'))

    # HANDLE POST METHOD:
    # def do_POST(self):
    #     # <--- Gets the size of data
    #     content_length = int(self.headers['Content-Length'])
    #     # <--- Gets the data itself
    #     post_data = self.rfile.read(content_length)
    #     logging.info("POST request,\nPath: %s\nHeaders:\n%s\n\nBody:\n%s\n",
    #                  str(self.path), str(self.headers), post_data.decode('utf-8'))

    #     self._set_response()
    #     self.wfile.write("POST request for {}".format(
    #         self.path).encode('utf-8'))


def run(server_class=HTTPServer, handler_class=S, port=8080):
    logging.basicConfig(level=logging.INFO)
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    logging.info('Starting httpd...\n')
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
    httpd.server_close()
    logging.info('Stopping httpd...\n')


if __name__ == '__main__':
    from sys import argv

    if len(argv) == 2:
        run(port=int(argv[1]))
    else:
        run()
