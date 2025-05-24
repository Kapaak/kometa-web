import ClipLoader from 'react-spinners/ClipLoader';

export interface LoaderProps {
  color?: string;
  loading?: boolean;
}

export function Loader({ color, loading }: LoaderProps) {
  return (
    <ClipLoader
      loading={loading}
      color={color}
      size={35}
      cssOverride={{
        animation: 'spin-only 0.75s linear infinite',
      }}
    />
  );
}
