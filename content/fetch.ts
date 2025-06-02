export const contentGqlFetcher = async <T>({
  query,
  variables = {},
  preview = false,
}: {
  query: string
  variables?: any
  preview?: boolean
}): Promise<T | undefined> => {
  const res = await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${
        preview ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_ACCESS_TOKEN
      }`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  })

  const { data, errors } = await res.json()
  if (errors) throw new Error('Could not get content from Contentful')
  return data as T
}
