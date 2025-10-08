import { useState, useEffect } from 'react'

const TopicForm = ({ onGenerate, isLoading }) => {
  const [mainTopic, setMainTopic] = useState('')
  const [competitorUrl, setCompetitorUrl] = useState('')
  const [apiKey, setApiKey] = useState('')
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    setIsFormValid(
      mainTopic.trim() !== '' &&
      competitorUrl.trim() !== '' &&
      apiKey.trim() !== ''
    )
  }, [mainTopic, competitorUrl, apiKey])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isFormValid && !isLoading) {
      onGenerate({
        mainTopic: mainTopic.trim(),
        competitorUrl: competitorUrl.trim(),
        apiKey: apiKey.trim(),
      })
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="mainTopic"
            className="block text-sm font-semibold text-slate-900 mb-2"
          >
            Główny Temat / Encja Centralna
          </label>
          <input
            type="text"
            id="mainTopic"
            value={mainTopic}
            onChange={(e) => setMainTopic(e.target.value)}
            placeholder="np. rowery elektryczne"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
            required
            disabled={isLoading}
          />
        </div>

        <div>
          <label
            htmlFor="competitorUrl"
            className="block text-sm font-semibold text-slate-900 mb-2"
          >
            URL Konkurenta do Analizy
          </label>
          <input
            type="url"
            id="competitorUrl"
            value={competitorUrl}
            onChange={(e) => setCompetitorUrl(e.target.value)}
            placeholder="np. https://konkurent.pl/kategoria/rowery"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
            required
            disabled={isLoading}
          />
        </div>

        <div>
          <label
            htmlFor="apiKey"
            className="block text-sm font-semibold text-slate-900 mb-2"
          >
            Twój Klucz API Google AI
          </label>
          <input
            type="password"
            id="apiKey"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Wklej swój klucz API uzyskany z Google AI Studio"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
            required
            disabled={isLoading}
          />
          <p className="mt-2 text-sm text-slate-600 flex items-start gap-2">
            <span className="text-blue-500 flex-shrink-0">ℹ️</span>
            <span>
              Twój klucz API jest używany wyłącznie do tego jednorazowego zapytania i nie jest przez nas nigdzie przechowywany ani logowany.
            </span>
          </p>
        </div>

        <button
          type="submit"
          disabled={!isFormValid || isLoading}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 disabled:from-slate-300 disabled:to-slate-400 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Analizuję...</span>
            </>
          ) : (
            <span>Generuj Semantyczną Mapę</span>
          )}
        </button>
      </form>
    </div>
  )
}

export default TopicForm
