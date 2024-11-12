import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';  // Import jest-dom for custom matchers
import PricingCard from '@/components/PricingCard';  

describe('PricingCard', () => {
  it('renders title, price, and features', () => {
    const features = ['Feature 1', 'Feature 2'];
    render(<PricingCard title="Basic Plan" price="$10" features={features} />);

    expect(screen.getByText("Basic Plan")).toBeInTheDocument();
    expect(screen.getByText("$10")).toBeInTheDocument();
    features.forEach((feature) => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
  });

  it('adds a highlight class when highlighted prop is true', () => {
    const { container } = render(
      <PricingCard
        title="Premium Plan"
        price="$20"
        features={['Feature A', 'Feature B']}
        highlighted={true}
      />
    );

    expect(container.firstChild).toHaveClass('ring-2 ring-pine');
  });
});