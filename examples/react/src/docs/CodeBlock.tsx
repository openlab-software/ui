interface CodeBlockProps {
  code: string;
  lang?: string;
}

export function CodeBlock({ code, lang = "tsx" }: CodeBlockProps) {
  return (
    <div className="docs-code">
      <div className="docs-code-header">
        <span>{lang}</span>
      </div>
      <div className="docs-code-body">
        <pre>{code.trim()}</pre>
      </div>
    </div>
  );
}
