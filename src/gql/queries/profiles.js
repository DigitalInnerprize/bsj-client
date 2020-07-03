import { gql } from '@apollo/client'

const GET_PROFILES = gql`
  query {
    profiles {
      id
      name
      location
      profile_image {
        id
        name
      }
      tags {
        skill
      }
      projects {
        id
        title
        cover_image {
          id
          name
        }
        video_link
        description
      }
      links {
        linkedin
        youtube
        vimeo
        kit
        instagram
        twitter
      }
      user {
        id
      }
    }
  }
`

export { GET_PROFILES }
