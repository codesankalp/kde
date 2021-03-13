from render_base import render_test
import os, time
import sys
import time
import logging
from watchdog.observers import Observer
from watchdog.events import LoggingEventHandler


class Event(LoggingEventHandler):
    def on_modified(self, event):
        what = "directory" if event.is_directory else "file"
        self.logger.info("Modified %s: %s", what, event.src_path)
        render_test()


if __name__ == "__main__":
    logging.basicConfig(
        level=logging.INFO,
        format="%(asctime)s - %(message)s",
        datefmt="%Y-%m-%d %H:%M:%S",
    )
    path = sys.argv[1] if len(sys.argv) > 1 else "templates/"
    event_handler = Event()
    observer = Observer()
    observer.schedule(event_handler, path, recursive=True)
    observer.start()
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()