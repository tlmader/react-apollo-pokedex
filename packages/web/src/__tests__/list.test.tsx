import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import { App } from '../components/App';
import { mockedListPokemonQuery } from '../__fixtures__';
import { useMockedAutoSizer } from '../__fixtures__/useMockedAutoSizer';

describe('List', () => {
  useMockedAutoSizer();

  test('displays the initial list of Pokemon', async () => {
    render(
      <MockedProvider mocks={[mockedListPokemonQuery]}>
        <App />
      </MockedProvider>,
    );
    const listItemText = await screen.findByText(/Bulbasaur/i);
    expect(listItemText).toBeInTheDocument();
  });
});
