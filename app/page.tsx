"use client"

import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { shortenUrl } from "@/lib/shorten-url"

export default function Home() {
  const [url, setUrl] = useState("")
  const [shortUrl, setShortUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    setShortUrl("")

    try {
      const shortened = await shortenUrl(url)
      setShortUrl(shortened)
    } catch (err) {
      console.error(err);
      setError("Failed to shorten URL. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-background text-foreground">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <h1 className="text-4xl font-bold mb-8">Quick URL</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <Input
          type="url"
          placeholder="Enter your long URL here"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Shortening..." : "Shorten URL"}
        </Button>
      </form>
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {shortUrl && (
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-semibold mb-2">Shortened URL:</h2>
          <a
            href={shortUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline break-all"
          >
            {shortUrl}
          </a>
        </div>
      )}
    </main>
  )
}

