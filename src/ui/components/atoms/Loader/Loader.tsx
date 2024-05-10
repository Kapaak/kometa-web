import { FadeLoader } from 'react-spinners'

export interface LoaderProps {
  color?: string
  loading?: boolean
}

export function Loader({ color, loading }: LoaderProps) {
  return <FadeLoader loading={loading} color={color} width={4} height={12} />
}
