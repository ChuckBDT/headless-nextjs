export type HeroQuery = {
  heroCollection: {
    items: {
      title: string
      subTitle: string
      preTitle: string
      callToActionsCollection: {
        items: {
          link: string
          label: string
        }[]
      }
    }[]
  }
}

export type LogoWallQuery = {
  assetCollection: {
    items: {
      url: string
      title: string
      height: number
      width: number
    }[]
  }
}

export type NavigationQuery = {
  navigationCollection: {
    items: {
      name: string
      linksCollection: {
        items: {
          label: string
          link: string
        }[]
      }
    }[]
  }
}
