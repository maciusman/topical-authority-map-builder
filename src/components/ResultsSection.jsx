import { useState } from 'react'

const ResultsSection = ({ results, error, isLoading }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(results)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Błąd kopiowania:', err)
    }
  }

  const parseMarkdownToHTML = (markdown) => {
    if (!markdown) return null

    const lines = markdown.split('\n')
    let html = '<ul class="space-y-2">'
    let currentLevel = 0
    const levelStack = []

    lines.forEach((line) => {
      const trimmedLine = line.trim()
      if (!trimmedLine || !trimmedLine.startsWith('-')) return

      const indent = line.search(/\S/)
      const level = Math.floor(indent / 2)
      const content = trimmedLine.substring(1).trim()

      while (currentLevel > level) {
        html += '</ul></li>'
        levelStack.pop()
        currentLevel--
      }

      if (currentLevel < level) {
        html += '<ul class="ml-6 mt-2 space-y-2">'
        levelStack.push(level)
        currentLevel = level
      }

      const isPillar = level === 0
      const liClass = isPillar
        ? 'font-bold text-slate-900 text-lg'
        : 'text-slate-700'

      html += `<li class="${liClass}">${content}`

      const nextLineIndex = lines.indexOf(line) + 1
      const nextLine = lines[nextLineIndex]
      if (!nextLine || nextLine.search(/\S/) <= indent) {
        html += '</li>'
      }
    })

    while (currentLevel > 0) {
      html += '</ul></li>'
      currentLevel--
    }

    html += '</ul>'
    return html
  }

  if (isLoading) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="flex flex-col items-center justify-center py-12">
          <svg className="animate-spin h-12 w-12 text-blue-600 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-slate-600 text-lg">Analizuję strukturę konkurenta i tworzę mapę tematyczną...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
        <div className="flex items-start gap-3">
          <span className="text-red-500 text-2xl flex-shrink-0">⚠️</span>
          <div>
            <h3 className="font-semibold text-red-900 mb-1">Wystąpił błąd</h3>
            <p className="text-red-700">{error}</p>
            <p className="text-red-600 text-sm mt-2">
              Sprawdź, czy Twój klucz API jest poprawny i aktywny, oraz czy podany URL jest publicznie dostępny.
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (!results) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
        <div className="max-w-md mx-auto">
          <div className="text-6xl mb-4">🗺️</div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Twoja strategiczna mapa tematyczna pojawi się tutaj
          </h2>
          <p className="text-slate-600">
            Wypełnij formularz powyżej i kliknij przycisk, aby rozpocząć analizę
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Twoja Mapa Tematyczna
        </h2>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors duration-200"
          aria-label="Kopiuj mapę do schowka"
        >
          {copied ? (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Skopiowano!</span>
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>Kopiuj Mapę</span>
            </>
          )}
        </button>
      </div>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: parseMarkdownToHTML(results) }}
      />
    </div>
  )
}

export default ResultsSection
