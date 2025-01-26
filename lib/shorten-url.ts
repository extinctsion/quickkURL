export async function shortenUrl(url: string): Promise<string> {
  try {
    const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`)
    if (!response.ok) {
      throw new Error("Failed to shorten URL")
    }
    return await response.text()
  } catch (error) {
    console.error("Error shortening URL:", error)
    throw error
  }
}

