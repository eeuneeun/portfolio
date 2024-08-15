import React from "react";
import { DocumentViewer } from "react-documents";

export default function MainDocument() {
  return (
    <>
      <div>MainDocument</div>
      <DocumentViewer
        url="https://docs.google.com/presentation/d/17F-O5XLyFoQEC1fCw60N1OsryesIJUHs/edit?usp=drive_link&ouid=107738340155260086348&rtpof=true&sd=true/preview"
        viewer="url"
        style="width:100%;height:50vh;"
      ></DocumentViewer>
    </>
  );
}
