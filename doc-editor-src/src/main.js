import { SuperDoc } from "superdoc";
import "superdoc/style.css";

let superdoc = null;
let currentFile = null;

console.log("script active");

/*
 * Elements
 */

const fileInput =
  document.getElementById("file-input");

const chooseFileButton =
  document.getElementById("choose-file");

const openFileButton =
  document.getElementById("new-document");

const downloadButton =
  document.getElementById("download-document");

const uploadScreen =
  document.getElementById("upload-screen");

const dropZone =
  document.getElementById("drop-zone");

const fileName =
  document.getElementById("file-name");


/*
 * Open file picker
 */

chooseFileButton.addEventListener(
  "click",
  () => {
    fileInput.click();
  }
);

openFileButton.addEventListener(
  "click",
  () => {
    fileInput.click();
  }
);


/*
 * File selected
 */

fileInput.addEventListener(
  "change",
  async (event) => {

    const file =
      event.target.files?.[0];

    if (!file) {
      return;
    }

    await openDocument(file);

    // Allows selecting the same file again later.
    fileInput.value = "";
  }
);


/*
 * Drag and drop
 */

dropZone.addEventListener(
  "dragover",
  (event) => {

    event.preventDefault();

    dropZone.classList.add(
      "dragover"
    );
  }
);

dropZone.addEventListener(
  "dragleave",
  () => {

    dropZone.classList.remove(
      "dragover"
    );
  }
);

dropZone.addEventListener(
  "drop",
  async (event) => {

    event.preventDefault();

    dropZone.classList.remove(
      "dragover"
    );

    const file =
      event.dataTransfer.files?.[0];

    if (!file) {
      return;
    }

    await openDocument(file);
  }
);


/*
 * Validate DOCX
 */

function isDocx(file) {

  const name =
    file.name.toLowerCase();

  return (
    name.endsWith(".docx") ||
    file.type ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  );
}


/*
 * Load document into SuperDoc
 */

async function openDocument(file) {

  if (!isDocx(file)) {

    alert(
      "Please choose a Microsoft Word .docx file."
    );

    return;
  }


  /*
   * Destroy the previous editor.
   *
   * Nothing is uploaded anywhere.
   */

  if (superdoc) {

    try {
      superdoc.destroy();
    } catch (error) {
      console.warn(
        "Could not destroy previous editor:",
        error
      );
    }

    superdoc = null;
  }


  currentFile = file;

  fileName.textContent =
    file.name;


  /*
   * Hide upload screen
   */

  uploadScreen.classList.add(
    "hidden"
  );


  /*
   * Create SuperDoc using
   * the browser File object.
   */

  try {

    superdoc = new SuperDoc({

      selector: "#editor",

      toolbar: "#toolbar",

      /*
       * IMPORTANT:
       *
       * This is the local browser File object.
       * It is NOT a URL and is NOT uploaded
       * to your server.
       */

      document: file,

      documentMode: "editing",

      onReady: () => {

        console.log(
          "SuperDoc is ready."
        );

        downloadButton.disabled =
          false;
      },

      onContentError: ({
        error
      }) => {

        console.error(
          "Document content error:",
          error
        );

        alert(
          "SuperDoc could not read this document."
        );
      },

      onException: ({
        error
      }) => {

        console.error(
          "SuperDoc exception:",
          error
        );
      }
    });

  } catch (error) {

    console.error(
      "Failed to create SuperDoc:",
      error
    );

    alert(
      "Could not open the document."
    );

    uploadScreen.classList.remove(
      "hidden"
    );

    downloadButton.disabled =
      true;
  }
}


/*
 * Download edited document
 */

downloadButton.addEventListener(
  "click",
  async () => {

    if (!superdoc) {
      return;
    }

    downloadButton.disabled =
      true;

    downloadButton.textContent =
      "Downloading…";

    try {

      /*
       * SuperDoc generates the edited
       * DOCX in the browser.
       */

      await superdoc.export({

        exportType: ["docx"],

        exportedName:
          getDownloadName(
            currentFile?.name
          )
      });

    } catch (error) {

      console.error(
        "DOCX export failed:",
        error
      );

      alert(
        "Could not export the document."
      );

    } finally {

      downloadButton.disabled =
        false;

      downloadButton.textContent =
        "Download DOCX";
    }
  }
);


/*
 * Keep the original filename,
 * changing:
 *
 * example.docx
 *
 * into:
 *
 * example-edited.docx
 */

function getDownloadName(name) {

  if (!name) {
    return "edited-document";
  }

  return name.replace(
    /\.docx$/i,
    "-edited"
  );
}


/*
 * Clean up when leaving page
 */

window.addEventListener(
  "beforeunload",
  () => {

    if (superdoc) {

      try {
        superdoc.destroy();
      } catch {
        // Nothing to do.
      }
    }
  }
);
