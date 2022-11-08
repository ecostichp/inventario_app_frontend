
// This gets called on every request
export async function useServerFetch(endpoint) {
    // Fetch data from external API
    const res = await fetch(process.env.NEXT_PUBLIC_API+`${endpoint}`)
    const serverFetch = await res.json()
    
    // Pass data to the page via props
    return { props: { serverFetch } }
  }
  