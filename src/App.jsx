import { useState } from 'react'
import TopicForm from './components/TopicForm'
import ResultsSection from './components/ResultsSection'
import Header from './components/Header'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState(null)
  const [error, setError] = useState(null)

  const handleGenerate = async (formData) => {
    setIsLoading(true)
    setError(null)
    setResults(null)

    try {
      const response = await fetch('/.netlify/functions/generateMap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Wystąpił błąd podczas generowania mapy')
      }

      setResults(data.map)
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Header />
        <main className="mt-8 space-y-8">
          <TopicForm onGenerate={handleGenerate} isLoading={isLoading} />
          <ResultsSection
            results={results}
            error={error}
            isLoading={isLoading}
          />
        </main>
      </div>
    </div>
  )
}

export default App
