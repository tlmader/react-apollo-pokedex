import { MockedProvider } from '@apollo/client/testing';
import { fireEvent, render, screen } from '@testing-library/react';
import { App } from '../components/App';
import { mockedGetPokemonQuery, mockedListPokemonQuery } from '../__fixtures__';
import { useMockedAutoSizer } from '../__fixtures__/useMockedAutoSizer';

describe('Details', () => {
  useMockedAutoSizer();

  test('displays the Pokemon details', async () => {
    render(
      <MockedProvider mocks={[mockedListPokemonQuery, mockedGetPokemonQuery]}>
        <App />
      </MockedProvider>,
    );
    const listItemText = await screen.findByText('Bulbasaur');
    fireEvent.click(listItemText);

    const heading = await screen.findByRole('heading', { name: /Bulbasaur/i });
    expect(heading).toBeInTheDocument();
  });
});
