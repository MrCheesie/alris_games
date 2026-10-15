import os
import subprocess
from termcolor import colored
file_formats = ["docx", "odt", "txt", "rtf", "md"]
inp_file = "index.html"
for format in file_formats:
    try:
        subprocess.run(
            [
                "pandoc",
                "-s",
                "-f",
                "html",
                inp_file,
                "-o",
                f"sample.{format}"
            ]
        )
        print(colored(f"Converted {inp_file} to format {format}.", "green"))
    except:
        print(colored("There was an unexpected error! Peace out!", "red"))
        break