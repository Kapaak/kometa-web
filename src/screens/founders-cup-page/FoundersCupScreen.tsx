import { FoundersCupLayout } from './components';
import { FoundersCupSection } from './parts';

interface FoundersCupScreenProps {}

export function FoundersCupScreen({}: FoundersCupScreenProps) {
  return (
    <FoundersCupLayout>
      <FoundersCupSection />
    </FoundersCupLayout>
  );
}
