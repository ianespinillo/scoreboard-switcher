export type competition= {
    id: string
    name: string
    logo_url: string
    big_url: string
    countryId: string
  }
  export type country={
    id: string
    name: string
    flag_url: string
    name_3: string
  }

  export type selectedScoreboard = {
    big_url: string
    id: string
    name: string
    logo_url: string
    preview_url?: string
  }