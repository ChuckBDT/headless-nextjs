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

export type CustomerPostQuery = {
  customerPostCollection: {
    items: {
      body: {
        json: JSON
      }
      slug: string
      customer: {
        logo: {
          url: string
          width: number
          height: number
        }
        name: string
      }
      title: string
    }[]
  }
}

export type CustomerPostsSlugsQuery = {
  customerPostCollection: {
    items: {
      slug: string
    }[]
  }
}
