import React, { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Youtube from "@tiptap/extension-youtube";

const ArticleEditor = () => {
  const [content, setContent] = useState("");
  const [isPreview, setIsPreview] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Youtube.configure({
        inline: true,
      }),
    ],
    content: content,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });

  const handleSave = async () => {
    try {
      // Gửi nội dung lên server hoặc lưu vào state
      console.log("Nội dung đã lưu:", content);
      alert("Bài viết đã được lưu thành công!");
    } catch (error) {
      console.error("Lỗi khi lưu bài viết:", error);
    }
  };

  return (
    <div style={{ marginTop: "4rem" }}>
      <h1>Trình soạn thảo bài viết</h1>
      {!isPreview ? (
        <>
          <EditorContent editor={editor} />
          <button onClick={() => setIsPreview(true)}>Xem trước</button>
        </>
      ) : (
        <>
          <div dangerouslySetInnerHTML={{ __html: content }} />
          <button onClick={() => setIsPreview(false)}>
            Quay lại chỉnh sửa
          </button>
        </>
      )}
      <button onClick={handleSave}>Lưu bài viết</button>
    </div>
  );
};

export default ArticleEditor;
