import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

export function CodeBlockRenderer({
  language,
  code,
}: {
  language?: string | null
  code: string
}) {
  return (
    <div className="not-prose group relative my-8 overflow-hidden rounded-lg border border-[#00ff41]/30 bg-[#0d1117] transition-shadow duration-300 hover:shadow-[0_0_5px_#00ff41,0_0_14px_rgba(0,255,65,0.25)]">
      <div className="flex items-center justify-between border-b border-[#00ff41]/20 bg-black/40 px-4 py-2">
        <span className="font-mono text-xs font-semibold tracking-wide text-[#00ff41]/80 uppercase">
          {language || 'plaintext'}
        </span>
      </div>
      <div className="code-scroll overflow-x-auto">
        <SyntaxHighlighter
          language={language || 'text'}
          style={vscDarkPlus}
          showLineNumbers
          customStyle={{
            margin: 0,
            padding: '1rem',
            background: 'transparent',
            fontSize: '0.875rem',
          }}
          lineNumberStyle={{ color: '#3d444d', minWidth: '2.5em', userSelect: 'none' }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}
