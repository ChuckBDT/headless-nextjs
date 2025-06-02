import { HeroQuery, LogoWallQuery } from '@/types'
import { contentGqlFetcher } from './fetch'

export const getContentForHero = async () => {
  const query = /* GraphQL */ `
    query HeroCollection {
      heroCollection {
        items {
          title
          subTitle
          preTitle
          callToActionsCollection {
            items {
              link
              label
            }
          }
        }
      }
    }
  `

  const data = await contentGqlFetcher<HeroQuery>({
    query,
  })

  if (!data) throw Error('oops')
  return data
}
export const getContentForLogoWall = async () => {
  const query = /* GraphQL */ `
    query AssetCollection($where: AssetFilter) {
      assetCollection(where: $where) {
        items {
          url
          title
          height
          width
        }
      }
    }
  `

  const data = await contentGqlFetcher<LogoWallQuery>({
    query,
    variables: {
      where: {
        title_contains: 'client',
      },
    },
  })

  if (!data) throw Error('oops')
  return data
}
