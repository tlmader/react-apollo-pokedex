import { MockedProvider } from '@apollo/client/testing';
import { fireEvent, render, screen } from '@testing-library/react';
import { App } from '../components/App';
import { mockedListPokemonQuery } from '../__fixtures__';
import { mockedListPokemonNameSortQuery } from '../__fixtures__/mockedListPokemonNameSortQuery';
import { useMockedAutoSizer } from '../__fixtures__/useMockedAutoSizer';

describe('Sort', () => {
  useMockedAutoSizer();

  // Sorted by order by default

  test('sorts Pokemon by name', async () => {
    render(
      <MockedProvider
        mocks={[mockedListPokemonQuery, mockedListPokemonNameSortQuery]}
      >
        <App />
      </MockedProvider>,
    );

    // Window rendered by jsdom is xs size, so we need to click the menu button
    const sortMenuButton = screen.getByRole('button', { name: /sort/i });
    fireEvent.click(sortMenuButton);

    const orderRadioButton = screen.getByText('Name');
    fireEvent.click(orderRadioButton);

    const listItemText = await screen.findByText('Abomasnow');
    const count = screen.getByText(/1118 POKÉMON FOUND!/i);

    expect(listItemText).toBeInTheDocument();
    expect(count).toBeInTheDocument();
  });
});
