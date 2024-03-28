export function brandLogo(channel: string, size: string): string {
  switch (channel) {
    case 'bl':
      return `text-blue fa-solid fa-rss fa-${size}`

    case 'co': // unknown
      return `fa-solid fa-comment fa-${size}`

    case 'da':
      return `fa-brands fa-dailymotion fa-${size}`

    case 'fb':
      return `text-blue-900 fa-brands fa-facebook fa-${size}`

    case 'fo':
      return `fa-solid fa-messages fa-${size}`

    case 'ig':
      return `fa-brands fa-instagram fa-${size}`

    case 'lb': // unknown
      return `fa-solid fa-comment fa-${size}`

    case 'li':
      return `fa-brands fa-linkedin fa-${size}`

    case 'me': // news ?
      return `fa-solid fa-rss fa-${size}`

    case 'pi':
      return `fa-brands fa-pinterest fa-${size}`

    case 'qq':
      return `fa-brands fa-weibo fa-${size}`

    case 'rd':
      return `fa-brands fa-reddit fa-${size}`

    case 're': // reviews
      return `fa-solid fa-star-sharp-half-stroke fa-${size}`

    case 'ti':
      return `fa-brands fa-tiktok fa-${size}`

    case 'tw':
      return `fa-brands fa-x-twitter fa-${size}`

    case 'vk':
      return `fa-brands fa-vk fa-${size}`

    case 'ws': // website
      return `fa-solid fa-rss fa-${size}`

    case 'yt':
      return `text-red fa-brands fa-youtube fa-${size}`

    default:
      return ''
  }
}
