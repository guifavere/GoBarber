import React, { useEffect, useRef, useState } from "react";
import { useField } from "@rocketseat/unform";

import api from "~/services/api";

import { Container } from "./styles";

export default function AvatarInput() {
  const { defaultValue, registerField } = useField("avatar");

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  const handleChange = async e => {
    const data = new FormData();

    data.append("file", e.target.files[0]);

    const res = await api.post("files", data);
    const { id, url } = res.data;

    setFile(id);
    setPreview(url);
  };

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: "avatar_id",
        ref: ref.current,
        path: "dataset.file"
      });
    }
  }, [ref, registerField]);

  return (
    <Container>
      <label htmlFor="avatar">
        <img
          alt="Avatar"
          src={
            preview || "https://api.adorable.io/avatars/120/abott@adorable.png"
          }
          title="Avatar"
        />
        <input
          accept="image/*"
          data-file={file}
          id="avatar"
          type="file"
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
