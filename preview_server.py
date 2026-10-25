# -*- coding: utf-8 -*-
"""Site-local preview. Only Python's standard library is required."""

from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import webbrowser


SITE_ROOT = Path(__file__).resolve().parent


class SiteHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(SITE_ROOT), **kwargs)

    def end_headers(self):
        # YouTube embeds need a Referer. Do not suppress it.
        self.send_header('Referrer-Policy', 'strict-origin-when-cross-origin')
        super().end_headers()


def main():
    # Port 0 picks an available local port, avoiding conflicts with other apps.
    with ThreadingHTTPServer(('127.0.0.1', 0), SiteHandler) as server:
        url = f'http://127.0.0.1:{server.server_port}/works.html'
        print('ホームページのプレビューを開始しました。')
        print(f'開くURL: {url}')
        print('終了するときはこのウィンドウで Ctrl+C を押してください。')
        webbrowser.open(url)
        try:
            server.serve_forever()
        except KeyboardInterrupt:
            pass


if __name__ == '__main__':
    main()
