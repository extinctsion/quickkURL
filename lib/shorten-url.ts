// It worked while we were using tiny URL apis
// export async function shortenUrl(url: string): Promise<string> {
//   try {
//     const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`)
//     if (!response.ok) {
//       throw new Error("Failed to shorten URL")
//     }
//     return await response.text()
//   } catch (error) {
//     console.error("Error shortening URL:", error)
//     throw error
//   }
// }

export async function shortenUrl(url: string): Promise<string> {
  try {
    const response = await fetch('/api/shorten', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(url),
    });

    if (!response.ok) {
      throw new Error('Failed to shorten URL');
    }

    const data = await response.json();

    if (!data.quickURl) {
      throw new Error('Invalid response from API');
    }

    return data.quickURl;
  } catch (error) {
    console.error('Error shortening URL:', error);
    throw error;
  }
}
