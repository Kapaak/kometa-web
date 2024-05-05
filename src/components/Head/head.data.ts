export type SeoData = Record<
  string,
  { title?: string; keywords: string; description: string }
>

// TODO: update keywords
const keywords =
  'plavání Lužánky, bazén Lužánky, bazén za Lužánkami, výuka plavání v Brně, plavání Brno, plavecké kurzy brno, plavání brno, plavání pro děti, plavání s dětmi'

export const data: SeoData = {
  // '/prihlasky': {
  //   title: 'Přihlášky | Plavecká škola',
  //   keywords,
  //   description:
  //     'Nabízíme plavecké kurzy pro děti, školy a školky i dospělé. Učíme plavat zábavnou formou dle nejnovějších metodik.',
  // },
  // '/prihlasky/[courseName]': {
  //   title: 'Přihláška | Plavecká škola',
  //   keywords,
  //   description:
  //     'Nabízíme plavecké kurzy pro děti, školy a školky i dospělé. Učíme plavat zábavnou formou dle nejnovějších metodik.',
  // },
  // '/': {
  //   title: 'Plavecká škola | Lužánky',
  //   keywords,
  //   description:
  //     'Plavecké kurzy pro děti i dospělé. Vedené kvalifikovanými trenéry, kteří působí na bazénech po celém Brně. Přijď si s námí zaplavat a navštiv bazén za Lužánkami.',
  // },
  default: {
    title: 'Plavecká škola | Kometa',
    keywords,
    description:
      'Plavecké kurzy pro děti i dospělé. Vedené kvalifikovanými trenéry, kteří působí na bazénech po celém Brně. Přijď si s námí zaplavat a navštiv bazén za Lužánkami.',
  },
}
