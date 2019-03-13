import Typography from 'typography'
import Moraga from 'typography-theme-moraga'

Moraga.overrideThemeStyles = () => ({
  p: {
    fontSize: `1.2rem`,
  },
})

const typography = new Typography(Moraga)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const { rhythm } = typography
export const { scale } = typography
