#!/usr/bin/env python

import logging
import sys
import time

from watchdog.events import LoggingEventHandler
from watchdog.observers import Observer

from render_base import render


class Event(LoggingEventHandler):
    def on_modified(self, event):
        what = "directory" if event.is_directory else "file"
        self.logger.info("Modified %s: %s", what, event.src_path)
        render()


def file_changes_reloader():
    """
    Using watchdog API to rerender all the files during development phase.
    """
    logging.basicConfig(
        level=logging.INFO,
        format="%(asctime)s - %(message)s",
        datefmt="%Y-%m-%d %H:%M:%S",
    )
    path = sys.argv[1] if len(sys.argv) > 1 else "templates/"
    path_to_metrics = sys.argv[1] if len(sys.argv) > 1 else "metrics/"
    event_handler = Event()
    observer = Observer()
    metric_event_handler = Event()
    metric_observer = Observer()
    observer.schedule(event_handler, path, recursive=True)
    metric_observer.schedule(
        metric_event_handler, path_to_metrics, recursive=True
    )
    observer.start()
    metric_observer.start()
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
        metric_observer.stop()
    observer.join()
    metric_observer.join()


if __name__ == "__main__":
    file_changes_reloader()
